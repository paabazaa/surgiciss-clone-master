import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; to?: string; params?: Record<string, string> };

export function PageBanner({ title, crumbs = [], lead }: { title: string; crumbs?: Crumb[]; lead?: string }) {
  return (
    <div className="page-banner">
      <div className="mx-auto max-w-[1200px] px-4 py-9">
        <h1 className="text-2xl font-semibold uppercase tracking-wide text-primary sm:text-3xl">{title}</h1>
        {lead && <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">{lead}</p>}
        <nav aria-label="Breadcrumb" className="mt-4">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
            <li className="flex items-center gap-1">
              <Link to="/" className="hover:text-primary hover:underline">
                Home
              </Link>
              <ChevronRight className="h-3 w-3" aria-hidden />
            </li>
            {crumbs.map((crumb, index) => (
              <li key={crumb.label} className="flex items-center gap-1">
                {crumb.to && index < crumbs.length - 1 ? (
                  <Link
                    to={crumb.to as "/products"}
                    params={crumb.params as never}
                    className="hover:text-primary hover:underline"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-foreground">{crumb.label}</span>
                )}
                {index < crumbs.length - 1 && <ChevronRight className="h-3 w-3" aria-hidden />}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
