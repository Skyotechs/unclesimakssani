import React from "react";
import { Link, useLocation } from "wouter";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/referral", label: "Referral Program" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [location] = useLocation();

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary text-primary-foreground shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / brand */}
          <Link href="/" className="flex items-center gap-3">
            {/* Logo placeholder — swap the Shield icon for a real <img> once branding is finalized */}
            <div
              className="flex items-center justify-center w-10 h-10 rounded-md border-2 border-accent/50"
              aria-label="Sanitizer4EMS logo placeholder"
            >
              <Shield className="h-6 w-6 text-accent" strokeWidth={2.5} />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">Sanitizer4EMS</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  isActive(href)
                    ? "text-white border-b-2 border-accent pb-0.5"
                    : "text-white/80 hover:text-white"
                }`}
                data-testid={`nav-${label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {label}
              </Link>
            ))}
            <Link href="/products">
              <Button className="bg-accent hover:bg-accent/90 text-white font-semibold" data-testid="nav-shop-now">
                Shop Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              data-testid="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-sidebar-border">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block px-3 py-3 text-base font-medium rounded-md transition-colors ${
                  isActive(href)
                    ? "bg-white/15 text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
                data-testid={`mobile-nav-${label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {label}
              </Link>
            ))}
            <Link href="/products" onClick={() => setIsOpen(false)}>
              <Button className="w-full mt-4 bg-accent hover:bg-accent/90 text-white font-semibold h-12">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
