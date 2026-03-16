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
  interactiveComponent?: string;
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
    title: "Start Here",
    description: "Build the right mindset before you touch a chart. This module sets realistic expectations.",
    icon: "Compass",
    lessons: [
      {
        id: "1-1",
        title: "How to Learn Trading Smarter Not Harder",
        duration: "3 min read",
        summary: [
          "Focus on understanding concepts, not memorizing patterns",
          "Learning trading is a skill — treat it like one",
          "Quality screen time beats quantity",
          "Journaling accelerates learning"
        ],
        content: [
          "Most beginners dive straight into charts, copying setups they saw on social media. This is the equivalent of learning surgery by watching YouTube — dangerous and ineffective.",
          "Trading is a skill that develops over time, like learning a language. You need structured practice, not random exposure. That means studying one concept at a time, understanding it deeply, then moving on.",
          "Smart learners focus on 'why' before 'what.' Instead of memorizing that a pin bar means reversal, understand why buyers stepped in at that level. This deeper understanding lets you adapt to changing markets.",
          "Keep a trading journal from day one — even on demo. Write down what you see, what you expect, what actually happens, and what you learned. This reflection loop is how professionals improve.",
          "Finally, quality beats quantity. One hour of focused study (reading, analyzing charts with intention) beats eight hours of staring at charts waiting for something to happen."
        ],
        quiz: [
          { question: "What's the best approach to learning trading?", options: ["Copy setups from social media", "Study one concept deeply at a time", "Watch as many charts as possible", "Jump into live trading immediately"], correctIndex: 1, explanation: "Structured, deep learning of one concept at a time builds real understanding." },
          { question: "Why should you keep a trading journal?", options: ["To show others your trades", "To track profits only", "To reflect and accelerate learning", "It's not necessary"], correctIndex: 2, explanation: "Journaling creates a feedback loop that helps you learn from every trade." },
          { question: "What matters more in trading education?", options: ["Quantity of screen time", "Quality of focused study", "Number of indicators learned", "Speed of learning"], correctIndex: 1, explanation: "One hour of focused, intentional study beats eight hours of passive chart watching." }
        ]
      },
      {
        id: "1-2",
        title: "Why Most Traders Fail",
        duration: "3 min read",
        summary: [
          "90% of retail traders lose money — this is a fact",
          "The main reasons: no plan, over-leveraging, emotional trading",
          "Survivorship bias makes trading look easier than it is",
          "Understanding failure helps you avoid common traps"
        ],
        content: [
          "Studies consistently show that 70-90% of retail traders lose money. This isn't meant to scare you — it's meant to prepare you. Understanding why others fail is your first real edge.",
          "Reason #1: No trading plan. Most beginners trade on impulse — they see a candle move and jump in. Without a plan that defines entries, exits, and risk, you're gambling.",
          "Reason #2: Over-leveraging. Brokers offer 1:500 leverage, and beginners use it all. One bad trade can wipe out an account in seconds. Leverage is a tool, not a strategy.",
          "Reason #3: Emotional trading. After a loss, beginners 'revenge trade' to make it back. After a win, they get overconfident and increase size. Both lead to account destruction.",
          "Reason #4: Survivorship bias. You see successful traders on social media but not the thousands who blew their accounts. The winners you see are the exception, not the rule.",
          "The good news? Every one of these failures is preventable. That's what this academy teaches — the habits and systems that keep you in the game long enough to become profitable."
        ],
        quiz: [
          { question: "What percentage of retail traders lose money?", options: ["10-20%", "30-40%", "50-60%", "70-90%"], correctIndex: 3, explanation: "Studies show 70-90% of retail traders lose money, making proper education essential." },
          { question: "What is 'revenge trading'?", options: ["Trading to get back at your broker", "Trading after a loss to recover quickly", "Trading the same pair twice", "A profitable strategy"], correctIndex: 1, explanation: "Revenge trading is emotional trading after a loss, trying to recover quickly — it usually makes things worse." },
          { question: "What is survivorship bias in trading?", options: ["Only successful traders survive", "We only see winners, not the majority who fail", "A trading strategy", "A type of market analysis"], correctIndex: 1, explanation: "Survivorship bias means we see successful traders on social media but not the thousands who lost everything." }
        ]
      },
      {
        id: "1-3",
        title: "Realistic Expectations in Trading",
        duration: "3 min read",
        summary: [
          "Trading is not a get-rich-quick scheme",
          "Consistent 2-5% monthly returns are excellent",
          "It takes 6-12 months minimum to become competent",
          "Your first goal should be capital preservation, not profit"
        ],
        content: [
          "Social media shows traders turning $100 into $10,000 in a week. While theoretically possible, it requires extreme risk that will eventually destroy the account. This is not trading — it's gambling.",
          "Professional fund managers aim for 15-25% annual returns. If a hedge fund with billions and teams of analysts targets that, what makes you think 100% monthly is realistic?",
          "For a beginner with a small account, here are realistic milestones: Month 1-3: Learn without losing. Month 4-6: Break even consistently. Month 7-12: Start seeing small, consistent profits.",
          "Your first and most important goal is capital preservation — keeping your money while you learn. A trader who preserves capital for 6 months while learning will outperform one who makes 50% in week one and blows the account in week two.",
          "Think of your small account as tuition. You're paying to learn. The real money comes later when you've developed the skill and can scale up responsibly."
        ],
        quiz: [
          { question: "What is a realistic monthly return for a skilled trader?", options: ["50-100%", "2-5%", "200-500%", "0.01%"], correctIndex: 1, explanation: "Consistent 2-5% monthly returns are considered excellent even by professional standards." },
          { question: "What should be a beginner's first goal?", options: ["Double their account", "Capital preservation", "Find the best indicator", "Trade as much as possible"], correctIndex: 1, explanation: "Preserving your capital while learning is the foundation of long-term trading success." },
          { question: "How long does it typically take to become competent?", options: ["1 week", "1 month", "6-12 months", "It happens instantly"], correctIndex: 2, explanation: "It takes 6-12 months of structured learning and practice to become a competent trader." }
        ]
      },
      {
        id: "1-4",
        title: "The Most Important Rule in Trading",
        duration: "3 min read",
        summary: [
          "Never risk more than 1-2% of your account on a single trade",
          "This rule keeps you in the game during losing streaks",
          "Even 10 losses in a row won't destroy your account",
          "Risk management is the only edge every trader needs"
        ],
        content: [
          "If you remember only one thing from this entire academy, let it be this: never risk more than 1-2% of your account on any single trade.",
          "Why? Because losing streaks happen to EVERYONE — even the best traders. If you risk 10% per trade, just 5 losses in a row (which is common) wipes out half your account. At 1% risk, those same 5 losses cost you only 5%.",
          "Let's do the math on a $100 account at 1% risk: you risk $1 per trade. Even after 10 consecutive losses (rare but possible), you still have $90. That's recoverable. At 10% risk, 10 losses = $35 remaining. Nearly impossible to recover.",
          "This rule also has a psychological benefit. When you know a single loss won't hurt you, you trade more calmly. Calm trading = better decisions = better results.",
          "Every tool in our Tools section is designed around this principle. The Risk Calculator tells you your dollar risk. The Lot Size Calculator sizes your position to match. Use them on every single trade."
        ],
        toolLink: { label: "Calculate your risk per trade", path: "/tools/risk-calculator" },
        quiz: [
          { question: "What is the maximum recommended risk per trade?", options: ["5-10%", "1-2%", "20-30%", "There is no limit"], correctIndex: 1, explanation: "Never risking more than 1-2% per trade is the golden rule of risk management." },
          { question: "If you risk 1% on a $100 account, how much do you risk per trade?", options: ["$10", "$5", "$1", "$0.10"], correctIndex: 2, explanation: "1% of $100 = $1 risk per trade." },
          { question: "Why does the 1% rule help psychologically?", options: ["It guarantees profits", "It makes losses feel manageable", "It eliminates emotions", "It doesn't help psychology"], correctIndex: 1, explanation: "When losses are small and manageable, you trade more calmly and make better decisions." }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Trading Foundations",
    description: "Understand the forex market, how trading works, and debunk common myths.",
    icon: "BookOpen",
    lessons: [
      {
        id: "2-1",
        title: "Forex Market Basics",
        duration: "3 min read",
        summary: [
          "Forex is the global market for exchanging currencies",
          "Daily volume exceeds $7 trillion",
          "Currencies trade in pairs like EUR/USD",
          "The market operates 24/5 across global sessions"
        ],
        content: [
          "Forex (Foreign Exchange) is the global marketplace where currencies are traded. It's the largest financial market in the world with over $7 trillion traded daily — dwarfing the stock market.",
          "When you travel and exchange money at the airport, you're participating in forex at the most basic level. In trading, we do this digitally through brokers, speculating on whether one currency will strengthen or weaken against another.",
          "Currencies always trade in pairs. EUR/USD means Euro vs US Dollar. The first currency (EUR) is the 'base' and the second (USD) is the 'quote.' If EUR/USD = 1.1000, one Euro costs $1.10.",
          "The forex market runs 24 hours a day, 5 days a week. It starts when markets open in Sydney on Monday and closes when New York closes on Friday. This continuous operation means opportunities exist around the clock.",
          "Key players include central banks, commercial banks, hedge funds, corporations, and retail traders like us. Retail traders make up about 5% of total volume."
        ],
        quiz: [
          { question: "What does 'Forex' stand for?", options: ["Foreign Exchange", "Forward Export", "Financial Exchange", "Future Exchange"], correctIndex: 0, explanation: "Forex stands for Foreign Exchange — the global currency market." },
          { question: "In EUR/USD, which is the base currency?", options: ["USD", "EUR", "Both", "Neither"], correctIndex: 1, explanation: "The first currency in the pair (EUR) is always the base currency." },
          { question: "How much is traded daily in forex?", options: ["$1 billion", "$100 billion", "$7+ trillion", "$500 million"], correctIndex: 2, explanation: "The forex market trades over $7 trillion per day." }
        ]
      },
      {
        id: "2-2",
        title: "How Trading Works",
        duration: "3 min read",
        summary: [
          "You profit by buying low and selling high (or selling high and buying low)",
          "Going 'long' means buying, 'short' means selling",
          "Brokers provide the platform and access to markets",
          "Every trade has an entry, stop loss, and take profit"
        ],
        content: [
          "Trading is simple in concept: buy something at a lower price, sell it at a higher price, and pocket the difference. In forex, you can also sell first and buy back later at a lower price.",
          "When you 'go long' (buy), you profit when the price rises. When you 'go short' (sell), you profit when the price falls. This is unique to forex — you can make money in both rising and falling markets.",
          "Brokers are the intermediaries that give you access. They provide trading platforms (like MetaTrader 5), execute your orders, and offer leverage. In return, they earn from spreads and sometimes commissions.",
          "Every trade should have three components: an entry point (where you get in), a stop loss (where you get out if wrong), and a take profit (where you take your gains). Trading without these is gambling.",
          "Your profit or loss depends on how many 'pips' or 'points' the price moves and how large your position is. We'll cover position sizing in the Risk Management module."
        ],
        toolLink: { label: "Try the Lot Size Calculator", path: "/tools/lot-size-calculator" },
        quiz: [
          { question: "What does 'going short' mean?", options: ["Buying", "Selling", "Holding", "Waiting"], correctIndex: 1, explanation: "Going short means selling, profiting when the price falls." },
          { question: "What are the three components every trade should have?", options: ["Indicator, chart, candle", "Entry, stop loss, take profit", "Buy, hold, sell", "Open, close, pending"], correctIndex: 1, explanation: "Every trade needs a planned entry, stop loss (protection), and take profit (target)." },
          { question: "Can you profit when prices fall?", options: ["No, only when they rise", "Yes, by going short", "Only with special accounts", "Only professionals can"], correctIndex: 1, explanation: "By going short (selling), you profit when prices fall." }
        ]
      },
      {
        id: "2-3",
        title: "Who Moves the Markets",
        duration: "3 min read",
        summary: [
          "Central banks are the most powerful market movers",
          "Institutional traders (banks, hedge funds) control most volume",
          "Retail traders are the smallest participants",
          "Understanding market participants helps you trade smarter"
        ],
        content: [
          "Understanding who moves the markets helps you understand why prices behave the way they do. The forex market has a hierarchy of participants.",
          "At the top are central banks (Fed, ECB, BOJ). Their interest rate decisions and monetary policy directly determine currency values. A single Fed statement can move markets for weeks.",
          "Next are large institutional players — investment banks like JP Morgan, Goldman Sachs, and hedge funds. They trade massive volumes and their order flow creates the trends and levels we see on charts.",
          "Commercial companies also participate — businesses exchanging currencies for international trade. While their individual trades are smaller, collectively they represent significant volume.",
          "At the bottom are retail traders — you and me. We represent about 5% of daily volume. This means we don't move markets — we react to what the bigger players do. Smart retail traders learn to follow institutional footprints rather than fight them."
        ],
        quiz: [
          { question: "Who are the most powerful market movers?", options: ["Retail traders", "Central banks", "Small businesses", "Social media influencers"], correctIndex: 1, explanation: "Central banks control monetary policy and interest rates, making them the most influential market participants." },
          { question: "What percentage of daily volume do retail traders represent?", options: ["50%", "25%", "5%", "1%"], correctIndex: 2, explanation: "Retail traders make up approximately 5% of total daily forex volume." },
          { question: "What should retail traders do?", options: ["Try to move the market", "Follow institutional footprints", "Trade against banks", "Only trade news"], correctIndex: 1, explanation: "Smart retail traders learn to follow institutional order flow rather than fight it." }
        ]
      },
      {
        id: "2-4",
        title: "Common Myths About Forex",
        duration: "3 min read",
        summary: [
          "Trading is NOT a get-rich-quick scheme",
          "More indicators don't mean more accuracy",
          "You don't need to trade every day",
          "Demo success doesn't guarantee live success"
        ],
        content: [
          "Myth #1: 'You can get rich quick.' Reality: Trading is a skill that takes months or years to develop. Anyone promising overnight riches is either lying or trying to sell you something.",
          "Myth #2: 'More indicators = better analysis.' Reality: Loading your chart with 10 indicators creates confusion, not clarity. The best traders use simple setups — often just price action and one or two tools.",
          "Myth #3: 'You need to trade every day.' Reality: The best trades are the ones you wait for. Overtrading is one of the top reasons beginners lose money. Sometimes the best trade is no trade.",
          "Myth #4: 'Demo trading is the same as real trading.' Reality: Demo removes the emotional component. You'll find that real money triggers fear and greed in ways demo never does. Use demo to learn mechanics, but know that live trading is psychologically different.",
          "Myth #5: 'You need a large account to make money.' Reality: You need a large account to make significant money, but you can learn and practice risk management with any account size. Start small, learn the skill, then scale."
        ],
        quiz: [
          { question: "Do more indicators lead to better analysis?", options: ["Yes, always", "No, simplicity often works better", "Only on certain timeframes", "You need at least 5"], correctIndex: 1, explanation: "More indicators create confusion. The best traders use simple, clean setups." },
          { question: "Is demo trading the same as real trading?", options: ["Yes, exactly the same", "No, real trading adds emotional pressure", "Demo is harder", "There's no difference"], correctIndex: 1, explanation: "Real money triggers fear and greed that demo accounts cannot simulate." },
          { question: "Should you trade every day?", options: ["Yes, to maximize profit", "No, quality setups matter more than frequency", "Only on weekdays", "At least 10 trades per day"], correctIndex: 1, explanation: "Overtrading is a common mistake. The best trades are the ones you patiently wait for." }
        ]
      },
      {
        id: "2-5",
        title: "Beginner Mistakes Traders Make",
        duration: "3 min read",
        summary: [
          "Trading without a plan is the #1 mistake",
          "Risking too much per trade destroys accounts fast",
          "Chasing trades after missing entries",
          "Not accepting losses as part of the process"
        ],
        content: [
          "Mistake #1: No trading plan. Entering trades because 'it looks like it's going up' is not a strategy. Every trade needs a reason for entry, a defined risk, and a target.",
          "Mistake #2: Risking too much. Beginners often risk 5-20% per trade, thinking bigger risk = bigger reward. In reality, a few losses at this rate devastates your account beyond recovery.",
          "Mistake #3: Chasing trades. You see price moving without you and jump in late, usually at the worst possible price. If you missed the entry, wait for the next setup.",
          "Mistake #4: Moving stop losses. Price approaches your stop and you move it further away, hoping for a reversal. This turns a small, planned loss into a large, unplanned one.",
          "Mistake #5: Not accepting losses. Losses are a natural part of trading. Even the best traders lose 40-50% of their trades. The key is keeping losses small and wins bigger. If you can't accept losing, trading isn't for you."
        ],
        interactiveComponent: "TradingChecklist",
        quiz: [
          { question: "What is the #1 beginner mistake?", options: ["Using the wrong indicator", "Trading without a plan", "Trading during news", "Using mobile apps"], correctIndex: 1, explanation: "Trading without a defined plan — entry, risk, and target — is pure gambling." },
          { question: "Should you move your stop loss further away?", options: ["Yes, to give the trade more room", "No, it turns small losses into large ones", "Only on gold", "Always"], correctIndex: 1, explanation: "Moving stops further away undermines your risk management and leads to larger losses." },
          { question: "What win rate do even the best traders have?", options: ["90-100%", "50-60%", "30-40%", "100%"], correctIndex: 1, explanation: "Many successful traders win only 50-60% of their trades. The key is that wins are larger than losses." }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Market Principles",
    description: "Master the core concepts of how markets move, including structure, support/resistance, and correlations.",
    icon: "BarChart3",
    lessons: [
      {
        id: "3-1",
        title: "Bulls vs Bears",
        duration: "2 min read",
        summary: [
          "Bulls push prices up (buyers), bears push prices down (sellers)",
          "Bullish = expecting price to rise",
          "Bearish = expecting price to fall",
          "Markets alternate between bullish and bearish phases"
        ],
        content: [
          "In trading, 'bulls' are buyers who expect prices to rise, and 'bears' are sellers who expect prices to fall. These terms come from how each animal attacks — a bull thrusts its horns up, a bear swipes its claws down.",
          "When we say the market is 'bullish,' it means buyers are in control and prices are generally rising. A 'bearish' market means sellers dominate and prices are falling.",
          "Understanding whether the market is bullish or bearish helps you trade in the right direction. The saying 'the trend is your friend' means you should generally trade with the dominant side — not against it.",
          "Markets don't go straight up or down. Even in a strong uptrend, there are pullbacks (temporary drops). These pullbacks in an uptrend are where smart traders look to buy. In a downtrend, rallies are where smart traders look to sell.",
          "Your job as a trader is to identify who's in control — bulls or bears — and position yourself on the winning side."
        ],
        interactiveComponent: "MarketStructureVisualizer",
        quiz: [
          { question: "What does 'bullish' mean?", options: ["Price is falling", "Price is expected to rise", "Market is closed", "High volatility"], correctIndex: 1, explanation: "Bullish means buyers are in control and prices are expected to rise." },
          { question: "In an uptrend, where do smart traders look to buy?", options: ["At the top", "During pullbacks", "At random times", "Only on Mondays"], correctIndex: 1, explanation: "Smart traders buy during pullbacks in an uptrend, getting better entry prices." },
          { question: "What does 'the trend is your friend' mean?", options: ["Always buy", "Trade with the dominant direction", "Never trade", "Trends don't exist"], correctIndex: 1, explanation: "It means trading in the direction of the trend increases your probability of success." }
        ]
      },
      {
        id: "3-2",
        title: "Market Structure",
        duration: "3 min read",
        summary: [
          "Market structure is the pattern of highs and lows on a chart",
          "Uptrend = higher highs and higher lows",
          "Downtrend = lower highs and lower lows",
          "A break of structure signals a potential trend change"
        ],
        content: [
          "Market structure is the backbone of price analysis. It's simply the pattern of swing highs (peaks) and swing lows (valleys) that price creates as it moves.",
          "An uptrend is defined by higher highs (HH) and higher lows (HL). Each peak is higher than the last, and each valley is higher than the last. This shows buyers are consistently stronger.",
          "A downtrend is defined by lower highs (LH) and lower lows (LL). Each peak is lower, and each valley is lower. Sellers are in control.",
          "A 'break of structure' (BOS) occurs when price breaks a previous significant high or low. In an uptrend, if price breaks below the most recent higher low, it signals a potential shift from bullish to bearish.",
          "Learning to read market structure is arguably the most important technical skill you can develop. It tells you the trend, potential reversal points, and where to look for trade entries."
        ],
        interactiveComponent: "MarketStructureVisualizer",
        quiz: [
          { question: "What defines an uptrend?", options: ["Lower lows", "Higher highs and higher lows", "Flat movement", "Random movement"], correctIndex: 1, explanation: "An uptrend is characterized by price making higher highs and higher lows." },
          { question: "What is a 'break of structure'?", options: ["When your chart crashes", "When price breaks a previous significant high or low", "A candle pattern", "A type of indicator"], correctIndex: 1, explanation: "A break of structure occurs when price violates a previous significant swing point, signaling potential trend change." },
          { question: "What does a lower high followed by a lower low indicate?", options: ["Uptrend", "Downtrend", "Ranging market", "No significance"], correctIndex: 1, explanation: "Lower highs and lower lows define a downtrend — sellers are in control." }
        ]
      },
      {
        id: "3-3",
        title: "Support and Resistance",
        duration: "3 min read",
        summary: [
          "Support is a price zone where buying pressure is strong",
          "Resistance is where selling pressure is strong",
          "They can flip — broken support becomes resistance",
          "S/R zones are areas, not exact lines"
        ],
        content: [
          "Support and resistance are the most fundamental concepts in technical analysis. They represent price zones where the market has historically shown strong buying or selling interest.",
          "Support is like a floor — a price zone where buyers step in and prevent further decline. If gold drops to $2,300 three times and bounces each time, $2,300 is a support zone.",
          "Resistance is like a ceiling — where sellers push price back down. If gold keeps failing to break above $2,400, that's resistance.",
          "The key insight: when support breaks, it often becomes resistance, and vice versa. This 'flip' is one of the most reliable phenomena in trading.",
          "Important: S/R levels are zones, not exact prices. Don't expect price to react to the exact cent. Allow for a range. The more times a level has been tested, the more significant it becomes."
        ],
        toolLink: { label: "Calculate your position size", path: "/tools/lot-size-calculator" },
        quiz: [
          { question: "What is a support level?", options: ["Where price always stops", "A zone where buying pressure tends to be strong", "A guaranteed reversal point", "The lowest price ever"], correctIndex: 1, explanation: "Support is a zone where buying interest historically prevents further decline." },
          { question: "What happens when support breaks?", options: ["Nothing", "It disappears", "It can become resistance", "Price always recovers"], correctIndex: 2, explanation: "Broken support levels often flip and become resistance." },
          { question: "Are S/R levels exact prices?", options: ["Yes, to the cent", "No, they are zones", "Only for gold", "Only on daily charts"], correctIndex: 1, explanation: "Support and resistance are zones, not exact price points." }
        ]
      },
      {
        id: "3-4",
        title: "Breakouts vs Fakeouts",
        duration: "3 min read",
        summary: [
          "A breakout is when price moves beyond a key level with momentum",
          "A fakeout is a false breakout that quickly reverses",
          "Fakeouts trap traders who enter too early",
          "Wait for confirmation before trading breakouts"
        ],
        content: [
          "A breakout occurs when price decisively moves beyond a support or resistance level. Real breakouts are accompanied by strong momentum and often increased volume.",
          "A fakeout (or false breakout) happens when price briefly breaks a level but quickly reverses back. These are extremely common and are one of the biggest traps for beginners.",
          "Why do fakeouts happen? Large institutional players push price through key levels to trigger stop losses and pending orders (liquidity), then reverse the market in their intended direction.",
          "How to avoid fakeout traps: Don't enter on the initial break. Wait for a retest of the broken level. Look for confirmation candles (strong closes beyond the level). Check if the break aligns with the larger trend.",
          "A useful rule: 'The first breakout is usually a fake.' While not always true, this skeptical approach will save you from many losing trades."
        ],
        interactiveComponent: "LiquiditySweepSimulator",
        quiz: [
          { question: "What is a fakeout?", options: ["A real breakout", "A false breakout that reverses quickly", "A type of candlestick", "A trading strategy"], correctIndex: 1, explanation: "A fakeout is when price briefly breaks a level but quickly reverses, trapping traders." },
          { question: "Why do fakeouts happen?", options: ["Random chance", "Institutions triggering liquidity", "Broker manipulation only", "They don't really happen"], correctIndex: 1, explanation: "Large players push price through levels to trigger stop losses and pending orders before reversing." },
          { question: "What should you do when price breaks a level?", options: ["Enter immediately", "Wait for confirmation and retest", "Close all trades", "Change timeframes"], correctIndex: 1, explanation: "Wait for confirmation — a retest and strong close beyond the level — before entering." }
        ]
      },
      {
        id: "3-5",
        title: "Market Cycles",
        duration: "3 min read",
        summary: [
          "Markets move in repeating cycles",
          "Four phases: accumulation, markup, distribution, markdown",
          "Understanding cycles helps you identify where the market is heading",
          "Each cycle phase requires a different approach"
        ],
        content: [
          "Markets don't move randomly — they follow repeating cycles. Understanding these cycles gives you a framework for identifying where the market is and where it's likely to go next.",
          "Phase 1 — Accumulation: After a downtrend, smart money starts quietly buying. Price moves sideways in a range. Volume may decrease. This is where big players build their positions.",
          "Phase 2 — Markup: Once enough positions are accumulated, price breaks out of the range and trends upward. This is the phase most traders want to catch. Momentum increases.",
          "Phase 3 — Distribution: After a significant uptrend, smart money starts selling their positions to latecomers. Price moves sideways at the top, similar to accumulation but at high prices.",
          "Phase 4 — Markdown: Selling pressure overwhelms buying, and price trends downward. This continues until smart money sees value again, and the cycle repeats with accumulation."
        ],
        quiz: [
          { question: "What are the four phases of a market cycle?", options: ["Buy, sell, hold, wait", "Accumulation, markup, distribution, markdown", "Open, high, low, close", "Support, resistance, trend, range"], correctIndex: 1, explanation: "The four phases are accumulation (buying), markup (uptrend), distribution (selling), and markdown (downtrend)." },
          { question: "What happens during accumulation?", options: ["Price drops sharply", "Smart money quietly builds positions", "Everyone is buying", "Markets are closed"], correctIndex: 1, explanation: "During accumulation, smart money buys quietly while price consolidates in a range." },
          { question: "What phase do most traders want to catch?", options: ["Accumulation", "Markup", "Distribution", "Markdown"], correctIndex: 1, explanation: "The markup phase is where price trends upward and most traders want to be positioned." }
        ]
      },
      {
        id: "3-6",
        title: "Accumulation and Distribution",
        duration: "3 min read",
        summary: [
          "Accumulation zones form at market bottoms",
          "Distribution zones form at market tops",
          "Both appear as sideways ranges on the chart",
          "Identifying these zones gives you an institutional edge"
        ],
        content: [
          "Accumulation and distribution are the quiet phases of the market cycle where smart money is positioning for the next big move. Learning to identify them is a game-changer.",
          "Accumulation happens after a downtrend. Price enters a range and appears to be going nowhere. During this time, large players are buying from panic sellers. Clues: volume may spike on dips but price doesn't make new lows.",
          "Distribution happens after an uptrend. Price enters a range at the top. Smart money is selling to euphoric late buyers. Clues: volume may spike on rallies but price doesn't make new highs.",
          "The key difference from regular consolidation is intent. In accumulation, the eventual breakout is upward. In distribution, it's downward. While it's hard to tell in real-time, the context (what came before) gives clues.",
          "Trading approach: In suspected accumulation zones, look for longs on dips to the bottom of the range. In distribution, look for shorts on rallies to the top. Always wait for the breakout confirmation before getting aggressive."
        ],
        quiz: [
          { question: "Where do accumulation zones typically form?", options: ["At market tops", "At market bottoms after downtrends", "During uptrends", "At random"], correctIndex: 1, explanation: "Accumulation zones form at market bottoms as smart money buys from panic sellers." },
          { question: "What is the eventual expected breakout from distribution?", options: ["Upward", "Downward", "Sideways", "No breakout"], correctIndex: 1, explanation: "Distribution at market tops typically leads to a downward breakout as smart money has sold." },
          { question: "How can you tell accumulation from regular consolidation?", options: ["They look different on charts", "Context — what happened before the range", "You can't tell at all", "By using indicators only"], correctIndex: 1, explanation: "Context matters — accumulation follows downtrends, distribution follows uptrends." }
        ]
      },
      {
        id: "3-7",
        title: "Asset Correlations",
        duration: "3 min read",
        summary: [
          "Some assets move together (positive correlation)",
          "Others move opposite (negative correlation)",
          "Gold and USD often have an inverse correlation",
          "Understanding correlations prevents double exposure"
        ],
        content: [
          "Asset correlation measures how two instruments move relative to each other. Understanding this helps you diversify risk and avoid accidentally doubling your exposure.",
          "Positive correlation: Assets that tend to move in the same direction. EUR/USD and GBP/USD are positively correlated — when the dollar weakens, both tend to rise.",
          "Negative correlation: Assets that tend to move in opposite directions. Gold (XAUUSD) and the US Dollar Index (DXY) are typically negatively correlated — when the dollar strengthens, gold often falls.",
          "Why this matters: If you buy both EUR/USD and GBP/USD, you're essentially doubling your dollar-short position. If the dollar strengthens, both trades lose. You think you're diversified, but you're not.",
          "Key correlations to know: Gold ↔ USD (inverse), EUR/USD ↔ GBP/USD (positive), USD/JPY ↔ US bond yields (positive), Oil ↔ CAD (positive). Use these relationships as confirmation tools."
        ],
        quiz: [
          { question: "What is the typical correlation between gold and USD?", options: ["Positive", "Negative/Inverse", "No correlation", "It changes daily"], correctIndex: 1, explanation: "Gold and USD typically have an inverse correlation — when dollar strengthens, gold tends to fall." },
          { question: "Why is understanding correlation important?", options: ["It guarantees profits", "It prevents accidental double exposure", "It's not important", "It helps choose a broker"], correctIndex: 1, explanation: "Correlations help you avoid accidentally doubling risk by trading correlated pairs." },
          { question: "If you buy both EUR/USD and GBP/USD, what risk do you face?", options: ["No additional risk", "Double USD exposure", "Reduced risk", "Currency risk only"], correctIndex: 1, explanation: "Both pairs are positively correlated. You're doubling your bet against the dollar." }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Trading Mechanics",
    description: "Learn the technical details of how trades actually work — spreads, lots, leverage, and orders.",
    icon: "Settings",
    lessons: [
      {
        id: "4-1",
        title: "Bid, Ask, and Spread",
        duration: "3 min read",
        summary: [
          "Bid is the price you sell at, Ask is the price you buy at",
          "The spread is the difference between Bid and Ask",
          "Spread is a cost you pay on every trade",
          "Tighter spreads are better for traders"
        ],
        content: [
          "Every instrument has two prices: the Bid (sell price) and the Ask (buy price). The Ask is always slightly higher than the Bid.",
          "The spread is the difference between these two prices. Think of it like a currency exchange booth — they buy from you at one price and sell at a higher one. The difference is their profit.",
          "When you open a trade, you immediately start slightly negative because of the spread. Your trade needs to move in your favor by at least the spread amount before you break even.",
          "For XAUUSD, typical spreads range from 15 to 50 cents. During high volatility events or off-hours, spreads can widen dramatically — sometimes to $1-2+.",
          "For small accounts, wide spreads can eat into your profits quickly. Always check the spread before trading. Prefer trading during London or New York sessions when spreads are tightest."
        ],
        quiz: [
          { question: "What is the 'spread'?", options: ["Profit margin", "Difference between Bid and Ask", "Trading fee", "Tax on trades"], correctIndex: 1, explanation: "The spread is the difference between the sell price (Bid) and buy price (Ask)." },
          { question: "When you buy, which price do you pay?", options: ["Bid price", "Ask price", "Average", "Lowest"], correctIndex: 1, explanation: "When buying, you pay the Ask price (the higher one)." },
          { question: "When are spreads typically tightest?", options: ["Weekend", "Asian session", "London/NY sessions", "Midnight"], correctIndex: 2, explanation: "Spreads are tightest during the most liquid sessions: London and New York." }
        ]
      },
      {
        id: "4-2",
        title: "Lots and Leverage",
        duration: "3 min read",
        summary: [
          "A standard lot = 100,000 units of the base currency",
          "Mini lot = 10,000, Micro lot = 1,000",
          "Leverage lets you control larger positions with less capital",
          "Higher leverage = higher risk, not just higher reward"
        ],
        content: [
          "In forex, position sizes are measured in 'lots.' A standard lot is 100,000 units of the base currency. For most beginners, this is way too large.",
          "Mini lots (0.1 lot = 10,000 units) and micro lots (0.01 lot = 1,000 units) allow smaller positions. For small accounts, you'll primarily use micro lots.",
          "Leverage is a multiplier provided by your broker that lets you control larger positions. With 1:100 leverage, $100 controls $10,000 worth of currency.",
          "Sounds great, right? The catch: leverage amplifies both profits AND losses equally. With 1:100 leverage, a 1% market move against you means a 100% loss of your capital.",
          "For small accounts, use leverage conservatively. Just because your broker offers 1:500 doesn't mean you should use it. Calculate your lot size based on your risk per trade (1-2%), not on maximum leverage available."
        ],
        toolLink: { label: "Calculate your lot size", path: "/tools/lot-size-calculator" },
        quiz: [
          { question: "What is a micro lot?", options: ["100,000 units", "10,000 units", "1,000 units", "100 units"], correctIndex: 2, explanation: "A micro lot is 0.01 of a standard lot, equaling 1,000 units." },
          { question: "With 1:100 leverage, what does $100 control?", options: ["$100", "$1,000", "$10,000", "$100,000"], correctIndex: 2, explanation: "1:100 leverage means your $100 controls $10,000 worth of currency." },
          { question: "Does leverage only amplify profits?", options: ["Yes, only profits", "No, it amplifies both profits and losses", "It only affects losses", "It has no effect"], correctIndex: 1, explanation: "Leverage is a double-edged sword — it amplifies both gains and losses equally." }
        ]
      },
      {
        id: "4-3",
        title: "Slippage",
        duration: "2 min read",
        summary: [
          "Slippage is when your order fills at a different price than expected",
          "It happens during high volatility or low liquidity",
          "Slippage can be positive or negative",
          "Market orders are more prone to slippage than limit orders"
        ],
        content: [
          "Slippage occurs when the price at which your order executes is different from the price you expected. This happens because the market moves between the time you click and the time your order reaches the server.",
          "Negative slippage (worse price) is more common during high volatility events like news releases, market opens, or during low-liquidity periods like the Asian session for gold.",
          "Positive slippage (better price) can also happen, though it's less common. Some brokers will fill you at a better price if available.",
          "Market orders (instant execution) are more prone to slippage than limit orders (pending at a specific price). For important entries, consider using limit orders to control your fill price.",
          "For small accounts, slippage can significantly impact results. Factor potential slippage into your risk calculations, especially around news events. Better yet, avoid trading during high-impact news until you're experienced."
        ],
        quiz: [
          { question: "What is slippage?", options: ["A type of indicator", "Order filling at a different price than expected", "A trading strategy", "When price doesn't move"], correctIndex: 1, explanation: "Slippage is the difference between expected and actual execution price." },
          { question: "When is slippage most likely?", options: ["During quiet markets", "During high volatility or low liquidity", "Only on weekends", "During London session"], correctIndex: 1, explanation: "Slippage is most common during volatile events or when liquidity is thin." },
          { question: "Which order type reduces slippage risk?", options: ["Market order", "Limit order", "Stop order", "All are the same"], correctIndex: 1, explanation: "Limit orders let you specify exact fill prices, reducing slippage risk." }
        ]
      },
      {
        id: "4-4",
        title: "Order Types",
        duration: "3 min read",
        summary: [
          "Market orders execute immediately at the current price",
          "Limit orders wait for a specific price",
          "Stop orders trigger when price reaches a level",
          "Understanding order types gives you precise trade control"
        ],
        content: [
          "Market Order: Executes immediately at the best available price. Use when you want to enter or exit right now. The downside is potential slippage.",
          "Limit Order: A pending order to buy below or sell above the current price. A buy limit at $2,300 means 'buy gold if it drops to $2,300.' Great for getting better entry prices.",
          "Stop Order: A pending order to buy above or sell below the current price. A buy stop at $2,400 means 'buy if gold breaks above $2,400.' Used for breakout strategies.",
          "Stop Loss: A special stop order that closes your position to limit losses. If you buy gold at $2,350 with a stop loss at $2,340, your trade closes if price drops $10. ALWAYS use stop losses.",
          "Take Profit: A limit order that closes your position at a profit target. Buy at $2,350 with take profit at $2,380 means your trade closes automatically when price reaches your target."
        ],
        toolLink: { label: "Calculate your margin requirement", path: "/tools/margin-calculator" },
        quiz: [
          { question: "What does a market order do?", options: ["Waits for a specific price", "Executes immediately", "Only works during market hours", "Cancels if not filled"], correctIndex: 1, explanation: "A market order executes immediately at the best available price." },
          { question: "What is a buy limit order?", options: ["Buy immediately", "Buy above current price", "Buy below current price", "Buy at any price"], correctIndex: 2, explanation: "A buy limit is a pending order to buy at a lower price than the current market." },
          { question: "Should you always use stop losses?", options: ["No, they reduce profits", "Yes, always", "Only on large accounts", "Only during news"], correctIndex: 1, explanation: "Stop losses are essential risk management. ALWAYS use them to protect your capital." }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "When To Trade",
    description: "Learn the best and worst times to trade, session behaviors, and how to build your schedule.",
    icon: "Clock",
    lessons: [
      {
        id: "5-1",
        title: "Best Trading Sessions",
        duration: "3 min read",
        summary: [
          "London session (08:00-17:00 GMT) is ideal for most pairs",
          "New York session (13:00-22:00 GMT) brings US-driven volatility",
          "The London/NY overlap is the most active period",
          "Match your trading to the most liquid sessions for your instruments"
        ],
        content: [
          "Not all trading hours are created equal. The best trading happens during the most liquid market sessions when spreads are tight and price moves are cleaner.",
          "The London session (08:00-17:00 GMT) is the largest trading session, accounting for about 35% of daily volume. It offers excellent liquidity and clear price moves for forex and gold.",
          "The New York session (13:00-22:00 GMT) is the second-largest. US economic data releases during this session can create significant moves. The US dollar's dominance makes this session crucial.",
          "The London/New York overlap (13:00-17:00 GMT) is the golden window. Both major centers are active, liquidity is at its peak, and this is when the largest daily moves often occur.",
          "For gold (XAUUSD) specifically, the most profitable hours are typically during London open (08:00-10:00 GMT) and the London/NY overlap. These are when institutional traders are most active."
        ],
        interactiveComponent: "SessionHeatmap",
        quiz: [
          { question: "Which session has the highest daily volume?", options: ["Tokyo", "London", "New York", "Sydney"], correctIndex: 1, explanation: "London accounts for approximately 35% of daily forex volume, the highest of any session." },
          { question: "When is the London/NY overlap?", options: ["00:00-04:00 GMT", "08:00-12:00 GMT", "13:00-17:00 GMT", "20:00-00:00 GMT"], correctIndex: 2, explanation: "The overlap runs from 13:00 to 17:00 GMT when both major centers are active." },
          { question: "When is gold most active?", options: ["Asian session", "London open and London/NY overlap", "Weekend", "Equally all sessions"], correctIndex: 1, explanation: "Gold sees its strongest moves during London open and the London/NY overlap." }
        ]
      },
      {
        id: "5-2",
        title: "Worst Times to Trade",
        duration: "2 min read",
        summary: [
          "Late Asian session is low liquidity for most pairs",
          "Major holiday periods have thin markets",
          "Fridays after 18:00 GMT — markets wind down",
          "During high-impact news if you're a beginner"
        ],
        content: [
          "Knowing when NOT to trade is as important as knowing when to trade. Bad timing leads to wider spreads, unexpected slippage, and choppy price action.",
          "The late Asian session (04:00-07:00 GMT) is typically quiet for forex and gold. Price often consolidates in tight ranges, and breakouts during this period frequently fail.",
          "Major holidays (Christmas week, US Thanksgiving, New Year) see dramatically reduced volume. The fewer participants, the more erratic price behavior becomes — whipsaws and fakeouts increase.",
          "Friday afternoons, especially after 18:00 GMT, are risky. Traders close positions before the weekend, creating unpredictable moves. Spreads often widen as liquidity dries up.",
          "For beginners: avoid trading during high-impact news events (NFP, FOMC, CPI). These events can cause 50+ pip moves in seconds. Until you understand how news affects price, sit on your hands and watch."
        ],
        interactiveComponent: "SessionHeatmap",
        quiz: [
          { question: "Why are holidays bad for trading?", options: ["Brokers are closed", "Reduced volume creates erratic moves", "Spreads are fixed", "No reason"], correctIndex: 1, explanation: "Reduced volume during holidays leads to erratic price action, wider spreads, and more fakeouts." },
          { question: "Should beginners trade during NFP?", options: ["Yes, for big profits", "No, wait and watch", "Only with high leverage", "Only on gold"], correctIndex: 1, explanation: "Beginners should avoid high-impact news. Watch how the market reacts and learn before trading it." },
          { question: "Why is Friday afternoon risky?", options: ["Markets are closed", "Traders close positions causing unpredictable moves", "Spreads are tight", "Volume increases"], correctIndex: 1, explanation: "Position closing before the weekend creates unpredictable price action and wider spreads." }
        ]
      },
      {
        id: "5-3",
        title: "London vs New York Session Behavior",
        duration: "3 min read",
        summary: [
          "London often sets the daily direction",
          "New York often continues or reverses the London move",
          "Each session has characteristic behaviors",
          "Understanding session profiles improves timing"
        ],
        content: [
          "London and New York are the two powerhouse sessions, but they behave differently. Understanding their characteristics helps you anticipate price behavior.",
          "London Session Character: Often establishes the daily bias. Early London (08:00-10:00 GMT) frequently sees a 'fake' move that reverses — sweeping Asian session highs or lows before trending. This is known as the 'London Killzone.'",
          "New York Session Character: Often continues the move established by London, or if US data contradicts, reverses it. The 08:30-10:00 EST window (13:30-15:00 GMT) is crucial due to US data releases.",
          "The overlap creates the most decisive moves. If London established an uptrend and New York confirms it, the resulting continuation can be the day's biggest move.",
          "A common pattern: London sweeps the Asian session high/low, reverses, establishes the daily direction, and New York extends that move. Watching for this pattern can significantly improve your entry timing."
        ],
        interactiveComponent: "SessionHeatmap",
        quiz: [
          { question: "What is the 'London Killzone'?", options: ["When London markets close", "Early London's tendency to fake out and reverse", "A dangerous time to trade", "The London stock exchange"], correctIndex: 1, explanation: "The London Killzone refers to early London's tendency to sweep liquidity and reverse." },
          { question: "What does New York often do relative to London?", options: ["Always reverses", "Often continues or reverses based on data", "Moves independently", "Copies exactly"], correctIndex: 1, explanation: "New York often continues London's move or reverses it if US data provides a catalyst." },
          { question: "What pattern involves sweeping Asian highs/lows?", options: ["Breakout pattern", "London manipulation sweep", "Asian reversal", "No such pattern exists"], correctIndex: 1, explanation: "London often sweeps Asian session highs or lows (liquidity) before establishing the true daily direction." }
        ]
      },
      {
        id: "5-4",
        title: "Custom Timing Strategies",
        duration: "3 min read",
        summary: [
          "Build a schedule that matches your lifestyle",
          "You don't need to be glued to charts 24/5",
          "Set-and-forget strategies work for part-time traders",
          "Consistency in timing creates consistency in results"
        ],
        content: [
          "You don't need to trade every session or watch charts all day. The best approach is building a trading schedule that fits your life and sticking to it consistently.",
          "If you work a 9-5 job: Focus on the New York afternoon session (14:00-17:00 EST) or set pending orders during London based on pre-session analysis.",
          "Set-and-forget approach: Do your analysis during a quiet period, place limit orders with stop losses and take profits, then walk away. Check in once or twice daily.",
          "Time-restricted approach: Trade only during a specific 2-3 hour window daily. This forces discipline and prevents overtrading. Many successful traders only trade the first 2 hours of London or NY.",
          "The key is consistency. If you decide to trade London open (08:00-10:00 GMT), do it every trading day. This lets you learn the session's personality and develop pattern recognition for that specific time."
        ],
        quiz: [
          { question: "Do you need to watch charts all day?", options: ["Yes, to catch every move", "No, pick specific windows", "Only during news", "Yes, on mobile"], correctIndex: 1, explanation: "Focused trading during specific time windows is more effective than constant chart watching." },
          { question: "What is a set-and-forget strategy?", options: ["Never trade again", "Place orders with SL/TP and walk away", "Only trade once a month", "Use only market orders"], correctIndex: 1, explanation: "Set-and-forget means placing pending orders with defined stop losses and take profits, then stepping away." },
          { question: "Why is consistency in timing important?", options: ["Markets prefer consistent traders", "It develops pattern recognition for specific sessions", "It doesn't matter", "For tax purposes"], correctIndex: 1, explanation: "Trading the same time daily helps you learn that session's personality and develop reliable pattern recognition." }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Technical Analysis",
    description: "Read charts like a pro — chart types, candlesticks, timeframes, and a complete trade setup process.",
    icon: "LineChart",
    lessons: [
      {
        id: "6-1",
        title: "Chart Types",
        duration: "2 min read",
        summary: [
          "Line charts show closing prices connected by a line",
          "Bar charts show open, high, low, close for each period",
          "Candlestick charts are the most popular and informative",
          "Choose candlesticks — they show the most data visually"
        ],
        content: [
          "Charts are the visual representation of price history. There are three main types, and each has its use.",
          "Line Charts: The simplest type. They connect closing prices with a line. Good for seeing the overall trend but missing important detail about highs, lows, and opens within each period.",
          "Bar Charts (OHLC): Show the Open, High, Low, and Close for each time period. The vertical line shows the high-low range, with small horizontal ticks for open (left) and close (right).",
          "Candlestick Charts: The most popular type among modern traders. Like bar charts, they show OHLC data but use colored 'bodies' that make bullish and bearish periods instantly visible.",
          "For this academy and for your trading, we recommend candlestick charts exclusively. They provide the most information in the most visually intuitive format."
        ],
        quiz: [
          { question: "Which chart type is most popular among traders?", options: ["Line chart", "Bar chart", "Candlestick chart", "Point and figure"], correctIndex: 2, explanation: "Candlestick charts are the most popular because they display OHLC data in an intuitive visual format." },
          { question: "What does a line chart show?", options: ["Open, high, low, close", "Only closing prices", "Only opening prices", "Volume"], correctIndex: 1, explanation: "Line charts connect closing prices with a line, showing the simplest trend view." },
          { question: "What information does a candlestick show?", options: ["Only close", "Open, High, Low, Close", "Only high and low", "Volume only"], correctIndex: 1, explanation: "Each candlestick displays the open, high, low, and close for that time period." }
        ]
      },
      {
        id: "6-2",
        title: "Candlesticks",
        duration: "3 min read",
        summary: [
          "A bullish candle has a close higher than its open",
          "A bearish candle has a close lower than its open",
          "Wicks (shadows) show rejection from a price level",
          "Key patterns: engulfing, pin bar, doji, inside bar"
        ],
        content: [
          "Candlesticks are the language of price action. Each candle tells a story about the battle between buyers and sellers during that time period.",
          "Anatomy: The 'body' is the rectangle between open and close. The 'wicks' (or shadows) extend above and below showing the high and low. A long wick shows price was rejected from that level.",
          "Bullish candle: Close is above the open (typically colored green/white). It shows buyers won that period. The bigger the body relative to wicks, the stronger the buying pressure.",
          "Key patterns to learn: Engulfing (a large candle completely covers the previous one — strong reversal signal), Pin Bar (small body with a long wick — shows rejection), Doji (tiny body, equal wicks — indecision), Inside Bar (candle contained within previous candle — consolidation before a move).",
          "Important: Individual candle patterns are not trading signals by themselves. They become meaningful only at significant levels (support/resistance) and in the context of the overall market structure."
        ],
        quiz: [
          { question: "What does a long upper wick indicate?", options: ["Strong buying", "Price was rejected from higher levels", "The candle is bullish", "Nothing"], correctIndex: 1, explanation: "A long upper wick shows that price reached higher levels but sellers pushed it back down — rejection." },
          { question: "What is an engulfing pattern?", options: ["Two same-sized candles", "A large candle that completely covers the previous one", "A candle with no wicks", "Three candles in a row"], correctIndex: 1, explanation: "An engulfing pattern is a large candle that completely covers the previous candle, signaling a potential reversal." },
          { question: "Are individual candle patterns reliable on their own?", options: ["Yes, always trade them", "No, they need context (S/R, structure)", "Only on daily charts", "Only for gold"], correctIndex: 1, explanation: "Candle patterns are meaningful only at significant levels and within the context of market structure." }
        ]
      },
      {
        id: "6-3",
        title: "Timeframes",
        duration: "3 min read",
        summary: [
          "Higher timeframes (daily, 4H) show the big picture",
          "Lower timeframes (15min, 5min) show entry details",
          "Multi-timeframe analysis combines both perspectives",
          "Beginners should focus on higher timeframes first"
        ],
        content: [
          "Timeframes determine how much time each candle represents. A 1-hour chart shows one candle per hour. A daily chart shows one candle per day. The same price data looks different on each timeframe.",
          "Higher timeframes (Weekly, Daily, 4-Hour) show the big picture — major trends, key levels, and overall market direction. These are more reliable because they filter out 'noise' from short-term fluctuations.",
          "Lower timeframes (1-Hour, 15-Minute, 5-Minute) show more detail and allow precise entries. However, they also show more noise and false signals.",
          "Multi-timeframe analysis: The best approach combines both. Use a higher timeframe to identify the trend and key levels, then drop to a lower timeframe for precise entries. Example: Daily chart for direction, 1-Hour for entries.",
          "For beginners: Start with the Daily and 4-Hour charts. These timeframes are slower (less stressful), more reliable, and teach you to see the market clearly. Once comfortable, add lower timeframes for entries."
        ],
        quiz: [
          { question: "Which timeframe is more reliable for trend identification?", options: ["5-minute", "15-minute", "Daily/4-Hour", "1-minute"], correctIndex: 2, explanation: "Higher timeframes filter out noise and show more reliable trend information." },
          { question: "What is multi-timeframe analysis?", options: ["Trading all timeframes at once", "Using higher TF for direction, lower for entries", "Only using one timeframe", "Switching randomly"], correctIndex: 1, explanation: "Multi-timeframe analysis uses higher timeframes for the big picture and lower timeframes for precise entries." },
          { question: "What timeframes should beginners start with?", options: ["1-minute and 5-minute", "Daily and 4-Hour", "Weekly only", "Tick charts"], correctIndex: 1, explanation: "Daily and 4-Hour charts are slower, less stressful, and more reliable for learning." }
        ]
      },
      {
        id: "6-4",
        title: "Technical Analysis Explained",
        duration: "3 min read",
        summary: [
          "TA analyzes past price data to forecast future moves",
          "Price discounts everything — all info is in the chart",
          "It's about probability, not prediction",
          "Combine multiple tools for confluence"
        ],
        content: [
          "Technical Analysis (TA) is the study of past price movements to identify potential future price direction. It's based on three principles.",
          "Principle 1: Price discounts everything. All known information — economic data, sentiment, news — is already reflected in the price. You don't need to be an economist; just read the chart.",
          "Principle 2: Prices move in trends. Markets tend to continue in a direction once established. Understanding this helps you trade with the trend rather than against it.",
          "Principle 3: History tends to repeat. Human psychology doesn't change. The patterns of fear and greed that created price movements in the past will create similar movements in the future.",
          "The key mindset shift: TA doesn't predict the future — it identifies probabilities. A support level doesn't guarantee a bounce; it tells you the probability of a bounce is higher than average. Combine multiple TA tools (confluence) to increase your probability."
        ],
        quiz: [
          { question: "What does 'price discounts everything' mean?", options: ["Trading is free", "All information is reflected in price", "Prices always go down", "Discounts apply to spreads"], correctIndex: 1, explanation: "It means all known information — news, data, sentiment — is already factored into the current price." },
          { question: "Does technical analysis predict the future?", options: ["Yes, with 100% accuracy", "No, it identifies probabilities", "Only for stocks", "Only with the right indicator"], correctIndex: 1, explanation: "TA identifies probabilities, not certainties. It's about finding high-probability setups." },
          { question: "What is 'confluence' in TA?", options: ["A single strong signal", "Multiple tools agreeing on the same direction", "A type of chart pattern", "When all timeframes align perfectly"], correctIndex: 1, explanation: "Confluence is when multiple TA tools (S/R, trend, candle patterns) point in the same direction, increasing probability." }
        ]
      },
      {
        id: "6-5",
        title: "8-Step Trade Setup",
        duration: "4 min read",
        summary: [
          "A systematic approach removes emotion from trading",
          "Check higher TF direction, key levels, then drop for entry",
          "Confirm with candle patterns, set SL/TP, calculate lot size",
          "This checklist ensures you never take an unplanned trade"
        ],
        content: [
          "Having a systematic trade setup process ensures consistency and removes emotional decision-making. Here are 8 steps to follow before every trade.",
          "Step 1: Check the Daily chart for overall bias (bullish, bearish, or ranging). Step 2: Identify key support and resistance levels on the 4H chart. Step 3: Look for the price to be at or near a key level (don't chase).",
          "Step 4: Drop to the 1H or 15M chart for entry timing. Step 5: Wait for a confirmation candle pattern (engulfing, pin bar, etc.) at your identified level.",
          "Step 6: Set your stop loss beyond the level you're trading from (give it room). Step 7: Calculate your lot size using the Risk Calculator (1-2% max risk). Step 8: Set your take profit at the next significant level, ensuring at least a 1:2 risk-reward ratio.",
          "This process might seem slow at first, but it prevents the impulsive trades that destroy accounts. Print this checklist and follow it religiously until it becomes second nature."
        ],
        interactiveComponent: "TradingChecklist",
        toolLink: { label: "Calculate your lot size", path: "/tools/lot-size-calculator" },
        quiz: [
          { question: "What's the first step in the trade setup?", options: ["Find an entry candle", "Check the Daily chart for bias", "Calculate lot size", "Set stop loss"], correctIndex: 1, explanation: "Always start with the big picture — the Daily chart tells you the overall market direction." },
          { question: "What minimum risk-reward ratio should you aim for?", options: ["1:0.5", "1:1", "1:2", "1:10"], correctIndex: 2, explanation: "A minimum 1:2 risk-reward ratio means your potential profit is at least twice your potential loss." },
          { question: "Why is a systematic process important?", options: ["To trade faster", "To remove emotional decisions", "To use more indicators", "It's not important"], correctIndex: 1, explanation: "A systematic process removes emotion and ensures every trade meets your criteria before entry." }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Smart Money Concepts",
    description: "Advanced concepts used by institutional traders — liquidity, order blocks, fair value gaps, and more.",
    icon: "Brain",
    lessons: [
      {
        id: "7-1",
        title: "Liquidity",
        duration: "3 min read",
        summary: [
          "Liquidity is where pending orders cluster",
          "Stop losses above highs and below lows create liquidity pools",
          "Smart money targets these pools before making real moves",
          "Understanding liquidity explains 'stop hunts'"
        ],
        content: [
          "In Smart Money Concepts (SMC), liquidity refers to clusters of pending orders sitting at predictable levels. These are like magnets that attract price.",
          "Where does liquidity pool? Above obvious swing highs (buy stops from shorts), below obvious swing lows (sell stops from longs), and at round numbers. These are areas where retail traders place their stop losses.",
          "Smart money (institutional traders) needs liquidity to fill their large orders. They can't buy 100 million euros at one price — they need sellers. Where are the sellers? At the stop losses of retail longs!",
          "This is why you often see price spike above a high, trigger stops, then reverse sharply. Smart money pushed price to that liquidity, filled their real orders, and the market reversed. This is a 'liquidity sweep' or 'stop hunt.'",
          "Practical application: Don't place stop losses at obvious levels. If everyone's stop is just below a support level, put yours a bit further. Better yet, wait for the sweep to happen and enter after it."
        ],
        interactiveComponent: "LiquiditySweepSimulator",
        quiz: [
          { question: "Where does liquidity typically pool?", options: ["In the middle of ranges", "Above swing highs and below swing lows", "At random prices", "Only during news"], correctIndex: 1, explanation: "Liquidity pools above highs (buy stops) and below lows (sell stops) where retail traders place orders." },
          { question: "Why does smart money target liquidity?", options: ["To help retail traders", "To fill their large orders", "For fun", "They don't"], correctIndex: 1, explanation: "Institutions need liquidity (opposing orders) to fill their large positions without moving the market against themselves." },
          { question: "What is a 'stop hunt'?", options: ["Searching for stop losses", "Price spiking to trigger stops before reversing", "A broker strategy", "A type of indicator"], correctIndex: 1, explanation: "A stop hunt is when price moves to a liquidity pool, triggers stops, then reverses in the opposite direction." }
        ]
      },
      {
        id: "7-2",
        title: "Market Structure Shifts",
        duration: "3 min read",
        summary: [
          "A shift (MSS) is a break of the current trend structure",
          "In an uptrend, MSS happens when price breaks below the last higher low",
          "MSS is more significant than a regular break of structure",
          "It signals that institutional order flow has changed"
        ],
        content: [
          "A Market Structure Shift (MSS) is a significant break of the prevailing trend structure that signals a potential reversal. It's more decisive than a simple break of structure.",
          "In an uptrend: Price has been making higher highs and higher lows. An MSS occurs when price breaks below the most recent higher low with strong momentum — typically with a large, decisive candle.",
          "In a downtrend: Price has been making lower highs and lower lows. An MSS happens when price breaks above the most recent lower high with conviction.",
          "What makes MSS different from a regular break of structure? The key is displacement — the break happens with strong momentum (large candles, engulfing patterns), suggesting institutional order flow has genuinely shifted.",
          "After identifying an MSS, look for the first pullback to enter in the new direction. This pullback often returns to an 'order block' (covered in the next lesson) before the new trend continues."
        ],
        interactiveComponent: "MarketStructureVisualizer",
        quiz: [
          { question: "When does an MSS occur in an uptrend?", options: ["When price makes a new high", "When price breaks below the last higher low", "When a candle closes bearish", "At any pullback"], correctIndex: 1, explanation: "An MSS in an uptrend happens when price breaks below the most recent higher low with strong momentum." },
          { question: "What distinguishes MSS from a regular break of structure?", options: ["They're the same", "Displacement — strong, decisive momentum", "MSS uses indicators", "MSS only happens on daily charts"], correctIndex: 1, explanation: "MSS is characterized by displacement — large, decisive candles showing genuine institutional order flow change." },
          { question: "What should you look for after an MSS?", options: ["Immediately enter", "Wait for the first pullback", "Close all trades", "Change timeframes"], correctIndex: 1, explanation: "After an MSS, look for the first pullback (often to an order block) to enter in the new direction." }
        ]
      },
      {
        id: "7-3",
        title: "Order Blocks",
        duration: "3 min read",
        summary: [
          "Order blocks are zones where institutions placed large orders",
          "Bullish OB: last bearish candle before a strong up-move",
          "Bearish OB: last bullish candle before a strong down-move",
          "Price often returns to order blocks before continuing the move"
        ],
        content: [
          "An order block (OB) is a zone on the chart where institutional traders placed significant buy or sell orders. These zones often act as powerful support or resistance when price returns to them.",
          "Bullish Order Block: The last bearish (down) candle before a strong bullish (up) move. This is where institutions were buying aggressively. When price returns to this zone, it often bounces up again.",
          "Bearish Order Block: The last bullish (up) candle before a strong bearish (down) move. This is where institutions were selling. Price returning here often gets rejected downward.",
          "How to trade them: Wait for an MSS or clear trend direction, then look for price to pull back to the most recent order block. Enter at the OB with a stop loss just beyond it.",
          "Key filters for high-quality OBs: They should be followed by a strong displacement move. They should break structure. The OB hasn't been tested (mitigated) before. Higher timeframe OBs are more significant."
        ],
        quiz: [
          { question: "What is a bullish order block?", options: ["The strongest bullish candle", "The last bearish candle before a strong up-move", "A cluster of buy orders", "A support level"], correctIndex: 1, explanation: "A bullish OB is the last bearish candle before a significant bullish displacement — where institutions were buying." },
          { question: "Why does price react at order blocks?", options: ["Random chance", "Institutions have unfilled orders at these levels", "Indicators cause it", "It's a self-fulfilling prophecy only"], correctIndex: 1, explanation: "Order blocks mark levels where institutions placed large orders — unfilled portions attract price back." },
          { question: "Which OBs are most significant?", options: ["Any OB", "Higher timeframe, untested OBs with displacement", "Only on 1-minute charts", "Only during news"], correctIndex: 1, explanation: "High-quality OBs are on higher timeframes, untested, and followed by strong displacement." }
        ]
      },
      {
        id: "7-4",
        title: "Fair Value Gaps",
        duration: "3 min read",
        summary: [
          "FVGs are gaps between three candles where price moved too fast",
          "They represent imbalance — inefficient price movement",
          "Price tends to return to fill these gaps",
          "FVGs can serve as entry zones or targets"
        ],
        content: [
          "A Fair Value Gap (FVG) is a three-candle pattern where the first candle's wick doesn't overlap with the third candle's wick, creating a 'gap' or imbalance in price.",
          "This gap forms because price moved so aggressively that orders couldn't fill at every price level. The gap represents unfilled orders and inefficient pricing.",
          "Why it matters: Markets tend toward efficiency. Price often returns to 'fill' or 'rebalance' these gaps before continuing. This makes FVGs excellent entry zones.",
          "Bullish FVG: Forms during a strong up-move. The gap between candle 1's high and candle 3's low is the FVG. Price pulling back into this zone is a potential buy entry.",
          "Trading FVGs: In a bullish trend after MSS, look for bullish FVGs as entry zones. Set your entry at the top of the FVG, stop loss below the FVG, and target the next significant level. FVGs on higher timeframes are more reliable."
        ],
        quiz: [
          { question: "What creates a Fair Value Gap?", options: ["Slow price movement", "Price moving too fast, creating imbalance", "Broker errors", "News events only"], correctIndex: 1, explanation: "FVGs form when price moves so aggressively that orders can't fill at every level, creating inefficiency." },
          { question: "What does price tend to do with FVGs?", options: ["Ignore them", "Return to fill/rebalance them", "Create more gaps", "Nothing predictable"], correctIndex: 1, explanation: "Markets seek efficiency — price tends to return to FVGs to fill unfilled orders before continuing." },
          { question: "How can FVGs be used in trading?", options: ["As stop loss levels only", "As entry zones when price pulls back", "They can't be used", "Only for exits"], correctIndex: 1, explanation: "FVGs serve as excellent entry zones — enter when price pulls back into the gap in the direction of the trend." }
        ]
      },
      {
        id: "7-5",
        title: "Liquidity Sweeps",
        duration: "3 min read",
        summary: [
          "A sweep is when price takes out a key level then immediately reverses",
          "It confirms that smart money grabbed liquidity",
          "Sweeps of previous highs/lows are powerful reversal signals",
          "Combine sweeps with MSS and OBs for high-probability trades"
        ],
        content: [
          "A liquidity sweep is the action of price moving beyond a key level (previous high/low) to trigger resting orders, then quickly reversing. It's the moment smart money strikes.",
          "Think of it this way: Price approaches a previous high. Retail traders have buy stops above it. Price pushes above, triggering those buy stops (giving institutional sellers the buyers they need), then reverses sharply.",
          "How to identify a valid sweep: Price takes out a clearly visible high or low. The move beyond the level is quick (usually a single candle wick). Price immediately reverses with momentum (displacement).",
          "Trading sweeps: Wait for the sweep to happen. Look for the reversal candle (often a pin bar or engulfing pattern). Enter on the reversal with a stop loss beyond the sweep's extreme.",
          "The most powerful setup combines: a liquidity sweep + market structure shift + entry at an order block or FVG. This triple confluence gives you institutional-grade entries."
        ],
        interactiveComponent: "LiquiditySweepSimulator",
        quiz: [
          { question: "What is a liquidity sweep?", options: ["A type of indicator", "Price taking out a key level and reversing", "High-volume trading", "A broker action"], correctIndex: 1, explanation: "A liquidity sweep is price moving beyond a key level to trigger orders, then quickly reversing." },
          { question: "What is the most powerful SMC setup?", options: ["Just order blocks", "Sweep + MSS + OB/FVG entry", "Only FVGs", "Random entries with tight stops"], correctIndex: 1, explanation: "Combining a liquidity sweep with a market structure shift and OB/FVG entry creates a high-probability trade." },
          { question: "How can you tell a sweep from a real breakout?", options: ["You can't", "Sweeps reverse quickly with displacement", "Sweeps happen slowly", "Only on gold"], correctIndex: 1, explanation: "Sweeps reverse quickly with strong momentum, while real breakouts continue and hold above the level." }
        ]
      },
      {
        id: "7-6",
        title: "Accumulation Manipulation Distribution (AMD)",
        duration: "3 min read",
        summary: [
          "AMD is a complete market cycle used by smart money",
          "Accumulation: building positions quietly in a range",
          "Manipulation: a fake move to grab liquidity",
          "Distribution: the real move where smart money takes profit"
        ],
        content: [
          "AMD is a framework for understanding how smart money operates within a trading session or on any timeframe. It stands for Accumulation, Manipulation, Distribution.",
          "Accumulation: Price consolidates in a range. Smart money quietly builds positions during this phase. On lower timeframes, this looks like a tight range or consolidation. It often occurs during the Asian session.",
          "Manipulation: The fake move. Price breaks out of the range in one direction — sweeping liquidity (stop losses) above or below the range. This is the trap that catches retail traders.",
          "Distribution: The real move. After the manipulation sweep, price reverses sharply and moves in the opposite direction — the true intended direction of smart money. This is where profits are made.",
          "Practical example: Asian session range forms (accumulation). London open pushes price below the range, sweeping lows (manipulation). Price reverses and trends upward for the rest of the day (distribution). Recognizing AMD in real-time is a powerful edge."
        ],
        quiz: [
          { question: "What is the 'manipulation' phase?", options: ["The real move", "A fake breakout to grab liquidity", "The consolidation phase", "After the trend"], correctIndex: 1, explanation: "Manipulation is the fake move that sweeps liquidity before the real move begins." },
          { question: "When does accumulation often happen?", options: ["During London session", "During Asian session or quiet periods", "During news events", "Only on weekends"], correctIndex: 1, explanation: "Accumulation typically occurs during quiet periods like the Asian session when price consolidates in a range." },
          { question: "What is the most profitable phase to trade?", options: ["Accumulation", "Manipulation", "Distribution", "All equally"], correctIndex: 2, explanation: "Distribution is the real, intended move where smart money takes profit — this is where you want to be positioned." }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Risk Management",
    description: "The most critical module. Master the systems that protect your capital and keep you in the game.",
    icon: "Shield",
    lessons: [
      {
        id: "8-1",
        title: "Risk-Reward Ratio",
        duration: "3 min read",
        summary: [
          "Risk-reward ratio compares potential loss to potential gain",
          "A 1:2 RR means you risk $1 to potentially make $2",
          "With 1:2 RR, you only need to win 34% of trades to be profitable",
          "Never take trades below 1:1 risk-reward"
        ],
        content: [
          "Risk-reward ratio (RR) is one of the most important concepts in trading. It measures how much you stand to gain versus how much you risk on each trade.",
          "A 1:2 RR means for every $1 you risk, your target profit is $2. If your stop loss is 10 pips, your take profit should be at least 20 pips.",
          "Here's why this matters mathematically: With a 1:2 RR, you only need to win 34% of your trades to break even. Win 40-50% and you're solidly profitable. This takes enormous pressure off your win rate.",
          "Compare to 1:1 RR — you need to win more than 50% just to break even (factoring in spreads). And if you take 1:0.5 trades (risking twice what you might make), you need to win over 67%.",
          "Rule: Never take a trade with less than 1:1 risk-reward, and aim for 1:2 or better. This single rule will transform your trading performance over time."
        ],
        toolLink: { label: "Calculate your risk", path: "/tools/risk-calculator" },
        quiz: [
          { question: "What does a 1:3 risk-reward ratio mean?", options: ["Risk $3 to make $1", "Risk $1 to make $3", "Win 3 out of 1 trade", "Lose 3 times in a row"], correctIndex: 1, explanation: "1:3 RR means you risk $1 with a potential reward of $3." },
          { question: "With a 1:2 RR, what win rate makes you profitable?", options: ["50%+", "34%+", "90%+", "100%"], correctIndex: 1, explanation: "At 1:2 RR, you only need to win about 34% of trades to break even, and above that you're profitable." },
          { question: "What is the minimum RR you should accept?", options: ["1:0.5", "1:1", "1:3", "No minimum"], correctIndex: 1, explanation: "Never take trades below 1:1 risk-reward. Aim for 1:2 or better." }
        ]
      },
      {
        id: "8-2",
        title: "Stop Loss Placement",
        duration: "3 min read",
        summary: [
          "Stop losses should be placed based on market structure, not arbitrary distance",
          "Place SL beyond the level that invalidates your trade idea",
          "Don't place stops at obvious levels — add buffer",
          "Never move SL further away from entry"
        ],
        content: [
          "Stop loss placement is an art. A stop that's too tight gets hit by normal market noise. A stop that's too wide risks too much capital. The solution: place stops based on market structure.",
          "The principle: Your stop loss should be at the point where your trade idea is invalidated. If you're buying at a support level, your SL goes below that support — because if price breaks below it, your reason for buying no longer exists.",
          "Add a buffer: If support is at $2,300, don't put your stop at $2,300. Put it at $2,295 or $2,290 to account for wicks and liquidity sweeps. Obvious stop levels get hunted.",
          "For order block entries: Place SL below the order block (for longs) or above it (for shorts). The OB body, not just the wick, should remain intact for your trade to be valid.",
          "Critical rule: NEVER move your stop loss further from entry. If price is approaching your SL, let it hit. Moving your stop turns a planned, small loss into an unplanned, potentially large one."
        ],
        quiz: [
          { question: "How should stop losses be placed?", options: ["At arbitrary pip distances", "Based on market structure", "At round numbers", "As tight as possible"], correctIndex: 1, explanation: "Stop losses should be placed at structural levels that invalidate your trade idea, not arbitrary distances." },
          { question: "Why add a buffer to stop losses?", options: ["To waste money", "To account for wicks and liquidity sweeps", "Stops always need 50 pips", "It's not necessary"], correctIndex: 1, explanation: "Adding buffer prevents getting stopped out by normal wicks and common stop hunts at obvious levels." },
          { question: "Should you ever move your SL further from entry?", options: ["Yes, to give it room", "No, never", "Only on winning trades", "Only during news"], correctIndex: 1, explanation: "Never move your SL further away. It turns planned small losses into unplanned large ones." }
        ]
      },
      {
        id: "8-3",
        title: "Position Sizing",
        duration: "3 min read",
        summary: [
          "Position size determines how much you make or lose per pip",
          "Always calculate based on your risk percentage, not gut feeling",
          "Formula: Lot Size = Risk Amount / (SL in pips × Pip Value)",
          "Use the Lot Size Calculator for every trade"
        ],
        content: [
          "Position sizing is arguably the most important calculation in trading. Get it wrong and even a winning strategy will lose money. Get it right and even a mediocre strategy stays in the game.",
          "The formula: Lot Size = Risk Amount / (Stop Loss in Pips × Pip Value per Lot). For a $100 account risking 1% with a 20-pip SL and $1/pip value: 1.00 / (20 × 1.0) = 0.05 lots.",
          "For gold (XAUUSD): Pip value varies by lot size. For 0.01 lot, typically $0.01 per pip (point). A 100-point stop loss on 0.01 lot risks about $1.00.",
          "Common mistake: Beginners pick a lot size that 'feels right' instead of calculating it based on their risk tolerance. This leads to inconsistent risk and inevitable account destruction.",
          "Use our Lot Size Calculator for every single trade. No exceptions. Even experienced traders use calculators — it's not a sign of weakness, it's professional risk management."
        ],
        toolLink: { label: "Calculate your lot size", path: "/tools/lot-size-calculator" },
        quiz: [
          { question: "What determines your lot size?", options: ["Gut feeling", "Your risk amount and stop loss distance", "The maximum your broker allows", "The same size every trade"], correctIndex: 1, explanation: "Lot size should be calculated based on your risk amount (% of account) divided by stop loss distance." },
          { question: "Should you use a lot size calculator?", options: ["No, experienced traders don't", "Yes, for every trade", "Only for large accounts", "Only when learning"], correctIndex: 1, explanation: "Every trader, regardless of experience, should calculate position size for every trade." },
          { question: "What's the risk formula?", options: ["Lot = Account / Price", "Lot = Risk Amount / (SL × Pip Value)", "Lot = Leverage × Balance", "Lot = Balance / 100"], correctIndex: 1, explanation: "Lot Size = Risk Amount / (Stop Loss in Pips × Pip Value per Lot)." }
        ]
      },
      {
        id: "8-4",
        title: "Trading Psychology",
        duration: "3 min read",
        summary: [
          "Fear and greed are the two emotions that destroy traders",
          "Develop a plan and follow it — no exceptions",
          "Accept that losses are part of the process",
          "Take breaks after losses — don't revenge trade"
        ],
        content: [
          "Your biggest enemy in trading isn't the market — it's yourself. Trading psychology is the number one factor that separates winners from losers.",
          "Fear manifests as: not taking valid setups (fear of loss), closing winners too early (fear of giving back profits), and moving stop losses (fear of being wrong).",
          "Greed manifests as: overtrading (wanting more), over-leveraging (wanting bigger profits), not taking profits (wanting even more), and averaging down on losers (hoping it comes back).",
          "The solution is simple but not easy: Create a detailed trading plan and follow it without deviation. Your plan should answer: What do I trade? When do I trade? How do I enter? Where is my SL/TP? How much do I risk?",
          "After a loss: Stop trading. Take a 15-minute break minimum. Review whether the trade followed your plan. If it did — it's a good loss. If it didn't — identify why you deviated. Never trade emotionally."
        ],
        quiz: [
          { question: "What are the two main destructive emotions in trading?", options: ["Excitement and boredom", "Fear and greed", "Hope and despair", "Confidence and doubt"], correctIndex: 1, explanation: "Fear and greed are the primary emotions that lead to poor trading decisions." },
          { question: "What should you do after a loss?", options: ["Take a bigger trade to recover", "Stop, take a break, review", "Keep trading to make it back", "Increase leverage"], correctIndex: 1, explanation: "After a loss, stop trading, take a break, and review whether the trade followed your plan." },
          { question: "What is the solution to emotional trading?", options: ["Use more indicators", "Create and follow a detailed plan", "Trade smaller timeframes", "Watch more YouTube"], correctIndex: 1, explanation: "A detailed, written trading plan that you follow without deviation removes emotional decision-making." }
        ]
      },
      {
        id: "8-5",
        title: "Trading Checklist",
        duration: "2 min read",
        summary: [
          "A checklist prevents impulsive trades",
          "Run through it BEFORE every trade without exception",
          "If any item fails, skip the trade",
          "Consistency in process creates consistency in results"
        ],
        content: [
          "Professional pilots use checklists before every flight, no matter how experienced. Professional traders should too. Here's your pre-trade checklist.",
          "✅ 1. Is the daily bias clear? (Don't trade in choppy/unclear markets) ✅ 2. Is price at a significant level? (S/R, OB, FVG — don't chase) ✅ 3. Is there a valid entry trigger? (Candle pattern, MSS, sweep)",
          "✅ 4. Is my stop loss placed at a structural level? ✅ 5. Is my risk-reward at least 1:2? ✅ 6. Have I calculated my lot size using the calculator?",
          "✅ 7. Am I trading during an active session? ✅ 8. Am I emotionally neutral? (Not angry, euphoric, or desperate) ✅ 9. Does this trade match my strategy rules?",
          "If ANY of these items gets a 'no,' skip the trade. No exceptions. The next setup is always around the corner. There is never a reason to take a substandard trade."
        ],
        interactiveComponent: "TradingChecklist",
        toolLink: { label: "Calculate your lot size", path: "/tools/lot-size-calculator" },
        quiz: [
          { question: "What should you do if one checklist item fails?", options: ["Take the trade anyway", "Skip the trade", "Adjust the checklist", "Trade with smaller size"], correctIndex: 1, explanation: "If any checklist item fails, skip the trade. There's always another opportunity." },
          { question: "When should you run the checklist?", options: ["After the trade", "Before every trade without exception", "Once a week", "Only on losing days"], correctIndex: 1, explanation: "The checklist should be completed before every single trade, no exceptions." },
          { question: "What creates consistency in trading results?", options: ["Trading more often", "Consistency in the process", "Using better indicators", "Having a larger account"], correctIndex: 1, explanation: "Following the same consistent process on every trade creates consistent results over time." }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Becoming a Good Trader",
    description: "Put it all together — strategy, discipline, broker selection, and placing your first trade.",
    icon: "Trophy",
    lessons: [
      {
        id: "9-1",
        title: "Example Trading Strategy",
        duration: "4 min read",
        summary: [
          "A complete strategy combining SMC concepts",
          "Uses multi-timeframe analysis with clear rules",
          "Focused on high-probability setups only",
          "Includes risk management rules"
        ],
        content: [
          "Here's a complete example strategy combining everything you've learned. This is a starting framework — adapt it as you gain experience.",
          "STRATEGY: SMC Pullback Entry. Timeframes: Daily (bias), 4H (structure), 15M (entry). Pairs: XAUUSD, EUR/USD. Sessions: London open, London/NY overlap only.",
          "Rules: 1) Identify daily bias (bullish/bearish). 2) On 4H, identify the most recent market structure shift in the direction of daily bias. 3) Mark the order block that caused the MSS. 4) Drop to 15M and wait for price to pull back to the OB. 5) Enter when you see a bullish/bearish engulfing or pin bar at the OB. 6) SL below the OB, TP at the next 4H structure level. Minimum 1:2 RR.",
          "Risk rules: Max 1% risk per trade. Max 2 trades per day. No trading during high-impact news. No trading if emotional. Must pass full checklist before entry.",
          "This strategy won't catch every move, but it filters for high-probability setups. Quality over quantity. Backtest this on historical charts before using real money."
        ],
        interactiveComponent: "TradeDecisionTrainer",
        toolLink: { label: "Calculate your position", path: "/tools/lot-size-calculator" },
        quiz: [
          { question: "How many timeframes does this strategy use?", options: ["One", "Two", "Three", "Four"], correctIndex: 2, explanation: "The strategy uses three timeframes: Daily for bias, 4H for structure, and 15M for entry." },
          { question: "What is the maximum risk per trade?", options: ["5%", "3%", "1%", "10%"], correctIndex: 2, explanation: "The strategy limits risk to 1% per trade to protect the account." },
          { question: "What should you do before using this strategy with real money?", options: ["Start immediately", "Backtest on historical charts", "Increase leverage", "Trade on every pair"], correctIndex: 1, explanation: "Always backtest a strategy on historical data before risking real money." }
        ]
      },
      {
        id: "9-2",
        title: "Consistency and Discipline",
        duration: "3 min read",
        summary: [
          "Consistency is the number one trait of profitable traders",
          "Follow the same process regardless of recent results",
          "Track every trade in a journal",
          "Small consistent gains compound into significant returns"
        ],
        content: [
          "The difference between amateur and professional traders isn't knowledge — it's consistency. Both might know the same setups, but the professional executes them the same way every single time.",
          "Consistency means: Same strategy every day. Same risk per trade every trade. Same pre-trade checklist. Same journaling process. No deviations based on emotion or recent results.",
          "After a winning streak: Don't increase risk. Don't deviate from your plan. Don't get cocky. Winners create confidence, and confidence creates mistakes if unchecked.",
          "After a losing streak: Don't increase risk to 'make it back.' Don't abandon your strategy. Review your journal — are you following the plan? If yes, losses are normal. If no, fix the deviation.",
          "Trading journal essentials: Date, pair, direction, entry price, SL, TP, lot size, result, screenshot, and — most importantly — notes on your emotional state and whether you followed your plan."
        ],
        quiz: [
          { question: "What separates professional from amateur traders?", options: ["More knowledge", "Better indicators", "Consistency in execution", "Larger accounts"], correctIndex: 2, explanation: "Consistency — following the same process regardless of recent results — separates pros from amateurs." },
          { question: "What should you do after a winning streak?", options: ["Increase risk", "Stay consistent with your plan", "Take bigger trades", "Stop trading"], correctIndex: 1, explanation: "After wins, maintain the same risk and process. Overconfidence from winning leads to mistakes." },
          { question: "What's the most important trading journal entry?", options: ["Profit/loss", "Whether you followed your plan and your emotional state", "The pair you traded", "Time of trade"], correctIndex: 1, explanation: "Tracking plan adherence and emotional state helps you identify and correct behavioral patterns." }
        ]
      },
      {
        id: "9-3",
        title: "Financial Literacy",
        duration: "3 min read",
        summary: [
          "Understand the difference between income and wealth",
          "Never trade money you can't afford to lose",
          "Build an emergency fund before trading with real money",
          "Trading profits should supplement, not replace, stable income initially"
        ],
        content: [
          "Before you trade with real money, let's talk about financial literacy. Trading shouldn't be your solution to financial problems — it should be a skill you develop while financially stable.",
          "Rule #1: Never trade money you can't afford to lose. If losing your trading capital would affect your rent, food, or bills, you're not ready to trade with real money. Use demo until you can afford it.",
          "Build an emergency fund: Before depositing into a trading account, have 3-6 months of expenses saved. This removes the desperation that destroys traders' psychology.",
          "Separate your trading capital: Your trading account should be money you've specifically set aside for this purpose. Don't dip into it for expenses, and don't add to it from savings meant for other goals.",
          "Long-term perspective: In the first year, trading profits should supplement your income, not replace it. Once you've proven consistent profitability over 6+ months, you can consider scaling up — but keep your day job until you do."
        ],
        quiz: [
          { question: "Should you trade money you need for bills?", options: ["Yes, to double it", "No, never trade money you can't afford to lose", "Only if you're confident", "Only on demo-tested strategies"], correctIndex: 1, explanation: "Trading money you need creates desperation which leads to emotional decisions and losses." },
          { question: "What should you build before trading with real money?", options: ["A larger trading account", "An emergency fund (3-6 months expenses)", "More knowledge only", "Nothing, just start"], correctIndex: 1, explanation: "An emergency fund removes financial pressure and allows you to trade with proper psychology." },
          { question: "When should trading replace your job?", options: ["Immediately", "After your first profit", "After 6+ months of consistent profitability", "Never"], correctIndex: 2, explanation: "Only consider full-time trading after proving consistent profitability over at least 6 months." }
        ]
      },
      {
        id: "9-4",
        title: "How to Choose a Broker",
        duration: "3 min read",
        summary: [
          "Always use a regulated broker",
          "Check for tight spreads, fast execution, and good reviews",
          "Start with a demo account before depositing",
          "Avoid brokers promising guaranteed returns"
        ],
        content: [
          "Choosing the right broker is crucial. A bad broker can cost you money through wide spreads, slow execution, or in worst cases, outright fraud.",
          "Regulation first: Only use brokers regulated by reputable bodies — FCA (UK), ASIC (Australia), CySEC (EU), or similar. Regulation means your funds are protected and the broker follows rules.",
          "Key factors to compare: Spreads (tighter is better), execution speed (faster is better), available instruments (ensure they have what you want to trade), minimum deposit, and leverage options.",
          "Read reviews from multiple sources. Look for patterns — if many users report withdrawal issues, that's a red flag. Individual negative reviews might be from poor traders blaming the broker.",
          "Start with demo: Any reputable broker offers a free demo account. Test their platform, execution, and spreads before depositing real money. This also lets you practice without risk."
        ],
        quiz: [
          { question: "What is the most important factor in choosing a broker?", options: ["Highest leverage", "Regulation by reputable bodies", "Best bonuses", "Most social media followers"], correctIndex: 1, explanation: "Regulation ensures your funds are protected and the broker operates fairly." },
          { question: "What is a red flag when researching brokers?", options: ["Low spreads", "Multiple reports of withdrawal issues", "Offering demo accounts", "Being regulated"], correctIndex: 1, explanation: "Consistent complaints about withdrawal problems are a serious red flag." },
          { question: "What should you do before depositing real money?", options: ["Deposit immediately for bonuses", "Test the demo account first", "Ask on social media", "Just pick the cheapest"], correctIndex: 1, explanation: "Always test a broker's platform, execution, and spreads via demo before committing real money." }
        ]
      },
      {
        id: "9-5",
        title: "How to Place Your First Trade",
        duration: "4 min read",
        summary: [
          "Start on demo — never skip this step",
          "Follow the 8-step trade setup process",
          "Start with micro lots on your first real trade",
          "The goal of your first real trade is process, not profit"
        ],
        content: [
          "You've made it to the final lesson. Here's how to transition from learning to actual trading.",
          "Step 1: Open a demo account with a regulated broker. Fund it with an amount similar to what you'd actually trade with ($50-100 for small accounts). Practice for at least 2-4 weeks.",
          "Step 2: On demo, follow the complete 8-step setup process for every trade. Journal every trade. The goal is not to make demo money — it's to prove you can follow your process consistently.",
          "Step 3: When you've had 20+ trades on demo with consistent process adherence (not necessarily all winners), you're ready for your first real trade.",
          "Step 4: Open a real account with the smallest deposit you're comfortable with. Use the smallest lot size available (0.01). Follow your exact same process. The goal of your first real trade is executing your process with real money — not making a profit.",
          "Remember: Every expert was once a beginner. The fact that you've completed this academy puts you ahead of 90% of people who start trading. Now execute with discipline."
        ],
        interactiveComponent: "TradeDecisionTrainer",
        toolLink: { label: "Calculate position for your first trade", path: "/tools/lot-size-calculator" },
        quiz: [
          { question: "How long should you practice on demo?", options: ["1 day", "At least 2-4 weeks", "6 months", "Demo isn't necessary"], correctIndex: 1, explanation: "Practice for at least 2-4 weeks on demo, focusing on process consistency." },
          { question: "What's the goal of your first real trade?", options: ["Make a big profit", "Prove your strategy works", "Execute your process with real money", "Impress others"], correctIndex: 2, explanation: "The first real trade is about proving you can follow your process with real money on the line." },
          { question: "How many demo trades before going live?", options: ["1-2", "5", "20+ with consistent process", "100+"], correctIndex: 2, explanation: "Have at least 20+ demo trades with consistent process adherence before transitioning to real money." }
        ]
      }
    ]
  }
];
