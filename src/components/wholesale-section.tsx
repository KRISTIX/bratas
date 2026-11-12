"use client";

import Image from "next/image";
import { ClipboardList, X } from "lucide-react";
import { useState } from "react";

import { WholesaleForm } from "@/components/wholesale-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { facilityImage } from "@/lib/site";

type VolumeOption = { value: string; label: string };
type PartOption = { id: string; name: string };

export function WholesaleSection({
  eyebrow,
  title,
  lead,
  photoAlt,
  openLabel,
  openHint,
  closeLabel,
  form,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  photoAlt: string;
  openLabel: string;
  openHint: string;
  closeLabel: string;
  form: {
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
  };
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="overflow-hidden rounded-[1.75rem] bg-ivory shadow-card">
        <div className="grid lg:grid-cols-2">
          <figure className="relative min-h-[14rem] w-full sm:min-h-[18rem] lg:min-h-full">
            <Image
              src={facilityImage}
              alt={photoAlt}
              fill
              quality={100}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </figure>

          <div className="flex flex-col justify-center gap-6 p-6 sm:p-8 md:p-10">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-brand">
                {eyebrow}
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
              </h2>
              <p className="mt-3 text-lg text-muted">{lead}</p>
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-brand px-6 py-4 text-left text-white shadow-sm transition hover:bg-brand-dark hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:w-auto"
            >
              <ClipboardList className="size-5 shrink-0" strokeWidth={1.75} aria-hidden />
              <span className="font-display text-lg font-semibold tracking-tight">
                {openLabel}
              </span>
            </button>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="fixed inset-0 top-0 right-0 bottom-0 left-0 flex h-dvh max-h-dvh w-screen max-w-none translate-x-0 translate-y-0 flex-col overflow-hidden rounded-none border-0 bg-ivory p-0 shadow-none sm:inset-auto sm:top-1/2 sm:left-1/2 sm:h-auto sm:max-h-[min(90dvh,52rem)] sm:w-[min(100%-1.5rem,40rem)] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-[1.75rem] sm:shadow-float">
          <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4 sm:px-6">
            <div className="min-w-0">
              <DialogTitle className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                {title}
              </DialogTitle>
              <DialogDescription className="mt-1 text-sm text-muted sm:text-base">
                {openHint}
              </DialogDescription>
            </div>
            <DialogClose asChild>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="shrink-0 rounded-full"
                aria-label={closeLabel}
              >
                <X className="size-5" aria-hidden />
              </Button>
            </DialogClose>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
            <WholesaleForm {...form} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
