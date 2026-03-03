import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const presets = [
  { label: "Gold 0.01 lot", price: 2900, lots: 0.01, contract: 100, leverage: 100, balance: 50 },
  { label: "Gold 0.05 lot", price: 2900, lots: 0.05, contract: 100, leverage: 100, balance: 100 },
  { label: "EUR/USD 0.01", price: 1.08, lots: 0.01, contract: 100000, leverage: 500, balance: 50 },
];

export default function MarginCalculator() {
  const [price, setPrice] = useState(2900);
  const [lots, setLots] = useState(0.01);
  const [contractSize, setContractSize] = useState(100);
  const [leverage, setLeverage] = useState(100);
  const [balance, setBalance] = useState(100);

  const notional = price * lots * contractSize;
  const margin = leverage > 0 ? notional / leverage : 0;
  const overMargin = margin > balance;

  return (
    <>
      <SEO title="Margin Calculator" description="Calculate margin requirements for forex and gold trades. Check if your account can handle the position." path="/tools/margin-calculator" />
      <div className="container mx-auto max-w-2xl px-4 py-12">
        <Link to="/tools" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> All Tools
        </Link>
        <h1 className="font-display text-3xl font-bold mb-2">Margin Calculator</h1>
        <p className="text-muted-foreground mb-8">Check margin requirements before opening a trade.</p>

        <div className="flex gap-2 mb-6 flex-wrap">
          {presets.map((p, i) => (
            <Button key={i} variant="outline" size="sm" onClick={() => { setPrice(p.price); setLots(p.lots); setContractSize(p.contract); setLeverage(p.leverage); setBalance(p.balance); }}>
              {p.label}
            </Button>
          ))}
        </div>

        <div className="grid gap-4 mb-6">
          <div>
            <label className="text-sm font-medium mb-1 block">Instrument Price ($)</label>
            <input type="number" value={price} onChange={e => setPrice(Number(e.target.value))} className="w-full border rounded-md px-3 py-2 bg-background text-sm" min={0} step={0.01} />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Lot Size</label>
            <input type="number" value={lots} onChange={e => setLots(Number(e.target.value))} className="w-full border rounded-md px-3 py-2 bg-background text-sm" min={0.01} step={0.01} />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Contract Size</label>
            <input type="number" value={contractSize} onChange={e => setContractSize(Number(e.target.value))} className="w-full border rounded-md px-3 py-2 bg-background text-sm" min={1} />
            <p className="text-xs text-muted-foreground mt-1">Gold (XAUUSD): 100 | Forex major pairs: 100,000</p>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Leverage (e.g. 100 for 1:100)</label>
            <input type="number" value={leverage} onChange={e => setLeverage(Number(e.target.value))} className="w-full border rounded-md px-3 py-2 bg-background text-sm" min={1} />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Account Balance ($)</label>
            <input type="number" value={balance} onChange={e => setBalance(Number(e.target.value))} className="w-full border rounded-md px-3 py-2 bg-background text-sm" min={0} />
          </div>
        </div>

        {/* Output */}
        <div className={`rounded-lg p-6 mb-8 text-center border ${overMargin ? "bg-destructive/5 border-destructive/30" : "bg-gold/5 border-gold/20"}`}>
          <p className="text-sm text-muted-foreground mb-1">Margin Required</p>
          <p className={`text-4xl font-display font-bold ${overMargin ? "text-destructive" : "text-gold"}`}>${margin.toFixed(2)}</p>
          <p className="text-xs text-muted-foreground mt-2">
            Notional: ${notional.toFixed(2)} | Leverage: 1:{leverage}
          </p>
          {overMargin && (
            <p className="text-sm text-destructive font-medium mt-3">
              ⚠ Margin required (${margin.toFixed(2)}) exceeds your balance (${balance.toFixed(2)}). Reduce lot size or increase balance.
            </p>
          )}
        </div>

        <Accordion type="single" collapsible className="mb-8">
          <AccordionItem value="mistakes">
            <AccordionTrigger className="text-sm font-medium">Common Mistakes</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground space-y-2">
              <p>• Confusing margin with risk — margin is collateral, not how much you can lose.</p>
              <p>• Using all available margin, leaving no room for drawdown.</p>
              <p>• Not accounting for multiple open positions sharing the same margin pool.</p>
              <p>• Forgetting that different instruments have different contract sizes.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="bg-muted/50 border rounded-lg p-4 flex items-start gap-2 mb-8">
          <AlertTriangle className="h-4 w-4 text-warning shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground">This calculator is for educational purposes. Always verify with your broker's specific margin requirements.</p>
        </div>

        <Link to="/academy/module/3/lesson/3-2" className="text-sm text-gold hover:underline">← Learn about Margin</Link>
      </div>
    </>
  );
}
