import React from "react";
import { Head } from "@/components/Layout";
import { CTASection } from "@/components/CTASection";
import { Shield, HeartHandshake, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <Head 
        title="About Us" 
        description="Learn the origin story of Sanitizer4EMS, founded by first responders to provide a safer sanitizer and support volunteer ambulance squads." 
      />

      {/* Hero */}
      <section className="bg-primary text-white py-20 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUp}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6"
          >
            Born on the Front Lines.
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }}
            className="text-xl opacity-90 leading-relaxed max-w-2xl mx-auto"
          >
            We didn't set out to start a company. We set out to solve a problem we faced every single day on the job.
          </motion.p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-bold text-foreground">The Origin Story</h2>
            <p>
              As EMS personnel, our hands are our most important tools. But after running back-to-back calls during the busiest shifts, we noticed a problem: the constant use of harsh alcohol-based sanitizers was destroying our skin. Cracked, bleeding hands became the norm.
            </p>
            <p>
              We needed something that killed germs ruthlessly but didn't compromise our skin barrier. When we couldn't find a solution that met our standards, we decided to build it.
            </p>
            <p>
              Sanitizer4EMS was developed as a non-alcohol alternative that provides hospital-grade protection without the burn, the dryness, or the strong chemical odor. What started as a solution for our own crew quickly gained attention from other squads, urgent cares, and eventually, schools and families.
            </p>
          </div>
          <div className="bg-secondary rounded-2xl aspect-square lg:aspect-[4/3] flex items-center justify-center p-8 border border-border">
            <div className="text-center text-muted-foreground font-medium">
              <Shield className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p>[Placeholder: Historical/Action shot of founders in EMS gear]</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Mission */}
      <section className="py-24 px-6 sm:px-12 bg-secondary/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <HeartHandshake className="h-16 w-16 text-accent mx-auto" />
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground">A Mission Beyond Clean Hands</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Volunteer ambulance squads are the safety net for thousands of communities, but they are constantly underfunded and overworked. We wanted Sanitizer4EMS to be more than just a product — we wanted it to be a lifeline.
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-border mt-12 text-left">
            <h3 className="text-2xl font-semibold text-foreground mb-4">The Referral Model</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When volunteer agencies partner with us, they receive a unique referral link. Whenever someone purchases our products using that link, or selects the agency at checkout, a percentage of the profits goes directly back to that squad to help fund equipment, training, and operations.
            </p>
            <div className="flex items-center gap-4 text-primary font-medium">
              <Award className="h-6 w-6 text-accent" />
              <span>Supporting those who serve us.</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        headline="Join us in supporting volunteer EMS."
        subtext="Whether you're stocking up for your family or supplying a whole agency, your purchase makes a difference."
        primaryButtonText="Shop Products"
        primaryButtonHref="/products"
        secondaryButtonText="Learn About Referrals"
        secondaryButtonHref="/referral"
        variant="navy"
      />
    </>
  );
}
