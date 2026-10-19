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
    else if (name.endsWith(".b64")) out.push(path);
  }
  return out;
}

if (!existsSync(media)) process.exit(0);

let wrote = 0;
for (const file of walk(media)) {
  const rel = relative(media, file).replace(/\.b64$/, "");
  const dest = join(root, rel);
  if (existsSync(dest)) continue;
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, Buffer.from(readFileSync(file, "utf8"), "base64"));
  wrote += 1;
}

if (wrote > 0) {
  console.log(`Restored ${wrote} image${wrote === 1 ? "" : "s"} from media/`);
}
