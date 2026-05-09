import { useState } from "react";

interface Session {
  name: string;
  start: number;
  end: number;
  color: string;
  volatility: "Low" | "Medium" | "High" | "Very High";
  description: string;
}

const sessions: Session[] = [
  { name: "Sydney", start: 22, end: 7, color: "hsl(var(--muted-foreground))", volatility: "Low", description: "Quietest session. Tight ranges, wider spreads. Not ideal for most pairs." },
  { name: "Tokyo", start: 0, end: 9, color: "hsl(210 80% 60%)", volatility: "Low", description: "Low volatility for forex/gold. JPY pairs are most active. Good for range strategies." },
  { name: "London", start: 8, end: 17, color: "hsl(var(--success))", volatility: "High", description: "Highest volume session (35%). Tight spreads, clear trends. Best session for most traders." },
  { name: "New York", start: 13, end: 22, color: "hsl(var(--gold))", volatility: "High", description: "Second-largest session. US data releases create big moves. Excellent for XAUUSD." },
];

const hours = Array.from({ length: 24 }, (_, i) => i);

function isInSession(hour: number, session: Session) {
  if (session.start < session.end) {
    return hour >= session.start && hour < session.end;
  }
  return hour >= session.start || hour < session.end;
}

function getOverlap(hour: number) {
  const active = sessions.filter(s => isInSession(hour, s));
  if (active.length >= 2) {
    const names = active.map(s => s.name);
    if (names.includes("London") && names.includes("New York")) return { level: 4, label: "London/NY Overlap" };
    if (names.includes("Tokyo") && names.includes("London")) return { level: 3, label: "Tokyo/London Overlap" };
    return { level: 2, label: active.map(s => s.name).join(" / ") };
  }
  if (active.length === 1) return { level: 1, label: active[0].name };
  return { level: 0, label: "Quiet" };
}

export default function SessionHeatmap() {
  const [selectedHour, setSelectedHour] = useState<number | null>(null);
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);

  const hourInfo = selectedHour !== null ? getOverlap(selectedHour) : null;

  return (
    <div className="bg-muted/50 border rounded-lg p-4 my-6">
      <h4 className="font-display font-semibold text-sm mb-3 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-gold" /> Interactive: Session Heatmap (GMT)
      </h4>
      <p className="text-xs text-muted-foreground mb-4">Click on any hour to see session activity. Darker = more volatile.</p>

      {/* Heatmap grid */}
      <div className="grid grid-cols-12 md:grid-cols-24 gap-0.5 mb-4">
        {hours.map(h => {
          const info = getOverlap(h);
          const opacity = info.level === 0 ? 0.1 : info.level === 1 ? 0.3 : info.level === 2 ? 0.5 : info.level === 3 ? 0.7 : 0.9;
          const bgColor = info.level >= 3 ? "bg-gold" : info.level >= 1 ? "bg-success" : "bg-muted-foreground";
          return (
            <button
              key={h}
              onClick={() => setSelectedHour(selectedHour === h ? null : h)}
              className={`${bgColor} rounded-sm aspect-square flex items-center justify-center text-[9px] md:text-[10px] font-medium transition-all hover:scale-110 ${selectedHour === h ? "ring-2 ring-foreground" : ""}`}
              style={{ opacity }}
            >
              {h}
            </button>
          );
        })}
      </div>

      {/* Session rows */}
      <div className="space-y-2 mb-4">
        {sessions.map(s => (
          <button
            key={s.name}
            onClick={() => setSelectedSession(selectedSession?.name === s.name ? null : s)}
            className={`w-full flex items-center gap-3 p-2 rounded-md border text-left transition-colors hover:bg-background ${selectedSession?.name === s.name ? "border-gold bg-background" : "border-transparent"}`}
          >
            <div className="h-3 w-3 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
            <div className="flex-1 min-w-0">
              <span className="text-sm font-medium">{s.name}</span>
              <span className="text-xs text-muted-foreground ml-2">{s.start}:00 – {s.end}:00 GMT</span>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              s.volatility === "Very High" ? "bg-destructive/10 text-destructive" :
              s.volatility === "High" ? "bg-gold/10 text-gold" :
              s.volatility === "Medium" ? "bg-success/10 text-success" :
              "bg-muted text-muted-foreground"
            }`}>
              {s.volatility}
            </span>
          </button>
        ))}
      </div>

      {/* Info */}
      {selectedHour !== null && hourInfo && (
        <div className="bg-background border rounded-md p-3 text-sm animate-in fade-in">
          <span className="font-semibold">{selectedHour}:00 GMT — </span>
          <span className="text-gold">{hourInfo.label}</span>
          <span className="text-muted-foreground"> | Activity level: {"█".repeat(hourInfo.level)}{"░".repeat(4 - hourInfo.level)}</span>
        </div>
      )}
      {selectedSession && (
        <div className="bg-background border rounded-md p-3 text-sm animate-in fade-in mt-2">
          <span className="font-semibold">{selectedSession.name}: </span>
          <span className="text-muted-foreground">{selectedSession.description}</span>
        </div>
      )}
    </div>
  );
}
