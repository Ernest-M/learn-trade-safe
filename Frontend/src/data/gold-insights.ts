export interface GoldPost {
  id: string;
  title: string;
  date: string;
  tag: "bullish" | "bearish" | "range";
  supportLevels: string[];
  resistanceLevels: string[];
  bias: string;
  watchFor: string[];
  content: string[];
}

export const goldPosts: GoldPost[] = [
  {
    id: "gold-2026-03-03",
    title: "Gold Testing $2,950 Resistance After Strong Rally",
    date: "2026-03-03",
    tag: "bullish",
    supportLevels: ["$2,910", "$2,880", "$2,850"],
    resistanceLevels: ["$2,950", "$2,980", "$3,000"],
    bias: "Bullish above $2,910. Look for pullbacks to support for buy entries.",
    watchFor: [
      "US ISM data release could add volatility",
      "Dollar weakness supporting gold's rally",
      "Watch for rejection at $2,950 for short-term pullback"
    ],
    content: [
      "Gold has been on a strong rally this week, pushing from $2,880 toward the $2,950 resistance zone. The move is primarily driven by a weakening US Dollar and safe-haven demand.",
      "The structure on H4 remains bullish — higher highs and higher lows. As long as $2,910 holds as support, the bias remains to the upside.",
      "Key risk: if $2,950 rejects strongly, we could see a pullback toward $2,910–$2,880 before the next attempt higher."
    ]
  },
  {
    id: "gold-2026-03-02",
    title: "Gold Consolidating in $2,870–$2,920 Range",
    date: "2026-03-02",
    tag: "range",
    supportLevels: ["$2,870", "$2,850", "$2,820"],
    resistanceLevels: ["$2,920", "$2,950", "$2,980"],
    bias: "Range-bound between $2,870–$2,920. Wait for a breakout or trade the range edges.",
    watchFor: [
      "Breakout above $2,920 targets $2,950+",
      "Break below $2,870 could trigger a drop to $2,850",
      "NFP on Friday may be the catalyst for the breakout"
    ],
    content: [
      "Gold spent the session consolidating in a tight range between $2,870 and $2,920. Volume was low as traders await key economic data later this week.",
      "Range strategies work well here: buy near $2,870 with stops below $2,850, sell near $2,920 with stops above $2,940.",
      "Be cautious with position sizes as a breakout could happen at any time, potentially triggering stops on range trades."
    ]
  },
  {
    id: "gold-2026-03-01",
    title: "Gold Pulls Back from $2,930 After Hot CPI Data",
    date: "2026-03-01",
    tag: "bearish",
    supportLevels: ["$2,880", "$2,860", "$2,830"],
    resistanceLevels: ["$2,910", "$2,930", "$2,950"],
    bias: "Short-term bearish after CPI spike. Watch $2,880 for potential bounce.",
    watchFor: [
      "Dollar strength from CPI pushing gold lower",
      "Potential reversal at $2,880 support",
      "Fed rate expectations shifting — hawkish tone"
    ],
    content: [
      "Hotter-than-expected CPI data sent gold tumbling from $2,930 to $2,885 in the NY session. The Dollar strengthened on expectations of higher-for-longer rates.",
      "The sell-off broke the short-term bullish structure. Gold now needs to hold $2,880 to prevent a deeper move toward $2,860.",
      "This is a reminder: never hold positions through major data releases. The CPI move happened in minutes and could have blown through stop losses."
    ]
  }
];
