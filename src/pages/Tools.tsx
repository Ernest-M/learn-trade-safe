import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Calculator, Shield, Target, ArrowRight } from "lucide-react";

const tools = [
  {
    title: "Lot Size Calculator",
    desc: "Calculate the right position size based on your account balance, risk percentage, and stop loss distance.",
    path: "/tools/lot-size-calculator",
    icon: Calculator,
    relatedLesson: { label: "Learn Position Sizing", path: "/academy/position-sizing" },
  },
  {
    title: "Margin Calculator",
    desc: "Check how much margin is required for a trade and whether your account can handle it.",
    path: "/tools/margin-calculator",
    icon: Shield,
    relatedLesson: { label: "Learn About Margin", path: "/academy/order-types" },
  },
  {
    title: "Risk Per Trade Calculator",
    desc: "Quickly calculate the dollar amount you're risking on a trade based on your risk percentage.",
    path: "/tools/risk-calculator",
    icon: Target,
    relatedLesson: { label: "Learn Risk Management", path: "academy/most-important-rule" },
  },
];

export default function Tools() {
  return (
    <>
      <SEO title="Free Trading Calculators" description="Free lot size, margin, and risk calculators for forex and gold traders. Essential tools for small account management." path="/tools" />
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Free Trading Tools</h1>
        <p className="text-muted-foreground mb-10">Essential calculators for managing your small trading account.</p>

        <div className="space-y-4">
          {tools.map(t => (
            <div key={t.path} className="border rounded-lg p-6 hover:shadow-md transition-all hover:border-gold/50">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <t.icon className="h-6 w-6 text-gold" />
                </div>
                <div className="flex-1">
                  <Link to={t.path}>
                    <h2 className="font-display font-semibold text-lg hover:text-gold transition-colors">{t.title}</h2>
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <Link to={t.path} className="text-sm font-medium text-gold hover:underline flex items-center gap-1">
                      Open Calculator <ArrowRight className="h-3 w-3" />
                    </Link>
                    <Link to={t.relatedLesson.path} className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
                      {t.relatedLesson.label} <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
