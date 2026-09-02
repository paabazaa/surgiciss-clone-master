/**
 * Central place for SURGICISS LTD contact and corporate details.
 *
 * Anything wrapped in square brackets is a placeholder: the real value has not
 * been supplied yet, so it is shown verbatim rather than invented.
 */
export const company = {
  name: "SURGICISS LTD",
  shortName: "SURGICISS",
  tagline: "Dedicated to best surgical outcomes.",
  address: "[INSERT SURGICISS ADDRESS]",
  phone: "[INSERT SURGICISS PHONE]",
  email: "[INSERT SURGICISS EMAIL]",
  registration: "[INSERT SURGICISS COMPANY REGISTRATION]",
  hours: "[INSERT SURGICISS OPENING HOURS]",
  linkedin: "[INSERT SURGICISS LINKEDIN]",
  intro:
    "SURGICISS LTD works with hospitals, surgery centres and sterile services departments to support the consistent delivery of clean, sterile, functional and relevant surgical instruments, equipment and supplies — on time and on budget.",
} as const;

export const contactMethods = ["Email", "Telephone", "Either"] as const;
