import { useState } from "react";
import { CheckCircle, Circle, RotateCcw, AlertTriangle, CheckCheck } from "lucide-react";

const checklistItems = [
  { id: "bias", label: "Daily bias is clear (bullish or bearish)", category: "Analysis" },
  { id: "level", label: "Price is at a significant level (S/R, OB, FVG)", category: "Analysis" },
  { id: "trigger", label: "Valid entry trigger present (candle pattern, MSS, sweep)", category: "Entry" },
  { id: "sl", label: "Stop loss placed at a structural level", category: "Risk" },
  { id: "rr", label: "Risk-reward is at least 1:2", category: "Risk" },
  { id: "lot", label: "Lot size calculated (1-2% max risk)", category: "Risk" },
  { id: "session", label: "Trading during an active session", category: "Timing" },
  { id: "emotion", label: "Emotionally neutral (not angry, euphoric, or desperate)", category: "Psychology" },
  { id: "plan", label: "Trade matches my strategy rules", category: "Discipline" },
];

export default function TradingChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setChecked(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const allChecked = checked.size === checklistItems.length;
  const progress = Math.round((checked.size / checklistItems.length) * 100);

  return (
    <div className="bg-muted/50 border rounded-lg p-4 my-6">
      <h4 className="font-display font-semibold text-sm mb-3 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-gold" /> Interactive: Pre-Trade Checklist
      </h4>
      <p className="text-xs text-muted-foreground mb-4">Complete every item before entering a trade. If any item is unchecked, skip the trade.</p>

      {/* Progress bar */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${allChecked ? "bg-success" : "bg-gold"}`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-xs font-medium">{checked.size}/{checklistItems.length}</span>
      </div>

      {/* Items */}
      <div className="space-y-2">
        {checklistItems.map(item => {
          const isChecked = checked.has(item.id);
          return (
            <button
              key={item.id}
              onClick={() => toggle(item.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-md border text-left transition-all ${
                isChecked ? "border-success/30 bg-success/5" : "border-border hover:border-gold/30 hover:bg-gold/5"
              }`}
            >
              {isChecked
                ? <CheckCircle className="h-5 w-5 text-success shrink-0" />
                : <Circle className="h-5 w-5 text-muted-foreground shrink-0" />
              }
              <span className={`text-sm ${isChecked ? "text-muted-foreground line-through" : "text-foreground"}`}>
                {item.label}
              </span>
              <span className="text-[10px] text-muted-foreground ml-auto bg-muted px-1.5 py-0.5 rounded shrink-0">
                {item.category}
              </span>
            </button>
          );
        })}
      </div>

      {/* Result */}
      <div className={`mt-4 p-3 rounded-md border text-sm font-medium flex items-center gap-2 ${
        allChecked ? "bg-success/10 border-success/30 text-success" : checked.size > 0 ? "bg-warning/10 border-warning/30 text-warning" : "bg-muted border-border text-muted-foreground"
      }`}>
        {allChecked ? (
          <><CheckCheck className="h-4 w-4" /> All checks passed — you may proceed with the trade</>
        ) : checked.size > 0 ? (
          <><AlertTriangle className="h-4 w-4" /> {checklistItems.length - checked.size} item(s) unchecked — do NOT enter this trade</>
        ) : (
          <>Complete the checklist before entering any trade</>
        )}
      </div>

      <button
        onClick={() => setChecked(new Set())}
        className="mt-3 px-3 py-1.5 text-xs font-medium rounded-md border hover:bg-muted transition-colors flex items-center gap-1"
      >
        <RotateCcw className="h-3 w-3" /> Reset Checklist
      </button>
    </div>
  );
}
