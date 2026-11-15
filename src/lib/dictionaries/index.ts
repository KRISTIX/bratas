import type { Locale } from "@/lib/i18n";

import { en } from "@/lib/dictionaries/en";
import { fr } from "@/lib/dictionaries/fr";
import { lt } from "@/lib/dictionaries/lt";
import type { Dictionary } from "@/lib/dictionaries/types";

const dictionaries: Record<Locale, Dictionary> = { en, fr, lt };

export type { Dictionary } from "@/lib/dictionaries/types";

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
