import { useState } from "react";
import { RotateCcw, ChevronLeft, ChevronRight, Shuffle } from "lucide-react";

interface Card {
  term: string;
  definition: string;
  category: string;
}

const cards: Card[] = [
  { term: "Pip", definition: "The smallest price increment in forex. For most pairs, it's 0.0001. For XAUUSD, it's typically $0.01.", category: "Basics" },
  { term: "Spread", definition: "The difference between the Bid and Ask price. It's a cost you pay on every trade.", category: "Basics" },
  { term: "Leverage", definition: "A multiplier that lets you control larger positions. 1:100 means $100 controls $10,000.", category: "Mechanics" },
  { term: "Margin", definition: "The amount of capital required to open and maintain a leveraged position.", category: "Mechanics" },
  { term: "Stop Loss", definition: "An order that automatically closes your trade at a predetermined loss level to protect capital.", category: "Risk" },
  { term: "Take Profit", definition: "An order that automatically closes your trade at a predetermined profit target.", category: "Risk" },
  { term: "Risk-Reward Ratio", definition: "Comparison of potential loss to potential gain. 1:2 means risking $1 to make $2.", category: "Risk" },
  { term: "Support", definition: "A price zone where buying pressure tends to prevent further decline.", category: "Analysis" },
  { term: "Resistance", definition: "A price zone where selling pressure tends to prevent further advance.", category: "Analysis" },
  { term: "Order Block", definition: "A zone where institutional traders placed significant orders. The last opposing candle before a strong move.", category: "SMC" },
  { term: "Fair Value Gap", definition: "An imbalance between three candles where price moved too fast, leaving unfilled orders.", category: "SMC" },
  { term: "Liquidity Sweep", definition: "Price moving beyond a key level to trigger stops, then reversing. A smart money technique.", category: "SMC" },
  { term: "Market Structure Shift", definition: "A decisive break of the prevailing trend structure signaling potential reversal.", category: "SMC" },
  { term: "AMD", definition: "Accumulation, Manipulation, Distribution — the three phases of smart money's market cycle.", category: "SMC" },
  { term: "Bullish Engulfing", definition: "A large bullish candle that completely covers the previous bearish candle. Reversal signal at support.", category: "Candles" },
  { term: "Pin Bar", definition: "A candle with a small body and long wick showing rejection from a price level.", category: "Candles" },
  { term: "Break of Structure", definition: "When price breaks a previous significant swing high or low, indicating trend continuation.", category: "Analysis" },
  { term: "Slippage", definition: "The difference between expected and actual execution price, common during high volatility.", category: "Mechanics" },
  { term: "Position Sizing", definition: "Calculating lot size based on risk percentage and stop loss distance to manage risk.", category: "Risk" },
  { term: "Confluence", definition: "Multiple analysis tools agreeing on the same trade direction, increasing probability.", category: "Analysis" },
];

export default function Flashcards() {
  const [deck, setDeck] = useState(cards);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = deck[index];

  const next = () => { setFlipped(false); setIndex((index + 1) % deck.length); };
  const prev = () => { setFlipped(false); setIndex((index - 1 + deck.length) % deck.length); };
  const shuffle = () => {
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setIndex(0);
    setFlipped(false);
  };

  return (
    <div className="bg-muted/50 border rounded-lg p-4 my-6">
      <h4 className="font-display font-semibold text-sm mb-3 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-gold" /> Quick Recall Flashcards
      </h4>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-muted-foreground">{index + 1} of {deck.length}</span>
        <span className="text-xs bg-muted px-2 py-0.5 rounded">{card.category}</span>
      </div>

      <button
        onClick={() => setFlipped(!flipped)}
        className="w-full min-h-[160px] bg-background border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center transition-all hover:border-gold/50 hover:shadow-md cursor-pointer"
      >
        {!flipped ? (
          <>
            <span className="text-lg md:text-xl font-display font-bold text-center">{card.term}</span>
            <span className="text-xs text-muted-foreground mt-3">Click to reveal definition</span>
          </>
        ) : (
          <>
            <span className="text-xs font-medium text-gold mb-2">{card.term}</span>
            <span className="text-sm text-center text-muted-foreground leading-relaxed">{card.definition}</span>
          </>
        )}
      </button>

      <div className="flex items-center justify-between mt-3">
        <button onClick={prev} className="p-2 rounded-md border hover:bg-muted transition-colors">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex gap-2">
          <button onClick={shuffle} className="px-3 py-1.5 text-xs font-medium rounded-md border hover:bg-muted transition-colors flex items-center gap-1">
            <Shuffle className="h-3 w-3" /> Shuffle
          </button>
          <button onClick={() => { setIndex(0); setFlipped(false); }} className="px-3 py-1.5 text-xs font-medium rounded-md border hover:bg-muted transition-colors flex items-center gap-1">
            <RotateCcw className="h-3 w-3" /> Reset
          </button>
        </div>
        <button onClick={next} className="p-2 rounded-md border hover:bg-muted transition-colors">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
