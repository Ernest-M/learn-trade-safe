import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, Info } from "lucide-react";
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
      <SEO title="Lot Size Calculator" description="Calculate the correct lot size for forex and gold trades based on your account, risk, and stop loss." path="/tools/lot-size-calculator" />
      <div className="container mx-auto max-w-2xl px-4 py-12">
        <Link to="/tools" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> All Tools
        </Link>
        <h1 className="font-display text-3xl font-bold mb-2">Lot Size Calculator</h1>
        <p className="text-muted-foreground mb-8">Calculate the right position size for every trade.</p>

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
              For XAUUSD: ~$1 per pip for 0.01 lots. For EUR/USD: ~$10 per pip for 1.0 lot. Adjust based on your instrument.
            </p>
          </div>
        </div>

        {/* Output */}
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
        </Accordion>

        <div className="bg-muted/50 border rounded-lg p-4 flex items-start gap-2 mb-8">
          <AlertTriangle className="h-4 w-4 text-warning shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground">This calculator is for educational purposes. Always verify calculations before placing real trades.</p>
        </div>

        <Link to="/academy/module/3/lesson/3-4" className="text-sm text-gold hover:underline">← Learn about Position Sizing</Link>
      </div>
    </>
  );
}
