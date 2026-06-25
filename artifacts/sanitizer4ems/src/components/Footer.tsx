import React from "react";
import { Link } from "wouter";
import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-accent" strokeWidth={2.5} />
              <span className="font-bold text-xl tracking-tight">Sanitizer4EMS</span>
            </div>
            <p className="text-white/80 leading-relaxed pr-4 text-sm sm:text-base">
              Built by EMS personnel. Supporting volunteer ambulance squads one bottle at a time.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-white/90">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-white/70 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/products" className="text-white/70 hover:text-white transition-colors text-sm">Shop Products</Link></li>
              <li><Link href="/referral" className="text-white/70 hover:text-white transition-colors text-sm">Referral Program</Link></li>
              <li><Link href="/faq" className="text-white/70 hover:text-white transition-colors text-sm">FAQ</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-white/90">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-white/70 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/70 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
              <li><Link href="/refund" className="text-white/70 hover:text-white transition-colors text-sm">Refund Policy</Link></li>
              <li><Link href="/shipping" className="text-white/70 hover:text-white transition-colors text-sm">Shipping Policy</Link></li>
            </ul>
          </div>

        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Sanitizer4EMS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
