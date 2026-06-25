import React from "react";
import { Head } from "@/components/Layout";
import { AlertTriangle } from "lucide-react";

interface PolicyPageProps {
  type: "privacy" | "terms" | "refund" | "shipping";
}

const POLICY_DATA = {
  privacy: {
    title: "Privacy Policy",
    description: "Our policies regarding the collection, use, and disclosure of personal data.",
    content: "This Privacy Policy describes how Sanitizer4EMS collects, uses, and protects your personal information when you visit our website, purchase our products, or participate in our referral program. We are committed to ensuring your privacy is protected. [Full legal text to be provided by counsel before launch.]"
  },
  terms: {
    title: "Terms of Service",
    description: "The rules and guidelines for using the Sanitizer4EMS website and services.",
    content: "These Terms of Service govern your use of the Sanitizer4EMS website and the purchase of products from us. By accessing this website, you agree to be bound by these terms. This includes limitations of liability, governing law, and user responsibilities. [Full legal text to be provided by counsel before launch.]"
  },
  refund: {
    title: "Refund Policy",
    description: "Information about returns, refunds, and exchanges.",
    content: "We stand behind the quality of our non-alcohol sanitizers. If you are not completely satisfied with your purchase, you may be eligible for a refund or exchange within 30 days of delivery. Certain restrictions apply to opened or partially used bulk products. [Full legal text to be provided by counsel before launch.]"
  },
  shipping: {
    title: "Shipping Policy",
    description: "Details on how we ship our products, costs, and delivery times.",
    content: "Sanitizer4EMS ships to addresses within the contiguous United States. Because our formula is alcohol-free and non-flammable, we can ship via standard ground services without hazardous material surcharges. Orders typically process within 1-2 business days. [Full legal text to be provided by counsel before launch.]"
  }
};

export default function PolicyPage({ type }: PolicyPageProps) {
  const data = POLICY_DATA[type];

  return (
    <>
      <Head title={data.title} description={data.description} />

      <div className="bg-destructive/10 border-b border-destructive/20 px-6 py-3 text-destructive text-sm font-medium flex items-center justify-center gap-2 text-center">
        <AlertTriangle className="h-4 w-4 shrink-0" />
        This page contains placeholder content and must be reviewed by legal counsel before launch.
      </div>

      <section className="py-20 px-6 sm:px-12 max-w-4xl mx-auto min-h-[calc(100vh-300px)]">
        <h1 className="text-4xl font-extrabold text-foreground mb-8">{data.title}</h1>
        
        <div className="prose prose-slate max-w-none text-muted-foreground">
          <p className="text-lg leading-relaxed bg-secondary/50 p-6 rounded-lg border border-border">
            {data.content}
          </p>
          
          {/* Dummy sections to make it look like a real policy page temporarily */}
          <div className="mt-12 space-y-8 opacity-50">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. General Provisions</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. User Responsibilities</h2>
              <p>Phasellus gravida semper nisi. Nullam vel sem. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed hendrerit. Morbi ac felis.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Limitations of Liability</h2>
              <p>Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at pellentesque velit accumsan id imperdiet et, porttitor at, sem.</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Contact Information</h2>
              <p>If you have any questions regarding this policy, please contact our legal team at legal@sanitizer4ems.com.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
