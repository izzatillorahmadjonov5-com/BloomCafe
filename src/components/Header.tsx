import { Link } from "@tanstack/react-router";
import { Coffee, Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <Coffee className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight text-foreground">
            Bloom Cafe
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            activeProps={{ className: "text-primary font-semibold" }}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Bosh sahifa
          </Link>
          <Link
            to="/menu"
            activeProps={{ className: "text-primary font-semibold" }}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Menyu
          </Link>
          <Link
            to="/about"
            activeProps={{ className: "text-primary font-semibold" }}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Biz haqimizda
          </Link>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-foreground"
            >
              Bosh sahifa
            </Link>
            <Link
              to="/menu"
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-foreground"
            >
              Menyu
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-foreground"
            >
              Biz haqimizda
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
