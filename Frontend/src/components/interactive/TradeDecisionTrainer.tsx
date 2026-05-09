import { useState } from "react";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";

interface Scenario {
  title: string;
  description: string;
  context: string[];
  correctAnswer: "buy" | "sell" | "wait";
  explanation: string;
}

const scenarios: Scenario[] = [
  {
    title: "Gold at Support with Bullish Engulfing",
    description: "XAUUSD has pulled back to a daily support level at $2,320. On the 1H chart, you see a bullish engulfing candle forming at this level. The daily trend is bullish with higher highs and higher lows.",
    context: ["Daily bias: Bullish", "Price at: Support zone $2,320", "Candle: Bullish engulfing on 1H", "Session: London/NY overlap"],
    correctAnswer: "buy",
    explanation: "This is a textbook buy setup: price at support in a bullish trend with a confirmation candle during the most liquid session. Entry with SL below the support zone."
  },
  {
    title: "Choppy Range with No Clear Bias",
    description: "EUR/USD has been ranging between 1.0850 and 1.0920 for 3 days. Price is in the middle of the range at 1.0885. No clear daily bias. A small bullish candle just formed.",
    context: ["Daily bias: Unclear/ranging", "Price at: Middle of range", "Candle: Small, indecisive", "No key level nearby"],
    correctAnswer: "wait",
    explanation: "No clear bias, price in the middle of a range, no key level, and an indecisive candle. Multiple checklist items fail. Wait for price to reach the edges of the range or for a breakout."
  },
  {
    title: "Liquidity Sweep Above Previous High",
    description: "XAUUSD just spiked above a clear previous high by $3, immediately reversed with a strong bearish engulfing candle. The daily chart shows an extended uptrend that may be overextended.",
    context: ["Daily trend: Extended uptrend", "Event: Sweep above previous high", "Candle: Bearish engulfing", "Session: London open"],
    correctAnswer: "sell",
    explanation: "Classic liquidity sweep — price grabbed stops above the high and reversed with a strong bearish candle. In an extended trend with a sweep setup, this is a sell opportunity with SL above the sweep high."
  },
  {
    title: "News Event in 30 Minutes",
    description: "You see what looks like a great buy setup on XAUUSD. Price is at a strong support level with a bullish pin bar. However, US CPI data is being released in 30 minutes.",
    context: ["Setup: Looks valid", "Risk: Major news in 30 minutes", "Expected volatility: Very high", "Your experience: Beginner"],
    correctAnswer: "wait",
    explanation: "Even if the setup looks perfect, trading before major news events is extremely risky. CPI can cause $20-50+ moves in gold within seconds. Wait for the news to pass, then reassess."
  },
  {
    title: "Order Block Retest After MSS",
    description: "On the 4H chart, you identified a market structure shift from bearish to bullish. Price is now pulling back to the order block that caused the MSS. A bullish hammer is forming at the OB on the 15M chart.",
    context: ["Structure: MSS confirmed bullish", "Price at: Order block retest", "Candle: Bullish hammer on 15M", "RR: 1:3 available"],
    correctAnswer: "buy",
    explanation: "Perfect SMC setup: MSS confirmed the new bullish direction, price pulled back to the order block, and a confirmation candle is forming. With 1:3 RR, this is a high-probability buy."
  }
];

export default function TradeDecisionTrainer() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [answer, setAnswer] = useState<string | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const scenario = scenarios[currentScenario];
  const isCorrect = answer === scenario.correctAnswer;
  const isAnswered = answer !== null;

  const handleAnswer = (choice: "buy" | "sell" | "wait") => {
    if (isAnswered) return;
    setAnswer(choice);
    setScore(prev => ({
      correct: prev.correct + (choice === scenario.correctAnswer ? 1 : 0),
      total: prev.total + 1
    }));
  };

  const nextScenario = () => {
    setAnswer(null);
    setCurrentScenario((currentScenario + 1) % scenarios.length);
  };

  const reset = () => {
    setAnswer(null);
    setCurrentScenario(0);
    setScore({ correct: 0, total: 0 });
  };

  return (
    <div className="bg-muted/50 border rounded-lg p-4 my-6">
      <h4 className="font-display font-semibold text-sm mb-3 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-gold" /> Interactive: Trade Decision Trainer
      </h4>

      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-muted-foreground">Scenario {currentScenario + 1} of {scenarios.length}</span>
        <span className="text-xs font-medium">Score: {score.correct}/{score.total}</span>
      </div>

      <div className="bg-background border rounded-md p-4 mb-3">
        <h5 className="font-semibold text-sm mb-2">{scenario.title}</h5>
        <p className="text-sm text-muted-foreground mb-3">{scenario.description}</p>
        <div className="flex flex-wrap gap-2">
          {scenario.context.map((c, i) => (
            <span key={i} className="text-xs bg-muted px-2 py-1 rounded">{c}</span>
          ))}
        </div>
      </div>

      <p className="text-sm font-medium mb-2">What would you do?</p>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {(["buy", "sell", "wait"] as const).map(choice => {
          let btnClass = "px-3 py-2.5 text-sm font-medium rounded-md border transition-all ";
          if (isAnswered) {
            if (choice === scenario.correctAnswer) btnClass += "border-success bg-success/10 text-success";
            else if (choice === answer) btnClass += "border-destructive bg-destructive/10 text-destructive";
            else btnClass += "border-border text-muted-foreground opacity-50";
          } else {
            btnClass += "border-border hover:border-gold hover:bg-gold/5 cursor-pointer";
          }
          return (
            <button key={choice} onClick={() => handleAnswer(choice)} disabled={isAnswered} className={btnClass}>
              {choice === "buy" ? "📈 Buy" : choice === "sell" ? "📉 Sell" : "⏸ Wait"}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className={`rounded-md p-3 text-sm animate-in fade-in ${isCorrect ? "bg-success/10 border border-success/20" : "bg-destructive/10 border border-destructive/20"}`}>
          <div className="flex items-center gap-2 mb-1">
            {isCorrect ? <CheckCircle className="h-4 w-4 text-success" /> : <XCircle className="h-4 w-4 text-destructive" />}
            <span className="font-medium">{isCorrect ? "Correct!" : `Incorrect — the right answer is ${scenario.correctAnswer.toUpperCase()}`}</span>
          </div>
          <p className="text-muted-foreground text-xs">{scenario.explanation}</p>
        </div>
      )}

      {isAnswered && (
        <div className="flex gap-2 mt-3">
          <button onClick={nextScenario} className="px-3 py-1.5 text-xs font-medium rounded-md bg-gold text-gold-foreground hover:bg-gold/90 transition-colors">
            Next Scenario
          </button>
          <button onClick={reset} className="px-3 py-1.5 text-xs font-medium rounded-md border hover:bg-muted transition-colors flex items-center gap-1">
            <RotateCcw className="h-3 w-3" /> Reset
          </button>
        </div>
      )}
    </div>
  );
}
