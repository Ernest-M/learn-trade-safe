import { useState } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <SEO title="Contact Us" description="Get in touch with the Small Account Trading Academy team." path="/contact" />
      <div className="container mx-auto max-w-xl px-4 py-12">
        <h1 className="font-display text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-muted-foreground mb-8">Have a question or feedback? We'd love to hear from you.</p>

        {sent ? (
          <div className="bg-success/10 border border-success/20 rounded-lg p-6 text-center">
            <Mail className="h-8 w-8 text-success mx-auto mb-3" />
            <h2 className="font-display font-semibold mb-1">Message Sent!</h2>
            <p className="text-sm text-muted-foreground">We'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const data = new FormData(form);
              const subject = encodeURIComponent(data.get("subject") as string);
              const body = encodeURIComponent(data.get("message") as string);
              window.location.href = `mailto:hello@smallaccounttrading.com?subject=${subject}&body=${body}`;
              setSent(true);
            }}
            className="space-y-4"
          >
            <div>
              <label className="text-sm font-medium mb-1 block">Name</label>
              <input name="name" required className="w-full border rounded-md px-3 py-2 bg-background text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Email</label>
              <input name="email" type="email" required className="w-full border rounded-md px-3 py-2 bg-background text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Subject</label>
              <input name="subject" required className="w-full border rounded-md px-3 py-2 bg-background text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Message</label>
              <textarea name="message" rows={5} required className="w-full border rounded-md px-3 py-2 bg-background text-sm resize-none" />
            </div>
            <Button variant="gold" type="submit" className="w-full">Send Message</Button>
          </form>
        )}
      </div>
    </>
  );
}
