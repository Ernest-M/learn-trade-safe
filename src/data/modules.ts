export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  summary: string[];
  content: string[];
  toolLink?: { label: string; path: string };
  quiz: QuizQuestion[];
}

export interface Module {
  id: number;
  title: string;
  description: string;
  icon: string;
  lessons: Lesson[];
}

export const modules: Module[] = [
  {
    id: 1,
    title: "Trading Basics",
    description: "Understand what forex is, how pairs work, and the basics of market mechanics.",
    icon: "BookOpen",
    lessons: [
      {
        id: "1-1",
        title: "What is Forex?",
        duration: "3 min read",
        summary: [
          "Forex is the global market for exchanging currencies",
          "It's the largest financial market, with $7+ trillion daily volume",
          "Currencies trade in pairs like EUR/USD",
          "Retail traders access it through brokers"
        ],
        content: [
          "Forex (Foreign Exchange) is the global marketplace where currencies are traded against each other. When you travel abroad and exchange money, you're participating in forex at a basic level.",
          "The forex market operates 24 hours a day, 5 days a week, making it the most liquid financial market in the world with over $7 trillion traded daily.",
          "Currencies always trade in pairs. For example, EUR/USD means you're trading the Euro against the US Dollar. If you 'buy' EUR/USD, you're buying Euros and selling Dollars simultaneously.",
          "Retail traders like you and me access this market through brokers who provide trading platforms. You don't need millions — many brokers let you start with as little as $10–$50.",
          "The key to forex is understanding that prices move based on supply and demand, economic data, central bank decisions, and global events."
        ],
        toolLink: { label: "Try the Risk Calculator", path: "/tools/risk-calculator" },
        quiz: [
          { question: "What does 'Forex' stand for?", options: ["Foreign Exchange", "Forward Export", "Financial Exchange", "Future Exchange"], correctIndex: 0, explanation: "Forex stands for Foreign Exchange — the global currency market." },
          { question: "How are currencies traded?", options: ["Individually", "In pairs", "In groups of 3", "Only against USD"], correctIndex: 1, explanation: "Currencies always trade in pairs, like EUR/USD or GBP/JPY." },
          { question: "What is the daily trading volume of forex?", options: ["$1 billion", "$100 billion", "$7+ trillion", "$500 million"], correctIndex: 2, explanation: "The forex market trades over $7 trillion per day." }
        ]
      },
      {
        id: "1-2",
        title: "What is XAUUSD?",
        duration: "3 min read",
        summary: [
          "XAUUSD is the symbol for gold priced in US dollars",
          "XAU is the chemical symbol for gold (from Latin 'Aurum')",
          "Gold is traded like a currency pair on forex platforms",
          "It's popular among small account traders for its volatility"
        ],
        content: [
          "XAUUSD is the trading symbol for gold priced in US dollars. XAU comes from gold's chemical symbol (Au, from Latin 'Aurum'), and USD is the US Dollar.",
          "On forex platforms, gold trades just like a currency pair. When you 'buy' XAUUSD, you're betting that gold's price in dollars will rise.",
          "Gold is one of the most popular instruments among retail traders because of its volatility — it can move $20–$50+ per day, creating trading opportunities.",
          "However, this volatility is a double-edged sword. For small accounts, gold can be very risky if you don't manage your position size and stop losses carefully.",
          "Throughout this academy, we'll focus heavily on XAUUSD because it's what many small account traders are drawn to — and where most blow their accounts."
        ],
        toolLink: { label: "Try the Lot Size Calculator", path: "/tools/lot-size-calculator" },
        quiz: [
          { question: "What does XAU stand for?", options: ["Extra Active Unit", "Gold (Aurum)", "Exchange Active Unit", "Extended Asset Unit"], correctIndex: 1, explanation: "XAU comes from gold's Latin name 'Aurum'." },
          { question: "Why is XAUUSD popular among traders?", options: ["Low volatility", "High volatility", "No risk", "Fixed price"], correctIndex: 1, explanation: "Gold's high volatility creates trading opportunities but also higher risk." },
          { question: "How is gold traded on forex platforms?", options: ["As a stock", "As a currency pair", "As a bond", "As a commodity futures only"], correctIndex: 1, explanation: "Gold trades like a currency pair (XAUUSD) on forex platforms." }
        ]
      },
      {
        id: "1-3",
        title: "Bid vs Ask (Spread)",
        duration: "3 min read",
        summary: [
          "Bid is the price you sell at, Ask is the price you buy at",
          "The spread is the difference between Bid and Ask",
          "Spread is a cost you pay on every trade",
          "Smaller spreads are better for traders"
        ],
        content: [
          "Every instrument has two prices: the Bid (sell price) and the Ask (buy price). The Ask is always slightly higher than the Bid.",
          "The difference between these two prices is called the spread. Think of it like the markup at a currency exchange booth — they buy dollars from you at one price and sell at a slightly higher one.",
          "The spread is essentially a cost you pay on every trade. When you open a trade, you start slightly negative because of the spread. Your trade needs to move in your favor by at least the spread amount before you break even.",
          "For XAUUSD, typical spreads range from 15 to 50 cents (or 'points'). During high volatility events or off-hours, spreads can widen significantly.",
          "For small accounts, wide spreads can eat into your profits quickly. Always check the spread before trading and prefer trading during London or New York sessions when spreads are typically tighter."
        ],
        quiz: [
          { question: "What is the 'spread' in trading?", options: ["Profit margin", "Difference between Bid and Ask", "Trading fee", "Tax on trades"], correctIndex: 1, explanation: "The spread is the difference between the Bid (sell) and Ask (buy) price." },
          { question: "When you buy, which price do you pay?", options: ["Bid price", "Ask price", "Average price", "Lowest price"], correctIndex: 1, explanation: "When buying, you pay the Ask price (the higher one)." },
          { question: "When are spreads typically tightest?", options: ["Weekend", "Asian session", "London/NY sessions", "Midnight"], correctIndex: 2, explanation: "Spreads are usually tightest during the most liquid sessions: London and New York." }
        ]
      },
      {
        id: "1-4",
        title: "How Brokers Execute Trades",
        duration: "3 min read",
        summary: [
          "Brokers connect you to the market",
          "Market makers vs ECN/STP brokers",
          "Execution speed matters for your results",
          "Always use a regulated broker"
        ],
        content: [
          "A broker is the intermediary between you and the forex market. Without a broker, you can't access the market as a retail trader.",
          "There are two main types: Market Makers, who take the other side of your trade internally, and ECN/STP brokers, who pass your orders directly to liquidity providers.",
          "Market makers can sometimes have a conflict of interest since they profit when you lose. ECN brokers typically offer more transparent pricing but may charge commissions.",
          "Execution speed matters — in fast-moving markets like gold, a slow execution can mean you enter at a worse price than expected (slippage).",
          "The most important rule: ONLY use regulated brokers. Check for regulation from bodies like FCA (UK), CySEC (EU), or ASIC (Australia). Unregulated brokers can refuse withdrawals or manipulate prices."
        ],
        quiz: [
          { question: "What is a broker's role?", options: ["They lend you money", "They connect you to the market", "They guarantee profits", "They set currency values"], correctIndex: 1, explanation: "Brokers are intermediaries that give you access to trade in the forex market." },
          { question: "Which broker type passes orders directly to the market?", options: ["Market Maker", "ECN/STP", "Both", "Neither"], correctIndex: 1, explanation: "ECN/STP brokers route your orders to liquidity providers for more transparent pricing." },
          { question: "Why is regulation important?", options: ["Lower spreads", "Guaranteed profits", "Protection against fraud", "Faster execution"], correctIndex: 2, explanation: "Regulated brokers are held to standards that protect your funds and ensure fair dealing." }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Market Basics",
    description: "Learn about price levels, liquidity, market sessions, and what moves gold.",
    icon: "BarChart3",
    lessons: [
      {
        id: "2-1",
        title: "Support & Resistance",
        duration: "3 min read",
        summary: [
          "Support is a price level where buying pressure is strong",
          "Resistance is where selling pressure is strong",
          "These levels help identify potential trade entries and exits",
          "They can flip — broken support becomes resistance and vice versa"
        ],
        content: [
          "Support and resistance are the most fundamental concepts in technical analysis. They represent price levels where the market has historically shown buying or selling pressure.",
          "Support is like a floor — a price level where buyers step in and prevent the price from falling further. When gold drops to $1,900 three times and bounces each time, $1,900 is a support level.",
          "Resistance is like a ceiling — where sellers push the price back down. If gold keeps failing to break above $2,000, that's a resistance level.",
          "The key insight: when support breaks, it often becomes resistance, and vice versa. This 'flip' is a powerful trading concept.",
          "For your trades, support and resistance help you place stop losses (below support for buys) and take profits (near resistance for buys). They're not exact prices but rather zones."
        ],
        toolLink: { label: "Calculate your position size", path: "/tools/lot-size-calculator" },
        quiz: [
          { question: "What is a support level?", options: ["Where price always stops", "Where buying pressure tends to be strong", "A guaranteed reversal point", "The lowest price ever"], correctIndex: 1, explanation: "Support is a zone where buying interest has historically been strong enough to prevent further decline." },
          { question: "What happens when support breaks?", options: ["Nothing", "It disappears", "It can become resistance", "Price always recovers"], correctIndex: 2, explanation: "Broken support levels often flip and become resistance — a key trading concept." },
          { question: "Are S/R levels exact prices?", options: ["Yes, exact to the cent", "No, they are zones", "Only for gold", "Only on daily charts"], correctIndex: 1, explanation: "Support and resistance are zones, not exact price points. Price may briefly penetrate before reacting." }
        ]
      },
      {
        id: "2-2",
        title: "Liquidity (Simple Explanation)",
        duration: "2 min read",
        summary: [
          "Liquidity means how easily you can buy or sell without moving the price",
          "High liquidity = tight spreads, fast execution",
          "Low liquidity = wide spreads, slippage risk",
          "Liquidity pools sit above highs and below lows"
        ],
        content: [
          "Liquidity is simply how many buyers and sellers are active in the market at any given time. More participants = more liquidity.",
          "When liquidity is high, you get tight spreads and fast execution because there's always someone ready to take the other side of your trade.",
          "When liquidity is low (like during the Asian session for gold, or around holidays), spreads widen and you may experience slippage — getting filled at a worse price than expected.",
          "An important concept: stop losses create liquidity pools. If many traders have stops below a support level, the market often 'hunts' those stops before reversing. This is why you should place stops strategically, not at obvious levels.",
          "For small accounts, always trade during high-liquidity sessions to minimize costs and slippage."
        ],
        quiz: [
          { question: "What does high liquidity mean?", options: ["More risk", "Many buyers and sellers active", "Higher prices", "Wider spreads"], correctIndex: 1, explanation: "High liquidity means many participants, leading to tight spreads and fast execution." },
          { question: "When is liquidity typically low for gold?", options: ["London session", "New York session", "Asian session", "All sessions equally"], correctIndex: 2, explanation: "Gold typically has lower liquidity during the Asian session." },
          { question: "What creates liquidity pools?", options: ["Central banks only", "Clusters of stop loss orders", "Economic data", "Broker decisions"], correctIndex: 1, explanation: "Stop losses grouped near key levels create pools of pending orders that the market often targets." }
        ]
      },
      {
        id: "2-3",
        title: "Market Sessions",
        duration: "3 min read",
        summary: [
          "Three main sessions: Asia, London, New York",
          "London and New York have the most volume",
          "Session overlaps create the highest volatility",
          "Gold is most active during London and NY sessions"
        ],
        content: [
          "The forex market operates 24/5, but it's divided into three main sessions: Asian (Tokyo), London (European), and New York.",
          "The Asian session (00:00–09:00 GMT) is typically the quietest for forex and gold. Ranges are smaller, and spreads can be wider.",
          "The London session (08:00–17:00 GMT) is when European markets open and volume picks up significantly. Many of gold's daily moves start here.",
          "The New York session (13:00–22:00 GMT) brings US traders and economic data. The London/NY overlap (13:00–17:00 GMT) is often the most volatile period.",
          "For small account traders: focus on London and the London/NY overlap. These sessions offer the best liquidity (tighter spreads) and clearest price movements."
        ],
        quiz: [
          { question: "Which session overlap is most volatile?", options: ["Asia/London", "London/New York", "New York/Asia", "All equal"], correctIndex: 1, explanation: "The London/New York overlap (13:00–17:00 GMT) combines the two most liquid sessions." },
          { question: "When is the Asian session (GMT)?", options: ["00:00–09:00", "08:00–17:00", "13:00–22:00", "17:00–00:00"], correctIndex: 0, explanation: "The Asian session runs roughly from midnight to 9 AM GMT." },
          { question: "Why should small accounts prefer London session?", options: ["Lower leverage", "Tighter spreads & clearer moves", "Less risk", "Markets are closed"], correctIndex: 1, explanation: "London session offers better liquidity which means tighter spreads and more efficient execution." }
        ]
      },
      {
        id: "2-4",
        title: "Why Gold Moves",
        duration: "3 min read",
        summary: [
          "Gold is a safe-haven asset — it rises during uncertainty",
          "US Dollar strength inversely affects gold",
          "Interest rates, inflation, and geopolitics drive gold",
          "News events can cause sudden, large moves"
        ],
        content: [
          "Gold is considered a 'safe-haven' asset. When the world feels uncertain — wars, recessions, market crashes — investors buy gold, pushing its price up.",
          "There's a strong inverse relationship between gold and the US Dollar. When the dollar weakens, gold typically rises, and vice versa.",
          "Key drivers of gold price: interest rates (higher rates = stronger dollar = lower gold), inflation expectations (higher inflation = higher gold), and geopolitical events.",
          "Major news events like Fed meetings, US jobs data (NFP), and CPI releases can cause gold to move $20–$50+ in minutes. Never hold trades through major news unless you understand the risk.",
          "For beginners: don't try to predict news outcomes. Instead, wait for the market to react, let the dust settle, and then look for clear setups."
        ],
        quiz: [
          { question: "What kind of asset is gold considered?", options: ["Growth asset", "Safe-haven asset", "Speculative only", "Fixed income"], correctIndex: 1, explanation: "Gold is a traditional safe-haven that investors buy during times of uncertainty." },
          { question: "How does a stronger US Dollar affect gold?", options: ["Gold rises", "Gold falls", "No effect", "Gold becomes more volatile"], correctIndex: 1, explanation: "Gold and the US Dollar have an inverse relationship — stronger dollar typically means lower gold." },
          { question: "Should beginners trade during major news?", options: ["Yes, for big profits", "No, wait for the reaction to settle", "Only on Fridays", "Only with leverage"], correctIndex: 1, explanation: "Beginners should avoid trading during major news and wait for clear setups after the market reacts." }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Risk Management",
    description: "The most critical module. Learn to protect your capital before aiming for profits.",
    icon: "Shield",
    lessons: [
      {
        id: "3-1",
        title: "Leverage Explained",
        duration: "3 min read",
        summary: [
          "Leverage lets you control larger positions with less capital",
          "1:100 leverage means $100 controls $10,000",
          "Leverage amplifies both profits AND losses",
          "High leverage is the #1 account killer for beginners"
        ],
        content: [
          "Leverage is like a loan from your broker that lets you control a larger position than your actual capital allows. With 1:100 leverage, your $100 controls $10,000 worth of currency.",
          "This sounds great — you can make bigger profits! But leverage works both ways. If a $10,000 position moves 1% against you, that's a $100 loss — your entire account with $100 balance.",
          "This is exactly why small accounts blow up. Traders use maximum leverage on every trade, and one bad move wipes them out.",
          "The smart approach: ignore the maximum leverage your broker offers. Instead, focus on position sizing. Use the lot size calculator to determine the right trade size based on your risk tolerance, not your maximum leverage.",
          "Remember: leverage doesn't change your risk per pip — it changes how much margin you need. Your real risk is determined by your lot size and stop loss distance."
        ],
        toolLink: { label: "Try the Margin Calculator", path: "/tools/margin-calculator" },
        quiz: [
          { question: "What does 1:100 leverage mean?", options: ["$1 profit per $100 invested", "$100 controls $10,000", "100% guaranteed return", "$100 minimum deposit"], correctIndex: 1, explanation: "1:100 leverage means every $1 of your capital controls $100 in the market." },
          { question: "What does leverage amplify?", options: ["Only profits", "Only losses", "Both profits and losses", "Neither"], correctIndex: 2, explanation: "Leverage amplifies both gains and losses equally — it's a double-edged sword." },
          { question: "What determines your real risk?", options: ["Leverage ratio", "Lot size and stop loss", "Broker type", "Account currency"], correctIndex: 1, explanation: "Your actual risk per trade is determined by position size (lot size) and stop loss distance, not leverage." }
        ]
      },
      {
        id: "3-2",
        title: "Margin Explained",
        duration: "3 min read",
        summary: [
          "Margin is the money set aside to keep a trade open",
          "Free margin is what you have left to open new trades",
          "Margin call happens when your losses approach your deposited funds",
          "Always check margin requirements before opening trades"
        ],
        content: [
          "Margin is the amount of money your broker 'locks up' as collateral when you open a trade. Think of it as a security deposit.",
          "If you buy 0.01 lots of XAUUSD at $2,000 with 1:100 leverage, the notional value is $2,000. Your required margin would be $2,000 / 100 = $20.",
          "Free margin is the money remaining in your account after margin is allocated. If you have $100 and $20 is used as margin, your free margin is $80.",
          "A margin call occurs when your losses eat into your margin. If your equity drops to or below the margin requirement, your broker may close your positions automatically — this is called a 'stop out.'",
          "For small accounts, margin management is critical. A $50 account trading 0.05 lots of gold might use $50+ in margin, leaving zero room for the trade to breathe. This is a recipe for a stop out."
        ],
        toolLink: { label: "Try the Margin Calculator", path: "/tools/margin-calculator" },
        quiz: [
          { question: "What is margin in trading?", options: ["Your profit", "Collateral held by the broker", "A trading fee", "Your total balance"], correctIndex: 1, explanation: "Margin is the portion of your account set aside as collateral to keep a trade open." },
          { question: "What triggers a margin call?", options: ["Making a profit", "Equity dropping to margin requirement level", "Closing a trade", "Opening a demo account"], correctIndex: 1, explanation: "A margin call happens when your account equity falls to or below the required margin level." },
          { question: "What is 'free margin'?", options: ["Money locked in trades", "Available funds for new trades", "Bonus money", "Commission refund"], correctIndex: 1, explanation: "Free margin is the equity remaining after subtracting used margin — available for new trades." }
        ]
      },
      {
        id: "3-3",
        title: "Stop Loss & Take Profit",
        duration: "3 min read",
        summary: [
          "Stop loss automatically closes a losing trade at a set level",
          "Take profit automatically closes a winning trade at a set level",
          "Always use a stop loss — no exceptions",
          "Aim for at least 1:2 risk-to-reward ratio"
        ],
        content: [
          "A stop loss (SL) is a pending order that automatically closes your trade if the price moves against you by a set amount. It's your safety net.",
          "A take profit (TP) is a pending order that closes your trade when the price reaches your target profit level.",
          "Rule #1 for all traders, especially beginners: NEVER trade without a stop loss. The market can move against you faster than you can react. A stop loss protects you from catastrophic losses.",
          "Risk-to-reward ratio: If your stop loss risks $10, your take profit should aim for at least $20 (1:2 ratio). This means you only need to win 40% of your trades to be profitable.",
          "Where to place your SL: Below support for buy trades, above resistance for sell trades. Don't place it too tight (you'll get stopped out by normal fluctuations) or too wide (excessive risk)."
        ],
        toolLink: { label: "Calculate your lot size", path: "/tools/lot-size-calculator" },
        quiz: [
          { question: "Should you ever trade without a stop loss?", options: ["Yes, if you're confident", "No, never", "Only on demo", "Only with small lots"], correctIndex: 1, explanation: "Never trade without a stop loss. The market can move against you faster than you can react." },
          { question: "What is a 1:2 risk-to-reward ratio?", options: ["Risk $2 to make $1", "Risk $1 to make $2", "Risk $1 to make $1", "Risk nothing"], correctIndex: 1, explanation: "1:2 RRR means for every $1 you risk, you aim to make $2 in profit." },
          { question: "Where should you place a stop loss for a buy trade?", options: ["Above resistance", "Below support", "At the entry price", "Random level"], correctIndex: 1, explanation: "For buy trades, place your stop loss below the nearest support level." }
        ]
      },
      {
        id: "3-4",
        title: "Position Sizing Basics",
        duration: "3 min read",
        summary: [
          "Position sizing determines how many lots to trade",
          "Never risk more than 1–2% of your account per trade",
          "Use the lot size calculator for every trade",
          "Smaller positions = longer account survival"
        ],
        content: [
          "Position sizing is arguably the most important skill in trading. It determines how much you trade relative to your account size.",
          "The golden rule: never risk more than 1–2% of your account on a single trade. With a $100 account, that's $1–$2 maximum risk per trade.",
          "Here's the formula: Lot Size = Risk Amount / (Stop Loss in Pips × Pip Value). For example, if you risk $1 with a 50-pip stop loss and a pip value of $0.10 per 0.01 lot, your lot size would be 0.02 lots.",
          "For small accounts ($20–$100), you'll often find that 0.01 lots is the appropriate position size. This might seem boring, but it keeps you in the game long enough to learn.",
          "The traders who survive long enough to become profitable are the ones who size their positions correctly. Overleveraging is the fastest way to blow an account."
        ],
        toolLink: { label: "Try the Lot Size Calculator", path: "/tools/lot-size-calculator" },
        quiz: [
          { question: "What percentage should you risk per trade?", options: ["5–10%", "1–2%", "25%", "50%"], correctIndex: 1, explanation: "The widely accepted rule is to risk no more than 1–2% of your account on any single trade." },
          { question: "What lot size is common for small accounts?", options: ["1.0 lots", "0.1 lots", "0.01 lots", "10 lots"], correctIndex: 2, explanation: "Small accounts ($20–$100) typically trade 0.01 lots to maintain proper risk management." },
          { question: "What is the biggest account killer?", options: ["Wrong direction", "Overleveraging / bad position sizing", "Slow internet", "Wrong broker"], correctIndex: 1, explanation: "Overleveraging (too large positions relative to account size) is the #1 reason small accounts get wiped out." }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Your First Trade",
    description: "From demo account to your first real trade — step by step, safely.",
    icon: "Target",
    lessons: [
      {
        id: "4-1",
        title: "Open a Demo Account",
        duration: "2 min read",
        summary: [
          "A demo account uses virtual money for practice",
          "It simulates real market conditions",
          "Practice for at least 2–4 weeks before going live",
          "Treat demo like real money for best results"
        ],
        content: [
          "A demo account is a practice trading account with virtual money. It uses real market prices but fake funds, so you can learn without financial risk.",
          "Every beginner should start with a demo account. Period. No exceptions. It's like learning to drive in a parking lot before hitting the highway.",
          "When setting up your demo, choose realistic settings: start with a $100–$500 demo balance (not $100,000) so the numbers feel real and relevant to your future live account.",
          "Spend at least 2–4 weeks on demo. Focus on: placing trades correctly, using stop losses and take profits, calculating proper lot sizes, and following a simple plan.",
          "Important: treat your demo like real money. If you gamble and overtrade on demo, you'll do the same with real money. Build good habits now."
        ],
        quiz: [
          { question: "How long should you practice on demo?", options: ["1 day", "At least 2–4 weeks", "1 hour", "Demo isn't necessary"], correctIndex: 1, explanation: "Spend at least 2–4 weeks on demo to build habits and confidence before risking real money." },
          { question: "What demo balance should you choose?", options: ["$1,000,000", "$100–$500 (realistic)", "$1", "As high as possible"], correctIndex: 1, explanation: "Use a realistic demo balance similar to what you plan to start with, so the numbers feel real." },
          { question: "Should you treat demo like real money?", options: ["No, it's just practice", "Yes, to build proper habits", "Only sometimes", "No, go wild"], correctIndex: 1, explanation: "Treating demo like real money helps build the discipline you'll need when trading live." }
        ]
      },
      {
        id: "4-2",
        title: "Install MT5 and Login",
        duration: "2 min read",
        summary: [
          "MT5 (MetaTrader 5) is the most popular trading platform",
          "Download it from your broker or the official website",
          "Login with the credentials from your broker",
          "Familiarize yourself with the interface before trading"
        ],
        content: [
          "MetaTrader 5 (MT5) is the industry-standard trading platform used by most forex and gold traders. It's free and available on desktop, web, and mobile.",
          "Download MT5 from your broker's website or from the official MetaTrader site. Your broker will provide you with login credentials (server name, login ID, and password).",
          "When you first open MT5, you'll see: the Market Watch panel (instrument prices), the Chart window (price charts), and the Terminal panel (your trades, history, and account info).",
          "Before your first trade, spend 15–30 minutes exploring: switch between timeframes (M15, H1, H4, D1), add XAUUSD to your Market Watch, and try the drawing tools.",
          "Pro tip: Start with the H1 (1-hour) or H4 (4-hour) timeframes. Lower timeframes like M1 or M5 are noisy and can mislead beginners."
        ],
        quiz: [
          { question: "What is MT5?", options: ["A broker", "A trading platform", "A trading strategy", "A currency pair"], correctIndex: 1, explanation: "MetaTrader 5 is a trading platform — the software you use to place and manage trades." },
          { question: "What timeframe should beginners start with?", options: ["M1 (1-minute)", "H1 or H4 (1-hour / 4-hour)", "Monthly", "Tick chart"], correctIndex: 1, explanation: "H1 and H4 timeframes provide cleaner price action with less noise, ideal for beginners." },
          { question: "Where do you get MT5 login credentials?", options: ["You create them yourself", "From your broker", "From MetaTrader directly", "No credentials needed"], correctIndex: 1, explanation: "Your broker provides the server name, login ID, and password for your MT5 account." }
        ]
      },
      {
        id: "4-3",
        title: "Place a Demo Trade on XAUUSD",
        duration: "3 min read",
        summary: [
          "Find XAUUSD in Market Watch and open a chart",
          "Analyze: identify support/resistance on H1/H4",
          "Calculate lot size using the calculator",
          "Place trade with stop loss and take profit"
        ],
        content: [
          "Time for your first trade! Remember: this is on demo, so take your time and focus on the process, not the profit.",
          "Step 1: In MT5, find XAUUSD in Market Watch. Right-click → Chart Window to open the chart. Switch to H1 or H4 timeframe.",
          "Step 2: Identify the nearest support and resistance levels. Draw horizontal lines at these levels. Decide: is the price near support (potential buy) or near resistance (potential sell)?",
          "Step 3: Calculate your lot size using our calculator. Example: $100 account, 1% risk = $1 risk. If your stop loss is 50 pips, and pip value is $0.10/pip for 0.01 lots, you'd trade 0.02 lots.",
          "Step 4: Place your trade. Click 'New Order', select XAUUSD, enter your lot size, set your Stop Loss and Take Profit levels, and click Buy or Sell. Congratulations — you've placed your first trade!"
        ],
        toolLink: { label: "Calculate your lot size first", path: "/tools/lot-size-calculator" },
        quiz: [
          { question: "What should you do before clicking Buy or Sell?", options: ["Nothing, just click", "Set stop loss and take profit", "Pray", "Increase leverage"], correctIndex: 1, explanation: "Always set your stop loss and take profit BEFORE executing the trade." },
          { question: "What's the first step?", options: ["Buy immediately", "Analyze the chart for S/R", "Close MT5", "Change leverage"], correctIndex: 1, explanation: "Always analyze the chart first — identify support, resistance, and trend before trading." },
          { question: "How should you feel about demo results?", options: ["Focus on process, not profit", "Must make money or quit", "Demo doesn't matter", "Only profit counts"], correctIndex: 0, explanation: "On demo, focus on building good habits and process — not on the P/L number." }
        ]
      },
      {
        id: "4-4",
        title: "Set SL/TP and Review Results",
        duration: "2 min read",
        summary: [
          "Always set SL before or immediately after entering",
          "Review every trade — win or lose",
          "Keep a simple trade journal",
          "Look for patterns in your trading behavior"
        ],
        content: [
          "After placing a trade, verify your stop loss and take profit are correctly set. In MT5, you can modify them by right-clicking the trade in the Terminal → Modify Order.",
          "Once your trade closes (either hitting SL or TP), it's time to review. This is where real learning happens.",
          "Start a simple trade journal. For each trade, record: Date/time, instrument, direction (buy/sell), entry price, SL, TP, lot size, result, and one sentence about why you took the trade.",
          "After 10–20 trades, look for patterns: Are you consistently getting stopped out? Maybe your SL is too tight. Are you winning but small amounts? Maybe your TP is too close.",
          "The review process separates traders who improve from those who repeat the same mistakes. Make it a habit."
        ],
        quiz: [
          { question: "What should you do after every trade?", options: ["Celebrate or cry", "Review and journal it", "Immediately take another trade", "Change strategy"], correctIndex: 1, explanation: "Reviewing and journaling every trade is how you learn and improve over time." },
          { question: "What should you record in a trade journal?", options: ["Only winning trades", "Entry, SL, TP, lot size, reason, result", "Just the profit/loss", "Nothing"], correctIndex: 1, explanation: "Record all details including your reasoning so you can identify patterns and improve." },
          { question: "After how many trades should you look for patterns?", options: ["1", "10–20", "1000", "Never"], correctIndex: 1, explanation: "After 10–20 trades, you'll have enough data to spot patterns in your trading behavior." }
        ]
      },
      {
        id: "4-5",
        title: "Move to Your First Real Trade",
        duration: "3 min read",
        summary: [
          "Only go live after consistent demo results",
          "Start with the minimum deposit you can afford to lose",
          "Use the same strategy and risk rules from demo",
          "Expect emotions to be stronger with real money"
        ],
        content: [
          "Before going live, ask yourself: Have I been consistently following my plan on demo for at least 2 weeks? Can I accept losing this money? Do I have a written set of rules?",
          "If yes to all three, you're ready. Start with the minimum amount you're comfortable losing — typically $20–$100 for a small account approach.",
          "Critical rule: use the exact same strategy, lot sizes, and risk rules from your demo. The only difference should be that the money is real.",
          "Your emotions will be much stronger with real money. Fear and greed will try to make you: move your stop loss, close winning trades too early, or revenge trade after a loss. Be aware of these urges.",
          "Start with 1 trade per day maximum. Focus on quality over quantity. One well-planned trade is worth more than ten impulsive ones."
        ],
        quiz: [
          { question: "When should you go live?", options: ["Immediately", "After consistent demo results for 2+ weeks", "When you feel lucky", "After watching 1 YouTube video"], correctIndex: 1, explanation: "Only go live after demonstrating consistent, rule-based trading on demo for at least 2 weeks." },
          { question: "How should your live trading differ from demo?", options: ["Use more leverage", "It should follow the same rules", "Take bigger risks", "Trade more frequently"], correctIndex: 1, explanation: "Your live trading should follow the exact same rules and strategy you developed on demo." },
          { question: "How many trades per day for beginners?", options: ["As many as possible", "Maximum 1", "At least 10", "50+"], correctIndex: 1, explanation: "Beginners should focus on quality — one well-planned trade per day maximum." }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Gold Trading Basics",
    description: "Special focus on XAUUSD — the instrument most small account traders gravitate toward.",
    icon: "Gem",
    lessons: [
      {
        id: "5-1",
        title: "Why Gold is Volatile",
        duration: "3 min read",
        summary: [
          "Gold moves $20–$50+ per day on average",
          "It's driven by macro factors: USD, rates, geopolitics",
          "Volatility creates opportunity but also amplifies risk",
          "Small accounts need extra caution with gold"
        ],
        content: [
          "Gold (XAUUSD) is one of the most volatile instruments available to retail traders. Daily ranges of $20–$50+ are common, and during major events, gold can move $100+ in a single day.",
          "This volatility is driven by gold's role as a safe-haven asset, its inverse relationship with the US Dollar, and its sensitivity to interest rates and geopolitical events.",
          "For traders, volatility means opportunity — bigger moves mean bigger potential profits. But the flip side is equally true: bigger moves mean bigger potential losses.",
          "For small accounts, gold's volatility is particularly dangerous. A $30 move against you with 0.1 lots means a $300 loss — impossible to survive with a $100 account.",
          "The key is to respect gold's volatility by using appropriately small position sizes and wider stop losses. Don't fight the market; trade within your means."
        ],
        toolLink: { label: "Size your gold positions correctly", path: "/tools/lot-size-calculator" },
        quiz: [
          { question: "What is gold's typical daily range?", options: ["$1–$2", "$20–$50+", "$500–$1000", "It doesn't move"], correctIndex: 1, explanation: "Gold typically moves $20–$50+ per day, with even larger moves during major events." },
          { question: "Why is gold volatile?", options: ["Low trading volume", "Safe-haven status & macro sensitivity", "It's manipulated", "Random chance"], correctIndex: 1, explanation: "Gold's volatility comes from its safe-haven role and sensitivity to USD, rates, and geopolitics." },
          { question: "How should small accounts handle gold's volatility?", options: ["Use maximum leverage", "Use small positions & wider stops", "Avoid gold entirely", "Only trade on weekends"], correctIndex: 1, explanation: "Small accounts should use appropriately small position sizes and wider stop losses to survive gold's volatility." }
        ]
      },
      {
        id: "5-2",
        title: "Common Gold Traps",
        duration: "3 min read",
        summary: [
          "Wide spreads during off-hours can eat profits",
          "Stop hunts near round numbers are common",
          "News spikes can trigger slippage beyond your stop",
          "FOMO after big moves leads to chasing"
        ],
        content: [
          "Trap #1: Trading during wide spread periods. Gold spreads can widen to 50+ points during the Asian session or right before major news. This instantly puts you deep in the red.",
          "Trap #2: Placing stops at obvious levels. Round numbers like $2,000, $1,950, etc., attract clusters of stop losses. The market often 'hunts' these stops before reversing. Place your stops slightly beyond these obvious levels.",
          "Trap #3: Holding through news. Major economic releases (NFP, CPI, Fed decisions) can cause gold to spike $20+ in seconds. Slippage during these events can blow through your stop loss.",
          "Trap #4: FOMO (Fear Of Missing Out). When gold makes a big move, the urge to jump in is overwhelming. But chasing moves after they've happened usually means buying high and selling low.",
          "Trap #5: Revenge trading. After a loss, the impulse to immediately 'win it back' leads to larger positions and emotional decisions. Walk away after a loss. Come back with a clear head."
        ],
        quiz: [
          { question: "What happens to gold spreads during Asian session?", options: ["They tighten", "They widen significantly", "No change", "Spreads disappear"], correctIndex: 1, explanation: "Gold spreads often widen during the Asian session due to lower liquidity." },
          { question: "What is a 'stop hunt'?", options: ["Searching for best stop level", "Market targeting clusters of stop losses", "A trading strategy", "Broker manipulation only"], correctIndex: 1, explanation: "Stop hunts occur when price moves to trigger clusters of stops near obvious levels before reversing." },
          { question: "What should you do after a loss?", options: ["Trade bigger to recover", "Walk away and come back later", "Double down", "Switch to crypto"], correctIndex: 1, explanation: "After a loss, walk away and return with a clear head. Revenge trading leads to bigger losses." }
        ]
      },
      {
        id: "5-3",
        title: "Simple Structure Approach",
        duration: "3 min read",
        summary: [
          "Identify if gold is trending or ranging",
          "In trends: trade pullbacks in the direction of the trend",
          "In ranges: buy near support, sell near resistance",
          "Use H4 or Daily chart for structure, H1 for entries"
        ],
        content: [
          "Keeping your approach simple is key for beginners. The market does two things: it trends (makes higher highs/lows or lower highs/lows) or it ranges (bounces between support and resistance).",
          "Step 1: Zoom out to the H4 or Daily chart. Is gold making higher highs and higher lows (uptrend)? Lower highs and lower lows (downtrend)? Or bouncing between two levels (range)?",
          "Step 2: In an uptrend, look for pullbacks to support levels and buy. In a downtrend, look for rallies to resistance and sell. In a range, buy near support and sell near resistance.",
          "Step 3: Drop to H1 for your entry. Look for price action confirmation — a rejection candle (pin bar) or a strong move away from your level. Don't just buy/sell blindly at a level.",
          "This is the entire system. It's not fancy, but it works. The key is patience — wait for the right setup instead of forcing trades."
        ],
        quiz: [
          { question: "What are the two main market conditions?", options: ["Bull and bear", "Trending and ranging", "Up and down", "Fast and slow"], correctIndex: 1, explanation: "Markets either trend (directional movement) or range (bounce between levels)." },
          { question: "In an uptrend, what should you do?", options: ["Sell the highs", "Buy pullbacks to support", "Short everything", "Wait for a range"], correctIndex: 1, explanation: "In an uptrend, the highest-probability play is buying pullbacks to support in the direction of the trend." },
          { question: "Which timeframe for structure analysis?", options: ["M1 or M5", "H4 or Daily", "Monthly only", "Tick chart"], correctIndex: 1, explanation: "Use H4 or Daily charts for identifying market structure, then H1 for timing entries." }
        ]
      },
      {
        id: "5-4",
        title: "Small Account Rules for Gold",
        duration: "3 min read",
        summary: [
          "Never risk more than 1% per trade with gold",
          "0.01 lots is often the correct size for <$100 accounts",
          "Only trade London and NY sessions",
          "Have specific rules and follow them religiously"
        ],
        content: [
          "Rule 1: Risk 1% maximum per trade. With a $50 account, that's $0.50. Yes, the profits will be tiny, but you're in survival and learning mode, not profit mode.",
          "Rule 2: 0.01 lots is your friend. For accounts under $100, 0.01 lots of XAUUSD gives you approximately $0.10 per pip. A 50-pip stop loss = $5 risk = 5% of $100 (already aggressive).",
          "Rule 3: Only trade during London and NY overlap (13:00–17:00 GMT). This gives you the best liquidity, tightest spreads, and clearest moves.",
          "Rule 4: Maximum 1–2 trades per day. This forces you to be selective and wait for quality setups.",
          "Rule 5: No trading during high-impact news. Check the economic calendar daily. If NFP, CPI, or Fed is scheduled, either trade before the event or sit it out entirely."
        ],
        toolLink: { label: "Calculate your gold lot size", path: "/tools/lot-size-calculator" },
        quiz: [
          { question: "What is the maximum risk per trade for small accounts?", options: ["5%", "10%", "1%", "25%"], correctIndex: 2, explanation: "With gold's volatility, small accounts should risk no more than 1% per trade." },
          { question: "What lot size for accounts under $100?", options: ["0.1 lots", "1.0 lots", "0.01 lots", "0.5 lots"], correctIndex: 2, explanation: "0.01 lots is typically the appropriate size for accounts under $100 trading gold." },
          { question: "When should you trade gold?", options: ["24/7", "Asian session only", "London/NY overlap", "Weekends"], correctIndex: 2, explanation: "London/NY overlap (13:00–17:00 GMT) offers the best conditions for gold trading." }
        ]
      }
    ]
  }
];
