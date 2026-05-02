import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { AFFILIATE_XM_URL } from "@/config/affiliate";
import { CheckCircle, AlertTriangle, ExternalLink } from "lucide-react";

const checklist = [
  "Completed all 9 academy modules",
  "Practiced on demo for at least 2 weeks",
  "Consistently used stop losses on every trade",
  "Can calculate lot size for your account",
  "Have a written set of trading rules",
  "Only risking money you can afford to lose",
  "Understand that most beginners lose money",
];

export default function StartTrading() {
  return (
    <>
      <SEO title="Start Trading" description="Ready to start trading? Follow our checklist and open a demo or real account safely." path="/start-trading" />
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Start Trading</h1>
        <p className="text-muted-foreground mb-10">Before you trade real money, make sure you're truly ready.</p>

        {/* Why demo first */}
        <div className="mb-10">
          <h2 className="font-display text-xl font-semibold mb-3">Why Start With Demo?</h2>
          <p className="text-muted-foreground mb-4">
            A demo account lets you practice with virtual money in real market conditions. You'll learn the platform, test your strategy, and build confidence — all without financial risk.
          </p>
          <p className="text-muted-foreground">
            Think of it like flight simulation: no pilot flies a real plane without simulator hours first. Trading is no different.
          </p>
        </div>

        {/* Checklist */}
        <div className="mb-10">
          <h2 className="font-display text-xl font-semibold mb-4">Are You Ready? Checklist</h2>
          <div className="space-y-3">
            {checklist.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 border rounded-lg">
                <CheckCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Warning */}
        <div className="bg-warning/5 border border-warning/20 rounded-lg p-4 mb-10 flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-sm mb-1">Important Risk Warning</p>
            <p className="text-sm text-muted-foreground">
              Trading forex and CFDs involves significant risk. You may lose more than your initial deposit. Never trade with money you cannot afford to lose. Past performance is not a guarantee of future results.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <a href={AFFILIATE_XM_URL} target="_blank" rel="noopener noreferrer" className="block">
            <div className="border-2 border-gold rounded-lg p-6 text-center hover:bg-gold/5 transition-colors">
              <h3 className="font-display font-semibold mb-2">Open Demo Account</h3>
              <p className="text-sm text-muted-foreground mb-4">Practice with virtual money. No risk.</p>
              <Button variant="gold" className="w-full">
                Open Demo <ExternalLink className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </a>
          <a href={AFFILIATE_XM_URL} target="_blank" rel="noopener noreferrer" className="block">
            <div className="border rounded-lg p-6 text-center hover:bg-muted/30 transition-colors">
              <h3 className="font-display font-semibold mb-2">Open Real Account</h3>
              <p className="text-sm text-muted-foreground mb-4">Only after completing the checklist above.</p>
              <Button variant="outline" className="w-full">
                Open Account <ExternalLink className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </a>
        </div>
        
      </div>
    </>
  );
}
