import React from "react";
import { Head } from "@/components/Layout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  organization: z.string().optional(),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(10, "Please provide more details in your message"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      organization: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
    }
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    toast.success("Thank you for reaching out! We'll get back to you within 1–2 business days.");
    form.reset();
  };

  return (
    <>
      <Head 
        title="Contact Us" 
        description="Get in touch with the Sanitizer4EMS team for general inquiries, bulk orders, or partnerships." 
      />

      <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto min-h-[calc(100vh-300px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-extrabold text-foreground mb-4">Contact Us</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you have a question about an order, want to request a bulk quote for your facility, or need help with the referral program, our team is here to help.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground">support@sanitizer4ems.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <p className="text-muted-foreground">1-800-555-0199</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Headquarters</h3>
                  <p className="text-muted-foreground">PO Box 123<br/>Anytown, NY 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl><Input placeholder="John Doe" {...field} data-testid="contact-name" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl><Input type="email" placeholder="john@example.com" {...field} data-testid="contact-email" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl><Input type="tel" placeholder="(555) 123-4567" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <FormField control={form.control} name="organization" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organization / Agency</FormLabel>
                    <FormControl><Input placeholder="Anytown EMS" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="inquiryType" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Inquiry Type *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="contact-inquiry-type">
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="bulk">Bulk Order</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="school">School/Daycare</SelectItem>
                        <SelectItem value="urgent_care">Urgent Care/Healthcare</SelectItem>
                        <SelectItem value="referral">Referral Program</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message *</FormLabel>
                    <FormControl><Textarea placeholder="How can we help you?" className="min-h-[120px]" {...field} data-testid="contact-message" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-12" data-testid="contact-submit">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>

        </div>
      </section>
    </>
  );
}
