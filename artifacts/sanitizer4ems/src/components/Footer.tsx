import React from "react";
import { Link } from "wouter";
import mascotImg from "@/assets/mascot.png";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-primary text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={mascotImg}
                alt="Sanitizer4EMS mascot"
                className="h-12 w-auto object-contain"
              />
              <span className="font-bold text-xl tracking-tight">Sanitizer4EMS</span>
            </div>
            <p className="text-white/80 leading-relaxed pr-4 text-sm">
              Built by EMS personnel. Supporting volunteer ambulance squads one bottle at a time.
            </p>
            {/* Social media placeholder links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                aria-label="Facebook (coming soon)"
                className="text-white/60 hover:text-white transition-colors"
                data-testid="social-facebook"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram (coming soon)"
                className="text-white/60 hover:text-white transition-colors"
                data-testid="social-instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="X / Twitter (coming soon)"
                className="text-white/60 hover:text-white transition-colors"
                data-testid="social-twitter"
              >
                <FaXTwitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Company links */}
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

          {/* Legal links */}
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
          <p className="text-white/40 text-xs text-center sm:text-right">
            Social links are placeholders — profiles coming soon.
          </p>
        </div>
      </div>
    </footer>
  );
}
