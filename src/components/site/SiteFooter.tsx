import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, detail } from "@/data/company";
import { products, software } from "@/data/catalogue";

export function SiteFooter() {
  const year = 2026;
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="mt-0 bg-footer text-footer-foreground">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide">Contact Us</h2>
          <div className="mt-4 h-px w-12 bg-primary" />
          <ul className="mt-4 space-y-3 text-sm opacity-80">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              <span>{detail(company.address, "Address available on request")}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              <span>{detail(company.phone, "Telephone available on request")}</span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              <span>{detail(company.email, "Use the enquiry form")}</span>
            </li>
          </ul>
          <Link to="/contact-us" className="mt-4 inline-block text-xs font-semibold uppercase tracking-wide text-primary hover:underline">
            Send an enquiry
          </Link>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide">Software</h2>
          <div className="mt-4 h-px w-12 bg-primary" />
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            {software.map((item) => (
              <li key={item.slug}>
                <Link to="/software/$slug" params={{ slug: item.slug }} className="hover:underline">
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/software" className="hover:underline">
                All Software
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide">Products</h2>
          <div className="mt-4 h-px w-12 bg-primary" />
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            {products.map((item) => (
              <li key={item.slug}>
                <Link to="/products/$slug" params={{ slug: item.slug }} className="hover:underline">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide">Newsletter</h2>
          <div className="mt-4 h-px w-12 bg-primary" />
          <p className="mt-4 text-sm leading-relaxed opacity-80">
            Occasional notes on sterile services practice, new products and training dates.
          </p>
          <form
            className="mt-4"
            onSubmit={(event) => {
              event.preventDefault();
              if (!email.trim()) return;
              setSubscribed(true);
              setEmail("");
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              className="w-full border border-footer-foreground/25 bg-footer-foreground/5 px-3 py-2.5 text-sm text-footer-foreground placeholder:text-footer-foreground/50 focus:border-primary focus:outline-none"
            />
            <button
              type="submit"
              className="mt-3 w-full bg-primary px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary-dark"
            >
              Subscribe
            </button>
          </form>
          {subscribed && (
            <p className="mt-3 text-xs opacity-80" role="status">
              Thank you — your address has been noted for our next mailing.
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-footer-foreground/15">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-4 py-5 text-xs opacity-75 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {company.name}. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-4" aria-label="Legal">
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/services" className="hover:underline">
              Services
            </Link>
            <Link to="/programmes" className="hover:underline">
              Programmes
            </Link>
            <Link to="/faq" className="hover:underline">
              FAQ
            </Link>
            <Link to="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link to="/terms" className="hover:underline">
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
