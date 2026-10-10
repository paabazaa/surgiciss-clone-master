import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { products, software } from "@/data/catalogue";
import { company } from "@/data/company";

const softwareLinks = software.map((s) => ({ label: s.name, to: "/software/$slug", params: { slug: s.slug } }));
const productLinks = products.map((p) => ({ label: p.name, to: "/products/$slug", params: { slug: p.slug } }));

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<"software" | "products" | null>(null);
  const [stuck, setStuck] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpenMenu(null);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const topLevel = "px-4 py-2 text-sm font-medium uppercase tracking-wide text-foreground hover:text-primary";

  return (
    <header className={`sticky top-0 z-50 border-t-2 border-primary bg-background transition-shadow ${stuck ? "shadow-card" : ""}`}>
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 lg:py-4">
        <Link to="/" className="flex items-center gap-3" aria-label={`${company.name} home`}>
         <img src={`${import.meta.env.BASE_URL}logo.png`} alt="SURGICISS" className="h-14 w-auto object-contain object-top" />
          <span className="leading-tight">
            <span className="block text-lg font-bold tracking-tight text-secondary">SURGICISS</span>
            <span className="block text-[0.6rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">Sterile Instrument Systems</span>
          </span>
        </Link>

        <nav ref={navRef} className="hidden items-center lg:flex" aria-label="Main navigation">
          <Link to="/" className={topLevel}>Home</Link>
          <DesktopDropdown label="Software" open={openMenu === "software"} onToggle={() => setOpenMenu(openMenu === "software" ? null : "software")} onClose={() => setOpenMenu(null)} links={softwareLinks} allTo="/software" allLabel="All Software" />
          <DesktopDropdown label="Products" open={openMenu === "products"} onToggle={() => setOpenMenu(openMenu === "products" ? null : "products")} onClose={() => setOpenMenu(null)} links={productLinks} allTo="/products" allLabel="All Products" />
          <Link to="/count-sheet-holders" className={topLevel}>Instrument Count Sheet Holders</Link>
          <Link to="/contact-us" className={topLevel}>Contact Us</Link>
        </nav>

        <button type="button" className="inline-flex items-center gap-2 rounded border border-input px-3 py-2 text-sm font-medium lg:hidden" aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />} Menu
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-navigation" className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto max-w-[1200px] px-4 py-2">
            <MobileLink to="/" onNavigate={() => setMobileOpen(false)}>Home</MobileLink>
            <MobileGroup label="Software" allTo="/software" allLabel="All Software" links={softwareLinks} onNavigate={() => setMobileOpen(false)} />
            <MobileGroup label="Products" allTo="/products" allLabel="All Products" links={productLinks} onNavigate={() => setMobileOpen(false)} />
            <MobileLink to="/count-sheet-holders" onNavigate={() => setMobileOpen(false)}>Instrument Count Sheet Holders</MobileLink>
            <MobileLink to="/contact-us" onNavigate={() => setMobileOpen(false)}>Contact Us</MobileLink>
          </nav>
        </div>
      )}
    </header>
  );
}

function DesktopDropdown({ label, open, onToggle, onClose, links, allTo, allLabel }: any) {
  return (
    <div className="relative" onMouseLeave={onClose}>
      <button type="button" onClick={onToggle} onMouseEnter={() => { if (!open) onToggle(); }} aria-expanded={open} className="flex items-center gap-1 px-4 py-2 text-sm font-medium uppercase tracking-wide text-foreground hover:text-primary">
        {label} <ChevronDown className="h-4 w-4" />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 w-72 border border-border bg-background py-1 shadow-raised">
          {links.map((link: any) => (
            <Link key={link.params.slug} to={link.to} params={link.params} onClick={onClose} className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent">
              {link.label}
            </Link>
          ))}
          <Link to={allTo} onClick={onClose} className="mt-1 block border-t border-border px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-primary hover:bg-accent">
            {allLabel}
          </Link>
        </div>
      )}
    </div>
  );
}

function MobileLink({ to, children, onNavigate, params }: any) {
  return (
    <Link to={to} params={params} onClick={onNavigate} className="block border-b border-border py-3 text-sm font-medium uppercase tracking-wide text-foreground">
      {children}
    </Link>
  );
}

function MobileGroup({ label, links, allTo, allLabel, onNavigate }: any) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} className="flex w-full items-center justify-between py-3 text-sm font-medium uppercase tracking-wide text-foreground">
        {label} <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pb-2">
          {links.map((link: any) => (
            <Link key={link.params.slug} to={link.to} params={link.params} onClick={onNavigate} className="block py-2 pl-3 text-sm text-muted-foreground">
              {link.label}
            </Link>
          ))}
          <Link to={allTo} onClick={onNavigate} className="block py-2 pl-3 text-sm font-semibold text-primary">{allLabel}</Link>
        </div>
      )}
    </div>
  );
}
