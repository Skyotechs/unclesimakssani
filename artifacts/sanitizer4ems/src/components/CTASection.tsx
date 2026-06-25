import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  headline: string;
  subtext: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  variant?: "navy" | "red";
}

export function CTASection({
  headline,
  subtext,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  variant = "navy",
}: CTASectionProps) {
  const isNavy = variant === "navy";

  return (
    <section 
      className={`py-20 px-6 sm:px-12 text-center text-white ${isNavy ? "bg-primary" : "bg-accent"}`}
    >
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          {headline}
        </h2>
        <p className="text-lg sm:text-xl opacity-90 leading-relaxed">
          {subtext}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href={primaryButtonHref}>
            <Button 
              size="lg" 
              className={isNavy ? "bg-accent hover:bg-accent/90 text-white" : "bg-primary hover:bg-primary/90 text-white"}
              data-testid={`cta-primary-${headline.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {primaryButtonText}
            </Button>
          </Link>
          {secondaryButtonText && secondaryButtonHref && (
            <Link href={secondaryButtonHref}>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-primary-foreground hover:bg-white/10"
                data-testid={`cta-secondary-${headline.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {secondaryButtonText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
