import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const presets = [
  { label: "$20 account", balance: 20, risk: 1 },
  { label: "$50 account", balance: 50, risk: 1 },
  { label: "$100 account", balance: 100, risk: 2 },
];

export default function RiskCalculator() {
  const [balance, setBalance] = useState(100);
  const [riskPct, setRiskPct] = useState(1);

  const riskAmount = balance * (riskPct / 100);

  return (
    <>
      <SEO title="Risk Per Trade Calculator" description="Calculate exactly how much money you're risking per trade based on your account balance and risk percentage." path="/tools/risk-calculator" />
      <div className="container mx-auto max-w-2xl px-4 py-12">
        <Link to="/tools" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> All Tools
        </Link>
        <h1 className="font-display text-3xl font-bold mb-2">Risk Per Trade Calculator</h1>
        <p className="text-muted-foreground mb-8">Know exactly how much you're risking before you trade.</p>

        {/* Presets */}
        <div className="flex gap-2 mb-6">
          {presets.map(p => (
            <Button key={p.label} variant="outline" size="sm" onClick={() => { setBalance(p.balance); setRiskPct(p.risk); }}>
              {p.label}
            </Button>
          ))}
        </div>

        <div className="grid gap-4 mb-6">
          <div>
            <label className="text-sm font-medium mb-1 block">Account Balance ($)</label>
            <input type="number" value={balance} onChange={e => setBalance(Number(e.target.value))} className="w-full border rounded-md px-3 py-2 bg-background text-sm" min={0} />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Risk Percentage (%)</label>
            <input type="number" value={riskPct} onChange={e => setRiskPct(Number(e.target.value))} className="w-full border rounded-md px-3 py-2 bg-background text-sm" min={0} max={100} step={0.5} />
          </div>
        </div>

        {/* Output */}
        <div className="bg-gold/5 border border-gold/20 rounded-lg p-6 mb-8 text-center">
          <p className="text-sm text-muted-foreground mb-1">Risk Amount Per Trade</p>
          <p className="text-4xl font-display font-bold text-gold">${riskAmount.toFixed(2)}</p>
          <p className="text-xs text-muted-foreground mt-2">
            You risk ${riskAmount.toFixed(2)} on each trade ({riskPct}% of ${balance})
          </p>
        </div>

        {/* Mistakes */}
        <Accordion type="single" collapsible className="mb-8">
          <AccordionItem value="mistakes">
            <AccordionTrigger className="text-sm font-medium">Common Mistakes</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground space-y-2">
              <p>• Risking 5–10% per trade — one losing streak and your account is gone.</p>
              <p>• Not accounting for spread in your risk calculation.</p>
              <p>• Changing risk percentage based on "confidence" — consistency is key.</p>
              <p>• Risking a dollar amount you can't emotionally handle losing.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="bg-muted/50 border rounded-lg p-4 flex items-start gap-2 mb-8">
          <AlertTriangle className="h-4 w-4 text-warning shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground">This calculator is for educational purposes. Always verify calculations before placing real trades.</p>
        </div>

        <Link to="/academy/module/3/lesson/3-3" className="text-sm text-gold hover:underline">← Learn about Stop Loss & Take Profit</Link>
      </div>
    </>
  );
}
