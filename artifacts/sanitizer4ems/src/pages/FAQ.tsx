import React from "react";
import { Head } from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "What is Sanitizer4EMS?",
    answer: "Sanitizer4EMS is a non-alcohol hand sanitizer brand specifically designed for high-use environments where skin health and safety are paramount. It offers hospital-grade protection without the drying, cracking, or flammability issues associated with traditional alcohol sanitizers."
  },
  {
    question: "Who created the company?",
    answer: "The company was founded by active EMS personnel who were tired of their hands cracking and bleeding from constant use of harsh alcohol sanitizers on shift. We built the solution we needed for ourselves."
  },
  {
    question: "Are the products alcohol-based?",
    answer: "No. Our entire line is proudly alcohol-free. We use alternative antimicrobial active ingredients that are highly effective against germs but significantly gentler on the skin barrier."
  },
  {
    question: "Who are the products for?",
    answer: "While born in the EMS field, our products are perfect for anyone. We heavily serve EMS agencies, fire departments, urgent cares, schools, daycares, public safety officers, corporate offices, and families who want a safer alternative for their homes."
  },
  {
    question: "Can agencies place bulk orders?",
    answer: "Yes, we offer bulk ordering, including gallon refills and case quantities of station-sized bottles. Please visit our Contact page to request a bulk quote."
  },
  {
    question: "Are subscriptions or reorders available?",
    answer: "Absolutely. You can set up a 'Subscribe & Save' plan on any of our products to ensure your station or home is never out of stock, while also receiving a discount on every order."
  },
  {
    question: "How does the referral program work?",
    answer: "Volunteer EMS agencies can apply to be partners. Once approved, they receive a unique link. A portion of the profits from any sales generated through that link is donated back to the agency to help fund their operations."
  },
  {
    question: "Does a customer have to select an agency?",
    answer: "No. Supporting an agency is completely optional. You can simply purchase our products normally. If you'd like to support a squad, you can use their referral link or select them from a dropdown at checkout."
  },
  {
    question: "How are donations to volunteer ambulance squads handled?",
    answer: "Donations are tracked automatically through our referral system and paid out to the partnered agencies on a regular schedule (details to be finalized before launch). All funds go directly to the registered organization."
  },
  {
    question: "How does shipping work?",
    answer: "We offer standard ground shipping for individual orders and freight options for large bulk orders. Because our formula is alcohol-free and non-flammable, we avoid many of the hazardous materials shipping restrictions that complicate traditional sanitizer logistics."
  },
  {
    question: "How do urgent cares, schools, and daycares order?",
    answer: "Facilities can order directly through our website using standard checkout or subscriptions. For larger facility-wide implementations requiring bulk gallons or tax-exempt purchasing, please reach out via our Contact form."
  }
];

export default function FAQ() {
  return (
    <>
      <Head 
        title="Frequently Asked Questions" 
        description="Answers to common questions about Sanitizer4EMS, our non-alcohol formula, and our agency referral program." 
      />

      <section className="py-20 px-6 sm:px-12 bg-secondary/30 min-h-[calc(100vh-300px)]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-foreground mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our products and our mission.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-border shadow-sm p-2 sm:p-6">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary px-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed px-4 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
