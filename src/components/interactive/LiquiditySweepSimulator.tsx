import { useState } from "react";

const steps = [
  { label: "Setup", desc: "Price consolidates near a previous high. Retail traders place buy stops above the high and sell stops below the low.", highlights: [] },
  { label: "Sweep", desc: "Price spikes above the high, triggering buy stops. Smart money uses these buy orders as liquidity to fill their sell orders.", highlights: ["sweep"] },
  { label: "Reversal", desc: "After grabbing liquidity, price reverses sharply with a strong bearish candle. This is the real move.", highlights: ["reversal"] },
  { label: "Continuation", desc: "Price continues downward, breaking the previous low. Traders who bought the breakout are now trapped.", highlights: ["continuation"] },
];

export default function LiquiditySweepSimulator() {
  const [step, setStep] = useState(0);

  const baseY = 60;
  const highY = 40;
  const lowY = 160;
  const sweepY = 20;

  return (
    <div className="bg-muted/50 border rounded-lg p-4 my-6">
      <h4 className="font-display font-semibold text-sm mb-3 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-gold" /> Interactive: Liquidity Sweep
      </h4>
      <p className="text-xs text-muted-foreground mb-4">Step through to see how smart money hunts stop losses before making the real move.</p>

      <div className="overflow-x-auto">
        <svg viewBox="0 0 400 200" className="w-full max-w-md mx-auto" style={{ minWidth: 300 }}>
          {/* Resistance line */}
          <line x1="30" y1={highY} x2="370" y2={highY} stroke="hsl(var(--destructive))" strokeWidth="1" strokeDasharray="4" />
          <text x="375" y={highY + 4} fontSize="9" fill="hsl(var(--destructive))">Resistance</text>

          {/* Support line */}
          <line x1="30" y1={lowY} x2="370" y2={lowY} stroke="hsl(var(--success))" strokeWidth="1" strokeDasharray="4" />
          <text x="375" y={lowY + 4} fontSize="9" fill="hsl(var(--success))">Support</text>

          {/* Buy stops */}
          <rect x="60" y={highY - 15} width="60" height="12" rx="2" fill="hsl(var(--warning))" opacity={step >= 0 ? 0.3 : 0} />
          <text x="90" y={highY - 6} textAnchor="middle" fontSize="8" fill="hsl(var(--warning))" opacity={step >= 0 ? 1 : 0}>Buy Stops</text>

          {/* Consolidation candles */}
          {[80, 110, 140, 170].map((x, i) => (
            <g key={i}>
              <line x1={x} y1={highY + 10} x2={x} y2={lowY - 10} stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
              <rect x={x - 4} y={baseY + i * 10} width="8" height="20" fill={i % 2 === 0 ? "hsl(var(--success))" : "hsl(var(--destructive))"} rx="1" />
            </g>
          ))}

          {/* Sweep candle */}
          {step >= 1 && (
            <g className="animate-in fade-in">
              <line x1="210" y1={sweepY} x2="210" y2={lowY - 20} stroke="hsl(var(--destructive))" strokeWidth="1.5" />
              <rect x="206" y={highY - 5} width="8" height="30" fill="hsl(var(--destructive))" rx="1" />
              <circle cx="210" cy={sweepY} r="4" fill="hsl(var(--warning))" />
              <text x="220" y={sweepY + 4} fontSize="8" fill="hsl(var(--warning))">Sweep!</text>
            </g>
          )}

          {/* Reversal */}
          {step >= 2 && (
            <g className="animate-in fade-in">
              <line x1="240" y1={highY + 5} x2="240" y2={lowY - 5} stroke="hsl(var(--destructive))" strokeWidth="1.5" />
              <rect x="236" y={baseY + 20} width="8" height="50" fill="hsl(var(--destructive))" rx="1" />
              <path d="M 250 80 L 260 70 L 260 90 Z" fill="hsl(var(--destructive))" />
            </g>
          )}

          {/* Continuation */}
          {step >= 3 && (
            <g className="animate-in fade-in">
              {[270, 300, 330].map((x, i) => (
                <g key={i}>
                  <line x1={x} y1={lowY - 30 + i * 15} x2={x} y2={lowY + 10 + i * 10} stroke="hsl(var(--destructive))" strokeWidth="1" />
                  <rect x={x - 4} y={lowY - 20 + i * 15} width="8" height="25" fill="hsl(var(--destructive))" rx="1" />
                </g>
              ))}
            </g>
          )}
        </svg>
      </div>

      <div className="mt-3 bg-background border rounded-md p-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-semibold text-gold">Step {step + 1}:</span>
          <span className="text-sm font-medium">{steps[step].label}</span>
        </div>
        <p className="text-xs text-muted-foreground">{steps[step].desc}</p>
      </div>

      <div className="flex gap-2 mt-3">
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          className="px-3 py-1.5 text-xs font-medium rounded-md border bg-background hover:bg-muted disabled:opacity-40 transition-colors"
        >
          Previous
        </button>
        <button
          onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
          disabled={step === steps.length - 1}
          className="px-3 py-1.5 text-xs font-medium rounded-md bg-gold text-gold-foreground hover:bg-gold/90 disabled:opacity-40 transition-colors"
        >
          Next Step
        </button>
        <button
          onClick={() => setStep(0)}
          className="px-3 py-1.5 text-xs font-medium rounded-md border bg-background hover:bg-muted ml-auto transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
