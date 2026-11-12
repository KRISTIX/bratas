"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { wholesaleEmail } from "@/lib/site";
import { cn } from "@/lib/utils";

type VolumeOption = { value: string; label: string };
type PartOption = { id: string; name: string };

const labelClass =
  "font-display text-sm font-bold tracking-tight text-ink sm:text-base";

const fieldClass =
  "mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-base outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";

export function WholesaleForm({
  volumeLabel,
  volumeOptions,
  partsLabel,
  partOptions,
  nameLabel,
  companyLabel,
  emailLabel,
  phoneLabel,
  messageLabel,
  submitLabel,
  successMessage,
  requiredHint,
  errorMessage,
  mailtoLabel,
}: {
  volumeLabel: string;
  volumeOptions: VolumeOption[];
  partsLabel: string;
  partOptions: PartOption[];
  nameLabel: string;
  companyLabel: string;
  emailLabel: string;
  phoneLabel: string;
  messageLabel: string;
  submitLabel: string;
  successMessage: string;
  requiredHint: string;
  errorMessage: string;
  mailtoLabel: string;
}) {
  const [selectedParts, setSelectedParts] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "fallback">(
    "idle",
  );
  const [mailtoHref, setMailtoHref] = useState<string | null>(null);

  const togglePart = (id: string) => {
    setError(null);
    setSelectedParts((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  const buildMailto = ({
    name,
    company,
    email,
    phone,
    volume,
    partNames,
    message,
  }: {
    name: string;
    company: string;
    email: string;
    phone: string;
    volume: string;
    partNames: string;
    message: string;
  }) => {
    const subject = encodeURIComponent(
      `Wholesale application — ${company || name}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Company: ${company || "—"}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        `Parts per month: ${volume}`,
        `Part kinds: ${partNames}`,
        message ? `Message:\n${message}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    );
    return `mailto:${wholesaleEmail}?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (selectedParts.length === 0) {
      setError(requiredHint);
      return;
    }

    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const volume = String(data.get("volume") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const partNames = selectedParts
      .map((id) => partOptions.find((p) => p.id === id)?.name ?? id)
      .join(", ");

    const payload = new FormData();
    payload.set("_subject", `Wholesale application — ${company || name}`);
    payload.set("_template", "table");
    payload.set("_captcha", "false");
    payload.set("_replyto", email);
    payload.set("Name", name);
    payload.set("Company", company || "—");
    payload.set("Email", email);
    payload.set("Phone", phone || "—");
    payload.set("Parts per month", volume);
    payload.set("Part kinds", partNames);
    if (message) payload.set("Message", message);

    setStatus("submitting");
    setError(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${wholesaleEmail}`, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("submit failed");
      setStatus("sent");
      form.reset();
      setSelectedParts([]);
    } catch {
      // fail-open-ok: FormSubmit may be unconfirmed; offer explicit mailto without claiming success
      setMailtoHref(
        buildMailto({
          name,
          company,
          email,
          phone,
          volume,
          partNames,
          message,
        }),
      );
      setStatus("fallback");
    }
  };

  if (status === "sent") {
    return (
      <p
        className="rounded-2xl bg-brand/5 px-5 py-6 text-lg font-semibold text-ink"
        role="status"
      >
        {successMessage}
      </p>
    );
  }

  if (status === "fallback" && mailtoHref) {
    return (
      <div className="rounded-2xl border border-line bg-canvas/60 px-5 py-6" role="alert">
        <p className="text-base leading-relaxed text-muted">{errorMessage}</p>
        <Button asChild size="lg" className="mt-4">
          <a href={mailtoHref}>{mailtoLabel}</a>
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>{nameLabel}</span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className={labelClass}>{companyLabel}</span>
          <input
            name="company"
            type="text"
            autoComplete="organization"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className={labelClass}>{emailLabel}</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className={labelClass}>{phoneLabel}</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="block">
        <span className={labelClass}>{volumeLabel}</span>
        <select name="volume" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            —
          </option>
          {volumeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <fieldset>
        <legend className={labelClass}>{partsLabel}</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {partOptions.map((part) => {
            const checked = selectedParts.includes(part.id);
            return (
              <button
                key={part.id}
                type="button"
                onClick={() => togglePart(part.id)}
                aria-pressed={checked}
                className={cn(
                  "rounded-xl border px-4 py-3 text-left text-base transition",
                  checked
                    ? "border-brand bg-brand/5 font-semibold text-ink"
                    : "border-line bg-white text-ink hover:border-ink/20",
                )}
              >
                {part.name}
              </button>
            );
          })}
        </div>
        {error ? (
          <p className="mt-2 text-base text-brand" role="alert">
            {error}
          </p>
        ) : null}
      </fieldset>

      <label className="block">
        <span className={labelClass}>{messageLabel}</span>
        <textarea name="message" rows={3} className={fieldClass} />
      </label>

      <Button
        type="submit"
        size="lg"
        className="self-start text-base"
        disabled={status === "submitting"}
      >
        {submitLabel}
      </Button>
    </form>
  );
}
