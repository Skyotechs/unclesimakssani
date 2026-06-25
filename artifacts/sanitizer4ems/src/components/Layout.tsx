import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [children]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-accent/20">
      <Navbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}

// Helper component for page titles
export function Head({ title, description }: { title: string; description?: string }) {
  useEffect(() => {
    document.title = `${title} | Sanitizer4EMS`;
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute("content", description);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.name = "description";
        newMeta.content = description;
        document.head.appendChild(newMeta);
      }
    }
  }, [title, description]);
  return null;
}
