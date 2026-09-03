import { useState } from "react";
import { z } from "zod";
import { contactMethods } from "@/data/company";
import { products, services, software } from "@/data/catalogue";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please tell us your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  organisation: z.string().trim().min(2, "Please tell us which organisation you represent.").max(150),
  country: z.string().trim().min(2, "Please enter your country.").max(80),
  city: z.string().trim().max(80).optional().or(z.literal("")),
  interest: z.string().trim().min(1, "Please choose what your enquiry relates to."),
  quantity: z.string().trim().max(20).optional().or(z.literal("")),
  preferredContact: z.string().trim().min(1),
  message: z.string().trim().min(10, "Please give us a little more detail.").max(2000),
});

type Errors = Partial<Record<keyof z.infer<typeof enquirySchema>, string>>;

const interestOptions = [
  { group: "Products", items: products.map((p) => p.name) },
  { group: "Software", items: software.map((s) => s.name) },
  { group: "Services", items: services.map((s) => s.name) },
  { group: "Other", items: ["General enquiry"] },
];

export function EnquiryForm({
  variant = "quote",
  defaultInterest = "",
}: {
  variant?: "quote" | "contact";
  defaultInterest?: string;
}) {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const values = Object.fromEntries(form.entries()) as Record<string, string>;
    const result = enquirySchema.safeParse(values);

    if (!result.success) {
      const nextErrors: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!nextErrors[key]) nextErrors[key] = issue.message;
      }
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    event.currentTarget.reset();
  };

  if (submitted) {
    return (
      <div className="border border-primary/30 bg-accent p-6" role="status">
        <h2 className="text-lg font-semibold text-accent-foreground">Thank you — your enquiry has been recorded.</h2>
        <p className="mt-2 text-sm leading-relaxed text-foreground">
          A member of the SURGICISS team will be in touch using the contact method you chose. If your request is urgent,
          please call us on {"[INSERT SURGICISS PHONE]"}.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm font-semibold uppercase tracking-wide text-primary hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" error={errors.name} required />
        <Field label="Email address" name="email" type="email" error={errors.email} required />
        <Field label="Telephone" name="phone" error={errors.phone} />
        <Field label="Organisation" name="organisation" error={errors.organisation} required />
        <Field label="Country" name="country" error={errors.country} required />
        <Field label="City" name="city" error={errors.city} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="interest" required>
            Your enquiry relates to
          </Label>
          <select
            id="interest"
            name="interest"
            defaultValue={defaultInterest}
            className="mt-1.5 w-full border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
          >
            <option value="">Please choose…</option>
            {interestOptions.map((group) => (
              <optgroup key={group.group} label={group.group}>
                {group.items.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          <FieldError message={errors.interest} />
        </div>

        {variant === "quote" ? (
          <Field label="Quantity required" name="quantity" error={errors.quantity} placeholder="e.g. 200" />
        ) : (
          <div className="hidden sm:block" />
        )}
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-foreground">Preferred contact method</legend>
        <div className="mt-2 flex flex-wrap gap-5">
          {contactMethods.map((method, index) => (
            <label key={method} className="flex items-center gap-2 text-sm text-foreground">
              <input
                type="radio"
                name="preferredContact"
                value={method}
                defaultChecked={index === 0}
                className="h-4 w-4 accent-primary"
              />
              {method}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <Label htmlFor="message" required>
          Your message
        </Label>
        <textarea
          id="message"
          name="message"
          rows={6}
          maxLength={2000}
          className="mt-1.5 w-full border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
          placeholder="Tell us about your department, the sets involved and any timescales."
        />
        <FieldError message={errors.message} />
      </div>

      <button
        type="submit"
        className="w-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary-dark sm:w-auto"
      >
        {variant === "quote" ? "Submit quote request" : "Send enquiry"}
      </button>
    </form>
  );
}

function Label({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean | undefined;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
      {children}
      {required && <span className="text-destructive"> *</span>}
    </label>
  );
}

function FieldError({ message }: { message?: string | undefined }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs text-destructive">{message}</p>;
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string | undefined;
  required?: boolean | undefined;
  placeholder?: string | undefined;
}) {
  return (
    <div>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={255}
        className="mt-1.5 w-full border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
      />
      <FieldError message={error} />
    </div>
  );
}
