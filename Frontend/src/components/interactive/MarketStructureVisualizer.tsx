import { useState } from "react";

const points = [
  { x: 40, y: 180, label: "HL" },
  { x: 100, y: 80, label: "HH" },
  { x: 160, y: 140, label: "HL" },
  { x: 220, y: 50, label: "HH" },
  { x: 280, y: 110, label: "HL" },
  { x: 340, y: 30, label: "HH" },
  { x: 400, y: 160, label: "LH" },
  { x: 460, y: 200, label: "LL" },
];

export default function MarketStructureVisualizer() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const descriptions: Record<string, string> = {
    HH: "Higher High — price made a new peak above the previous high. Bullish signal.",
    HL: "Higher Low — price dipped but stayed above the previous low. Buyers are strong.",
    LH: "Lower High — price failed to reach the previous high. Bearish shift starting.",
    LL: "Lower Low — price broke below the previous low. Sellers have taken control.",
  };

  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const breakIdx = 5; // Index where structure shifts

  return (
    <div className="bg-muted/50 border rounded-lg p-4 my-6">
      <h4 className="font-display font-semibold text-sm mb-3 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-gold" /> Interactive: Market Structure
      </h4>
      <p className="text-xs text-muted-foreground mb-4">Click on the dots to learn about each swing point. Notice the shift from bullish to bearish structure.</p>
      <div className="overflow-x-auto">
        <svg viewBox="0 0 500 230" className="w-full max-w-lg mx-auto" style={{ minWidth: 320 }}>
          {/* Grid lines */}
          {[50, 100, 150, 200].map(y => (
            <line key={y} x1="20" y1={y} x2="480" y2={y} stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="4" />
          ))}

          {/* Uptrend path */}
          <polyline
            points={points.slice(0, breakIdx + 1).map(p => `${p.x},${p.y}`).join(" ")}
            fill="none"
            stroke="hsl(var(--success))"
            strokeWidth="2"
          />
          {/* Downtrend path */}
          <polyline
            points={points.slice(breakIdx).map(p => `${p.x},${p.y}`).join(" ")}
            fill="none"
            stroke="hsl(var(--destructive))"
            strokeWidth="2"
            strokeDasharray="6"
          />

          {/* BOS line */}
          <line x1={points[4].x} y1={points[4].y} x2={460} y2={points[4].y} stroke="hsl(var(--warning))" strokeWidth="1" strokeDasharray="4" />
          <text x={420} y={points[4].y - 6} fontSize="9" fill="hsl(var(--warning))" fontWeight="600">BOS</text>

          {/* Points */}
          {points.map((p, i) => {
            const isActive = activeIdx === i;
            const isBullish = i <= breakIdx;
            return (
              <g key={i} onClick={() => setActiveIdx(isActive ? null : i)} className="cursor-pointer">
                <circle cx={p.x} cy={p.y} r={isActive ? 10 : 7} fill={isBullish ? "hsl(var(--success))" : "hsl(var(--destructive))"} opacity={isActive ? 1 : 0.8} className="transition-all" />
                <text x={p.x} y={p.y - 14} textAnchor="middle" fontSize="10" fontWeight="700" fill="hsl(var(--foreground))">{p.label}</text>
              </g>
            );
          })}
        </svg>
      </div>
      {activeIdx !== null && (
        <div className="mt-3 bg-background border rounded-md p-3 text-sm animate-in fade-in">
          <span className="font-semibold text-gold">{points[activeIdx].label}:</span>{" "}
          <span className="text-muted-foreground">{descriptions[points[activeIdx].label]}</span>
        </div>
      )}
      <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><span className="h-2 w-6 bg-success rounded" /> Bullish</span>
        <span className="flex items-center gap-1"><span className="h-2 w-6 bg-destructive rounded border-dashed" /> Bearish Shift</span>
        <span className="flex items-center gap-1"><span className="h-2 w-6 bg-warning rounded" /> Break of Structure</span>
      </div>
    </div>
  );
}
