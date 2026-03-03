import SEO from "@/components/SEO";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy" description="Privacy policy for Small Account Trading Academy." path="/privacy" />
      <div className="container mx-auto max-w-3xl px-4 py-12 prose prose-sm max-w-none">
        <h1 className="font-display text-3xl font-bold mb-8">Privacy Policy</h1>

        <p className="text-muted-foreground">Last updated: March 2026</p>

        <h2 className="font-display text-xl font-semibold mt-8 mb-3">Information We Collect</h2>
        <p className="text-muted-foreground">
          We may collect your email address if you subscribe to our newsletter. We also collect standard analytics data (page views, device type, browser) through cookies to improve the site experience.
        </p>

        <h2 className="font-display text-xl font-semibold mt-8 mb-3">How We Use Your Information</h2>
        <p className="text-muted-foreground">
          Email addresses are used solely for sending educational content. We do not sell, rent, or share your personal information with third parties for marketing purposes.
        </p>

        <h2 className="font-display text-xl font-semibold mt-8 mb-3">Cookies</h2>
        <p className="text-muted-foreground">
          This site uses cookies for analytics and to remember your learning progress (stored locally in your browser). You can disable cookies in your browser settings.
        </p>

        <h2 className="font-display text-xl font-semibold mt-8 mb-3">Third-Party Links</h2>
        <p className="text-muted-foreground">
          This site contains links to third-party websites (including broker affiliate links). We are not responsible for the privacy practices or content of these external sites.
        </p>

        <h2 className="font-display text-xl font-semibold mt-8 mb-3">Contact</h2>
        <p className="text-muted-foreground">
          If you have questions about this privacy policy, please contact us through our contact page.
        </p>
      </div>
    </>
  );
}
