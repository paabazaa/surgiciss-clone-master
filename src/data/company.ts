/**
 * Central place for SURGICISS LTD contact and corporate details.
 *
 * Leave a field as an empty string until the real value is supplied — nothing
 * is invented here. Empty fields fall back to a neutral phrase through
 * `detail()` so the pages never show bracketed placeholder text.
 */
export const company = {
  name: "SURGICISS LTD",
  shortName: "SURGICISS",
  tagline: "We're dedicated to best surgical outcomes.",
  // TODO: supply the registered SURGICISS LTD details.
  address: "",
  phone: "",
  email: "",
  registration: "",
  hours: "",
  linkedin: "",
  intro:
    "SURGICISS LTD works with hospitals, surgery centres and sterile services departments to support the consistent delivery of clean, sterile, functional and relevant surgical instruments, equipment and supplies — on time and on budget.",
} as const;

/** Returns the supplied detail, or a neutral phrase when it has not been provided yet. */
export function detail(value: string, fallback = "Available on request"): string {
  return value.trim().length > 0 ? value : fallback;
}

export const contactMethods = ["Email", "Telephone", "Either"] as const;
