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
      <SEO title="Margin Calculator" description="Free margin calculator for forex and gold trading. Calculate margin requirements and check if your account can handle the position before trading." path="/tools/margin-calculator" />
      <div className="container mx-auto max-w-2xl px-4 py-12">
        <Link to="/tools" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> All Tools
        </Link>
        <h1 className="font-display text-3xl font-bold mb-2">Margin Calculator</h1>
        <p className="text-muted-foreground mb-6">Check margin requirements before opening a trade to avoid margin calls.</p>

        <div className="prose prose-sm max-w-none mb-8 space-y-3">
          <p className="text-sm text-foreground leading-relaxed">
            Margin is the collateral required by your broker to open and maintain a leveraged position. It's not a fee — it's a portion of your account set aside as a deposit. Understanding margin requirements prevents unexpected margin calls that can force-close your trades.
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            The formula is: <strong>Margin = (Price × Lot Size × Contract Size) ÷ Leverage</strong>. For example, buying 0.01 lots of gold at $2,900 with 1:100 leverage requires $29 margin.
          </p>
        </div>

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
          <AccordionItem value="faq-1">
            <AccordionTrigger className="text-sm font-medium">What is a margin call?</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              A margin call happens when your losses reduce your account equity below the required margin level. Your broker will either ask you to deposit more funds or automatically close your positions to prevent further losses.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger className="text-sm font-medium">How much free margin should I keep?</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              As a rule of thumb, never use more than 10-20% of your account as margin. This leaves room for drawdown and prevents margin calls during normal market fluctuations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="bg-muted/50 border rounded-lg p-4 flex items-start gap-2 mb-8">
          <AlertTriangle className="h-4 w-4 text-warning shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground">This calculator is for educational purposes. Always verify with your broker's specific margin requirements.</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Related Lessons</h3>
          <div className="flex flex-wrap gap-2">
            <Link to="/academy/lots-and-leverage" className="text-sm text-gold hover:underline">Lots and Leverage</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/academy/most-important-rule" className="text-sm text-gold hover:underline">The 1% Risk Rule</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/academy/order-types" className="text-sm text-gold hover:underline">Order Types</Link>
          </div>
        </div>
      </div>
    </>
  );
}
