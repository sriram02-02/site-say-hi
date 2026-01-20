import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Copy } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { openWhatsApp } from "@/lib/whatsapp";
import { useState } from "react";
import { WhatsAppFallbackDialog } from "@/components/WhatsAppFallbackDialog";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Please enter a valid WhatsApp number").max(15, "Phone number is too long"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const contactInfo = {
    email: "khagrofoods@gmail.com",
    email2: "khagroexporters@gmail.com",
    phone: "+91 9948547000",
    phone2: "+91 9848938837",
    address: "Flat No. 304, Krisals County, Syamala Nagar, Guntur - 522006, Andhra Pradesh, India"
  };

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const [waOpen, setWaOpen] = useState(false);
  const [waUrl, setWaUrl] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Get In Touch</h1>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              Have questions about our products? We're here to help you with all your import/export needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card border rounded-lg p-4 sm:p-6 md:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Send us a Message</h2>
              <Form {...form}>
                <form className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>WhatsApp Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+91 9876543210" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your requirements..." 
                            rows={6}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="button"
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => {
                      const data = form.getValues();
                      const validation = contactSchema.safeParse(data);
                      
                      if (!validation.success) {
                        toast.error("Please fill in all fields correctly.");
                        return;
                      }

                      const whatsappMessage = `Hi KH AGRO STOCKIST & EXPORTERS!

New customer inquiry:
Name: ${data.name}
Email: ${data.email}
WhatsApp: ${data.phone}

Message: ${data.message}

Please contact me for further details.`;

                      const whatsappNumber = contactInfo.phone.replace(/[^\d]/g, "");
                      const success = openWhatsApp(whatsappNumber, whatsappMessage);

                      if (!success) {
                        toast.error("Pop-up blocked. Please allow pop-ups and try again.");
                        try {
                          const fallbackUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
                          navigator.clipboard?.writeText(fallbackUrl).catch(() => {});
                          setWaUrl(fallbackUrl);
                          setWaOpen(true);
                        } catch {}
                        return;
                      }

                      toast.success("Opening WhatsApp...");
                      form.reset();
                    }}
                  >
                    Send Message via WhatsApp
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-card border rounded-lg p-4 sm:p-6 md:p-8 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Contact Information</h2>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground mb-2 text-sm sm:text-base">Email</p>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <p className="text-xs sm:text-sm text-muted-foreground break-all">{contactInfo.email}</p>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyToClipboard(contactInfo.email)}
                          className="flex-shrink-0 h-7 w-7 p-0"
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xs sm:text-sm text-muted-foreground break-all">{contactInfo.email2}</p>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyToClipboard(contactInfo.email2)}
                          className="flex-shrink-0 h-7 w-7 p-0"
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground mb-2 text-sm sm:text-base">Phone</p>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <p className="text-xs sm:text-sm text-muted-foreground">{contactInfo.phone}</p>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyToClipboard(contactInfo.phone)}
                          className="flex-shrink-0 h-7 w-7 p-0"
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xs sm:text-sm text-muted-foreground">{contactInfo.phone2}</p>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyToClipboard(contactInfo.phone2)}
                          className="flex-shrink-0 h-7 w-7 p-0"
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground mb-1 text-sm sm:text-base">Address</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{contactInfo.address}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(contactInfo.address)}
                      className="flex-shrink-0 h-8 w-8 sm:h-9 sm:w-auto sm:px-3 p-0"
                    >
                      <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 sm:p-6">
                <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Business Hours</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Monday - Saturday: 9:00 AM - 6:00 PM<br />
                  Sunday: Closed
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppFallbackDialog open={waOpen} onOpenChange={setWaOpen} url={waUrl ?? ""} />
    </div>
  );
};

export default Contact;
