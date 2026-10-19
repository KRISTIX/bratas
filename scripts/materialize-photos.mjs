import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const media = join(root, "media");

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) out.push(...walk(path));
    else if (name.endsWith(".b64") || /\.b64\.part\d+$/.test(name)) out.push(path);
  }
  return out;
}

if (!existsSync(media)) process.exit(0);

const groups = new Map();
for (const file of walk(media)) {
  const rel = relative(media, file);
  const part = rel.match(/^(.*)\.b64\.part(\d+)$/);
  if (part) {
    const key = part[1];
    const list = groups.get(key) ?? [];
    list.push({ index: Number(part[2]), file });
    groups.set(key, list);
    continue;
  }
  if (rel.endsWith(".b64")) {
    const key = rel.slice(0, -4);
    const list = groups.get(key) ?? [];
    list.push({ index: 0, file });
    groups.set(key, list);
  }
}

let wrote = 0;
for (const [rel, parts] of groups) {
  const dest = join(root, rel);
  if (existsSync(dest)) continue;
  parts.sort((a, b) => a.index - b.index);
  const payload = parts.map((part) => readFileSync(part.file, "utf8").trim()).join("");
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, Buffer.from(payload, "base64"));
  wrote += 1;
}

if (wrote > 0) {
  console.log(`Restored ${wrote} image${wrote === 1 ? "" : "s"} from media/`);
}

const remoteFile = join(media, "remote-photos.json");
if (existsSync(remoteFile)) {
  const remote = JSON.parse(readFileSync(remoteFile, "utf8"));
  let fetched = 0;
  for (const [rel, url] of Object.entries(remote)) {
    const dest = join(root, rel);
    if (existsSync(dest)) continue;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Could not fetch ${rel}: ${response.status}`);
    }
    mkdirSync(dirname(dest), { recursive: true });
    writeFileSync(dest, Buffer.from(await response.arrayBuffer()));
    fetched += 1;
  }
  if (fetched > 0) {
    console.log(`Fetched ${fetched} image${fetched === 1 ? "" : "s"}`);
  }
}
