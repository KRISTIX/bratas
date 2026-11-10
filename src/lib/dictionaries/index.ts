import type { Locale } from "@/lib/i18n";

import { de } from "@/lib/dictionaries/de";
import { en } from "@/lib/dictionaries/en";
import { fr } from "@/lib/dictionaries/fr";
import { lt } from "@/lib/dictionaries/lt";
import { pl } from "@/lib/dictionaries/pl";
import type { Dictionary } from "@/lib/dictionaries/types";

const dictionaries: Record<Locale, Dictionary> = { en, fr, lt, de, pl };

export type { Dictionary } from "@/lib/dictionaries/types";

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
