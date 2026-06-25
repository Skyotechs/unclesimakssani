import React from "react";
import { Link } from "wouter";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary text-primary-foreground shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-accent" strokeWidth={2.5} />
            <span className="font-bold text-xl tracking-tight text-white">Sanitizer4EMS</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-white/90 hover:text-white transition-colors" data-testid="nav-home">Home</Link>
            <Link href="/about" className="text-sm font-medium text-white/90 hover:text-white transition-colors" data-testid="nav-about">About</Link>
            <Link href="/products" className="text-sm font-medium text-white/90 hover:text-white transition-colors" data-testid="nav-products">Products</Link>
            <Link href="/referral" className="text-sm font-medium text-white/90 hover:text-white transition-colors" data-testid="nav-referral">Referral Program</Link>
            <Link href="/faq" className="text-sm font-medium text-white/90 hover:text-white transition-colors" data-testid="nav-faq">FAQ</Link>
            <Link href="/contact" className="text-sm font-medium text-white/90 hover:text-white transition-colors" data-testid="nav-contact">Contact</Link>
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
            <Link href="/" className="block px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10 rounded-md" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="block px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10 rounded-md" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/products" className="block px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10 rounded-md" onClick={() => setIsOpen(false)}>Products</Link>
            <Link href="/referral" className="block px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10 rounded-md" onClick={() => setIsOpen(false)}>Referral Program</Link>
            <Link href="/faq" className="block px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10 rounded-md" onClick={() => setIsOpen(false)}>FAQ</Link>
            <Link href="/contact" className="block px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10 rounded-md" onClick={() => setIsOpen(false)}>Contact</Link>
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
