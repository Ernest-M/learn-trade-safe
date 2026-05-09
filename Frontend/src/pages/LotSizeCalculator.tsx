import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, Info, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const presets = [
  { label: "$20 account", balance: 20, risk: 1, sl: 50, pip: 1.0 },
  { label: "$50 account", balance: 50, risk: 1, sl: 50, pip: 1.0 },
  { label: "$100 account", balance: 100, risk: 2, sl: 50, pip: 1.0 },
];

export default function LotSizeCalculator() {
  const [balance, setBalance] = useState(100);
  const [riskPct, setRiskPct] = useState(1);
  const [slPips, setSlPips] = useState(50);
  const [pipValue, setPipValue] = useState(1.0);

  const riskAmount = balance * (riskPct / 100);
  const rawLotSize = slPips > 0 && pipValue > 0 ? riskAmount / (slPips * pipValue) : 0;
  const lotSize = Math.max(0.01, Math.round(rawLotSize * 100) / 100);

  return (
    <>
      <SEO title="Lot Size Calculator" description="Free lot size calculator for forex and gold trading. Calculate the correct position size based on your account balance, risk percentage, and stop loss distance." path="/tools/lot-size-calculator" />
      <div className="container mx-auto max-w-2xl px-4 py-12">
        <Link to="/tools" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> All Tools
        </Link>
        <h1 className="font-display text-3xl font-bold mb-2">Lot Size Calculator</h1>
        <p className="text-muted-foreground mb-6">Calculate the right position size for every trade to manage your risk properly.</p>

        {/* Explanatory content for SEO */}
        <div className="prose prose-sm max-w-none mb-8 space-y-3">
          <p className="text-sm text-foreground leading-relaxed">
            Position sizing is one of the most critical aspects of risk management in forex and gold trading. The lot size calculator helps you determine exactly how large your position should be based on your account balance, the percentage of your account you're willing to risk, and how far your stop loss is from your entry price.
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            The formula is: <strong>Lot Size = Risk Amount ÷ (Stop Loss in Pips × Pip Value per Lot)</strong>. For example, with a $100 account risking 1% ($1) with a 50-pip stop loss and $1 pip value, your lot size would be 0.02 lots.
          </p>
        </div>

        <div className="flex gap-2 mb-6 flex-wrap">
          {presets.map(p => (
            <Button key={p.label} variant="outline" size="sm" onClick={() => { setBalance(p.balance); setRiskPct(p.risk); setSlPips(p.sl); setPipValue(p.pip); }}>
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
          <div>
            <label className="text-sm font-medium mb-1 block">Stop Loss (pips)</label>
            <input type="number" value={slPips} onChange={e => setSlPips(Number(e.target.value))} className="w-full border rounded-md px-3 py-2 bg-background text-sm" min={1} />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 flex items-center gap-1">
              Pip Value Per Lot ($) <Info className="h-3 w-3 text-muted-foreground" />
            </label>
            <input type="number" value={pipValue} onChange={e => setPipValue(Number(e.target.value))} className="w-full border rounded-md px-3 py-2 bg-background text-sm" min={0.01} step={0.1} />
            <p className="text-xs text-muted-foreground mt-1">
              For XAUUSD: ~$1 per pip for 0.01 lots. For EUR/USD: ~$10 per pip for 1.0 lot.
            </p>
          </div>
        </div>

        <div className="bg-gold/5 border border-gold/20 rounded-lg p-6 mb-8 text-center">
          <p className="text-sm text-muted-foreground mb-1">Recommended Lot Size</p>
          <p className="text-4xl font-display font-bold text-gold">{lotSize.toFixed(2)}</p>
          <p className="text-xs text-muted-foreground mt-2">
            Risk: ${riskAmount.toFixed(2)} | SL: {slPips} pips | Pip value: ${pipValue}/lot
          </p>
          {rawLotSize < 0.01 && rawLotSize > 0 && (
            <p className="text-xs text-warning mt-2">⚠ Calculated lot is below 0.01 minimum. Consider widening your stop or reducing risk %.</p>
          )}
        </div>

        <Accordion type="single" collapsible className="mb-8">
          <AccordionItem value="mistakes">
            <AccordionTrigger className="text-sm font-medium">Common Mistakes</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground space-y-2">
              <p>• Using the same lot size regardless of stop loss distance.</p>
              <p>• Not adjusting pip value for different instruments.</p>
              <p>• Rounding up instead of down — always round down to stay within risk.</p>
              <p>• Ignoring the spread in your stop loss calculation.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-1">
            <AccordionTrigger className="text-sm font-medium">What lot size should I use on a $50 account?</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              With a $50 account risking 1% ($0.50) and a 50-pip stop loss, you'd use 0.01 lots (micro lot). This keeps your risk controlled at $0.50 per trade.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger className="text-sm font-medium">What is the difference between standard, mini, and micro lots?</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              A standard lot = 100,000 units (1.0 lot). A mini lot = 10,000 units (0.1 lot). A micro lot = 1,000 units (0.01 lot). For small accounts, always use micro lots to keep risk manageable.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger className="text-sm font-medium">Should I use the same lot size for every trade?</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              No. Lot size should change based on your stop loss distance. A wider stop needs a smaller lot to risk the same dollar amount. Always recalculate for every trade.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="bg-muted/50 border rounded-lg p-4 flex items-start gap-2 mb-8">
          <AlertTriangle className="h-4 w-4 text-warning shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground">This calculator is for educational purposes. Always verify calculations before placing real trades.</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Related Lessons</h3>
          <div className="flex flex-wrap gap-2">
            <Link to="/academy/position-sizing" className="text-sm text-gold hover:underline">Position Sizing</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/academy/lots-and-leverage" className="text-sm text-gold hover:underline">Lots and Leverage</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/academy/most-important-rule" className="text-sm text-gold hover:underline">The 1% Risk Rule</Link>
          </div>
        </div>
      </div>
    </>
  );
}
