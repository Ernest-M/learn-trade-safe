export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  duration: string;
  introduction: string;
  summary: string[];
  content: string[];
  examples?: string[];
  keyTakeaways: string[];
  faq: FAQ[];
  relatedLessons: string[]; // slugs
  toolLink?: { label: string; path: string };
  interactiveComponent?: string;
  svgDiagram?: string; // diagram type identifier
  quiz: QuizQuestion[];
}

export interface Module {
  id: number;
  title: string;
  description: string;
  icon: string;
  lessons: Lesson[];
}

// Helper to find a lesson by slug across all modules
export function findLessonBySlug(slug: string): { module: Module; lesson: Lesson; lessonIndex: number } | null {
  for (const mod of modules) {
    const idx = mod.lessons.findIndex(l => l.slug === slug);
    if (idx !== -1) return { module: mod, lesson: mod.lessons[idx], lessonIndex: idx };
  }
  return null;
}

export function getAllLessons(): Lesson[] {
  return modules.flatMap(m => m.lessons);
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
        slug: "how-to-learn-trading",
        title: "How to Learn Trading Smarter Not Harder",
        seoTitle: "How to Learn Trading Smarter Not Harder | Beginner Guide",
        metaDescription: "Learn the best approach to studying forex trading. Focus on structured learning, journaling, and quality over quantity to build real trading skills.",
        duration: "3 min read",
        introduction: "Most beginners dive straight into charts, copying setups they saw on social media. This is the equivalent of learning surgery by watching YouTube — dangerous and ineffective. In this lesson, you'll learn the proven approach to building real trading skills efficiently.",
        summary: [
          "Focus on understanding concepts, not memorizing patterns",
          "Learning trading is a skill — treat it like one",
          "Quality screen time beats quantity",
          "Journaling accelerates learning"
        ],
        content: [
          "Trading is a skill that develops over time, like learning a language. You need structured practice, not random exposure. That means studying one concept at a time, understanding it deeply, then moving on.",
          "Smart learners focus on 'why' before 'what.' Instead of memorizing that a pin bar means reversal, understand why buyers stepped in at that level. This deeper understanding lets you adapt to changing markets.",
          "Keep a trading journal from day one — even on demo. Write down what you see, what you expect, what actually happens, and what you learned. This reflection loop is how professionals improve.",
          "Finally, quality beats quantity. One hour of focused study (reading, analyzing charts with intention) beats eight hours of staring at charts waiting for something to happen."
        ],
        examples: [
          "Example: Instead of watching 10 YouTube videos on different strategies, spend one hour studying support and resistance on 5 different chart examples. Draw the levels yourself and note where price reacted.",
          "Example: After each demo trade, write: 'I entered because... I expected... What actually happened was... Next time I would...'"
        ],
        keyTakeaways: [
          "Treat trading like a skill that takes months to develop",
          "Study one concept deeply before moving to the next",
          "Keep a trading journal from day one",
          "One hour of focused study beats eight hours of passive chart watching"
        ],
        faq: [
          { question: "How long does it take to learn trading?", answer: "Most traders need 6-12 months of structured study and practice before becoming consistently profitable. Focus on the process, not the timeline." },
          { question: "Do I need to watch charts all day?", answer: "No. Quality beats quantity. 1-2 hours of focused study and analysis is more effective than watching charts for 8+ hours." },
          { question: "What should I write in my trading journal?", answer: "Record your analysis, entry reason, expected outcome, actual outcome, emotions during the trade, and lessons learned." }
        ],
        relatedLessons: ["why-traders-fail", "realistic-expectations", "trading-psychology"],
        quiz: [
          { question: "What's the best approach to learning trading?", options: ["Copy setups from social media", "Study one concept deeply at a time", "Watch as many charts as possible", "Jump into live trading immediately"], correctIndex: 1, explanation: "Structured, deep learning of one concept at a time builds real understanding." },
          { question: "Why should you keep a trading journal?", options: ["To show others your trades", "To track profits only", "To reflect and accelerate learning", "It's not necessary"], correctIndex: 2, explanation: "Journaling creates a feedback loop that helps you learn from every trade." },
          { question: "What matters more in trading education?", options: ["Quantity of screen time", "Quality of focused study", "Number of indicators learned", "Speed of learning"], correctIndex: 1, explanation: "One hour of focused, intentional study beats eight hours of passive chart watching." }
        ]
      },
      {
        id: "1-2",
        slug: "why-traders-fail",
        title: "Why Most Traders Fail",
        seoTitle: "Why 90% of Traders Fail | Common Trading Mistakes",
        metaDescription: "Discover why 70-90% of retail traders lose money and how to avoid the most common mistakes: no plan, over-leveraging, emotional trading, and survivorship bias.",
        duration: "3 min read",
        introduction: "Studies consistently show that 70-90% of retail traders lose money. This isn't meant to scare you — it's meant to prepare you. Understanding why others fail is your first real edge in the markets.",
        summary: [
          "90% of retail traders lose money — this is a fact",
          "The main reasons: no plan, over-leveraging, emotional trading",
          "Survivorship bias makes trading look easier than it is",
          "Understanding failure helps you avoid common traps"
        ],
        content: [
          "Reason #1: No trading plan. Most beginners trade on impulse — they see a candle move and jump in. Without a plan that defines entries, exits, and risk, you're gambling.",
          "Reason #2: Over-leveraging. Brokers offer 1:500 leverage, and beginners use it all. One bad trade can wipe out an account in seconds. Leverage is a tool, not a strategy.",
          "Reason #3: Emotional trading. After a loss, beginners 'revenge trade' to make it back. After a win, they get overconfident and increase size. Both lead to account destruction.",
          "Reason #4: Survivorship bias. You see successful traders on social media but not the thousands who blew their accounts. The winners you see are the exception, not the rule.",
          "The good news? Every one of these failures is preventable. That's what this academy teaches — the habits and systems that keep you in the game long enough to become profitable."
        ],
        examples: [
          "Example: A trader with a $100 account uses 1:500 leverage to open a 0.5 lot position on gold. A 20-point move against them loses $100 — the entire account — in minutes.",
          "Example: After losing $20, a trader doubles their lot size to 'make it back.' They lose again, and now they're down $60 instead of $20."
        ],
        keyTakeaways: [
          "70-90% of retail traders lose money — education is essential",
          "Always have a written trading plan before entering any trade",
          "Never use maximum available leverage",
          "Emotional trading (revenge trading, overconfidence) destroys accounts"
        ],
        faq: [
          { question: "Is it true that 90% of traders lose money?", answer: "Yes, studies from multiple brokers show 70-90% of retail traders are unprofitable. The exact figure varies by broker and region." },
          { question: "What is revenge trading?", answer: "Revenge trading is making impulsive trades after a loss to try to recover quickly. It usually leads to even larger losses." },
          { question: "Can beginners actually become profitable?", answer: "Yes, but it requires structured education, proper risk management, and months of disciplined practice." }
        ],
        relatedLessons: ["how-to-learn-trading", "realistic-expectations", "most-important-rule"],
        svgDiagram: "failure-reasons",
        quiz: [
          { question: "What percentage of retail traders lose money?", options: ["10-20%", "30-40%", "50-60%", "70-90%"], correctIndex: 3, explanation: "Studies show 70-90% of retail traders lose money, making proper education essential." },
          { question: "What is 'revenge trading'?", options: ["Trading to get back at your broker", "Trading after a loss to recover quickly", "Trading the same pair twice", "A profitable strategy"], correctIndex: 1, explanation: "Revenge trading is emotional trading after a loss, trying to recover quickly — it usually makes things worse." },
          { question: "What is survivorship bias in trading?", options: ["Only successful traders survive", "We only see winners, not the majority who fail", "A trading strategy", "A type of market analysis"], correctIndex: 1, explanation: "Survivorship bias means we see successful traders on social media but not the thousands who lost everything." }
        ]
      },
      {
        id: "1-3",
        slug: "realistic-expectations",
        title: "Realistic Expectations in Trading",
        seoTitle: "Realistic Trading Expectations for Beginners",
        metaDescription: "Set realistic trading expectations. Learn why 2-5% monthly returns are excellent, how long it takes to become profitable, and why capital preservation comes first.",
        duration: "3 min read",
        introduction: "Social media shows traders turning $100 into $10,000 in a week. While theoretically possible, it requires extreme risk that will eventually destroy the account. Let's set realistic expectations that will actually keep you profitable long-term.",
        summary: [
          "Trading is not a get-rich-quick scheme",
          "Consistent 2-5% monthly returns are excellent",
          "It takes 6-12 months minimum to become competent",
          "Your first goal should be capital preservation, not profit"
        ],
        content: [
          "Professional fund managers aim for 15-25% annual returns. If a hedge fund with billions and teams of analysts targets that, what makes you think 100% monthly is realistic?",
          "For a beginner with a small account, here are realistic milestones: Month 1-3: Learn without losing. Month 4-6: Break even consistently. Month 7-12: Start seeing small, consistent profits.",
          "Your first and most important goal is capital preservation — keeping your money while you learn. A trader who preserves capital for 6 months while learning will outperform one who makes 50% in week one and blows the account in week two.",
          "Think of your small account as tuition. You're paying to learn. The real money comes later when you've developed the skill and can scale up responsibly."
        ],
        examples: [
          "Example: A $100 account growing at 3% monthly becomes $142 after 12 months. That's a 42% annual return — outperforming most hedge funds.",
          "Example: A trader who preserves $80 of their $100 account over 3 months of learning is in a MUCH better position than one who doubled to $200 then blew it to $0."
        ],
        keyTakeaways: [
          "2-5% monthly returns are considered excellent by professional standards",
          "Capital preservation is more important than profit in the first 6 months",
          "It takes 6-12 months to become a competent trader",
          "Treat your small account as tuition for learning"
        ],
        faq: [
          { question: "Can I turn $100 into $10,000?", answer: "Theoretically possible but it requires extreme risk-taking that will eventually wipe your account. Focus on learning the skill first, then scale up responsibly." },
          { question: "What returns should I expect as a beginner?", answer: "In months 1-3, focus on not losing money. Months 4-6, aim to break even. After 6+ months, 2-5% monthly is excellent." },
          { question: "Is $100 enough to start trading?", answer: "Yes, $100 is enough to learn with real money using micro lots (0.01). The goal is learning, not getting rich from $100." }
        ],
        relatedLessons: ["why-traders-fail", "most-important-rule", "financial-literacy"],
        quiz: [
          { question: "What is a realistic monthly return for a skilled trader?", options: ["50-100%", "2-5%", "200-500%", "0.01%"], correctIndex: 1, explanation: "Consistent 2-5% monthly returns are considered excellent even by professional standards." },
          { question: "What should be a beginner's first goal?", options: ["Double their account", "Capital preservation", "Find the best indicator", "Trade as much as possible"], correctIndex: 1, explanation: "Preserving your capital while learning is the foundation of long-term trading success." },
          { question: "How long does it typically take to become competent?", options: ["1 week", "1 month", "6-12 months", "It happens instantly"], correctIndex: 2, explanation: "It takes 6-12 months of structured learning and practice to become a competent trader." }
        ]
      },
      {
        id: "1-4",
        slug: "most-important-rule",
        title: "The Most Important Rule in Trading",
        seoTitle: "The 1% Risk Rule | Most Important Trading Rule",
        metaDescription: "Learn the most important rule in trading: never risk more than 1-2% per trade. Understand the math behind position sizing and why this rule keeps you in the game.",
        duration: "3 min read",
        introduction: "If you remember only one thing from this entire academy, let it be this: never risk more than 1-2% of your account on any single trade. This single rule separates traders who survive from those who blow their accounts.",
        summary: [
          "Never risk more than 1-2% of your account on a single trade",
          "This rule keeps you in the game during losing streaks",
          "Even 10 losses in a row won't destroy your account",
          "Risk management is the only edge every trader needs"
        ],
        content: [
          "Why? Because losing streaks happen to EVERYONE — even the best traders. If you risk 10% per trade, just 5 losses in a row (which is common) wipes out half your account. At 1% risk, those same 5 losses cost you only 5%.",
          "Let's do the math on a $100 account at 1% risk: you risk $1 per trade. Even after 10 consecutive losses (rare but possible), you still have $90. That's recoverable. At 10% risk, 10 losses = $35 remaining. Nearly impossible to recover.",
          "This rule also has a psychological benefit. When you know a single loss won't hurt you, you trade more calmly. Calm trading = better decisions = better results.",
          "Every tool in our Tools section is designed around this principle. The Risk Calculator tells you your dollar risk. The Lot Size Calculator sizes your position to match. Use them on every single trade."
        ],
        examples: [
          "Example: $100 account, 1% risk = $1 per trade. After 5 consecutive losses, you have $95. After 10 losses, $90. Still very tradeable.",
          "Example: $100 account, 10% risk = $10 per trade. After 5 losses, you have $50. After 10 losses, only $35. Devastating."
        ],
        keyTakeaways: [
          "Never risk more than 1-2% of your account on any single trade",
          "At 1% risk, even 10 consecutive losses only cost 10% of your account",
          "Small, controlled losses keep you psychologically stable",
          "Use the Risk Calculator and Lot Size Calculator on every trade"
        ],
        faq: [
          { question: "Why 1-2% and not 5%?", answer: "At 5% risk, just 10 losses in a row cuts your account nearly in half. At 1%, those same 10 losses cost only 10%. The math makes recovery much easier with lower risk." },
          { question: "Can I risk more if I'm very confident in a trade?", answer: "No. Consistency is key. Every 'high confidence' trade can lose. Stick to 1-2% regardless of how good the setup looks." },
          { question: "How do I calculate my risk per trade?", answer: "Use our Risk Calculator: Risk Amount = Account Balance × (Risk Percentage / 100). For a $100 account at 1% risk, that's $1 per trade." }
        ],
        relatedLessons: ["risk-reward-ratio", "position-sizing", "stop-loss-placement"],
        toolLink: { label: "Calculate your risk per trade", path: "/tools/risk-calculator" },
        svgDiagram: "risk-comparison",
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
        slug: "forex-market-basics",
        title: "Forex Market Basics",
        seoTitle: "What is Forex Trading? | Forex Market Basics Explained",
        metaDescription: "Learn forex market basics: what forex is, how currencies trade in pairs, daily volume of $7+ trillion, and how the 24/5 market operates across global sessions.",
        duration: "3 min read",
        introduction: "Forex (Foreign Exchange) is the global marketplace where currencies are traded. It's the largest financial market in the world with over $7 trillion traded daily — dwarfing the stock market. Understanding how this market works is the foundation of your trading education.",
        summary: [
          "Forex is the global market for exchanging currencies",
          "Daily volume exceeds $7 trillion",
          "Currencies trade in pairs like EUR/USD",
          "The market operates 24/5 across global sessions"
        ],
        content: [
          "When you travel and exchange money at the airport, you're participating in forex at the most basic level. In trading, we do this digitally through brokers, speculating on whether one currency will strengthen or weaken against another.",
          "Currencies always trade in pairs. EUR/USD means Euro vs US Dollar. The first currency (EUR) is the 'base' and the second (USD) is the 'quote.' If EUR/USD = 1.1000, one Euro costs $1.10.",
          "The forex market runs 24 hours a day, 5 days a week. It starts when markets open in Sydney on Monday and closes when New York closes on Friday. This continuous operation means opportunities exist around the clock.",
          "Key players include central banks, commercial banks, hedge funds, corporations, and retail traders like us. Retail traders make up about 5% of total volume."
        ],
        examples: [
          "Example: If EUR/USD moves from 1.1000 to 1.1050, the Euro strengthened by 50 pips against the Dollar. If you bought EUR/USD, you made a profit.",
          "Example: GBP/JPY = 188.50 means 1 British Pound costs 188.50 Japanese Yen."
        ],
        keyTakeaways: [
          "Forex is the largest financial market with $7+ trillion daily volume",
          "Currencies always trade in pairs (base/quote)",
          "The market runs 24 hours a day, 5 days a week",
          "Retail traders represent about 5% of total volume"
        ],
        faq: [
          { question: "What is a currency pair?", answer: "A currency pair shows the exchange rate between two currencies. EUR/USD = 1.1000 means 1 Euro = 1.10 US Dollars. The first currency is the 'base' and the second is the 'quote.'" },
          { question: "When is the forex market open?", answer: "The forex market runs 24 hours from Monday (Sydney open) to Friday (New York close). It's closed on weekends." },
          { question: "How much money do I need to start forex trading?", answer: "You can start with as little as $20-100 using micro lots (0.01). The goal with small accounts is learning, not getting rich quickly." }
        ],
        relatedLessons: ["how-trading-works", "who-moves-markets", "bid-ask-spread"],
        quiz: [
          { question: "What does 'Forex' stand for?", options: ["Foreign Exchange", "Forward Export", "Financial Exchange", "Future Exchange"], correctIndex: 0, explanation: "Forex stands for Foreign Exchange — the global currency market." },
          { question: "In EUR/USD, which is the base currency?", options: ["USD", "EUR", "Both", "Neither"], correctIndex: 1, explanation: "The first currency in the pair (EUR) is always the base currency." },
          { question: "How much is traded daily in forex?", options: ["$1 billion", "$100 billion", "$7+ trillion", "$500 million"], correctIndex: 2, explanation: "The forex market trades over $7 trillion per day." }
        ]
      },
      {
        id: "2-2",
        slug: "how-trading-works",
        title: "How Trading Works",
        seoTitle: "How Does Forex Trading Work? | Complete Beginner Guide",
        metaDescription: "Understand how forex trading works: going long vs short, how brokers operate, the components of every trade (entry, stop loss, take profit), and how profits are calculated.",
        duration: "3 min read",
        introduction: "Trading is simple in concept: buy something at a lower price, sell it at a higher price, and pocket the difference. In forex, you can also sell first and buy back later at a lower price. Here's everything you need to know about how trading actually works.",
        summary: [
          "You profit by buying low and selling high (or selling high and buying low)",
          "Going 'long' means buying, 'short' means selling",
          "Brokers provide the platform and access to markets",
          "Every trade has an entry, stop loss, and take profit"
        ],
        content: [
          "When you 'go long' (buy), you profit when the price rises. When you 'go short' (sell), you profit when the price falls. This is unique to forex — you can make money in both rising and falling markets.",
          "Brokers are the intermediaries that give you access. They provide trading platforms (like MetaTrader 5), execute your orders, and offer leverage. In return, they earn from spreads and sometimes commissions.",
          "Every trade should have three components: an entry point (where you get in), a stop loss (where you get out if wrong), and a take profit (where you take your gains). Trading without these is gambling.",
          "Your profit or loss depends on how many 'pips' or 'points' the price moves and how large your position is. We'll cover position sizing in the Risk Management module."
        ],
        examples: [
          "Example: You buy (go long) EUR/USD at 1.1000. Price rises to 1.1050. You close the trade and pocket 50 pips profit.",
          "Example: You sell (go short) gold at $2,350. Price drops to $2,330. You close and make $20 per lot."
        ],
        keyTakeaways: [
          "Going long (buying) profits when price rises; going short (selling) profits when price falls",
          "Every trade needs an entry, stop loss, and take profit",
          "Brokers earn from spreads and commissions",
          "Profit/loss depends on pip movement and position size"
        ],
        faq: [
          { question: "What does going short mean?", answer: "Going short means selling an asset you don't own, profiting when its price drops. You borrow it from the broker, sell high, then buy back lower." },
          { question: "What is a pip?", answer: "A pip is the smallest standard price movement. For most forex pairs, it's 0.0001 (4th decimal). For gold, one pip typically equals $0.01." },
          { question: "Do I need to use a stop loss?", answer: "Absolutely yes. A stop loss protects your capital by automatically closing a losing trade at a predetermined level. Never trade without one." }
        ],
        relatedLessons: ["forex-market-basics", "bid-ask-spread", "lots-and-leverage"],
        toolLink: { label: "Try the Lot Size Calculator", path: "/tools/lot-size-calculator" },
        quiz: [
          { question: "What does 'going short' mean?", options: ["Buying", "Selling", "Holding", "Waiting"], correctIndex: 1, explanation: "Going short means selling, profiting when the price falls." },
          { question: "What are the three components every trade should have?", options: ["Indicator, chart, candle", "Entry, stop loss, take profit", "Buy, hold, sell", "Open, close, pending"], correctIndex: 1, explanation: "Every trade needs a planned entry, stop loss (protection), and take profit (target)." },
          { question: "Can you profit when prices fall?", options: ["No, only when they rise", "Yes, by going short", "Only with special accounts", "Only professionals can"], correctIndex: 1, explanation: "By going short (selling), you profit when prices fall." }
        ]
      },
      {
        id: "2-3",
        slug: "who-moves-markets",
        title: "Who Moves the Markets",
        seoTitle: "Who Moves the Forex Market? | Market Participants Explained",
        metaDescription: "Learn who moves the forex market: central banks, institutional traders, hedge funds, and retail traders. Understand the market hierarchy and how to trade with smart money.",
        duration: "3 min read",
        introduction: "Understanding who moves the markets helps you understand why prices behave the way they do. The forex market has a hierarchy of participants, and knowing where you fit in is crucial for developing a winning approach.",
        summary: [
          "Central banks are the most powerful market movers",
          "Institutional traders (banks, hedge funds) control most volume",
          "Retail traders are the smallest participants",
          "Understanding market participants helps you trade smarter"
        ],
        content: [
          "At the top are central banks (Fed, ECB, BOJ). Their interest rate decisions and monetary policy directly determine currency values. A single Fed statement can move markets for weeks.",
          "Next are large institutional players — investment banks like JP Morgan, Goldman Sachs, and hedge funds. They trade massive volumes and their order flow creates the trends and levels we see on charts.",
          "Commercial companies also participate — businesses exchanging currencies for international trade. While their individual trades are smaller, collectively they represent significant volume.",
          "At the bottom are retail traders — you and me. We represent about 5% of daily volume. This means we don't move markets — we react to what the bigger players do. Smart retail traders learn to follow institutional footprints rather than fight them."
        ],
        examples: [
          "Example: When the US Federal Reserve raises interest rates, the dollar typically strengthens because higher rates attract foreign investment.",
          "Example: When institutional traders buy large amounts at a specific price level, that level becomes support — and we can see it on the chart."
        ],
        keyTakeaways: [
          "Central banks control monetary policy and are the most powerful market movers",
          "Institutional traders create the trends and levels visible on charts",
          "Retail traders represent ~5% of volume — follow institutional flow, don't fight it",
          "Understanding market participants helps predict price behavior"
        ],
        faq: [
          { question: "Can retail traders affect the market?", answer: "Individual retail traders can't move the market, but collectively retail order flow is visible as liquidity pools that institutional traders target." },
          { question: "What are institutional footprints?", answer: "Patterns left on charts by large orders — support/resistance levels, order blocks, and liquidity zones created by institutional buying or selling." },
          { question: "Should I trade against central bank policy?", answer: "Generally no. Central bank policy sets the long-term direction. Trading against it means fighting the most powerful force in the market." }
        ],
        relatedLessons: ["forex-market-basics", "liquidity", "market-structure"],
        quiz: [
          { question: "Who are the most powerful market movers?", options: ["Retail traders", "Central banks", "Small businesses", "Social media influencers"], correctIndex: 1, explanation: "Central banks control monetary policy and interest rates, making them the most influential market participants." },
          { question: "What percentage of daily volume do retail traders represent?", options: ["50%", "25%", "5%", "1%"], correctIndex: 2, explanation: "Retail traders make up approximately 5% of total daily forex volume." },
          { question: "What should retail traders do?", options: ["Try to move the market", "Follow institutional footprints", "Trade against banks", "Only trade news"], correctIndex: 1, explanation: "Smart retail traders learn to follow institutional order flow rather than fight it." }
        ]
      },
      {
        id: "2-4",
        slug: "common-forex-myths",
        title: "Common Myths About Forex",
        seoTitle: "5 Common Forex Trading Myths Debunked",
        metaDescription: "Debunk the top 5 forex trading myths: get-rich-quick schemes, more indicators equals better analysis, daily trading requirements, and demo vs live trading reality.",
        duration: "3 min read",
        introduction: "The forex world is full of myths that lead beginners astray. These misconceptions cost traders money and create unrealistic expectations. Let's debunk the most dangerous ones so you can start with the right mindset.",
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
        examples: [
          "Example: A chart with RSI, MACD, Bollinger Bands, Stochastic, and 3 moving averages gives conflicting signals. A clean chart with just support/resistance and price action gives clarity.",
          "Example: A trader who takes 5 high-quality trades per week outperforms one who takes 25 mediocre trades."
        ],
        keyTakeaways: [
          "Trading is a skill, not a get-rich-quick scheme",
          "Simple, clean charts outperform indicator-heavy setups",
          "Quality trades beat quantity — the best trade is sometimes no trade",
          "Demo is for learning mechanics; live trading adds emotional complexity"
        ],
        faq: [
          { question: "How many indicators should I use?", answer: "Most successful traders use 0-2 indicators combined with price action. Focus on understanding price rather than adding more tools." },
          { question: "Is forex a scam?", answer: "No, forex is a legitimate financial market. However, many scammers use forex as a front. Stick to regulated brokers and free education." },
          { question: "Should I skip demo and start with real money?", answer: "Never skip demo. Use it to learn platform mechanics and test your strategy. Then transition to real money with the smallest possible position size." }
        ],
        relatedLessons: ["why-traders-fail", "beginner-mistakes", "trading-psychology"],
        quiz: [
          { question: "Do more indicators lead to better analysis?", options: ["Yes, always", "No, simplicity often works better", "Only on certain timeframes", "You need at least 5"], correctIndex: 1, explanation: "More indicators create confusion. The best traders use simple, clean setups." },
          { question: "Is demo trading the same as real trading?", options: ["Yes, exactly the same", "No, real trading adds emotional pressure", "Demo is harder", "There's no difference"], correctIndex: 1, explanation: "Real money triggers fear and greed that demo accounts cannot simulate." },
          { question: "Should you trade every day?", options: ["Yes, to maximize profit", "No, quality setups matter more than frequency", "Only on weekdays", "At least 10 trades per day"], correctIndex: 1, explanation: "Overtrading is a common mistake. The best trades are the ones you patiently wait for." }
        ]
      },
      {
        id: "2-5",
        slug: "beginner-mistakes",
        title: "Beginner Mistakes Traders Make",
        seoTitle: "Top 5 Beginner Trading Mistakes to Avoid",
        metaDescription: "Avoid the most common beginner trading mistakes: trading without a plan, risking too much, chasing trades, moving stop losses, and not accepting losses.",
        duration: "3 min read",
        introduction: "Every experienced trader has made these mistakes at some point. The difference between success and failure is learning from them quickly. Here are the top 5 beginner mistakes and how to avoid each one.",
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
        examples: [
          "Example: Price drops 100 pips and starts recovering. A beginner buys 'because it must go back up.' Without analysis, this is gambling — price might drop another 200 pips.",
          "Example: You planned a 20-pip stop loss, but when price is 15 pips against you, you move the stop to 50 pips. The trade loses 50 pips instead of the planned 20."
        ],
        keyTakeaways: [
          "Every trade needs a written plan with entry, stop loss, and target",
          "Never risk more than 1-2% per trade regardless of confidence",
          "If you miss an entry, wait for the next setup — never chase",
          "Losses are normal; the key is keeping them small and controlled"
        ],
        faq: [
          { question: "Is it normal to lose trades?", answer: "Absolutely. Even the best traders lose 40-50% of their trades. Profitability comes from keeping losses small and wins larger (positive risk-reward)." },
          { question: "What is a trading plan?", answer: "A document that defines: what you trade, when you trade, your entry criteria, stop loss placement, take profit targets, and risk per trade. Follow it without deviation." },
          { question: "How do I stop chasing trades?", answer: "Accept that not every move is your trade. Set pending orders at your planned entry level. If price moves without you, wait for the next setup — there's always another opportunity." }
        ],
        relatedLessons: ["why-traders-fail", "most-important-rule", "trading-checklist"],
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
        slug: "bulls-vs-bears",
        title: "Bulls vs Bears",
        seoTitle: "Bulls vs Bears Explained | Bullish and Bearish Markets",
        metaDescription: "Understand bulls vs bears in trading: what bullish and bearish markets mean, how to identify who's in control, and how to trade with the dominant trend.",
        duration: "2 min read",
        introduction: "In trading, 'bulls' are buyers who expect prices to rise, and 'bears' are sellers who expect prices to fall. These terms come from how each animal attacks — a bull thrusts its horns up, a bear swipes its claws down.",
        summary: [
          "Bulls push prices up (buyers), bears push prices down (sellers)",
          "Bullish = expecting price to rise",
          "Bearish = expecting price to fall",
          "Markets alternate between bullish and bearish phases"
        ],
        content: [
          "When we say the market is 'bullish,' it means buyers are in control and prices are generally rising. A 'bearish' market means sellers dominate and prices are falling.",
          "Understanding whether the market is bullish or bearish helps you trade in the right direction. The saying 'the trend is your friend' means you should generally trade with the dominant side — not against it.",
          "Markets don't go straight up or down. Even in a strong uptrend, there are pullbacks (temporary drops). These pullbacks in an uptrend are where smart traders look to buy. In a downtrend, rallies are where smart traders look to sell.",
          "Your job as a trader is to identify who's in control — bulls or bears — and position yourself on the winning side."
        ],
        examples: [
          "Example: Gold rises from $2,200 to $2,400 over 3 months — this is a bullish market. Smart traders buy during pullbacks within this uptrend.",
          "Example: EUR/USD drops from 1.1200 to 1.0800 — this is a bearish market. Smart traders look for selling opportunities during temporary rallies."
        ],
        keyTakeaways: [
          "Bullish means buyers are in control; bearish means sellers dominate",
          "Always trade with the dominant trend — 'the trend is your friend'",
          "Buy during pullbacks in uptrends; sell during rallies in downtrends",
          "Identifying who's in control is the foundation of successful trading"
        ],
        faq: [
          { question: "What does bullish mean?", answer: "Bullish means buyers are in control and prices are expected to rise. It comes from a bull thrusting its horns upward." },
          { question: "Can I trade in both bullish and bearish markets?", answer: "Yes! In a bullish market, go long (buy). In a bearish market, go short (sell). Forex allows you to profit in both directions." },
          { question: "What is a pullback?", answer: "A pullback is a temporary move against the main trend. In an uptrend, it's a short dip before the upward movement continues. These are often ideal entry points." }
        ],
        relatedLessons: ["market-structure", "support-and-resistance", "market-cycles"],
        interactiveComponent: "MarketStructureVisualizer",
        svgDiagram: "bulls-bears",
        quiz: [
          { question: "What does 'bullish' mean?", options: ["Price is falling", "Price is expected to rise", "Market is closed", "High volatility"], correctIndex: 1, explanation: "Bullish means buyers are in control and prices are expected to rise." },
          { question: "In an uptrend, where do smart traders look to buy?", options: ["At the top", "During pullbacks", "At random times", "Only on Mondays"], correctIndex: 1, explanation: "Smart traders buy during pullbacks in an uptrend, getting better entry prices." },
          { question: "What does 'the trend is your friend' mean?", options: ["Always buy", "Trade with the dominant direction", "Never trade", "Trends don't exist"], correctIndex: 1, explanation: "It means trading in the direction of the trend increases your probability of success." }
        ]
      },
      {
        id: "3-2",
        slug: "market-structure",
        title: "Market Structure",
        seoTitle: "Market Structure Explained | Higher Highs, Lower Lows",
        metaDescription: "Learn market structure: higher highs, higher lows, lower highs, lower lows, and break of structure (BOS). The most important technical skill for traders.",
        duration: "3 min read",
        introduction: "Market structure is the backbone of price analysis. It's simply the pattern of swing highs (peaks) and swing lows (valleys) that price creates as it moves. Learning to read market structure is arguably the most important technical skill you can develop.",
        summary: [
          "Market structure is the pattern of highs and lows on a chart",
          "Uptrend = higher highs and higher lows",
          "Downtrend = lower highs and lower lows",
          "A break of structure signals a potential trend change"
        ],
        content: [
          "An uptrend is defined by higher highs (HH) and higher lows (HL). Each peak is higher than the last, and each valley is higher than the last. This shows buyers are consistently stronger.",
          "A downtrend is defined by lower highs (LH) and lower lows (LL). Each peak is lower, and each valley is lower. Sellers are in control.",
          "A 'break of structure' (BOS) occurs when price breaks a previous significant high or low. In an uptrend, if price breaks below the most recent higher low, it signals a potential shift from bullish to bearish.",
          "Learning to read market structure tells you the trend, potential reversal points, and where to look for trade entries."
        ],
        examples: [
          "Example: Gold makes a high at $2,380, pulls back to $2,350 (higher low), then breaks above $2,380 to $2,410 (higher high). This confirms a bullish market structure.",
          "Example: EUR/USD makes a high at 1.1000 (lower than the previous 1.1050), then breaks below the previous low. This is a bearish break of structure."
        ],
        keyTakeaways: [
          "Higher highs + higher lows = uptrend (bullish structure)",
          "Lower highs + lower lows = downtrend (bearish structure)",
          "Break of structure (BOS) signals potential trend reversal",
          "Market structure is the foundation of all technical analysis"
        ],
        faq: [
          { question: "What is a higher high?", answer: "A higher high occurs when price makes a new peak that is higher than the previous peak, confirming buyers are in control." },
          { question: "What does break of structure mean?", answer: "A break of structure (BOS) happens when price breaks a significant previous high or low, potentially signaling a trend change." },
          { question: "Which timeframe should I use for market structure?", answer: "Start with the Daily and 4-Hour charts for clear structure. Lower timeframes show more noise and less reliable structure." }
        ],
        relatedLessons: ["bulls-vs-bears", "support-and-resistance", "market-structure-shifts"],
        interactiveComponent: "MarketStructureVisualizer",
        svgDiagram: "market-structure",
        quiz: [
          { question: "What defines an uptrend?", options: ["Lower lows", "Higher highs and higher lows", "Flat movement", "Random movement"], correctIndex: 1, explanation: "An uptrend is characterized by price making higher highs and higher lows." },
          { question: "What is a 'break of structure'?", options: ["When your chart crashes", "When price breaks a previous significant high or low", "A candle pattern", "A type of indicator"], correctIndex: 1, explanation: "A break of structure occurs when price violates a previous significant swing point, signaling potential trend change." },
          { question: "What does a lower high followed by a lower low indicate?", options: ["Uptrend", "Downtrend", "Ranging market", "No significance"], correctIndex: 1, explanation: "Lower highs and lower lows define a downtrend — sellers are in control." }
        ]
      },
      {
        id: "3-3",
        slug: "support-and-resistance",
        title: "Support and Resistance",
        seoTitle: "Support and Resistance Explained | Key Trading Levels",
        metaDescription: "Learn support and resistance in trading: how to identify key price levels, the S/R flip concept, and why these zones are essential for every trading strategy.",
        duration: "3 min read",
        introduction: "Support and resistance are the most fundamental concepts in technical analysis. They represent price zones where the market has historically shown strong buying or selling interest. Mastering S/R is essential for every trading strategy.",
        summary: [
          "Support is a price zone where buying pressure is strong",
          "Resistance is where selling pressure is strong",
          "They can flip — broken support becomes resistance",
          "S/R zones are areas, not exact lines"
        ],
        content: [
          "Support is like a floor — a price zone where buyers step in and prevent further decline. If gold drops to $2,300 three times and bounces each time, $2,300 is a support zone.",
          "Resistance is like a ceiling — where sellers push price back down. If gold keeps failing to break above $2,400, that's resistance.",
          "The key insight: when support breaks, it often becomes resistance, and vice versa. This 'flip' is one of the most reliable phenomena in trading.",
          "Important: S/R levels are zones, not exact prices. Don't expect price to react to the exact cent. Allow for a range. The more times a level has been tested, the more significant it becomes."
        ],
        examples: [
          "Example: Gold bounces off $2,300 three times. The fourth time, it breaks below. Now $2,300 becomes resistance — price rallies back to $2,300 and gets rejected downward.",
          "Example: EUR/USD fails at 1.1000 resistance twice. When it finally breaks above, 1.1000 becomes support for future pullbacks."
        ],
        keyTakeaways: [
          "Support = price floor (buying interest); Resistance = price ceiling (selling interest)",
          "Broken support becomes resistance, and vice versa (S/R flip)",
          "S/R levels are zones, not exact prices — allow for a range",
          "The more times a level is tested, the more significant it is"
        ],
        faq: [
          { question: "How do I draw support and resistance?", answer: "Look for areas where price has bounced or been rejected multiple times. Draw horizontal lines/zones at these levels. Use the bodies and wicks of candles as guides." },
          { question: "Do support and resistance always hold?", answer: "No. Eventually every level breaks. The key is watching HOW price reacts at the level — strong rejection or weak bounce tells you if the level will hold." },
          { question: "What is the S/R flip?", answer: "When a support level is broken, it often becomes resistance (and vice versa). This happens because the zone retains significance as a decision point for traders." }
        ],
        relatedLessons: ["market-structure", "breakouts-vs-fakeouts", "order-blocks"],
        toolLink: { label: "Calculate your position size", path: "/tools/lot-size-calculator" },
        svgDiagram: "support-resistance",
        quiz: [
          { question: "What is a support level?", options: ["Where price always stops", "A zone where buying pressure tends to be strong", "A guaranteed reversal point", "The lowest price ever"], correctIndex: 1, explanation: "Support is a zone where buying interest historically prevents further decline." },
          { question: "What happens when support breaks?", options: ["Nothing", "It disappears", "It can become resistance", "Price always recovers"], correctIndex: 2, explanation: "Broken support levels often flip and become resistance." },
          { question: "Are S/R levels exact prices?", options: ["Yes, to the cent", "No, they are zones", "Only for gold", "Only on daily charts"], correctIndex: 1, explanation: "Support and resistance are zones, not exact price points." }
        ]
      },
      {
        id: "3-4",
        slug: "breakouts-vs-fakeouts",
        title: "Breakouts vs Fakeouts",
        seoTitle: "Breakouts vs Fakeouts | How to Avoid False Breakouts",
        metaDescription: "Learn the difference between real breakouts and fakeouts in trading. Discover why false breakouts happen and how to avoid the most common breakout trading traps.",
        duration: "3 min read",
        introduction: "A breakout occurs when price decisively moves beyond a support or resistance level. But not all breakouts are real — fakeouts (false breakouts) are one of the biggest traps for beginners. Here's how to tell the difference.",
        summary: [
          "A breakout is when price moves beyond a key level with momentum",
          "A fakeout is a false breakout that quickly reverses",
          "Fakeouts trap traders who enter too early",
          "Wait for confirmation before trading breakouts"
        ],
        content: [
          "Real breakouts are accompanied by strong momentum and often increased volume.",
          "A fakeout (or false breakout) happens when price briefly breaks a level but quickly reverses back. These are extremely common and are one of the biggest traps for beginners.",
          "Why do fakeouts happen? Large institutional players push price through key levels to trigger stop losses and pending orders (liquidity), then reverse the market in their intended direction.",
          "How to avoid fakeout traps: Don't enter on the initial break. Wait for a retest of the broken level. Look for confirmation candles (strong closes beyond the level). Check if the break aligns with the larger trend.",
          "A useful rule: 'The first breakout is usually a fake.' While not always true, this skeptical approach will save you from many losing trades."
        ],
        examples: [
          "Example: Gold resistance at $2,400. Price spikes to $2,410, triggering buy stops. Then immediately drops to $2,370. The spike above was a fakeout — a liquidity grab.",
          "Example: EUR/USD breaks above 1.1000 with a large bullish candle, retests 1.1000 as support, and continues higher. This is a confirmed breakout."
        ],
        keyTakeaways: [
          "Real breakouts show strong momentum and hold beyond the level",
          "Fakeouts reverse quickly — usually just a wick beyond the level",
          "Wait for a retest and confirmation before trading breakouts",
          "Fakeouts are caused by institutional liquidity grabs"
        ],
        faq: [
          { question: "How do I tell a breakout from a fakeout?", answer: "Wait for the candle to close beyond the level. A wick above/below without a close is often a fakeout. Real breakouts hold and retest the broken level as support/resistance." },
          { question: "Why are fakeouts so common?", answer: "Institutions need liquidity (opposing orders) to fill their large positions. They push price through key levels to trigger stop losses and pending orders." },
          { question: "Should I ever trade breakouts?", answer: "Yes, but wait for confirmation. The most reliable approach is to trade the retest after the breakout, not the initial break itself." }
        ],
        relatedLessons: ["support-and-resistance", "liquidity", "liquidity-sweeps"],
        interactiveComponent: "LiquiditySweepSimulator",
        quiz: [
          { question: "What is a fakeout?", options: ["A real breakout", "A false breakout that reverses quickly", "A type of candlestick", "A trading strategy"], correctIndex: 1, explanation: "A fakeout is when price briefly breaks a level but quickly reverses, trapping traders." },
          { question: "Why do fakeouts happen?", options: ["Random chance", "Institutions triggering liquidity", "Broker manipulation only", "They don't really happen"], correctIndex: 1, explanation: "Large players push price through levels to trigger stop losses and pending orders before reversing." },
          { question: "What should you do when price breaks a level?", options: ["Enter immediately", "Wait for confirmation and retest", "Close all trades", "Change timeframes"], correctIndex: 1, explanation: "Wait for confirmation — a retest and strong close beyond the level — before entering." }
        ]
      },
      {
        id: "3-5",
        slug: "market-cycles",
        title: "Market Cycles",
        seoTitle: "Market Cycles Explained | Accumulation, Markup, Distribution",
        metaDescription: "Understand the four phases of market cycles: accumulation, markup, distribution, and markdown. Learn how to identify each phase and adapt your trading approach.",
        duration: "3 min read",
        introduction: "Markets don't move randomly — they follow repeating cycles. Understanding these cycles gives you a framework for identifying where the market is and where it's likely to go next.",
        summary: [
          "Markets move in repeating cycles",
          "Four phases: accumulation, markup, distribution, markdown",
          "Understanding cycles helps you identify where the market is heading",
          "Each cycle phase requires a different approach"
        ],
        content: [
          "Phase 1 — Accumulation: After a downtrend, smart money starts quietly buying. Price moves sideways in a range. Volume may decrease. This is where big players build their positions.",
          "Phase 2 — Markup: Once enough positions are accumulated, price breaks out of the range and trends upward. This is the phase most traders want to catch. Momentum increases.",
          "Phase 3 — Distribution: After a significant uptrend, smart money starts selling their positions to latecomers. Price moves sideways at the top, similar to accumulation but at high prices.",
          "Phase 4 — Markdown: Selling pressure overwhelms buying, and price trends downward. This continues until smart money sees value again, and the cycle repeats with accumulation."
        ],
        examples: [
          "Example: Gold consolidates between $2,300-$2,350 for 2 weeks (accumulation), breaks above $2,350 and trends to $2,450 (markup), consolidates at $2,430-$2,450 (distribution), then drops back toward $2,350 (markdown).",
          "Example: You can see these cycles on any timeframe — from 5-minute charts to monthly charts."
        ],
        keyTakeaways: [
          "Markets cycle through accumulation → markup → distribution → markdown",
          "Smart money buys during accumulation and sells during distribution",
          "The markup phase is where most traders aim to participate",
          "Understanding which phase you're in helps you choose the right strategy"
        ],
        faq: [
          { question: "How do I identify which phase the market is in?", answer: "Look at the context: After a downtrend + sideways range = accumulation. Trending up = markup. After uptrend + sideways = distribution. Trending down = markdown." },
          { question: "Can I trade during accumulation and distribution?", answer: "Yes, but range-bound strategies work best (buy at the bottom, sell at the top of the range). Wait for the breakout for trending strategies." },
          { question: "Do market cycles always follow the same pattern?", answer: "The general pattern repeats but timing varies. Sometimes accumulation lasts days, sometimes weeks. Use structure and volume as confirmation." }
        ],
        relatedLessons: ["accumulation-distribution", "amd-cycle", "market-structure"],
        svgDiagram: "market-cycles",
        quiz: [
          { question: "What are the four phases of a market cycle?", options: ["Buy, sell, hold, wait", "Accumulation, markup, distribution, markdown", "Open, high, low, close", "Support, resistance, trend, range"], correctIndex: 1, explanation: "The four phases are accumulation (buying), markup (uptrend), distribution (selling), and markdown (downtrend)." },
          { question: "What happens during accumulation?", options: ["Price drops sharply", "Smart money quietly builds positions", "Everyone is buying", "Markets are closed"], correctIndex: 1, explanation: "During accumulation, smart money buys quietly while price consolidates in a range." },
          { question: "What phase do most traders want to catch?", options: ["Accumulation", "Markup", "Distribution", "Markdown"], correctIndex: 1, explanation: "The markup phase is where price trends upward and most traders want to be positioned." }
        ]
      },
      {
        id: "3-6",
        slug: "accumulation-distribution",
        title: "Accumulation and Distribution",
        seoTitle: "Accumulation and Distribution Zones in Trading",
        metaDescription: "Learn to identify accumulation and distribution zones where institutional traders position themselves. These zones signal the next major market move.",
        duration: "3 min read",
        introduction: "Accumulation and distribution are the quiet phases of the market cycle where smart money is positioning for the next big move. Learning to identify them is a game-changer for your trading.",
        summary: [
          "Accumulation zones form at market bottoms",
          "Distribution zones form at market tops",
          "Both appear as sideways ranges on the chart",
          "Identifying these zones gives you an institutional edge"
        ],
        content: [
          "Accumulation happens after a downtrend. Price enters a range and appears to be going nowhere. During this time, large players are buying from panic sellers. Clues: volume may spike on dips but price doesn't make new lows.",
          "Distribution happens after an uptrend. Price enters a range at the top. Smart money is selling to euphoric late buyers. Clues: volume may spike on rallies but price doesn't make new highs.",
          "The key difference from regular consolidation is intent. In accumulation, the eventual breakout is upward. In distribution, it's downward. While it's hard to tell in real-time, the context (what came before) gives clues.",
          "Trading approach: In suspected accumulation zones, look for longs on dips to the bottom of the range. In distribution, look for shorts on rallies to the top. Always wait for the breakout confirmation before getting aggressive."
        ],
        examples: [
          "Example: After gold drops from $2,400 to $2,250, it trades between $2,250-$2,280 for 2 weeks. Volume spikes on dips but price doesn't break below $2,250. This is likely accumulation — smart money buying.",
          "Example: After a rally to $2,450, gold ranges between $2,430-$2,450. Volume spikes on rallies but can't break $2,450. Likely distribution — smart money selling."
        ],
        keyTakeaways: [
          "Accumulation follows downtrends; distribution follows uptrends",
          "Both appear as sideways ranges but lead to opposite breakouts",
          "Volume clues help distinguish accumulation from distribution",
          "Wait for breakout confirmation before aggressive positioning"
        ],
        faq: [
          { question: "How long do accumulation zones last?", answer: "There's no fixed duration. They can last from a few hours (on lower timeframes) to several weeks (on daily charts). Higher timeframe accumulation is more significant." },
          { question: "Can I trade inside the range?", answer: "Yes. Buy at the bottom of the range with a tight stop below. Sell at the top. But be ready for the eventual breakout." },
          { question: "What is the Wyckoff method?", answer: "A framework developed by Richard Wyckoff that describes how smart money accumulates and distributes positions. It's the foundation of these concepts." }
        ],
        relatedLessons: ["market-cycles", "amd-cycle", "liquidity"],
        quiz: [
          { question: "Where do accumulation zones typically form?", options: ["At market tops", "At market bottoms after downtrends", "During uptrends", "At random"], correctIndex: 1, explanation: "Accumulation zones form at market bottoms as smart money buys from panic sellers." },
          { question: "What is the eventual expected breakout from distribution?", options: ["Upward", "Downward", "Sideways", "No breakout"], correctIndex: 1, explanation: "Distribution at market tops typically leads to a downward breakout as smart money has sold." },
          { question: "How can you tell accumulation from regular consolidation?", options: ["They look different on charts", "Context — what happened before the range", "You can't tell at all", "By using indicators only"], correctIndex: 1, explanation: "Context matters — accumulation follows downtrends, distribution follows uptrends." }
        ]
      },
      {
        id: "3-7",
        slug: "asset-correlations",
        title: "Asset Correlations",
        seoTitle: "Asset Correlations in Forex | Gold, Dollar, and Currency Pairs",
        metaDescription: "Understand asset correlations in forex: how gold and the US dollar relate, positive vs negative correlation between currency pairs, and how to avoid double exposure.",
        duration: "3 min read",
        introduction: "Asset correlation measures how two instruments move relative to each other. Understanding this helps you diversify risk and avoid accidentally doubling your exposure — a common mistake that catches many traders.",
        summary: [
          "Some assets move together (positive correlation)",
          "Others move opposite (negative correlation)",
          "Gold and USD often have an inverse correlation",
          "Understanding correlations prevents double exposure"
        ],
        content: [
          "Positive correlation: Assets that tend to move in the same direction. EUR/USD and GBP/USD are positively correlated — when the dollar weakens, both tend to rise.",
          "Negative correlation: Assets that tend to move in opposite directions. Gold (XAUUSD) and the US Dollar Index (DXY) are typically negatively correlated — when the dollar strengthens, gold often falls.",
          "Why this matters: If you buy both EUR/USD and GBP/USD, you're essentially doubling your dollar-short position. If the dollar strengthens, both trades lose. You think you're diversified, but you're not.",
          "Key correlations to know: Gold ↔ USD (inverse), EUR/USD ↔ GBP/USD (positive), USD/JPY ↔ US bond yields (positive), Oil ↔ CAD (positive). Use these relationships as confirmation tools."
        ],
        examples: [
          "Example: You buy EUR/USD and GBP/USD simultaneously. Both are dollar-short trades. If the dollar strengthens, you lose on BOTH — your risk is doubled.",
          "Example: Gold is rising while the US dollar is falling. This confirms the inverse correlation and strengthens your bullish gold thesis."
        ],
        keyTakeaways: [
          "Positively correlated assets move together (EUR/USD and GBP/USD)",
          "Negatively correlated assets move opposite (Gold and US Dollar)",
          "Trading two positively correlated pairs doubles your exposure",
          "Use correlations as confirmation tools, not trading signals alone"
        ],
        faq: [
          { question: "Does gold always move opposite to the dollar?", answer: "Usually, but not always. During extreme risk events, both gold and the dollar can rise simultaneously as 'safe havens.' The correlation is strong but not absolute." },
          { question: "How many correlated pairs can I trade at once?", answer: "Avoid having more than 2 positions in highly correlated pairs. If you trade EUR/USD and GBP/USD simultaneously, treat your total risk as doubled." },
          { question: "Where can I check asset correlations?", answer: "Many free online tools show correlation matrices. Check the 30-day and 90-day correlations for the pairs you trade." }
        ],
        relatedLessons: ["forex-market-basics", "who-moves-markets", "best-trading-sessions"],
        quiz: [
          { question: "What does negative correlation mean?", options: ["Assets move together", "Assets move in opposite directions", "No relationship", "Both go down"], correctIndex: 1, explanation: "Negative correlation means when one asset rises, the other tends to fall." },
          { question: "What happens if you buy EUR/USD and GBP/USD?", options: ["You're diversified", "You've doubled your dollar-short exposure", "They cancel out", "No relationship"], correctIndex: 1, explanation: "Both trades profit when the dollar weakens — you've doubled your exposure to the same risk." },
          { question: "What is gold's typical relationship with the USD?", options: ["Positive (move together)", "Inverse (move opposite)", "No relationship", "They always match"], correctIndex: 1, explanation: "Gold and the US dollar typically have an inverse correlation — when one rises, the other tends to fall." }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Trading Mechanics",
    description: "Understand bid/ask, lots, leverage, slippage, and order types — the mechanics that affect every trade.",
    icon: "Settings",
    lessons: [
      {
        id: "4-1",
        slug: "bid-ask-spread",
        title: "Bid, Ask, and Spread",
        seoTitle: "Bid, Ask & Spread Explained | Trading Costs",
        metaDescription: "Learn what bid, ask, and spread mean in forex trading. Understand how the spread affects your trading costs and how to minimize its impact on your profits.",
        duration: "3 min read",
        introduction: "Every time you open a trade, you pay a cost called the spread. Understanding the bid, ask, and spread is essential for calculating your true trading costs and why some instruments are cheaper to trade than others.",
        summary: [
          "Bid is the price you sell at, ask is the price you buy at",
          "The spread is the difference between bid and ask",
          "Spread is your primary trading cost",
          "Lower spreads save you money on every trade"
        ],
        content: [
          "In any market, there are always two prices: the bid (the price someone is willing to buy at) and the ask (the price someone is willing to sell at). The ask is always higher than the bid.",
          "When you buy, you enter at the ask price. When you sell, you enter at the bid price. The difference — the spread — goes to the broker. This is how most brokers make money.",
          "For gold (XAUUSD), a typical spread might be 20-50 cents ($0.20-$0.50). For EUR/USD, it might be 1-2 pips (0.0001-0.0002). These costs add up over hundreds of trades.",
          "When you open a trade, you start slightly negative because of the spread. Price needs to move by at least the spread amount in your favor before you break even. This is why tight spreads matter — every pip of spread cuts into your profit.",
          "Tips: Trade during peak hours (London/NY) for tighter spreads. Avoid trading during news events when spreads widen significantly. Compare broker spreads before choosing one."
        ],
        examples: [
          "Example: Gold bid = $2,350.00, ask = $2,350.30. The spread is $0.30 (30 points). When you buy at $2,350.30, price must rise above $2,350.30 for you to profit.",
          "Example: EUR/USD bid = 1.10000, ask = 1.10015. The spread is 1.5 pips. You pay this cost on every round-trip trade."
        ],
        keyTakeaways: [
          "Bid = selling price, Ask = buying price, Spread = the difference",
          "The spread is your primary cost — price must move past it before you profit",
          "Spreads are tighter during peak trading hours (London/NY sessions)",
          "Always factor spread into your stop loss and profit calculations"
        ],
        faq: [
          { question: "Why does the spread change?", answer: "Spreads widen during low liquidity (Asian session, holidays) and high-impact news events. They're tightest during London/NY overlap when liquidity is highest." },
          { question: "Is a wider spread always bad?", answer: "Generally yes, but some instruments naturally have wider spreads (like exotic pairs). The key is comparing the spread to your expected profit — if the spread is a large % of your target, it's too expensive." },
          { question: "Should I factor the spread into my stop loss?", answer: "Yes! Your actual entry price includes the spread. If you buy with a 20-pip stop, your effective risk is 20 pips PLUS the spread." }
        ],
        relatedLessons: ["how-trading-works", "lots-and-leverage", "slippage"],
        quiz: [
          { question: "What is the spread?", options: ["The total price", "The difference between bid and ask", "Your profit", "The leverage ratio"], correctIndex: 1, explanation: "The spread is the difference between the buying (ask) and selling (bid) price." },
          { question: "Who benefits from the spread?", options: ["The trader", "The broker", "The central bank", "Nobody"], correctIndex: 1, explanation: "Brokers earn revenue from the spread on every trade." },
          { question: "When are spreads typically tightest?", options: ["During holidays", "During high-impact news", "During London/NY overlap", "On weekends"], correctIndex: 2, explanation: "Spreads are tightest when liquidity is highest — during the London/NY overlap." }
        ]
      },
      {
        id: "4-2",
        slug: "lots-and-leverage",
        title: "Lots and Leverage",
        seoTitle: "Lots and Leverage Explained | Forex Position Sizing",
        metaDescription: "Understand lots and leverage in forex trading: standard, mini, and micro lots, how leverage amplifies both profits and losses, and why beginners should use low leverage.",
        duration: "3 min read",
        introduction: "Lots determine the size of your trade, and leverage determines how much of your own money you need. Together, they're the mechanics behind every position you open — and the most common source of account-blowing mistakes for beginners.",
        summary: [
          "Standard lot = 100,000 units, mini = 10,000, micro = 1,000",
          "Leverage lets you control larger positions with less capital",
          "1:100 leverage means $100 controls $10,000",
          "Higher leverage = higher risk — beginners should use low leverage"
        ],
        content: [
          "Lots measure trade size. A standard lot = 100,000 units of the base currency. A mini lot = 10,000 (0.1 lot). A micro lot = 1,000 (0.01 lot). For gold, lot sizes work differently — 1 lot = 100 ounces.",
          "Leverage is borrowed capital from your broker. 1:100 leverage means for every $1 you have, you can control $100. A $100 account with 1:100 leverage can open positions worth $10,000.",
          "This sounds great, but leverage amplifies BOTH profits AND losses. A 1% move against a fully leveraged position can wipe out your account. This is why most beginners lose money.",
          "For small accounts ($20-$100): Use micro lots (0.01) and treat leverage as a tool, not a strategy. The Lot Size Calculator will tell you exactly what lot size to use based on your risk percentage.",
          "Golden rule: Just because your broker offers 1:500 leverage doesn't mean you should use it. Calculate your lot size based on risk percentage, not maximum available leverage."
        ],
        examples: [
          "Example: $100 account, 1:100 leverage. You can control $10,000. But a 1% move against you = $100 loss = entire account gone.",
          "Example: Same $100 account, 0.01 lot on gold with 50-pip stop loss. Risk = approximately $0.50. This is controlled, sustainable trading."
        ],
        keyTakeaways: [
          "Use micro lots (0.01) for small accounts",
          "Leverage amplifies both profits AND losses equally",
          "Calculate lot size from risk %, not maximum available leverage",
          "Higher leverage ≠ better trading — it means higher risk"
        ],
        faq: [
          { question: "What lot size should I use on a $50 account?", answer: "Use 0.01 lots (micro lot) with 1% risk. This keeps your risk at $0.50 per trade, allowing you to survive losing streaks while learning." },
          { question: "Is high leverage dangerous?", answer: "High leverage itself isn't dangerous — using too much of it is. A $100 account with 1:500 leverage CAN open massive positions, but SHOULD only open 0.01-0.02 lots." },
          { question: "What is a margin call?", answer: "When your losses approach your available margin, the broker issues a margin call. If you don't add funds or close positions, they'll automatically close your trades (stop out)." }
        ],
        relatedLessons: ["position-sizing", "most-important-rule", "bid-ask-spread"],
        toolLink: { label: "Calculate your lot size", path: "/tools/lot-size-calculator" },
        quiz: [
          { question: "What is a micro lot?", options: ["100,000 units", "10,000 units", "1,000 units (0.01)", "1 unit"], correctIndex: 2, explanation: "A micro lot is 1,000 units or 0.01 lots — the smallest standard lot size." },
          { question: "What does 1:100 leverage mean?", options: ["You can lose 100x your deposit", "Your $1 controls $100 in the market", "You need $100 to start", "You get 100 trades free"], correctIndex: 1, explanation: "1:100 leverage means every $1 of your capital controls $100 in market exposure." },
          { question: "Should beginners use maximum leverage?", options: ["Yes, for maximum profit", "No, use low effective leverage", "Only on gold", "Leverage doesn't matter"], correctIndex: 1, explanation: "Beginners should use low effective leverage by sizing positions based on risk percentage, not maximum available leverage." }
        ]
      },
      {
        id: "4-3",
        slug: "slippage",
        title: "Slippage",
        seoTitle: "What is Slippage in Trading? | How to Minimize It",
        metaDescription: "Learn what slippage is in forex trading, why it happens during volatile markets, how it affects your trades, and strategies to minimize slippage on your orders.",
        duration: "2 min read",
        introduction: "Slippage occurs when your order executes at a different price than expected. It can happen to any trader, and understanding it helps you plan better entries and manage risk more accurately.",
        summary: [
          "Slippage is when your order fills at a different price than expected",
          "Most common during high volatility and low liquidity",
          "Can be positive (better price) or negative (worse price)",
          "Use limit orders to reduce slippage risk"
        ],
        content: [
          "Slippage happens because markets move so fast that by the time your order reaches the server, the price has changed. It's most common during major news events, market opens, and periods of low liquidity.",
          "Negative slippage: Your order fills at a worse price. You wanted to buy at $2,350 but got filled at $2,351. You start 10 points further from your target.",
          "Positive slippage: Your order fills at a better price. You wanted to sell at $2,350 but got filled at $2,351. You start 10 points closer to your target.",
          "How to minimize slippage: Use limit orders instead of market orders. Trade during high-liquidity sessions (London/NY). Avoid trading during major news releases. Choose a broker with fast execution.",
          "Factor slippage into your risk: If your stop loss is 20 pips, actual risk might be 22-25 pips with slippage during volatile periods. Always add a small buffer."
        ],
        examples: [
          "Example: You set a stop loss at $2,340. During an NFP news release, price gaps to $2,335. Your stop fills at $2,335, not $2,340 — that's 50 points of slippage.",
          "Example: You place a buy limit at $2,300. Price drops to $2,298 and your order fills at $2,298 — positive slippage of 20 points."
        ],
        keyTakeaways: [
          "Slippage is the difference between expected and actual fill price",
          "High volatility and low liquidity increase slippage risk",
          "Limit orders reduce slippage; market orders are most vulnerable",
          "Always add a buffer to your stop loss for potential slippage"
        ],
        faq: [
          { question: "Can I avoid slippage completely?", answer: "No, slippage is a natural part of trading. You can minimize it by using limit orders and trading during high-liquidity sessions, but some slippage is inevitable." },
          { question: "Does slippage always lose me money?", answer: "No. Slippage can be positive (better fill) or negative (worse fill). Over time, positive and negative slippage tend to balance out in liquid markets." },
          { question: "Is slippage worse on certain instruments?", answer: "Yes. Exotic currency pairs and less-traded instruments have wider spreads and more slippage. Major pairs like EUR/USD and gold (XAUUSD) have the least slippage." }
        ],
        relatedLessons: ["bid-ask-spread", "order-types", "best-trading-sessions"],
        quiz: [
          { question: "What causes slippage?", options: ["Broker errors only", "Fast-moving markets and low liquidity", "Trading too often", "Using mobile apps"], correctIndex: 1, explanation: "Slippage occurs when market prices change between order placement and execution, common during volatility." },
          { question: "When is slippage most likely?", options: ["During quiet markets", "During high volatility or low liquidity", "Only on weekends", "During London session"], correctIndex: 1, explanation: "Slippage is most common during volatile events or when liquidity is thin." },
          { question: "Which order type reduces slippage risk?", options: ["Market order", "Limit order", "Stop order", "All are the same"], correctIndex: 1, explanation: "Limit orders let you specify exact fill prices, reducing slippage risk." }
        ]
      },
      {
        id: "4-4",
        slug: "order-types",
        title: "Order Types",
        seoTitle: "Forex Order Types Explained | Market, Limit, Stop Orders",
        metaDescription: "Learn all forex order types: market orders, limit orders, stop orders, stop loss, and take profit. Understand when and how to use each order type for precise trade control.",
        duration: "3 min read",
        introduction: "Order types are the tools that give you precise control over your entries and exits. Understanding when to use each type is essential for executing your trading plan exactly as intended.",
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
        examples: [
          "Example: You want to buy gold NOW at $2,350 — use a market order. It fills instantly at the best available price.",
          "Example: You want to buy gold only if it drops to $2,320 — use a buy limit order at $2,320. It waits until price reaches your level."
        ],
        keyTakeaways: [
          "Market orders = instant execution at current price",
          "Limit orders = pending orders for better entry prices",
          "Stop loss = automatic loss protection (ALWAYS use one)",
          "Take profit = automatic profit-taking at your target"
        ],
        faq: [
          { question: "Which order type should beginners use most?", answer: "Beginners should master limit orders for entries (better prices) and ALWAYS use stop loss and take profit orders to automate their exit plan." },
          { question: "Can I change my order after placing it?", answer: "Yes, you can modify pending orders (limit/stop) before they're triggered. You can also modify stop loss and take profit levels on open positions." },
          { question: "What happens if my limit order never triggers?", answer: "If price doesn't reach your limit price, the order stays pending. You can cancel it manually or set an expiry time." }
        ],
        relatedLessons: ["how-trading-works", "slippage", "stop-loss-placement"],
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
        slug: "best-trading-sessions",
        title: "Best Trading Sessions",
        seoTitle: "Best Forex Trading Sessions & Hours | When to Trade",
        metaDescription: "Learn the best trading sessions: London, New York, and the London/NY overlap. Discover optimal trading hours for forex and gold to maximize your opportunities.",
        duration: "3 min read",
        introduction: "Not all trading hours are created equal. The best trading happens during the most liquid market sessions when spreads are tight and price moves are cleaner. Here's your guide to trading the right hours.",
        summary: [
          "London session (08:00-17:00 GMT) is ideal for most pairs",
          "New York session (13:00-22:00 GMT) brings US-driven volatility",
          "The London/NY overlap is the most active period",
          "Match your trading to the most liquid sessions for your instruments"
        ],
        content: [
          "The London session (08:00-17:00 GMT) is the largest trading session, accounting for about 35% of daily volume. It offers excellent liquidity and clear price moves for forex and gold.",
          "The New York session (13:00-22:00 GMT) is the second-largest. US economic data releases during this session can create significant moves. The US dollar's dominance makes this session crucial.",
          "The London/New York overlap (13:00-17:00 GMT) is the golden window. Both major centers are active, liquidity is at its peak, and this is when the largest daily moves often occur.",
          "For gold (XAUUSD) specifically, the most profitable hours are typically during London open (08:00-10:00 GMT) and the London/NY overlap. These are when institutional traders are most active."
        ],
        examples: [
          "Example: Gold's biggest daily move often occurs between 08:00-10:00 GMT (London open) or 13:30-15:00 GMT (US data releases + overlap).",
          "Example: A trader who only trades the 13:00-17:00 GMT overlap captures the most volatile and liquid 4-hour window of the day."
        ],
        keyTakeaways: [
          "London session = highest volume, best liquidity (~35% of daily volume)",
          "London/NY overlap (13:00-17:00 GMT) = the best trading window",
          "Gold is most active during London open and the overlap",
          "Trading during peak sessions = tighter spreads and cleaner moves"
        ],
        faq: [
          { question: "Can I trade during the Asian session?", answer: "You can, but volatility and volume are lower. The Asian session (00:00-08:00 GMT) is best for AUD, NZD, and JPY pairs. It's typically quiet for gold and EUR/USD." },
          { question: "What is the London/NY overlap?", answer: "The 4-hour window (13:00-17:00 GMT) when both London and New York are actively trading. This creates peak liquidity and the day's biggest moves." },
          { question: "Do I need to trade every session?", answer: "No. Pick one session that fits your schedule and trade it consistently. Consistency in timing leads to consistency in results." }
        ],
        relatedLessons: ["worst-times-to-trade", "london-vs-new-york", "custom-timing-strategies"],
        interactiveComponent: "SessionHeatmap",
        svgDiagram: "trading-sessions",
        quiz: [
          { question: "Which session has the highest daily volume?", options: ["Tokyo", "London", "New York", "Sydney"], correctIndex: 1, explanation: "London accounts for approximately 35% of daily forex volume, the highest of any session." },
          { question: "When is the London/NY overlap?", options: ["00:00-04:00 GMT", "08:00-12:00 GMT", "13:00-17:00 GMT", "20:00-00:00 GMT"], correctIndex: 2, explanation: "The overlap runs from 13:00 to 17:00 GMT when both major centers are active." },
          { question: "When is gold most active?", options: ["Asian session", "London open and London/NY overlap", "Weekend", "Equally all sessions"], correctIndex: 1, explanation: "Gold sees its strongest moves during London open and the London/NY overlap." }
        ]
      },
      {
        id: "5-2",
        slug: "worst-times-to-trade",
        title: "Worst Times to Trade",
        seoTitle: "Worst Times to Trade Forex | When to Avoid the Market",
        metaDescription: "Learn when NOT to trade: late Asian session, major holidays, Friday afternoons, and high-impact news events. Avoid these times to protect your trading account.",
        duration: "2 min read",
        introduction: "Knowing when NOT to trade is as important as knowing when to trade. Bad timing leads to wider spreads, unexpected slippage, and choppy price action that traps traders.",
        summary: [
          "Late Asian session is low liquidity for most pairs",
          "Major holiday periods have thin markets",
          "Fridays after 18:00 GMT — markets wind down",
          "During high-impact news if you're a beginner"
        ],
        content: [
          "The late Asian session (04:00-07:00 GMT) is typically quiet for forex and gold. Price often consolidates in tight ranges, and breakouts during this period frequently fail.",
          "Major holidays (Christmas week, US Thanksgiving, New Year) see dramatically reduced volume. The fewer participants, the more erratic price behavior becomes — whipsaws and fakeouts increase.",
          "Friday afternoons, especially after 18:00 GMT, are risky. Traders close positions before the weekend, creating unpredictable moves. Spreads often widen as liquidity dries up.",
          "For beginners: avoid trading during high-impact news events (NFP, FOMC, CPI). These events can cause 50+ pip moves in seconds. Until you understand how news affects price, sit on your hands and watch."
        ],
        examples: [
          "Example: During NFP (US jobs data), gold can move $20+ in under a minute. A beginner with a 10-pip stop loss gets stopped out by the initial spike, then price reverses in their original direction.",
          "Example: Christmas week — gold trades in a $5 range instead of its normal $20+ daily range. Spreads double. Any breakout attempt immediately fails."
        ],
        keyTakeaways: [
          "Late Asian session = low liquidity, unreliable breakouts",
          "Holidays = erratic moves, wider spreads, more fakeouts",
          "Friday afternoon = position closing creates unpredictable moves",
          "Beginners should avoid high-impact news events entirely"
        ],
        faq: [
          { question: "Should I ever trade during news events?", answer: "Not as a beginner. Watch how the market reacts to news from the sidelines first. Advanced traders may trade news, but with wider stops and smaller positions." },
          { question: "Is Monday morning safe to trade?", answer: "Monday open can gap from Friday's close. Wait 1-2 hours after market opens for prices to stabilize before trading." },
          { question: "What is NFP?", answer: "Non-Farm Payrolls — the US monthly jobs report released the first Friday of each month. It's one of the highest-impact events, causing significant volatility." }
        ],
        relatedLessons: ["best-trading-sessions", "london-vs-new-york", "slippage"],
        interactiveComponent: "SessionHeatmap",
        quiz: [
          { question: "Why are holidays bad for trading?", options: ["Brokers are closed", "Reduced volume creates erratic moves", "Spreads are fixed", "No reason"], correctIndex: 1, explanation: "Reduced volume during holidays leads to erratic price action, wider spreads, and more fakeouts." },
          { question: "Should beginners trade during NFP?", options: ["Yes, for big profits", "No, wait and watch", "Only with high leverage", "Only on gold"], correctIndex: 1, explanation: "Beginners should avoid high-impact news. Watch how the market reacts and learn before trading it." },
          { question: "Why is Friday afternoon risky?", options: ["Markets are closed", "Traders close positions causing unpredictable moves", "Spreads are tight", "Volume increases"], correctIndex: 1, explanation: "Position closing before the weekend creates unpredictable price action and wider spreads." }
        ]
      },
      {
        id: "5-3",
        slug: "london-vs-new-york",
        title: "London vs New York Session Behavior",
        seoTitle: "London vs New York Session | Trading Session Differences",
        metaDescription: "Compare London and New York trading sessions: how each session behaves, the London Killzone concept, and how to use session profiles for better trade timing.",
        duration: "3 min read",
        introduction: "London and New York are the two powerhouse sessions, but they behave differently. Understanding their characteristics helps you anticipate price behavior and improve your trade timing significantly.",
        summary: [
          "London often sets the daily direction",
          "New York often continues or reverses the London move",
          "Each session has characteristic behaviors",
          "Understanding session profiles improves timing"
        ],
        content: [
          "London Session Character: Often establishes the daily bias. Early London (08:00-10:00 GMT) frequently sees a 'fake' move that reverses — sweeping Asian session highs or lows before trending. This is known as the 'London Killzone.'",
          "New York Session Character: Often continues the move established by London, or if US data contradicts, reverses it. The 08:30-10:00 EST window (13:30-15:00 GMT) is crucial due to US data releases.",
          "The overlap creates the most decisive moves. If London established an uptrend and New York confirms it, the resulting continuation can be the day's biggest move.",
          "A common pattern: London sweeps the Asian session high/low, reverses, establishes the daily direction, and New York extends that move. Watching for this pattern can significantly improve your entry timing."
        ],
        examples: [
          "Example: Asian session gold range: $2,340-$2,355. London opens and pushes below $2,340 (sweep), then reverses and rallies to $2,365. New York extends to $2,380.",
          "Example: London establishes a bearish trend, dropping EUR/USD 50 pips. New York releases strong jobs data, reversing the move entirely. This shows how data can override session bias."
        ],
        keyTakeaways: [
          "London often sets the daily direction through the 'London Killzone'",
          "New York either continues or reverses the London move based on data",
          "The London/NY overlap produces the most decisive daily moves",
          "The common pattern: sweep Asian range → reverse → trend continuation"
        ],
        faq: [
          { question: "What is the London Killzone?", answer: "The first 2 hours of London trading (08:00-10:00 GMT) where price often fakes out by sweeping Asian session highs/lows before reversing into the true daily direction." },
          { question: "Can New York reverse the London move?", answer: "Yes, especially when US economic data contradicts the London bias. Strong US data can completely reverse the previous session's direction." },
          { question: "Which session should a beginner focus on?", answer: "Start with the London/NY overlap (13:00-17:00 GMT). It's the most liquid window and offers the clearest moves." }
        ],
        relatedLessons: ["best-trading-sessions", "worst-times-to-trade", "custom-timing-strategies"],
        interactiveComponent: "SessionHeatmap",
        quiz: [
          { question: "What is the 'London Killzone'?", options: ["When London markets close", "Early London's tendency to fake out and reverse", "A dangerous time to trade", "The London stock exchange"], correctIndex: 1, explanation: "The London Killzone refers to early London's tendency to sweep liquidity and reverse." },
          { question: "What does New York often do relative to London?", options: ["Always reverses", "Often continues or reverses based on data", "Moves independently", "Copies exactly"], correctIndex: 1, explanation: "New York often continues London's move or reverses it if US data provides a catalyst." },
          { question: "What pattern involves sweeping Asian highs/lows?", options: ["Breakout pattern", "London manipulation sweep", "Asian reversal", "No such pattern exists"], correctIndex: 1, explanation: "London often sweeps Asian session highs or lows (liquidity) before establishing the true daily direction." }
        ]
      },
      {
        id: "5-4",
        slug: "custom-timing-strategies",
        title: "Custom Timing Strategies",
        seoTitle: "Build Your Trading Schedule | Custom Timing Strategies",
        metaDescription: "Build a trading schedule that fits your lifestyle. Learn set-and-forget strategies, time-restricted trading, and why consistency in timing creates consistency in results.",
        duration: "3 min read",
        introduction: "You don't need to trade every session or watch charts all day. The best approach is building a trading schedule that fits your life and sticking to it consistently.",
        summary: [
          "Build a schedule that matches your lifestyle",
          "You don't need to be glued to charts 24/5",
          "Set-and-forget strategies work for part-time traders",
          "Consistency in timing creates consistency in results"
        ],
        content: [
          "If you work a 9-5 job: Focus on the New York afternoon session (14:00-17:00 EST) or set pending orders during London based on pre-session analysis.",
          "Set-and-forget approach: Do your analysis during a quiet period, place limit orders with stop losses and take profits, then walk away. Check in once or twice daily.",
          "Time-restricted approach: Trade only during a specific 2-3 hour window daily. This forces discipline and prevents overtrading. Many successful traders only trade the first 2 hours of London or NY.",
          "The key is consistency. If you decide to trade London open (08:00-10:00 GMT), do it every trading day. This lets you learn the session's personality and develop pattern recognition for that specific time."
        ],
        examples: [
          "Example: A working professional analyzes gold at 07:00 GMT, places buy limit orders at key support with SL/TP, then goes to work. Checks results at lunch.",
          "Example: A part-time trader only trades the first 2 hours of New York (13:00-15:00 GMT) every day. After 3 months, they know exactly how the session behaves."
        ],
        keyTakeaways: [
          "Build a schedule that fits your lifestyle — don't let trading take over",
          "Set-and-forget orders work great for busy traders",
          "Trade the same 2-3 hour window daily for pattern recognition",
          "Consistency in timing leads to consistency in results"
        ],
        faq: [
          { question: "Can I trade part-time and still be profitable?", answer: "Absolutely. Many successful traders are part-time. The set-and-forget approach with limit orders is ideal for busy schedules." },
          { question: "How many hours per day should I trade?", answer: "Quality over quantity. 1-3 focused hours is enough. Some traders analyze for 30 minutes and let pending orders do the rest." },
          { question: "What if I miss a trading day?", answer: "Skip it and trade the next day. There are always new setups. The worst thing you can do is rush to 'make up' for missed days." }
        ],
        relatedLessons: ["best-trading-sessions", "worst-times-to-trade", "consistency-discipline"],
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
        slug: "chart-types",
        title: "Chart Types",
        seoTitle: "Forex Chart Types | Line, Bar & Candlestick Charts",
        metaDescription: "Learn the three main chart types in forex trading: line charts, bar charts, and candlestick charts. Discover why candlestick charts are the preferred choice for traders.",
        duration: "2 min read",
        introduction: "Charts are the visual representation of price history. There are three main types, and understanding each helps you choose the best tool for your analysis. Spoiler: candlestick charts win.",
        summary: [
          "Line charts show closing prices connected by a line",
          "Bar charts show open, high, low, close for each period",
          "Candlestick charts are the most popular and informative",
          "Choose candlesticks — they show the most data visually"
        ],
        content: [
          "Line Charts: The simplest type. They connect closing prices with a line. Good for seeing the overall trend but missing important detail about highs, lows, and opens within each period.",
          "Bar Charts (OHLC): Show the Open, High, Low, and Close for each time period. The vertical line shows the high-low range, with small horizontal ticks for open (left) and close (right).",
          "Candlestick Charts: The most popular type among modern traders. Like bar charts, they show OHLC data but use colored 'bodies' that make bullish and bearish periods instantly visible.",
          "For this academy and for your trading, we recommend candlestick charts exclusively. They provide the most information in the most visually intuitive format."
        ],
        examples: [
          "Example: A line chart of gold shows a smooth upward curve — you can see the trend, but miss important rejection wicks and gaps that candlesticks reveal.",
          "Example: A candlestick chart shows a long upper wick (rejection) at a resistance level — crucial information that a line chart would completely hide."
        ],
        keyTakeaways: [
          "Line charts are simplest — good for trend overview",
          "Bar charts show OHLC data but aren't as visually intuitive",
          "Candlestick charts are the standard for modern traders",
          "Always use candlestick charts for your analysis"
        ],
        faq: [
          { question: "Which chart type should I use?", answer: "Candlestick charts. They show the most information (open, high, low, close) in the most visually intuitive format. Nearly all professional traders use them." },
          { question: "Are line charts ever useful?", answer: "Yes, for quickly identifying the overall trend on higher timeframes. Some traders use line charts on the weekly/monthly timeframe for the big picture." },
          { question: "What do the colors on candlesticks mean?", answer: "Green/white = bullish (close above open). Red/black = bearish (close below open). You can customize colors in your trading platform." }
        ],
        relatedLessons: ["candlesticks", "timeframes", "technical-analysis-explained"],
        svgDiagram: "chart-types",
        quiz: [
          { question: "Which chart type is most popular among traders?", options: ["Line chart", "Bar chart", "Candlestick chart", "Point and figure"], correctIndex: 2, explanation: "Candlestick charts are the most popular because they display OHLC data in an intuitive visual format." },
          { question: "What does a line chart show?", options: ["Open, high, low, close", "Only closing prices", "Only opening prices", "Volume"], correctIndex: 1, explanation: "Line charts connect closing prices with a line, showing the simplest trend view." },
          { question: "What information does a candlestick show?", options: ["Only close", "Open, High, Low, Close", "Only high and low", "Volume only"], correctIndex: 1, explanation: "Each candlestick displays the open, high, low, and close for that time period." }
        ]
      },
      {
        id: "6-2",
        slug: "candlesticks",
        title: "Candlesticks",
        seoTitle: "Candlestick Patterns Explained | Engulfing, Pin Bar, Doji",
        metaDescription: "Master candlestick patterns: engulfing, pin bar, doji, and inside bar. Learn how to read candle anatomy and use patterns for trading decisions at key levels.",
        duration: "3 min read",
        introduction: "Candlesticks are the language of price action. Each candle tells a story about the battle between buyers and sellers during that time period. Learning to read them is essential for any trader.",
        summary: [
          "A bullish candle has a close higher than its open",
          "A bearish candle has a close lower than its open",
          "Wicks (shadows) show rejection from a price level",
          "Key patterns: engulfing, pin bar, doji, inside bar"
        ],
        content: [
          "Anatomy: The 'body' is the rectangle between open and close. The 'wicks' (or shadows) extend above and below showing the high and low. A long wick shows price was rejected from that level.",
          "Bullish candle: Close is above the open (typically colored green/white). It shows buyers won that period. The bigger the body relative to wicks, the stronger the buying pressure.",
          "Key patterns to learn: Engulfing (a large candle completely covers the previous one — strong reversal signal), Pin Bar (small body with a long wick — shows rejection), Doji (tiny body, equal wicks — indecision), Inside Bar (candle contained within previous candle — consolidation before a move).",
          "Important: Individual candle patterns are not trading signals by themselves. They become meaningful only at significant levels (support/resistance) and in the context of the overall market structure."
        ],
        examples: [
          "Example: A bullish engulfing candle at a support level — the large green candle completely covers the previous red candle, signaling strong buyer interest at support.",
          "Example: A pin bar with a long lower wick at $2,300 support — price dropped to $2,290 but buyers pushed it back to close at $2,310, showing strong rejection of lower prices."
        ],
        keyTakeaways: [
          "Candle body = open to close; wicks = highs and lows reached",
          "Long wicks show price rejection — significant at key levels",
          "Engulfing and pin bar patterns are the most reliable reversal signals",
          "Candle patterns only matter at significant levels with context"
        ],
        faq: [
          { question: "What is the most reliable candlestick pattern?", answer: "The bullish/bearish engulfing pattern at a key level (support/resistance, order block) is one of the most reliable. It shows a clear shift in power between buyers and sellers." },
          { question: "Do I need to memorize all candlestick patterns?", answer: "No. Focus on 4 key patterns: engulfing, pin bar, doji, and inside bar. Understanding these 4 covers the most important trading scenarios." },
          { question: "Can I trade based on a single candle?", answer: "Never. Individual candles need context — the level they form at, the market structure, and the trend. A pin bar at random prices means nothing." }
        ],
        relatedLessons: ["chart-types", "timeframes", "eight-step-trade-setup"],
        svgDiagram: "candlestick-patterns",
        quiz: [
          { question: "What does a long upper wick indicate?", options: ["Strong buying", "Price was rejected from higher levels", "The candle is bullish", "Nothing"], correctIndex: 1, explanation: "A long upper wick shows that price reached higher levels but sellers pushed it back down — rejection." },
          { question: "What is an engulfing pattern?", options: ["Two same-sized candles", "A large candle that completely covers the previous one", "A candle with no wicks", "Three candles in a row"], correctIndex: 1, explanation: "An engulfing pattern is a large candle that completely covers the previous candle, signaling a potential reversal." },
          { question: "Are individual candle patterns reliable on their own?", options: ["Yes, always trade them", "No, they need context (S/R, structure)", "Only on daily charts", "Only for gold"], correctIndex: 1, explanation: "Candle patterns are meaningful only at significant levels and within the context of market structure." }
        ]
      },
      {
        id: "6-3",
        slug: "timeframes",
        title: "Timeframes",
        seoTitle: "Trading Timeframes Explained | Multi-Timeframe Analysis",
        metaDescription: "Learn about trading timeframes: daily, 4-hour, 1-hour, and lower. Understand multi-timeframe analysis and why beginners should start with higher timeframes.",
        duration: "3 min read",
        introduction: "Timeframes determine how much time each candle represents. The same price data looks completely different depending on which timeframe you choose. Understanding multi-timeframe analysis is crucial for finding high-probability entries.",
        summary: [
          "Higher timeframes (daily, 4H) show the big picture",
          "Lower timeframes (15min, 5min) show entry details",
          "Multi-timeframe analysis combines both perspectives",
          "Beginners should focus on higher timeframes first"
        ],
        content: [
          "Higher timeframes (Weekly, Daily, 4-Hour) show the big picture — major trends, key levels, and overall market direction. These are more reliable because they filter out 'noise' from short-term fluctuations.",
          "Lower timeframes (1-Hour, 15-Minute, 5-Minute) show more detail and allow precise entries. However, they also show more noise and false signals.",
          "Multi-timeframe analysis: The best approach combines both. Use a higher timeframe to identify the trend and key levels, then drop to a lower timeframe for precise entries. Example: Daily chart for direction, 1-Hour for entries.",
          "For beginners: Start with the Daily and 4-Hour charts. These timeframes are slower (less stressful), more reliable, and teach you to see the market clearly. Once comfortable, add lower timeframes for entries."
        ],
        examples: [
          "Example: On the daily chart, gold is in an uptrend with support at $2,320. You drop to the 1-hour chart and wait for a bullish engulfing candle at $2,320 for a precise entry.",
          "Example: The 15-minute chart shows choppy, random movement. But zoom out to the 4-hour chart and a clear downtrend emerges. Always check the bigger picture."
        ],
        keyTakeaways: [
          "Higher timeframes = big picture trend and key levels (more reliable)",
          "Lower timeframes = precise entries (more noise)",
          "Multi-timeframe analysis combines the best of both",
          "Beginners: start with Daily and 4-Hour charts"
        ],
        faq: [
          { question: "Which timeframe is best for beginners?", answer: "Start with the Daily and 4-Hour charts. They filter noise, show clearer structures, and give you more time to make decisions." },
          { question: "What is multi-timeframe analysis?", answer: "Using a higher timeframe (Daily/4H) for direction and key levels, then a lower timeframe (1H/15M) for precise entry timing. This gives you both the big picture and precise entries." },
          { question: "Can I trade on the 1-minute chart?", answer: "Not recommended for beginners. The 1-minute chart is extremely noisy and requires fast execution. Start higher and only go lower as you gain experience." }
        ],
        relatedLessons: ["chart-types", "technical-analysis-explained", "eight-step-trade-setup"],
        quiz: [
          { question: "Which timeframe shows more reliable signals?", options: ["1-minute", "5-minute", "Daily/4-Hour", "All are equal"], correctIndex: 2, explanation: "Higher timeframes filter out noise and show more reliable patterns and levels." },
          { question: "What is multi-timeframe analysis?", options: ["Using one timeframe", "Combining higher TF direction with lower TF entries", "Only trading daily charts", "Switching randomly"], correctIndex: 1, explanation: "Multi-timeframe analysis uses higher timeframes for direction and lower timeframes for precise entries." },
          { question: "Which timeframe should beginners start with?", options: ["1-minute", "5-minute", "Daily and 4-Hour", "Weekly only"], correctIndex: 2, explanation: "Beginners should start with Daily and 4-Hour charts for clearer, less stressful analysis." }
        ]
      },
      {
        id: "6-4",
        slug: "technical-analysis-explained",
        title: "Technical Analysis Explained",
        seoTitle: "Technical Analysis for Beginners | Complete Guide",
        metaDescription: "Learn the fundamentals of technical analysis: reading price charts, identifying trends, key patterns, and how to combine tools for effective market analysis.",
        duration: "3 min read",
        introduction: "Technical analysis is the study of price charts to forecast future price movement. It's based on the idea that price reflects all available information and that patterns tend to repeat. Here's your complete introduction.",
        summary: [
          "Technical analysis studies price charts to forecast movements",
          "It assumes all information is reflected in the price",
          "Focuses on trends, patterns, and key levels",
          "Best combined with risk management for consistent results"
        ],
        content: [
          "The core principle: Price reflects everything. All news, economic data, and market sentiment is already 'priced in.' By studying price, you're studying the sum of all market participants' actions.",
          "The three pillars: 1) Trend identification (using market structure), 2) Key level identification (support, resistance, order blocks), 3) Entry triggers (candlestick patterns, market structure shifts).",
          "Technical analysis is NOT about predicting the future. It's about identifying high-probability scenarios and managing risk. You'll be wrong often — the key is being right more than you're wrong OR winning more when right than losing when wrong.",
          "Keep it simple. You don't need 20 indicators. Market structure + support/resistance + candlestick patterns at key levels = a powerful, simple framework that most successful traders use."
        ],
        examples: [
          "Example: Gold is in an uptrend (HH, HL). Price pulls back to a support/order block. A bullish engulfing candle forms. This is a high-probability buy setup using simple technical analysis.",
          "Example: A trader with 10 indicators gets conflicting signals and misses the trade. A trader with clean chart + S/R sees the setup clearly and enters with confidence."
        ],
        keyTakeaways: [
          "Price reflects all available information",
          "Three pillars: trend, key levels, and entry triggers",
          "TA is about probability, not prediction",
          "Simple approaches outperform complex indicator systems"
        ],
        faq: [
          { question: "Does technical analysis actually work?", answer: "It works as a probability tool, not a crystal ball. Combined with proper risk management, it gives you a statistical edge over random entries." },
          { question: "Should I use fundamental or technical analysis?", answer: "For beginners, start with technical analysis. It's more actionable and measurable. You can add fundamental awareness later." },
          { question: "How many indicators do I need?", answer: "Zero to two. Price action with support/resistance is all most successful traders use. Indicators are supplementary, not primary tools." }
        ],
        relatedLessons: ["market-structure", "support-and-resistance", "eight-step-trade-setup"],
        quiz: [
          { question: "What does technical analysis study?", options: ["News reports", "Price charts and patterns", "Company financials", "Economic calendars"], correctIndex: 1, explanation: "Technical analysis studies price charts to identify patterns, trends, and levels for trading decisions." },
          { question: "Can technical analysis predict the future?", options: ["Yes, always", "No, it identifies probabilities", "Only on daily charts", "Only for stocks"], correctIndex: 1, explanation: "TA identifies high-probability scenarios, not certainties. You'll be wrong sometimes — that's normal." },
          { question: "How many indicators do successful traders typically use?", options: ["10+", "5-7", "0-2", "As many as possible"], correctIndex: 2, explanation: "Most successful traders use 0-2 indicators combined with price action and key levels." }
        ]
      },
      {
        id: "6-5",
        slug: "eight-step-trade-setup",
        title: "8-Step Trade Setup",
        seoTitle: "The 8-Step Trade Setup Process | Complete Framework",
        metaDescription: "Follow this 8-step trade setup process for every trade: from identifying the trend to calculating position size. A complete, repeatable framework for consistent results.",
        duration: "4 min read",
        introduction: "Here's a complete, step-by-step framework for setting up every trade. Following this process consistently ensures you never enter a trade unprepared. Print it out and use it until it becomes second nature.",
        summary: [
          "A systematic approach eliminates emotional trading",
          "8 steps from identifying the trend to placing the order",
          "Following the same process every trade creates consistency",
          "Skip any step and you're gambling, not trading"
        ],
        content: [
          "Step 1: Identify the trend on the higher timeframe (Daily/4H). Is it bullish, bearish, or ranging? Only trade in the direction of the trend.",
          "Step 2: Mark key levels — support, resistance, order blocks, FVGs. These are your 'zones of interest' where you'll look for entries.",
          "Step 3: Wait for price to reach a key level. Don't chase. Let the trade come to you. This is where patience separates winners from losers.",
          "Step 4: Look for an entry trigger — engulfing candle, pin bar, or market structure shift at the key level. No trigger = no trade.",
          "Step 5: Define your stop loss at the structural invalidation point. If your trade idea is wrong, where would price need to go? Place your SL there.",
          "Step 6: Define your take profit at the next key level. Ensure your risk-reward is at least 1:2. If not, skip the trade.",
          "Step 7: Calculate your position size using the Lot Size Calculator. Risk 1% of your account. No mental math — use the tool.",
          "Step 8: Execute the trade and walk away. Don't stare at it. Let your SL and TP do their job. Review later."
        ],
        examples: [
          "Example: 1) Daily gold uptrend ✓ 2) Support at $2,340 ✓ 3) Price reaches $2,342 ✓ 4) Bullish engulfing on 1H ✓ 5) SL at $2,330 (below structure) ✓ 6) TP at $2,370 (1:2.5 RR) ✓ 7) 0.01 lots (1% risk) ✓ 8) Order placed, walk away ✓"
        ],
        keyTakeaways: [
          "Follow all 8 steps for every trade — no shortcuts",
          "Wait for price to come to your level — never chase",
          "No entry trigger at a key level = no trade",
          "Always calculate position size with the calculator"
        ],
        faq: [
          { question: "What if I can't complete all 8 steps?", answer: "Don't take the trade. If any step fails — especially no clear trend, no key level, or no entry trigger — wait for the next setup." },
          { question: "How long does this process take?", answer: "With practice, 5-10 minutes per trade. The analysis (steps 1-3) can be done during your pre-session preparation." },
          { question: "Can I modify the 8 steps?", answer: "Once you've used them for 50+ trades and understand why each step matters, you can adapt. But for the first few months, follow them exactly." }
        ],
        relatedLessons: ["technical-analysis-explained", "support-and-resistance", "risk-reward-ratio"],
        toolLink: { label: "Calculate your lot size for step 7", path: "/tools/lot-size-calculator" },
        quiz: [
          { question: "What is the first step in the trade setup process?", options: ["Find an entry", "Calculate lot size", "Identify the trend on a higher timeframe", "Place the trade"], correctIndex: 2, explanation: "Always start by identifying the trend on a higher timeframe — this determines your trading direction." },
          { question: "What should you do if there's no entry trigger at a key level?", options: ["Enter anyway", "Lower the timeframe until you find one", "Skip the trade", "Use an indicator"], correctIndex: 2, explanation: "No trigger = no trade. Patience and discipline are what make this process work." },
          { question: "What is the minimum risk-reward ratio for a trade?", options: ["1:0.5", "1:1", "1:2", "1:5"], correctIndex: 2, explanation: "Only take trades with at least 1:2 risk-reward. Anything less doesn't justify the risk." }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Smart Money Concepts",
    description: "Learn how institutional traders operate — liquidity, order blocks, FVGs, and the AMD cycle.",
    icon: "Brain",
    lessons: [
      {
        id: "7-1",
        slug: "liquidity",
        title: "Liquidity",
        seoTitle: "Liquidity in Forex Trading | Smart Money Concepts",
        metaDescription: "Understand liquidity in forex: what it is, where it pools, how institutional traders use it, and how to identify liquidity zones on your charts for better trades.",
        duration: "3 min read",
        introduction: "Liquidity is the fuel that drives the market. Understanding where liquidity sits and how institutional traders target it is the key to understanding why price moves the way it does.",
        summary: [
          "Liquidity = resting orders (stop losses, limit orders) at key levels",
          "Institutional traders need liquidity to fill large orders",
          "Retail stop losses cluster above highs and below lows",
          "Price is drawn to liquidity pools before reversing"
        ],
        content: [
          "In simple terms, liquidity is money sitting in the market as resting orders. Every stop loss, every limit order, every pending order = liquidity that someone can fill their trade against.",
          "The problem institutional traders face: They want to buy or sell massive quantities, but they need someone on the other side. If a bank wants to sell $100 million of gold, they need $100 million worth of buy orders to fill against.",
          "Where does that liquidity sit? Above previous highs (buy stops from breakout traders + stop losses from short sellers) and below previous lows (sell stops from breakdown traders + stop losses from long positions).",
          "This is why price sweeps highs and lows before reversing — institutions push price to these levels to grab liquidity, fill their orders, then move price in their intended direction.",
          "Learning to see the market through the lens of liquidity transforms your trading. Instead of seeing a fakeout as 'the market tricking you,' you see it as institutions executing their game plan."
        ],
        examples: [
          "Example: Gold has a clear high at $2,400. Hundreds of buy stop orders sit just above. An institution pushes price to $2,405, triggering those stops (providing sell liquidity), then shorts gold back to $2,380.",
          "Example: EUR/USD has equal lows at 1.0950. Sell stops cluster just below. Price dips to 1.0945, sweeps the liquidity, then reverses sharply upward."
        ],
        keyTakeaways: [
          "Liquidity = resting orders that institutions need to fill their positions",
          "Stop losses cluster above highs and below lows",
          "Price is attracted to liquidity pools before making real moves",
          "Seeing the market through a liquidity lens gives you an institutional edge"
        ],
        faq: [
          { question: "Where does liquidity pool?", answer: "Above previous swing highs (buy stops) and below previous swing lows (sell stops). Also above equal highs and below equal lows where many orders cluster." },
          { question: "Why do institutions need liquidity?", answer: "They trade such large volumes that they need significant opposing order flow to fill their positions without causing extreme slippage." },
          { question: "How can I use liquidity in my trading?", answer: "Wait for liquidity to be swept (price takes out a high/low) before entering in the opposite direction. This means you're entering after institutions have filled their orders." }
        ],
        relatedLessons: ["liquidity-sweeps", "market-structure-shifts", "breakouts-vs-fakeouts"],
        interactiveComponent: "LiquiditySweepSimulator",
        svgDiagram: "liquidity-pools",
        quiz: [
          { question: "What is liquidity in trading context?", options: ["How much money you have", "Resting orders at key price levels", "Market volume", "Broker capital"], correctIndex: 1, explanation: "Liquidity refers to resting orders — stop losses, limit orders, and pending orders at key price levels." },
          { question: "Where do retail stop losses typically cluster?", options: ["At random levels", "Above highs and below lows", "At round numbers only", "In the middle of ranges"], correctIndex: 1, explanation: "Retail traders place stops above swing highs and below swing lows — creating predictable liquidity pools." },
          { question: "Why does price sweep highs/lows before reversing?", options: ["Random market noise", "Institutions grabbing liquidity to fill orders", "Technical glitches", "Retail traders panicking"], correctIndex: 1, explanation: "Institutions push price to liquidity pools to fill their large orders, then reverse in their intended direction." }
        ]
      },
      {
        id: "7-2",
        slug: "market-structure-shifts",
        title: "Market Structure Shifts",
        seoTitle: "Market Structure Shifts (MSS) | Smart Money Reversal Signal",
        metaDescription: "Learn Market Structure Shifts (MSS): the smart money reversal signal that identifies when institutional order flow changes direction. Key SMC concept for trend changes.",
        duration: "3 min read",
        introduction: "A Market Structure Shift (MSS) is a decisive break in the current trend's structure, signaling that institutional order flow has potentially changed direction. It's one of the most important signals in Smart Money Concepts.",
        summary: [
          "MSS is a decisive break of the current market structure",
          "It signals a shift in institutional order flow",
          "Key difference from BOS: displacement (strong momentum)",
          "Use MSS to identify trend reversals early"
        ],
        content: [
          "In an uptrend: Price has been making higher highs and higher lows. An MSS occurs when price breaks below the most recent higher low with strong momentum — typically with a large, decisive candle.",
          "In a downtrend: Price has been making lower highs and lower lows. An MSS happens when price breaks above the most recent lower high with conviction.",
          "What makes MSS different from a regular break of structure? The key is displacement — the break happens with strong momentum (large candles, engulfing patterns), suggesting institutional order flow has genuinely shifted.",
          "After identifying an MSS, look for the first pullback to enter in the new direction. This pullback often returns to an 'order block' (covered in the next lesson) before the new trend continues."
        ],
        examples: [
          "Example: Gold uptrend — HH at $2,400, HL at $2,370. Price suddenly drops through $2,370 with a large bearish candle (displacement). This MSS signals a potential shift to bearish. Wait for pullback to enter short.",
          "Example: EUR/USD downtrend — LH at 1.0950. Price surges above 1.0950 with strong momentum. MSS to bullish. Look for pullback to the order block to go long."
        ],
        keyTakeaways: [
          "MSS = decisive break of structure with displacement (strong momentum)",
          "In uptrend: price breaks below last higher low with force",
          "After MSS, wait for the first pullback for entry",
          "MSS signals institutional order flow change"
        ],
        faq: [
          { question: "How is MSS different from BOS?", answer: "Both involve breaking structure, but MSS emphasizes displacement — the break happens with strong, decisive momentum suggesting institutional activity, not just random price fluctuation." },
          { question: "Can MSS be a false signal?", answer: "Yes. Not every MSS leads to a full trend reversal. That's why you combine it with other confluences (liquidity sweep, order blocks) and always use stop losses." },
          { question: "Which timeframe is best for MSS?", answer: "MSS on higher timeframes (4H, Daily) is more significant. Lower timeframe MSS can be used for entries when aligned with the higher timeframe trend." }
        ],
        relatedLessons: ["market-structure", "order-blocks", "liquidity-sweeps"],
        interactiveComponent: "MarketStructureVisualizer",
        quiz: [
          { question: "When does an MSS occur in an uptrend?", options: ["When price makes a new high", "When price breaks below the last higher low", "When a candle closes bearish", "At any pullback"], correctIndex: 1, explanation: "An MSS in an uptrend happens when price breaks below the most recent higher low with strong momentum." },
          { question: "What distinguishes MSS from a regular break of structure?", options: ["They're the same", "Displacement — strong, decisive momentum", "MSS uses indicators", "MSS only happens on daily charts"], correctIndex: 1, explanation: "MSS is characterized by displacement — large, decisive candles showing genuine institutional order flow change." },
          { question: "What should you look for after an MSS?", options: ["Immediately enter", "Wait for the first pullback", "Close all trades", "Change timeframes"], correctIndex: 1, explanation: "After an MSS, look for the first pullback (often to an order block) to enter in the new direction." }
        ]
      },
      {
        id: "7-3",
        slug: "order-blocks",
        title: "Order Blocks",
        seoTitle: "Order Blocks Explained | Smart Money Entry Zones",
        metaDescription: "Learn what order blocks are in Smart Money Concepts: how to identify bullish and bearish order blocks, why institutions create them, and how to trade from these zones.",
        duration: "3 min read",
        introduction: "An order block (OB) is a zone on the chart where institutional traders placed significant buy or sell orders. These zones often act as powerful support or resistance when price returns to them — making them ideal entry points.",
        summary: [
          "Order blocks are zones where institutions placed large orders",
          "Bullish OB: last bearish candle before a strong up-move",
          "Bearish OB: last bullish candle before a strong down-move",
          "Price often returns to order blocks before continuing the move"
        ],
        content: [
          "Bullish Order Block: The last bearish (down) candle before a strong bullish (up) move. This is where institutions were buying aggressively. When price returns to this zone, it often bounces up again.",
          "Bearish Order Block: The last bullish (up) candle before a strong bearish (down) move. This is where institutions were selling. Price returning here often gets rejected downward.",
          "How to trade them: Wait for an MSS or clear trend direction, then look for price to pull back to the most recent order block. Enter at the OB with a stop loss just beyond it.",
          "Key filters for high-quality OBs: They should be followed by a strong displacement move. They should break structure. The OB hasn't been tested (mitigated) before. Higher timeframe OBs are more significant."
        ],
        examples: [
          "Example: Gold drops with a bearish candle to $2,330, then rockets up $30 with displacement. The $2,330 bearish candle zone is a bullish order block. When price returns to ~$2,330, it's a buy opportunity.",
          "Example: EUR/USD has a small bullish candle at 1.0980 before crashing 80 pips. That bullish candle zone (1.0970-1.0980) is a bearish OB. If price rallies back, look to sell there."
        ],
        keyTakeaways: [
          "Bullish OB = last bearish candle before a strong move up",
          "Bearish OB = last bullish candle before a strong move down",
          "Trade OBs only when they align with the trend and MSS",
          "Higher timeframe, untested OBs with displacement are the highest quality"
        ],
        faq: [
          { question: "How do I identify a valid order block?", answer: "Look for the last opposing candle before a strong displacement move that breaks structure. The OB should be untested (price hasn't returned to it yet)." },
          { question: "What happens when an OB is 'mitigated'?", answer: "When price returns to an OB and reacts, the OB is considered mitigated (used up). Its significance decreases for future price visits." },
          { question: "Are order blocks just support and resistance?", answer: "They're more specific. While S/R are broad zones, OBs are precise candle-based zones backed by institutional order flow theory. They provide tighter entry zones." }
        ],
        relatedLessons: ["market-structure-shifts", "fair-value-gaps", "liquidity"],
        quiz: [
          { question: "What is a bullish order block?", options: ["The strongest bullish candle", "The last bearish candle before a strong up-move", "A cluster of buy orders", "A support level"], correctIndex: 1, explanation: "A bullish OB is the last bearish candle before a significant bullish displacement — where institutions were buying." },
          { question: "Why does price react at order blocks?", options: ["Random chance", "Institutions have unfilled orders at these levels", "Indicators cause it", "It's a self-fulfilling prophecy only"], correctIndex: 1, explanation: "Order blocks mark levels where institutions placed large orders — unfilled portions attract price back." },
          { question: "Which OBs are most significant?", options: ["Any OB", "Higher timeframe, untested OBs with displacement", "Only on 1-minute charts", "Only during news"], correctIndex: 1, explanation: "High-quality OBs are on higher timeframes, untested, and followed by strong displacement." }
        ]
      },
      {
        id: "7-4",
        slug: "fair-value-gaps",
        title: "Fair Value Gaps",
        seoTitle: "Fair Value Gaps (FVG) Explained | Smart Money Trading",
        metaDescription: "Learn Fair Value Gaps in Smart Money Concepts: how FVGs form during aggressive price moves, why price returns to fill them, and how to use them as entry zones.",
        duration: "3 min read",
        introduction: "A Fair Value Gap (FVG) is a three-candle pattern where the first candle's wick doesn't overlap with the third candle's wick, creating a 'gap' or imbalance in price. These gaps represent inefficiency that the market tends to correct.",
        summary: [
          "FVGs are gaps between three candles where price moved too fast",
          "They represent imbalance — inefficient price movement",
          "Price tends to return to fill these gaps",
          "FVGs can serve as entry zones or targets"
        ],
        content: [
          "This gap forms because price moved so aggressively that orders couldn't fill at every price level. The gap represents unfilled orders and inefficient pricing.",
          "Why it matters: Markets tend toward efficiency. Price often returns to 'fill' or 'rebalance' these gaps before continuing. This makes FVGs excellent entry zones.",
          "Bullish FVG: Forms during a strong up-move. The gap between candle 1's high and candle 3's low is the FVG. Price pulling back into this zone is a potential buy entry.",
          "Trading FVGs: In a bullish trend after MSS, look for bullish FVGs as entry zones. Set your entry at the top of the FVG, stop loss below the FVG, and target the next significant level. FVGs on higher timeframes are more reliable."
        ],
        examples: [
          "Example: Three candles on gold — Candle 1 high: $2,340, Candle 2 (big bullish): $2,330-$2,360, Candle 3 low: $2,355. The FVG is $2,340-$2,355 — the gap between candle 1's high and candle 3's low.",
          "Example: Price creates a bearish FVG between 1.0950 and 1.0930 (EUR/USD). Price rallies back into this gap, gets rejected, and continues lower — a textbook FVG entry."
        ],
        keyTakeaways: [
          "FVGs form when price moves too fast, creating inefficient pricing",
          "Markets tend to return to FVGs to rebalance before continuing",
          "Use FVGs as entry zones in the direction of the trend",
          "Higher timeframe FVGs are more reliable than lower timeframe ones"
        ],
        faq: [
          { question: "Do all FVGs get filled?", answer: "Not all, but most do eventually. In strong trends, some FVGs remain unfilled for extended periods. Focus on FVGs that align with your trade direction." },
          { question: "How do I find FVGs on my chart?", answer: "Look for three-candle sequences where the first candle's wick doesn't touch the third candle's wick. The space between is the FVG." },
          { question: "Are FVGs better than order blocks for entries?", answer: "Both are effective. FVGs offer precise zones based on price imbalance, while OBs are based on institutional order placement. Many traders use both for confluence." }
        ],
        relatedLessons: ["order-blocks", "market-structure-shifts", "liquidity-sweeps"],
        quiz: [
          { question: "What creates a Fair Value Gap?", options: ["Slow price movement", "Price moving too fast, creating imbalance", "Broker errors", "News events only"], correctIndex: 1, explanation: "FVGs form when price moves so aggressively that orders can't fill at every level, creating inefficiency." },
          { question: "What does price tend to do with FVGs?", options: ["Ignore them", "Return to fill/rebalance them", "Create more gaps", "Nothing predictable"], correctIndex: 1, explanation: "Markets seek efficiency — price tends to return to FVGs to fill unfilled orders before continuing." },
          { question: "How can FVGs be used in trading?", options: ["As stop loss levels only", "As entry zones when price pulls back", "They can't be used", "Only for exits"], correctIndex: 1, explanation: "FVGs serve as excellent entry zones — enter when price pulls back into the gap in the direction of the trend." }
        ]
      },
      {
        id: "7-5",
        slug: "liquidity-sweeps",
        title: "Liquidity Sweeps",
        seoTitle: "Liquidity Sweeps Explained | Stop Hunts in Trading",
        metaDescription: "Learn about liquidity sweeps (stop hunts): how institutional traders sweep key levels to grab liquidity, how to identify valid sweeps, and how to trade them profitably.",
        duration: "3 min read",
        introduction: "A liquidity sweep is the action of price moving beyond a key level (previous high/low) to trigger resting orders, then quickly reversing. It's the moment smart money strikes — and if you can spot it, you can trade alongside them.",
        summary: [
          "A sweep is when price takes out a key level then immediately reverses",
          "It confirms that smart money grabbed liquidity",
          "Sweeps of previous highs/lows are powerful reversal signals",
          "Combine sweeps with MSS and OBs for high-probability trades"
        ],
        content: [
          "Think of it this way: Price approaches a previous high. Retail traders have buy stops above it. Price pushes above, triggering those buy stops (giving institutional sellers the buyers they need), then reverses sharply.",
          "How to identify a valid sweep: Price takes out a clearly visible high or low. The move beyond the level is quick (usually a single candle wick). Price immediately reverses with momentum (displacement).",
          "Trading sweeps: Wait for the sweep to happen. Look for the reversal candle (often a pin bar or engulfing pattern). Enter on the reversal with a stop loss beyond the sweep's extreme.",
          "The most powerful setup combines: a liquidity sweep + market structure shift + entry at an order block or FVG. This triple confluence gives you institutional-grade entries."
        ],
        examples: [
          "Example: Gold high at $2,400 — wicks above to $2,405 (sweep), then drops back below $2,400 with a bearish engulfing candle. The sweep triggered buy stops, institutions sold into that liquidity, and now price is heading lower.",
          "Example: EUR/USD equal lows at 1.0900. Price dips to 1.0895 (sweep), immediately reverses with a bullish pin bar. Enter long with SL below 1.0890."
        ],
        keyTakeaways: [
          "Sweeps are quick moves beyond key levels that reverse immediately",
          "They confirm institutional liquidity grabs",
          "The most powerful setup: sweep + MSS + OB/FVG entry",
          "Always wait for the reversal confirmation before entering"
        ],
        faq: [
          { question: "How do I distinguish a sweep from a real breakout?", answer: "Sweeps reverse quickly (usually within 1-3 candles) with strong momentum. Real breakouts hold beyond the level and retest it as support/resistance." },
          { question: "Can I anticipate sweeps?", answer: "You can't predict exactly when, but you can identify WHERE sweeps are likely — above obvious highs and below obvious lows where stop losses cluster." },
          { question: "Do sweeps always reverse?", answer: "Not always. Sometimes the sweep is step 1 of a larger move. That's why you wait for confirmation (reversal candle, MSS) before entering." }
        ],
        relatedLessons: ["liquidity", "market-structure-shifts", "amd-cycle"],
        interactiveComponent: "LiquiditySweepSimulator",
        svgDiagram: "liquidity-sweep",
        quiz: [
          { question: "What is a liquidity sweep?", options: ["A type of indicator", "Price taking out a key level and reversing", "High-volume trading", "A broker action"], correctIndex: 1, explanation: "A liquidity sweep is price moving beyond a key level to trigger orders, then quickly reversing." },
          { question: "What is the most powerful SMC setup?", options: ["Just order blocks", "Sweep + MSS + OB/FVG entry", "Only FVGs", "Random entries with tight stops"], correctIndex: 1, explanation: "Combining a liquidity sweep with a market structure shift and OB/FVG entry creates a high-probability trade." },
          { question: "How can you tell a sweep from a real breakout?", options: ["You can't", "Sweeps reverse quickly with displacement", "Sweeps happen slowly", "Only on gold"], correctIndex: 1, explanation: "Sweeps reverse quickly with strong momentum, while real breakouts continue and hold above the level." }
        ]
      },
      {
        id: "7-6",
        slug: "amd-cycle",
        title: "Accumulation Manipulation Distribution (AMD)",
        seoTitle: "AMD Cycle Explained | Smart Money Trading Framework",
        metaDescription: "Learn the AMD cycle: Accumulation, Manipulation, Distribution — the framework for understanding how smart money operates within trading sessions and on any timeframe.",
        duration: "3 min read",
        introduction: "AMD is a framework for understanding how smart money operates within a trading session or on any timeframe. It stands for Accumulation, Manipulation, Distribution — and recognizing it in real-time is a powerful edge.",
        summary: [
          "AMD is a complete market cycle used by smart money",
          "Accumulation: building positions quietly in a range",
          "Manipulation: a fake move to grab liquidity",
          "Distribution: the real move where smart money takes profit"
        ],
        content: [
          "Accumulation: Price consolidates in a range. Smart money quietly builds positions during this phase. On lower timeframes, this looks like a tight range or consolidation. It often occurs during the Asian session.",
          "Manipulation: The fake move. Price breaks out of the range in one direction — sweeping liquidity (stop losses) above or below the range. This is the trap that catches retail traders.",
          "Distribution: The real move. After the manipulation sweep, price reverses sharply and moves in the opposite direction — the true intended direction of smart money. This is where profits are made.",
          "Practical example: Asian session range forms (accumulation). London open pushes price below the range, sweeping lows (manipulation). Price reverses and trends upward for the rest of the day (distribution). Recognizing AMD in real-time is a powerful edge."
        ],
        examples: [
          "Example: Gold ranges between $2,340-$2,355 during Asian session (accumulation). London opens, price drops to $2,335 sweeping the lows (manipulation). Price then rallies to $2,380 (distribution).",
          "Example: On a 15-minute chart, you see a tight 30-minute consolidation, a quick spike down that sweeps the low, then a sharp reversal upward. Classic AMD within a single session."
        ],
        keyTakeaways: [
          "AMD explains smart money's complete session playbook",
          "Accumulation = quiet range building (often Asian session)",
          "Manipulation = fake breakout to grab liquidity",
          "Distribution = the real, intended move — trade this phase"
        ],
        faq: [
          { question: "Does AMD happen every day?", answer: "The pattern occurs frequently but not identically every day. It's most visible during the London open when price sweeps the Asian range before trending." },
          { question: "How do I know when manipulation is over?", answer: "Look for a quick reversal after the sweep — usually an engulfing candle or MSS on a lower timeframe. The manipulation phase is typically short-lived (1-3 candles)." },
          { question: "Can AMD happen on higher timeframes?", answer: "Yes! AMD occurs on all timeframes. On a weekly chart, accumulation might last weeks, with manipulation and distribution playing out over days." }
        ],
        relatedLessons: ["liquidity-sweeps", "accumulation-distribution", "market-structure-shifts"],
        svgDiagram: "amd-cycle",
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
        slug: "risk-reward-ratio",
        title: "Risk-Reward Ratio",
        seoTitle: "Risk-Reward Ratio Explained | How to Calculate RR",
        metaDescription: "Learn risk-reward ratio: what it is, how to calculate it, why a 1:2 minimum is essential, and how RR affects your required win rate for profitability.",
        duration: "3 min read",
        introduction: "Risk-reward ratio (RR) is one of the most important concepts in trading. It measures how much you stand to gain versus how much you risk on each trade. Getting this right can make you profitable even with a 40% win rate.",
        summary: [
          "Risk-reward ratio compares potential loss to potential gain",
          "A 1:2 RR means you risk $1 to potentially make $2",
          "With 1:2 RR, you only need to win 34% of trades to be profitable",
          "Never take trades below 1:1 risk-reward"
        ],
        content: [
          "A 1:2 RR means for every $1 you risk, your target profit is $2. If your stop loss is 10 pips, your take profit should be at least 20 pips.",
          "Here's why this matters mathematically: With a 1:2 RR, you only need to win 34% of your trades to break even. Win 40-50% and you're solidly profitable. This takes enormous pressure off your win rate.",
          "Compare to 1:1 RR — you need to win more than 50% just to break even (factoring in spreads). And if you take 1:0.5 trades (risking twice what you might make), you need to win over 67%.",
          "Rule: Never take a trade with less than 1:1 risk-reward, and aim for 1:2 or better. This single rule will transform your trading performance over time."
        ],
        examples: [
          "Example: Buy gold at $2,350. SL at $2,340 (10-point risk). TP at $2,370 (20-point reward). RR = 1:2. You need to win only 34% of trades like this to be profitable.",
          "Example: 10 trades at 1:2 RR, winning 4 (40% win rate): 4 wins × $2 = $8 profit. 6 losses × $1 = $6 loss. Net profit = $2. Profitable with only 40% accuracy!"
        ],
        keyTakeaways: [
          "1:2 risk-reward means risking $1 to make $2",
          "Higher RR reduces the win rate needed for profitability",
          "Never take trades below 1:1 risk-reward",
          "RR is more important than win rate for long-term profitability"
        ],
        faq: [
          { question: "What risk-reward ratio should I target?", answer: "Aim for 1:2 minimum. 1:3 is better if the setup allows it. Never go below 1:1." },
          { question: "Is win rate or risk-reward more important?", answer: "Risk-reward is more important. A 40% win rate with 1:3 RR is more profitable than 60% win rate with 1:1 RR." },
          { question: "How do I calculate risk-reward?", answer: "RR = Distance to Take Profit / Distance to Stop Loss. If SL is 10 pips and TP is 20 pips, RR = 20/10 = 1:2." }
        ],
        relatedLessons: ["stop-loss-placement", "position-sizing", "most-important-rule"],
        toolLink: { label: "Calculate your risk", path: "/tools/risk-calculator" },
        quiz: [
          { question: "What does a 1:3 risk-reward ratio mean?", options: ["Risk $3 to make $1", "Risk $1 to make $3", "Win 3 out of 1 trade", "Lose 3 times in a row"], correctIndex: 1, explanation: "1:3 RR means you risk $1 with a potential reward of $3." },
          { question: "With a 1:2 RR, what win rate makes you profitable?", options: ["50%+", "34%+", "90%+", "100%"], correctIndex: 1, explanation: "At 1:2 RR, you only need to win about 34% of trades to break even, and above that you're profitable." },
          { question: "What is the minimum RR you should accept?", options: ["1:0.5", "1:1", "1:3", "No minimum"], correctIndex: 1, explanation: "Never take trades below 1:1 risk-reward. Aim for 1:2 or better." }
        ]
      },
      {
        id: "8-2",
        slug: "stop-loss-placement",
        title: "Stop Loss Placement",
        seoTitle: "Where to Place Your Stop Loss | Structure-Based SL Guide",
        metaDescription: "Learn stop loss placement based on market structure: where to place your SL, why to add a buffer, and the critical rule of never moving your stop loss further away.",
        duration: "3 min read",
        introduction: "Stop loss placement is an art. A stop that's too tight gets hit by normal market noise. A stop that's too wide risks too much capital. The solution: place stops based on market structure, not arbitrary distances.",
        summary: [
          "Stop losses should be placed based on market structure, not arbitrary distance",
          "Place SL beyond the level that invalidates your trade idea",
          "Don't place stops at obvious levels — add buffer",
          "Never move SL further away from entry"
        ],
        content: [
          "The principle: Your stop loss should be at the point where your trade idea is invalidated. If you're buying at a support level, your SL goes below that support — because if price breaks below it, your reason for buying no longer exists.",
          "Add a buffer: If support is at $2,300, don't put your stop at $2,300. Put it at $2,295 or $2,290 to account for wicks and liquidity sweeps. Obvious stop levels get hunted.",
          "For order block entries: Place SL below the order block (for longs) or above it (for shorts). The OB body, not just the wick, should remain intact for your trade to be valid.",
          "Critical rule: NEVER move your stop loss further from entry. If price is approaching your SL, let it hit. Moving your stop turns a planned, small loss into an unplanned, potentially large one."
        ],
        examples: [
          "Example: Buy at support $2,350. Support zone = $2,348-$2,352. SL at $2,343 (below the zone with buffer). If price breaks $2,343, your support thesis is invalid.",
          "Example: Buy at bullish OB $2,330-$2,335. SL at $2,325 (below the OB with buffer). If the entire OB is broken, the setup is invalid."
        ],
        keyTakeaways: [
          "SL goes at the structural invalidation point",
          "Add buffer below/above obvious levels to avoid stop hunts",
          "For OB entries: SL beyond the order block body",
          "NEVER move your SL further away from entry"
        ],
        faq: [
          { question: "How many pips should my stop loss be?", answer: "There's no fixed number. Your stop loss distance should be determined by market structure — the distance to the invalidation point, not an arbitrary number." },
          { question: "Why do my stops keep getting hit?", answer: "Likely because you're placing them at obvious levels without buffer. Add 5-15 points beyond obvious support/resistance. Also check if you're trading against the trend." },
          { question: "Should I use trailing stop losses?", answer: "As a beginner, use fixed SL and TP. Trailing stops are an advanced technique that can actually reduce profits if not used correctly." }
        ],
        relatedLessons: ["risk-reward-ratio", "position-sizing", "order-blocks"],
        quiz: [
          { question: "How should stop losses be placed?", options: ["At arbitrary pip distances", "Based on market structure", "At round numbers", "As tight as possible"], correctIndex: 1, explanation: "Stop losses should be placed at structural levels that invalidate your trade idea, not arbitrary distances." },
          { question: "Why add a buffer to stop losses?", options: ["To waste money", "To account for wicks and liquidity sweeps", "Stops always need 50 pips", "It's not necessary"], correctIndex: 1, explanation: "Adding buffer prevents getting stopped out by normal wicks and common stop hunts at obvious levels." },
          { question: "Should you ever move your SL further from entry?", options: ["Yes, to give it room", "No, never", "Only on winning trades", "Only during news"], correctIndex: 1, explanation: "Never move your SL further away. It turns planned small losses into unplanned large ones." }
        ]
      },
      {
        id: "8-3",
        slug: "position-sizing",
        title: "Position Sizing",
        seoTitle: "Position Sizing Calculator & Guide | Lot Size Formula",
        metaDescription: "Master position sizing: the formula for calculating lot size based on risk percentage and stop loss distance. Use our free calculator for every trade.",
        duration: "3 min read",
        introduction: "Position sizing is arguably the most important calculation in trading. Get it wrong and even a winning strategy will lose money. Get it right and even a mediocre strategy stays in the game.",
        summary: [
          "Position size determines how much you make or lose per pip",
          "Always calculate based on your risk percentage, not gut feeling",
          "Formula: Lot Size = Risk Amount / (SL in pips × Pip Value)",
          "Use the Lot Size Calculator for every trade"
        ],
        content: [
          "The formula: Lot Size = Risk Amount / (Stop Loss in Pips × Pip Value per Lot). For a $100 account risking 1% with a 20-pip SL and $1/pip value: 1.00 / (20 × 1.0) = 0.05 lots.",
          "For gold (XAUUSD): Pip value varies by lot size. For 0.01 lot, typically $0.01 per pip (point). A 100-point stop loss on 0.01 lot risks about $1.00.",
          "Common mistake: Beginners pick a lot size that 'feels right' instead of calculating it based on their risk tolerance. This leads to inconsistent risk and inevitable account destruction.",
          "Use our Lot Size Calculator for every single trade. No exceptions. Even experienced traders use calculators — it's not a sign of weakness, it's professional risk management."
        ],
        examples: [
          "Example: $100 account, 1% risk ($1), 50-pip SL, $1/pip value. Lot size = $1 / (50 × $1) = 0.02 lots.",
          "Example: $50 account, 1% risk ($0.50), 100-point SL on gold, $0.01/pip for 0.01 lot. Lot size = $0.50 / (100 × $0.01) = 0.5 → but you can only use 0.01 lots, so risk is ~$1 — might be too much."
        ],
        keyTakeaways: [
          "Lot Size = Risk Amount / (Stop Loss × Pip Value per Lot)",
          "Never size positions by 'feel' — always calculate",
          "Use the Lot Size Calculator for every trade without exception",
          "Wrong position sizing destroys even winning strategies"
        ],
        faq: [
          { question: "What is the position sizing formula?", answer: "Lot Size = Risk Amount / (Stop Loss in Pips × Pip Value per Lot). The Risk Amount = Account Balance × Risk Percentage." },
          { question: "What if the calculated lot size is below 0.01?", answer: "If the calculated size is below 0.01 (minimum lot), either widen your stop or reduce your account risk. Don't round up — that increases your risk beyond your plan." },
          { question: "Should I use the same lot size for every trade?", answer: "No! Lot size changes based on stop loss distance. A trade with a 20-pip SL needs a larger lot than one with a 50-pip SL (to risk the same dollar amount)." }
        ],
        relatedLessons: ["most-important-rule", "risk-reward-ratio", "stop-loss-placement"],
        toolLink: { label: "Calculate your lot size", path: "/tools/lot-size-calculator" },
        quiz: [
          { question: "What determines your lot size?", options: ["Gut feeling", "Your risk amount and stop loss distance", "The maximum your broker allows", "The same size every trade"], correctIndex: 1, explanation: "Lot size should be calculated based on your risk amount (% of account) divided by stop loss distance." },
          { question: "Should you use a lot size calculator?", options: ["No, experienced traders don't", "Yes, for every trade", "Only for large accounts", "Only when learning"], correctIndex: 1, explanation: "Every trader, regardless of experience, should calculate position size for every trade." },
          { question: "What's the risk formula?", options: ["Lot = Account / Price", "Lot = Risk Amount / (SL × Pip Value)", "Lot = Leverage × Balance", "Lot = Balance / 100"], correctIndex: 1, explanation: "Lot Size = Risk Amount / (Stop Loss in Pips × Pip Value per Lot)." }
        ]
      },
      {
        id: "8-4",
        slug: "trading-psychology",
        title: "Trading Psychology",
        seoTitle: "Trading Psychology | Control Fear & Greed in Trading",
        metaDescription: "Master trading psychology: overcome fear and greed, develop discipline, create a trading plan, and learn why emotional control is the #1 factor in trading success.",
        duration: "3 min read",
        introduction: "Your biggest enemy in trading isn't the market — it's yourself. Trading psychology is the number one factor that separates winners from losers. Mastering your emotions is non-negotiable.",
        summary: [
          "Fear and greed are the two emotions that destroy traders",
          "Develop a plan and follow it — no exceptions",
          "Accept that losses are part of the process",
          "Take breaks after losses — don't revenge trade"
        ],
        content: [
          "Fear manifests as: not taking valid setups (fear of loss), closing winners too early (fear of giving back profits), and moving stop losses (fear of being wrong).",
          "Greed manifests as: overtrading (wanting more), over-leveraging (wanting bigger profits), not taking profits (wanting even more), and averaging down on losers (hoping it comes back).",
          "The solution is simple but not easy: Create a detailed trading plan and follow it without deviation. Your plan should answer: What do I trade? When do I trade? How do I enter? Where is my SL/TP? How much do I risk?",
          "After a loss: Stop trading. Take a 15-minute break minimum. Review whether the trade followed your plan. If it did — it's a good loss. If it didn't — identify why you deviated. Never trade emotionally."
        ],
        examples: [
          "Example: You have a valid setup but hesitate because your last trade lost. Fear of loss makes you miss a winning trade. Solution: Follow the plan regardless of the last trade's outcome.",
          "Example: You're up $5 on a $100 account. Greed tells you to hold for more. Price reverses and you close at $1 profit. Solution: Set a take profit and let it hit."
        ],
        keyTakeaways: [
          "Fear and greed are the two most destructive trading emotions",
          "A written trading plan removes emotional decision-making",
          "A 'good loss' is one that followed your plan perfectly",
          "Always take a break after losing — never revenge trade"
        ],
        faq: [
          { question: "How do I control my emotions while trading?", answer: "1) Have a written plan and follow it. 2) Risk only 1% so losses don't hurt. 3) Take breaks after losses. 4) Remember that losses are normal — even the best traders lose regularly." },
          { question: "What is a good loss?", answer: "A good loss is when you followed your plan perfectly but the trade didn't work out. Not every setup wins — and that's okay. Bad losses come from breaking your rules." },
          { question: "How do I stop revenge trading?", answer: "Set a daily loss limit (e.g., max 2 losses per day). After hitting it, close your platform. The market will be there tomorrow." }
        ],
        relatedLessons: ["why-traders-fail", "consistency-discipline", "trading-checklist"],
        quiz: [
          { question: "What are the two main destructive emotions in trading?", options: ["Excitement and boredom", "Fear and greed", "Hope and despair", "Confidence and doubt"], correctIndex: 1, explanation: "Fear and greed are the primary emotions that lead to poor trading decisions." },
          { question: "What should you do after a loss?", options: ["Take a bigger trade to recover", "Stop, take a break, review", "Keep trading to make it back", "Increase leverage"], correctIndex: 1, explanation: "After a loss, stop trading, take a break, and review whether the trade followed your plan." },
          { question: "What is the solution to emotional trading?", options: ["Use more indicators", "Create and follow a detailed plan", "Trade smaller timeframes", "Watch more YouTube"], correctIndex: 1, explanation: "A detailed, written trading plan that you follow without deviation removes emotional decision-making." }
        ]
      },
      {
        id: "8-5",
        slug: "trading-checklist",
        title: "Trading Checklist",
        seoTitle: "Pre-Trade Checklist | 9-Point Trading Process",
        metaDescription: "Use this 9-point pre-trade checklist before every trade: from checking the daily bias to confirming your emotional state. Skip no steps — consistency creates results.",
        duration: "2 min read",
        introduction: "Professional pilots use checklists before every flight, no matter how experienced. Professional traders should too. Here's your 9-point pre-trade checklist that ensures you never enter a trade unprepared.",
        summary: [
          "A checklist prevents impulsive trades",
          "Run through it BEFORE every trade without exception",
          "If any item fails, skip the trade",
          "Consistency in process creates consistency in results"
        ],
        content: [
          "✅ 1. Is the daily bias clear? (Don't trade in choppy/unclear markets) ✅ 2. Is price at a significant level? (S/R, OB, FVG — don't chase) ✅ 3. Is there a valid entry trigger? (Candle pattern, MSS, sweep)",
          "✅ 4. Is my stop loss placed at a structural level? ✅ 5. Is my risk-reward at least 1:2? ✅ 6. Have I calculated my lot size using the calculator?",
          "✅ 7. Am I trading during an active session? ✅ 8. Am I emotionally neutral? (Not angry, euphoric, or desperate) ✅ 9. Does this trade match my strategy rules?",
          "If ANY of these items gets a 'no,' skip the trade. No exceptions. The next setup is always around the corner. There is never a reason to take a substandard trade."
        ],
        examples: [
          "Example: Your checklist shows 8 out of 9 items passing, but #8 fails — you just had a losing trade and feel frustrated. Skip the trade. Your emotions will cloud your judgment.",
          "Example: Setup looks perfect, but #5 fails — the RR is only 1:0.8. Skip it. Another setup with proper RR will appear."
        ],
        keyTakeaways: [
          "Run the full 9-point checklist before every single trade",
          "If any item fails → skip the trade, no exceptions",
          "Emotional state is just as important as technical analysis",
          "Consistency in process creates consistency in results"
        ],
        faq: [
          { question: "Do professional traders really use checklists?", answer: "Yes. Professional traders, pilots, surgeons — all high-stakes professions use checklists. They prevent costly mistakes caused by overconfidence or emotional state." },
          { question: "What if my checklist passes but I still feel uncertain?", answer: "Trust your process. If all 9 items pass, take the trade. Uncertainty is normal — that's why you have a plan. Results are measured over 50+ trades, not individual ones." },
          { question: "Can I customize the checklist?", answer: "Once you've used this one for 50+ trades, absolutely. Add or modify items based on your strategy and common mistakes. But start with this framework." }
        ],
        relatedLessons: ["trading-psychology", "eight-step-trade-setup", "consistency-discipline"],
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
        slug: "example-trading-strategy",
        title: "Example Trading Strategy",
        seoTitle: "Complete SMC Trading Strategy for Beginners",
        metaDescription: "A complete example trading strategy combining Smart Money Concepts: multi-timeframe analysis, order block entries, and risk management rules for consistent execution.",
        duration: "4 min read",
        introduction: "Here's a complete example strategy combining everything you've learned. This is a starting framework — adapt it as you gain experience. The key is having clear, written rules that you can follow without hesitation.",
        summary: [
          "A complete strategy combining SMC concepts",
          "Uses multi-timeframe analysis with clear rules",
          "Focused on high-probability setups only",
          "Includes risk management rules"
        ],
        content: [
          "STRATEGY: SMC Pullback Entry. Timeframes: Daily (bias), 4H (structure), 15M (entry). Pairs: XAUUSD, EUR/USD. Sessions: London open, London/NY overlap only.",
          "Rules: 1) Identify daily bias (bullish/bearish). 2) On 4H, identify the most recent market structure shift in the direction of daily bias. 3) Mark the order block that caused the MSS. 4) Drop to 15M and wait for price to pull back to the OB. 5) Enter when you see a bullish/bearish engulfing or pin bar at the OB. 6) SL below the OB, TP at the next 4H structure level. Minimum 1:2 RR.",
          "Risk rules: Max 1% risk per trade. Max 2 trades per day. No trading during high-impact news. No trading if emotional. Must pass full checklist before entry.",
          "This strategy won't catch every move, but it filters for high-probability setups. Quality over quantity. Backtest this on historical charts before using real money."
        ],
        examples: [
          "Example: Daily gold = bullish. 4H shows MSS above previous LH with OB at $2,340-$2,345. Price pulls back to $2,342. 15M shows bullish engulfing. Enter long. SL: $2,333. TP: $2,368. RR = 1:2.8. Lot size: calculated per risk rules.",
          "Example: This exact strategy might only give 2-3 setups per week. That's fine — quality over quantity."
        ],
        keyTakeaways: [
          "A good strategy has clear, written rules for every decision",
          "Multi-timeframe analysis: Daily for bias, 4H for structure, 15M for entry",
          "Max 1% risk per trade, max 2 trades per day",
          "Always backtest before trading with real money"
        ],
        faq: [
          { question: "Should I use this exact strategy?", answer: "Use it as a starting framework. Once you understand why each rule exists, you can adapt it. But follow it as-is for your first 50+ trades." },
          { question: "How many trades will this strategy give per week?", answer: "Typically 2-5 trades per week. Some weeks may have zero setups. That's normal — don't force trades when the setup isn't there." },
          { question: "What if this strategy doesn't work for me?", answer: "Give it at least 50 trades before judging. Results are measured over a large sample size, not individual trades. Keep a journal to identify any execution issues." }
        ],
        relatedLessons: ["eight-step-trade-setup", "order-blocks", "market-structure-shifts"],
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
        slug: "consistency-discipline",
        title: "Consistency and Discipline",
        seoTitle: "Trading Consistency & Discipline | Key to Profitability",
        metaDescription: "Learn why consistency is the #1 trait of profitable traders. Discover how to maintain discipline through winning and losing streaks, and the power of a trading journal.",
        duration: "3 min read",
        introduction: "The difference between amateur and professional traders isn't knowledge — it's consistency. Both might know the same setups, but the professional executes them the same way every single time.",
        summary: [
          "Consistency is the number one trait of profitable traders",
          "Follow the same process regardless of recent results",
          "Track every trade in a journal",
          "Small consistent gains compound into significant returns"
        ],
        content: [
          "Consistency means: Same strategy every day. Same risk per trade every trade. Same pre-trade checklist. Same journaling process. No deviations based on emotion or recent results.",
          "After a winning streak: Don't increase risk. Don't deviate from your plan. Don't get cocky. Winners create confidence, and confidence creates mistakes if unchecked.",
          "After a losing streak: Don't increase risk to 'make it back.' Don't abandon your strategy. Review your journal — are you following the plan? If yes, losses are normal. If no, fix the deviation.",
          "Trading journal essentials: Date, pair, direction, entry price, SL, TP, lot size, result, screenshot, and — most importantly — notes on your emotional state and whether you followed your plan."
        ],
        examples: [
          "Example: Trader A follows the plan for 20 trades, then after 3 losses, doubles their risk to 'recover.' They lose 2 more at double risk and are now down significantly. Trader B follows the plan all 20 trades — down slightly after losses but still in the game.",
          "Example: Journal entry: 'Feb 15, XAUUSD, Long, Entry: $2,345, SL: $2,335, TP: $2,365, Lot: 0.01, Result: +$2. Followed plan: Yes. Emotional state: Calm. Note: Good setup, held to TP.'"
        ],
        keyTakeaways: [
          "Consistency = same process every trade, regardless of recent results",
          "Never change risk or strategy after winning or losing streaks",
          "A trading journal is non-negotiable for improvement",
          "Track emotional state and plan adherence, not just profits"
        ],
        faq: [
          { question: "How do I stay disciplined?", answer: "1) Have a written plan. 2) Use a checklist before every trade. 3) Journal every trade including emotions. 4) Set daily loss limits. 5) Take breaks after losses." },
          { question: "What if I keep breaking my rules?", answer: "Reduce your risk to a level where losses don't trigger emotions. If you're emotional about a $1 loss, reduce lot size until losses feel manageable. Then gradually increase." },
          { question: "How long does it take to develop consistency?", answer: "Most traders need 3-6 months of deliberate practice to develop consistent habits. It's like building a muscle — it gets easier with time." }
        ],
        relatedLessons: ["trading-psychology", "trading-checklist", "how-to-learn-trading"],
        quiz: [
          { question: "What separates professional from amateur traders?", options: ["More knowledge", "Better indicators", "Consistency in execution", "Larger accounts"], correctIndex: 2, explanation: "Consistency — following the same process regardless of recent results — separates pros from amateurs." },
          { question: "What should you do after a winning streak?", options: ["Increase risk", "Stay consistent with your plan", "Take bigger trades", "Stop trading"], correctIndex: 1, explanation: "After wins, maintain the same risk and process. Overconfidence from winning leads to mistakes." },
          { question: "What's the most important trading journal entry?", options: ["Profit/loss", "Whether you followed your plan and your emotional state", "The pair you traded", "Time of trade"], correctIndex: 1, explanation: "Tracking plan adherence and emotional state helps you identify and correct behavioral patterns." }
        ]
      },
      {
        id: "9-3",
        slug: "financial-literacy",
        title: "Financial Literacy",
        seoTitle: "Financial Literacy for Traders | Money Management Basics",
        metaDescription: "Essential financial literacy for traders: never trade money you can't afford to lose, build an emergency fund first, and separate trading capital from personal finances.",
        duration: "3 min read",
        introduction: "Before you trade with real money, let's talk about financial literacy. Trading shouldn't be your solution to financial problems — it should be a skill you develop while financially stable.",
        summary: [
          "Understand the difference between income and wealth",
          "Never trade money you can't afford to lose",
          "Build an emergency fund before trading with real money",
          "Trading profits should supplement, not replace, stable income initially"
        ],
        content: [
          "Rule #1: Never trade money you can't afford to lose. If losing your trading capital would affect your rent, food, or bills, you're not ready to trade with real money. Use demo until you can afford it.",
          "Build an emergency fund: Before depositing into a trading account, have 3-6 months of expenses saved. This removes the desperation that destroys traders' psychology.",
          "Separate your trading capital: Your trading account should be money you've specifically set aside for this purpose. Don't dip into it for expenses, and don't add to it from savings meant for other goals.",
          "Long-term perspective: In the first year, trading profits should supplement your income, not replace it. Once you've proven consistent profitability over 6+ months, you can consider scaling up — but keep your day job until you do."
        ],
        examples: [
          "Example: Save up $100-200 specifically for trading. This is money you can afford to lose entirely while learning. It's tuition, not an investment.",
          "Example: A trader with a stable job and emergency fund makes calmer decisions than one trading their rent money. Psychology matters more than strategy."
        ],
        keyTakeaways: [
          "Never trade money you can't afford to lose",
          "Build 3-6 months emergency fund before live trading",
          "Separate trading capital from personal finances",
          "Keep your day job until 6+ months of consistent profitability"
        ],
        faq: [
          { question: "How much should I deposit to start?", answer: "Start with $50-200 — an amount you can completely afford to lose. This is your tuition for learning. You can always deposit more once you're consistently profitable." },
          { question: "Should I quit my job to trade full-time?", answer: "Not until you have at least 6-12 months of verified profitable trading, significant savings, and a trading account large enough to sustain your lifestyle." },
          { question: "Can I make a living from a small account?", answer: "Not immediately. A $100 account at 3% monthly = $3/month. Focus on learning the skill. Once proven, you can scale up or find prop firm funding." }
        ],
        relatedLessons: ["realistic-expectations", "most-important-rule", "choose-broker"],
        quiz: [
          { question: "Should you trade money you need for bills?", options: ["Yes, to double it", "No, never trade money you can't afford to lose", "Only if you're confident", "Only on demo-tested strategies"], correctIndex: 1, explanation: "Trading money you need creates desperation which leads to emotional decisions and losses." },
          { question: "What should you build before trading with real money?", options: ["A larger trading account", "An emergency fund (3-6 months expenses)", "More knowledge only", "Nothing, just start"], correctIndex: 1, explanation: "An emergency fund removes financial pressure and allows you to trade with proper psychology." },
          { question: "When should trading replace your job?", options: ["Immediately", "After your first profit", "After 6+ months of consistent profitability", "Never"], correctIndex: 2, explanation: "Only consider full-time trading after proving consistent profitability over at least 6 months." }
        ]
      },
      {
        id: "9-4",
        slug: "choose-broker",
        title: "How to Choose a Broker",
        seoTitle: "How to Choose a Forex Broker | Regulated Broker Guide",
        metaDescription: "Learn how to choose a regulated forex broker: what to look for, red flags to avoid, key factors to compare, and why to always start with a demo account first.",
        duration: "3 min read",
        introduction: "Choosing the right broker is crucial. A bad broker can cost you money through wide spreads, slow execution, or in worst cases, outright fraud. Here's how to find a reliable, regulated broker.",
        summary: [
          "Always use a regulated broker",
          "Check for tight spreads, fast execution, and good reviews",
          "Start with a demo account before depositing",
          "Avoid brokers promising guaranteed returns"
        ],
        content: [
          "Regulation first: Only use brokers regulated by reputable bodies — FCA (UK), ASIC (Australia), CySEC (EU), or similar. Regulation means your funds are protected and the broker follows rules.",
          "Key factors to compare: Spreads (tighter is better), execution speed (faster is better), available instruments (ensure they have what you want to trade), minimum deposit, and leverage options.",
          "Read reviews from multiple sources. Look for patterns — if many users report withdrawal issues, that's a red flag. Individual negative reviews might be from poor traders blaming the broker.",
          "Start with demo: Any reputable broker offers a free demo account. Test their platform, execution, and spreads before depositing real money. This also lets you practice without risk."
        ],
        examples: [
          "Example: Broker A: FCA regulated, 1.5-pip EUR/USD spread, $5 minimum deposit, 1:500 leverage, fast execution. Broker B: Unregulated, promises 'guaranteed profits', 5-pip spreads. Choose Broker A.",
          "Example: Open demo accounts with 2-3 brokers. Trade each for 1-2 weeks. Compare spreads, execution speed, and platform usability. Then choose the best one."
        ],
        keyTakeaways: [
          "Only use brokers regulated by FCA, ASIC, CySEC, or equivalent",
          "Compare spreads, execution speed, and withdrawal reviews",
          "Run away from anyone promising guaranteed returns",
          "Always test with a demo account before depositing real money"
        ],
        faq: [
          { question: "What is the best forex broker?", answer: "There's no single 'best' broker — it depends on your location, preferred instruments, and account size. Focus on regulation, tight spreads, and reliable withdrawals." },
          { question: "Is my money safe with a regulated broker?", answer: "Regulated brokers must keep client funds in segregated accounts. Many also participate in compensation schemes. Your money is significantly safer than with unregulated brokers." },
          { question: "What about broker bonuses?", answer: "Be cautious with bonuses. They often come with conditions (like trading volume requirements before withdrawal). Read the terms carefully. Never choose a broker based on bonuses alone." }
        ],
        relatedLessons: ["financial-literacy", "first-trade", "bid-ask-spread"],
        quiz: [
          { question: "What is the most important factor in choosing a broker?", options: ["Highest leverage", "Regulation by reputable bodies", "Best bonuses", "Most social media followers"], correctIndex: 1, explanation: "Regulation ensures your funds are protected and the broker operates fairly." },
          { question: "What is a red flag when researching brokers?", options: ["Low spreads", "Multiple reports of withdrawal issues", "Offering demo accounts", "Being regulated"], correctIndex: 1, explanation: "Consistent complaints about withdrawal problems are a serious red flag." },
          { question: "What should you do before depositing real money?", options: ["Deposit immediately for bonuses", "Test the demo account first", "Ask on social media", "Just pick the cheapest"], correctIndex: 1, explanation: "Always test a broker's platform, execution, and spreads via demo before committing real money." }
        ]
      },
      {
        id: "9-5",
        slug: "first-trade",
        title: "How to Place Your First Trade",
        seoTitle: "How to Place Your First Forex Trade | Step-by-Step",
        metaDescription: "Step-by-step guide to placing your first forex trade: from opening a demo account to transitioning to real money safely with micro lots and proper risk management.",
        duration: "4 min read",
        introduction: "You've made it to the final lesson. Here's how to transition from learning to actual trading — safely, methodically, and with the right expectations for your first real trade.",
        summary: [
          "Start on demo — never skip this step",
          "Follow the 8-step trade setup process",
          "Start with micro lots on your first real trade",
          "The goal of your first real trade is process, not profit"
        ],
        content: [
          "Step 1: Open a demo account with a regulated broker. Fund it with an amount similar to what you'd actually trade with ($50-100 for small accounts). Practice for at least 2-4 weeks.",
          "Step 2: On demo, follow the complete 8-step setup process for every trade. Journal every trade. The goal is not to make demo money — it's to prove you can follow your process consistently.",
          "Step 3: When you've had 20+ trades on demo with consistent process adherence (not necessarily all winners), you're ready for your first real trade.",
          "Step 4: Open a real account with the smallest deposit you're comfortable with. Use the smallest lot size available (0.01). Follow your exact same process. The goal of your first real trade is executing your process with real money — not making a profit.",
          "Remember: Every expert was once a beginner. The fact that you've completed this academy puts you ahead of 90% of people who start trading. Now execute with discipline."
        ],
        examples: [
          "Example: Demo phase — 25 trades over 3 weeks. 12 wins, 13 losses. But followed the plan on 23 out of 25 trades. Win rate: 48%. Plan adherence: 92%. READY for real money.",
          "Example: First real trade — 0.01 lot on gold. SL = 50 pips ($0.50 risk). Result: -$0.40 loss. But followed the plan perfectly. That's a successful first trade."
        ],
        keyTakeaways: [
          "Practice on demo for at least 2-4 weeks with the full process",
          "Have 20+ demo trades with consistent plan adherence before going live",
          "Use 0.01 lots for your first real trade",
          "The first real trade goal is process execution, not profit"
        ],
        faq: [
          { question: "How do I know when I'm ready for real money?", answer: "When you've completed 20+ demo trades with consistent process adherence (following your plan 90%+ of the time), you're ready — regardless of win rate." },
          { question: "How much should I deposit for my first real account?", answer: "The smallest amount you're comfortable losing entirely: $50-200. This is still tuition money. The skills you build matter more than the account size." },
          { question: "What if I lose on my first real trade?", answer: "That's completely normal and expected. If you followed your plan, it's a good trade regardless of the outcome. Results are measured over 50+ trades, not one." }
        ],
        relatedLessons: ["example-trading-strategy", "trading-checklist", "position-sizing"],
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
