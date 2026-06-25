import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Head } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { Shield, Droplets, HeartHandshake, Building2, Package, RotateCcw } from "lucide-react";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <>
      <Head 
        title="Sanitizer Made by EMS Personnel" 
        description="Sanitizer4EMS fights germs with a non-alcohol formula and supports volunteer ambulance squads. Built by EMS for EMS and public use." 
      />

      {/* Hero Section */}
      <section className="relative bg-primary pt-24 pb-32 px-6 sm:px-12 lg:pt-36 lg:pb-40 overflow-hidden">
        {/* Subtle background noise/pattern could go here */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6 border border-accent/20">
              Fighting Germs. Giving Back.
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
              Sanitizer Made by <span className="text-accent">EMS Personnel</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              Created by first responders who faced daily germ exposure. Our non-alcohol formula protects you while our mission supports volunteer ambulance squads across the country.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/products">
                <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white h-14 px-8 text-lg shadow-lg">
                  Shop Products
                </Button>
              </Link>
              <Link href="/referral">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg border-white/20 text-white hover:bg-white/10 bg-transparent">
                  Join the Referral Program
                </Button>
              </Link>
              <Link href="/contact" className="hidden lg:block text-white/70 hover:text-white font-medium ml-4 underline underline-offset-4">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-secondary py-8 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 text-muted-foreground text-sm font-semibold tracking-wide uppercase text-center">
          <span className="flex items-center gap-2"><Shield className="h-5 w-5" /> Non-Alcohol Formula</span>
          <span className="flex items-center gap-2"><HeartHandshake className="h-5 w-5" /> Supports Volunteers</span>
          <span className="flex items-center gap-2"><Droplets className="h-5 w-5" /> Safe for All Settings</span>
        </div>
      </section>

      {/* Built by EMS for EMS Section */}
      <section className="py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <div className="aspect-[4/3] bg-muted rounded-2xl flex items-center justify-center border border-border">
              <span className="text-muted-foreground font-medium flex flex-col items-center gap-3">
                <Shield className="h-12 w-12 opacity-50" />
                [Placeholder: EMS Personnel in uniform]
              </span>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">A solution born in the back of an ambulance.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We didn't start in a boardroom. We started on the front lines. After years of running back-to-back calls, facing every kind of germ imaginable, and dealing with cracked, dry hands from harsh alcohol sanitizers, we knew there had to be a better way.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sanitizer4EMS is a non-alcohol formula designed to be tough on germs but gentle on hands. Safe enough for a daycare, strong enough for a trauma bay.
            </p>
            <Link href="/about">
              <Button variant="outline" className="mt-4 border-primary text-primary hover:bg-primary hover:text-white">
                Read our story
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 px-6 sm:px-12 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Who depends on our products?</h2>
            <p className="text-lg text-muted-foreground">Because our formula is non-flammable and alcohol-free, it is the ideal choice for environments where safety and compliance are critical.</p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {[
              { icon: Building2, title: "EMS Agencies & Fire", desc: "Safe for apparatus storage. Won't degrade expensive equipment surfaces." },
              { icon: HeartHandshake, title: "Urgent Cares", desc: "Gentle on staff who sanitize dozens of times a shift. Won't dry out skin." },
              { icon: Shield, title: "Schools & Daycares", desc: "Non-toxic, alcohol-free formula is completely safe for children's hands." },
              { icon: Droplets, title: "Public Safety", desc: "Reliable protection for law enforcement and municipal workers on patrol." },
              { icon: Package, title: "Corporate Offices", desc: "Bulk gallons keep entire office floors clean without the chemical smell." },
              { icon: HeartHandshake, title: "Families", desc: "Perfect for the car, purse, or backpack. Peace of mind everywhere you go." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Giving Back Section */}
      <section className="py-24 px-6 sm:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-8">
            <HeartHandshake className="h-16 w-16 text-accent mx-auto" />
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground">Supporting the Volunteers</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Volunteer EMS squads are the backbone of rural and suburban healthcare, yet they constantly struggle for funding. A core part of our mission is giving back. Through our Referral Program, agencies can earn donated profits from sales they generate.
            </p>
            <div className="pt-8">
              <Link href="/referral">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-14">
                  Learn How to Earn for Your Squad
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subscription & Bulk */}
      <section className="py-24 px-6 sm:px-12 bg-primary text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-6">
            <RotateCcw className="h-12 w-12 text-accent" />
            <h3 className="text-2xl sm:text-3xl font-bold">Never Run Out Again</h3>
            <p className="text-white/80 text-lg">
              Set it and forget it. Our simple subscription service ensures your station, office, or home is always stocked. Save money on every recurring order and adjust delivery frequency anytime.
            </p>
            <Link href="/products">
              <Button variant="outline" className="bg-transparent border-white text-primary-foreground hover:bg-white/10 mt-4">
                View Subscription Options
              </Button>
            </Link>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-6">
            <Package className="h-12 w-12 text-accent" />
            <h3 className="text-2xl sm:text-3xl font-bold">Bulk Ordering Made Easy</h3>
            <p className="text-white/80 text-lg">
              Need to supply an entire school district, hospital system, or fleet of ambulances? We offer competitive bulk pricing on gallon refills and station-sized bottles.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="bg-transparent border-white text-primary-foreground hover:bg-white/10 mt-4">
                Request a Bulk Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <CTASection 
        headline="Ready to make the switch?"
        subtext="Shop our collection of non-alcohol sanitizers today and help support volunteer EMS agencies."
        primaryButtonText="Shop Products"
        primaryButtonHref="/products"
        variant="navy"
      />
    </>
  );
}
