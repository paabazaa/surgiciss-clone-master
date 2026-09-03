import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";
import { products, services, software } from "@/data/catalogue";

export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="mt-16 bg-footer text-footer-foreground">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-base font-semibold uppercase tracking-wide">{company.name}</h2>
          <p className="mt-4 text-sm leading-relaxed opacity-80">{company.intro}</p>
        </div>

        <div>
          <h2 className="text-base font-semibold uppercase tracking-wide">Software</h2>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            {software.map((item) => (
              <li key={item.slug}>
                <Link to="/software/$slug" params={{ slug: item.slug }} className="hover:opacity-100 hover:underline">
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/software" className="hover:underline">
                All software
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold uppercase tracking-wide">Products &amp; services</h2>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            {products.slice(0, 4).map((item) => (
              <li key={item.slug}>
                <Link to="/products/$slug" params={{ slug: item.slug }} className="hover:underline">
                  {item.name}
                </Link>
              </li>
            ))}
            {services.slice(0, 1).map((item) => (
              <li key={item.slug}>
                <Link to="/services/$slug" params={{ slug: item.slug }} className="hover:underline">
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/products" className="hover:underline">
                All products
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold uppercase tracking-wide">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm opacity-80">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              <span>{company.phone}</span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              <span>{company.email}</span>
            </li>
          </ul>
          <Link
            to="/request-quote"
            className="mt-5 inline-block rounded bg-primary px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary-dark"
          >
            Request a quote
          </Link>
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
            <Link to="/faq" className="hover:underline">
              FAQ
            </Link>
            <Link to="/resources" className="hover:underline">
              Resources
            </Link>
            <Link to="/search" className="hover:underline">
              Search
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
