import React from "react";
import { Head } from "@/components/Layout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { AlertTriangle, HeartHandshake } from "lucide-react";

const formSchema = z.object({
  agencyName: z.string().min(2, "Agency name is required"),
  contactPerson: z.string().min(2, "Contact person is required"),
  title: z.string().optional(),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  website: z.string().url("Must be a valid URL").optional().or(z.literal('')),
  facebook: z.string().url("Must be a valid URL").optional().or(z.literal('')),
  instagram: z.string().url("Must be a valid URL").optional().or(z.literal('')),
  twitter: z.string().url("Must be a valid URL").optional().or(z.literal('')),
  referralCode: z.string().optional(),
  taxId: z.string().optional(),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function Referral() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      agencyName: "",
      contactPerson: "",
      title: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      website: "",
      facebook: "",
      instagram: "",
      twitter: "",
      referralCode: "",
      taxId: "",
      notes: "",
    }
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    toast.success("Your application has been received! We'll review it and reach out within 3–5 business days.");
    form.reset();
  };

  return (
    <>
      <Head 
        title="Referral Program" 
        description="Volunteer EMS agencies can partner with Sanitizer4EMS to earn donated profits from referred sales." 
      />

      <div className="bg-yellow-50 border-b border-yellow-200 px-6 py-3 text-yellow-800 text-sm font-medium flex items-center justify-center gap-2 text-center">
        <AlertTriangle className="h-4 w-4 shrink-0" />
        Donation percentages and legal details are placeholders and will be finalized before launch.
      </div>

      <section className="py-16 px-6 sm:px-12 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <HeartHandshake className="h-12 w-12 text-accent mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold text-foreground mb-4">Agency Referral Program</h1>
          <p className="text-lg text-muted-foreground">
            We are committed to giving back. Volunteer EMS agencies can apply to become referral partners. Once approved, you'll receive a unique referral link and code. When your supporters purchase through your link (or select your agency at checkout), a portion of the profit is donated directly back to your squad.
          </p>
        </div>

        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-border shadow-sm">
          <h2 className="text-2xl font-bold text-foreground mb-6">Partner Application</h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="agencyName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Agency Name *</FormLabel>
                    <FormControl><Input placeholder="Anytown Volunteer Ambulance" {...field} data-testid="input-agency" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="contactPerson" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Person *</FormLabel>
                    <FormControl><Input placeholder="Jane Doe" {...field} data-testid="input-contact" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="title" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title / Role</FormLabel>
                    <FormControl><Input placeholder="Captain / President" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl><Input type="email" placeholder="jane@example.com" {...field} data-testid="input-email" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl><Input type="tel" placeholder="(555) 123-4567" {...field} data-testid="input-phone" /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="taxId" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tax ID / EIN</FormLabel>
                    <FormControl><Input placeholder="XX-XXXXXXX" {...field} /></FormControl>
                    <FormDescription>Optional for now, may be required later.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <FormField control={form.control} name="address" render={({ field }) => (
                <FormItem>
                  <FormLabel>Agency Street Address</FormLabel>
                  <FormControl><Input placeholder="123 Main St" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormField control={form.control} name="city" render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl><Input placeholder="Anytown" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="state" render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl><Input placeholder="NY" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="zip" render={({ field }) => (
                  <FormItem>
                    <FormLabel>ZIP</FormLabel>
                    <FormControl><Input placeholder="12345" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="text-lg font-semibold mb-4">Online Presence</h3>
                <div className="space-y-4">
                  <FormField control={form.control} name="website" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website URL</FormLabel>
                      <FormControl><Input placeholder="https://" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="facebook" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Facebook URL</FormLabel>
                      <FormControl><Input placeholder="https://facebook.com/..." {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="text-lg font-semibold mb-4">Program Details</h3>
                <FormField control={form.control} name="referralCode" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Referral Code</FormLabel>
                    <FormControl><Input placeholder="e.g. SQUAD123" {...field} /></FormControl>
                    <FormDescription>We will try to accommodate your preference.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )} />
                
                <div className="mt-6">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Supporting Documents
                  </label>
                  <Input disabled type="file" className="mt-2 text-muted-foreground bg-secondary/50 cursor-not-allowed" />
                  <p className="text-[0.8rem] text-muted-foreground mt-1">Upload functionality coming soon.</p>
                </div>

                <FormField control={form.control} name="notes" render={({ field }) => (
                  <FormItem className="mt-6">
                    <FormLabel>Notes / Message</FormLabel>
                    <FormControl><Textarea placeholder="Tell us about your squad..." className="resize-none" rows={4} {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg mt-8" data-testid="btn-submit-referral">
                Submit Application
              </Button>
            </form>
          </Form>

        </div>
      </section>
    </>
  );
}
