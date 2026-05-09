import { lazy, Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import SEO from "@/components/SEO";
import { modules, findLessonBySlug, getAllLessons } from "@/data/modules";
import { useProgress } from "@/hooks/useProgress";
import Quiz from "@/components/Quiz";
import { ArrowLeft, ArrowRight, CheckCircle, Circle, Wrench, Clock, BookOpen, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const interactiveComponents: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  MarketStructureVisualizer: lazy(() => import("@/components/interactive/MarketStructureVisualizer")),
  LiquiditySweepSimulator: lazy(() => import("@/components/interactive/LiquiditySweepSimulator")),
  TradeDecisionTrainer: lazy(() => import("@/components/interactive/TradeDecisionTrainer")),
  SessionHeatmap: lazy(() => import("@/components/interactive/SessionHeatmap")),
  TradingChecklist: lazy(() => import("@/components/interactive/TradingChecklist")),
  Flashcards: lazy(() => import("@/components/interactive/Flashcards")),
};

const SvgDiagram = ({ type }: { type: string }) => {
  const diagrams: Record<string, JSX.Element> = {
    "market-structure": (
      <svg viewBox="0 0 400 200" className="w-full max-w-md mx-auto" aria-label="Market structure diagram showing higher highs and higher lows">
        <path d="M20 160 L80 100 L130 130 L190 60 L240 90 L300 30 L360 50" fill="none" stroke="hsl(var(--gold))" strokeWidth="2.5" />
        <circle cx="80" cy="100" r="4" fill="hsl(var(--gold))" /><text x="80" y="92" textAnchor="middle" className="text-[10px] fill-muted-foreground">HL</text>
        <circle cx="130" cy="130" r="4" fill="hsl(var(--gold))" /><text x="130" y="145" textAnchor="middle" className="text-[10px] fill-muted-foreground">HL</text>
        <circle cx="190" cy="60" r="4" fill="hsl(var(--gold))" /><text x="190" y="52" textAnchor="middle" className="text-[10px] fill-muted-foreground">HH</text>
        <circle cx="300" cy="30" r="4" fill="hsl(var(--gold))" /><text x="300" y="22" textAnchor="middle" className="text-[10px] fill-muted-foreground">HH</text>
        <circle cx="240" cy="90" r="4" fill="hsl(var(--gold))" /><text x="240" y="105" textAnchor="middle" className="text-[10px] fill-muted-foreground">HL</text>
      </svg>
    ),
    "risk-comparison": (
      <svg viewBox="0 0 400 180" className="w-full max-w-md mx-auto" aria-label="Risk comparison: 1% vs 10% per trade">
        <text x="200" y="16" textAnchor="middle" className="text-[11px] font-semibold fill-foreground">Account After 10 Consecutive Losses</text>
        <rect x="30" y="30" width="160" height="24" rx="4" fill="hsl(var(--success) / 0.15)" stroke="hsl(var(--success))" strokeWidth="1" />
        <text x="110" y="46" textAnchor="middle" className="text-[10px] fill-foreground">1% Risk: $90 remaining</text>
        <rect x="30" y="62" width="160" height="24" rx="4" fill="hsl(var(--destructive) / 0.15)" stroke="hsl(var(--destructive))" strokeWidth="1" />
        <text x="110" y="78" textAnchor="middle" className="text-[10px] fill-foreground">10% Risk: $35 remaining</text>
        <rect x="220" y="30" width={160 * 0.9} height="18" rx="3" fill="hsl(var(--success) / 0.3)" />
        <rect x="220" y="62" width={160 * 0.35} height="18" rx="3" fill="hsl(var(--destructive) / 0.3)" />
        <text x="220" y="110" className="text-[9px] fill-muted-foreground">Starting balance: $100</text>
      </svg>
    ),
    "support-resistance": (
      <svg viewBox="0 0 400 200" className="w-full max-w-md mx-auto" aria-label="Support and resistance zones diagram">
        <line x1="30" y1="50" x2="370" y2="50" stroke="hsl(var(--destructive) / 0.4)" strokeWidth="1" strokeDasharray="6,4" />
        <text x="375" y="54" className="text-[9px] fill-destructive">Resistance</text>
        <line x1="30" y1="150" x2="370" y2="150" stroke="hsl(var(--success) / 0.4)" strokeWidth="1" strokeDasharray="6,4" />
        <text x="375" y="154" className="text-[9px] fill-success">Support</text>
        <path d="M40 100 L80 60 L120 90 L160 55 L200 80 L240 48 L270 70 L300 52 L340 85 L370 60" fill="none" stroke="hsl(var(--gold))" strokeWidth="2" />
        <circle cx="80" cy="60" r="3" fill="hsl(var(--destructive))" />
        <circle cx="160" cy="55" r="3" fill="hsl(var(--destructive))" />
        <circle cx="120" cy="90" r="3" fill="hsl(var(--success))" />
        <circle cx="200" cy="80" r="3" fill="hsl(var(--success))" />
      </svg>
    ),
    "liquidity-pools": (
      <svg viewBox="0 0 400 200" className="w-full max-w-md mx-auto" aria-label="Liquidity pools above highs and below lows">
        <rect x="30" y="20" width="340" height="24" rx="4" fill="hsl(var(--destructive) / 0.1)" stroke="hsl(var(--destructive) / 0.3)" strokeWidth="1" />
        <text x="200" y="36" textAnchor="middle" className="text-[9px] fill-destructive">Buy Stops / Liquidity Above Highs</text>
        <rect x="30" y="156" width="340" height="24" rx="4" fill="hsl(var(--success) / 0.1)" stroke="hsl(var(--success) / 0.3)" strokeWidth="1" />
        <text x="200" y="172" textAnchor="middle" className="text-[9px] fill-success">Sell Stops / Liquidity Below Lows</text>
        <path d="M50 120 L100 70 L150 110 L200 55 L250 100 L300 65 L350 90" fill="none" stroke="hsl(var(--gold))" strokeWidth="2" />
        <line x1="30" y1="55" x2="370" y2="55" stroke="hsl(var(--muted-foreground) / 0.3)" strokeWidth="1" strokeDasharray="4,4" />
        <line x1="30" y1="120" x2="370" y2="120" stroke="hsl(var(--muted-foreground) / 0.3)" strokeWidth="1" strokeDasharray="4,4" />
      </svg>
    ),
    "liquidity-sweep": (
      <svg viewBox="0 0 400 200" className="w-full max-w-md mx-auto" aria-label="Liquidity sweep diagram">
        <line x1="30" y1="50" x2="370" y2="50" stroke="hsl(var(--muted-foreground) / 0.3)" strokeWidth="1" strokeDasharray="4,4" />
        <text x="375" y="54" className="text-[9px] fill-muted-foreground">Previous High</text>
        <path d="M40 120 L100 80 L140 100 L180 70 L220 90 L260 40 L280 60 L320 100 L360 130" fill="none" stroke="hsl(var(--gold))" strokeWidth="2" />
        <circle cx="260" cy="40" r="5" fill="none" stroke="hsl(var(--destructive))" strokeWidth="2" />
        <text x="260" y="28" textAnchor="middle" className="text-[9px] fill-destructive font-medium">Sweep!</text>
        <path d="M255 45 L265 45 L260 55 Z" fill="hsl(var(--destructive))" />
      </svg>
    ),
    "market-cycles": (
      <svg viewBox="0 0 400 180" className="w-full max-w-md mx-auto" aria-label="Market cycle phases">
        <rect x="10" y="90" width="85" height="70" rx="6" fill="hsl(var(--muted) / 0.5)" stroke="hsl(var(--border))" />
        <text x="52" y="115" textAnchor="middle" className="text-[9px] font-semibold fill-foreground">Accumulation</text>
        <text x="52" y="130" textAnchor="middle" className="text-[8px] fill-muted-foreground">Range / Quiet</text>
        <rect x="105" y="30" width="85" height="70" rx="6" fill="hsl(var(--success) / 0.1)" stroke="hsl(var(--success) / 0.3)" />
        <text x="147" y="55" textAnchor="middle" className="text-[9px] font-semibold fill-success">Markup</text>
        <text x="147" y="70" textAnchor="middle" className="text-[8px] fill-muted-foreground">Uptrend</text>
        <rect x="200" y="30" width="85" height="70" rx="6" fill="hsl(var(--muted) / 0.5)" stroke="hsl(var(--border))" />
        <text x="242" y="55" textAnchor="middle" className="text-[9px] font-semibold fill-foreground">Distribution</text>
        <text x="242" y="70" textAnchor="middle" className="text-[8px] fill-muted-foreground">Range / Top</text>
        <rect x="295" y="90" width="85" height="70" rx="6" fill="hsl(var(--destructive) / 0.1)" stroke="hsl(var(--destructive) / 0.3)" />
        <text x="337" y="115" textAnchor="middle" className="text-[9px] font-semibold fill-destructive">Markdown</text>
        <text x="337" y="130" textAnchor="middle" className="text-[8px] fill-muted-foreground">Downtrend</text>
      </svg>
    ),
    "amd-cycle": (
      <svg viewBox="0 0 400 160" className="w-full max-w-md mx-auto" aria-label="AMD cycle diagram">
        <rect x="20" y="60" width="100" height="80" rx="4" fill="hsl(var(--muted) / 0.5)" stroke="hsl(var(--border))" />
        <text x="70" y="85" textAnchor="middle" className="text-[10px] font-semibold fill-foreground">A</text>
        <text x="70" y="100" textAnchor="middle" className="text-[8px] fill-muted-foreground">Accumulation</text>
        <text x="70" y="115" textAnchor="middle" className="text-[7px] fill-muted-foreground">Asian range</text>
        <rect x="145" y="20" width="100" height="80" rx="4" fill="hsl(var(--destructive) / 0.1)" stroke="hsl(var(--destructive) / 0.3)" />
        <text x="195" y="45" textAnchor="middle" className="text-[10px] font-semibold fill-destructive">M</text>
        <text x="195" y="60" textAnchor="middle" className="text-[8px] fill-muted-foreground">Manipulation</text>
        <text x="195" y="75" textAnchor="middle" className="text-[7px] fill-muted-foreground">Fake breakout</text>
        <rect x="270" y="40" width="110" height="80" rx="4" fill="hsl(var(--success) / 0.1)" stroke="hsl(var(--success) / 0.3)" />
        <text x="325" y="65" textAnchor="middle" className="text-[10px] font-semibold fill-success">D</text>
        <text x="325" y="80" textAnchor="middle" className="text-[8px] fill-muted-foreground">Distribution</text>
        <text x="325" y="95" textAnchor="middle" className="text-[7px] fill-muted-foreground">Real move</text>
      </svg>
    ),
    "trading-sessions": (
      <svg viewBox="0 0 400 120" className="w-full max-w-md mx-auto" aria-label="Trading sessions timeline">
        <rect x="20" y="40" width="80" height="30" rx="4" fill="hsl(var(--muted) / 0.5)" stroke="hsl(var(--border))" />
        <text x="60" y="60" textAnchor="middle" className="text-[9px] fill-foreground">Tokyo</text>
        <rect x="110" y="30" width="130" height="40" rx="4" fill="hsl(var(--gold) / 0.15)" stroke="hsl(var(--gold) / 0.4)" />
        <text x="175" y="55" textAnchor="middle" className="text-[9px] font-medium fill-gold">London</text>
        <rect x="200" y="35" width="120" height="35" rx="4" fill="hsl(var(--success) / 0.15)" stroke="hsl(var(--success) / 0.4)" />
        <text x="260" y="57" textAnchor="middle" className="text-[9px] fill-success">New York</text>
        <rect x="200" y="80" width="40" height="20" rx="3" fill="hsl(var(--gold) / 0.25)" />
        <text x="220" y="94" textAnchor="middle" className="text-[7px] fill-gold font-medium">Overlap</text>
        <text x="20" y="95" className="text-[8px] fill-muted-foreground">00:00</text>
        <text x="175" y="95" className="text-[8px] fill-muted-foreground">12:00</text>
        <text x="340" y="95" className="text-[8px] fill-muted-foreground">24:00 GMT</text>
      </svg>
    ),
    "failure-reasons": (
      <svg viewBox="0 0 400 140" className="w-full max-w-md mx-auto" aria-label="Why traders fail">
        {["No Trading Plan", "Over-Leveraging", "Emotional Trading", "Survivorship Bias"].map((reason, i) => (
          <g key={i}>
            <rect x={10 + i * 97} y="20" width="90" height="55" rx="6" fill="hsl(var(--destructive) / 0.08)" stroke="hsl(var(--destructive) / 0.2)" />
            <text x={55 + i * 97} y="45" textAnchor="middle" className="text-[8px] fill-foreground font-medium">{reason.split(' ').slice(0, 2).join(' ')}</text>
            <text x={55 + i * 97} y="58" textAnchor="middle" className="text-[8px] fill-foreground font-medium">{reason.split(' ').slice(2).join(' ')}</text>
          </g>
        ))}
        <text x="200" y="100" textAnchor="middle" className="text-[9px] fill-destructive font-medium">70-90% of retail traders lose money</text>
        <text x="200" y="120" textAnchor="middle" className="text-[8px] fill-muted-foreground">Every failure above is preventable with proper education</text>
      </svg>
    ),
    "bulls-bears": (
      <svg viewBox="0 0 400 160" className="w-full max-w-md mx-auto" aria-label="Bulls vs bears diagram">
        <path d="M30 130 L100 90 L150 110 L200 60 L260 80 L320 40 L380 30" fill="none" stroke="hsl(var(--success))" strokeWidth="2" />
        <text x="380" y="22" className="text-[9px] fill-success font-medium">Bullish ↑</text>
        <path d="M30 30 L80 50 L130 40 L180 80 L230 70 L290 110 L360 140" fill="none" stroke="hsl(var(--destructive))" strokeWidth="2" strokeDasharray="6,3" />
        <text x="360" y="152" className="text-[9px] fill-destructive font-medium">Bearish ↓</text>
      </svg>
    ),
    "chart-types": (
      <svg viewBox="0 0 400 120" className="w-full max-w-md mx-auto" aria-label="Chart types comparison">
        <text x="65" y="16" textAnchor="middle" className="text-[9px] fill-muted-foreground">Line</text>
        <path d="M20 90 L50 60 L80 70 L110 40" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" />
        <text x="200" y="16" textAnchor="middle" className="text-[9px] fill-muted-foreground">Bar (OHLC)</text>
        <g transform="translate(160, 25)"><line x1="10" y1="10" x2="10" y2="70" stroke="hsl(var(--muted-foreground))" /><line x1="5" y1="25" x2="10" y2="25" stroke="hsl(var(--muted-foreground))" /><line x1="10" y1="55" x2="15" y2="55" stroke="hsl(var(--muted-foreground))" /></g>
        <text x="335" y="16" textAnchor="middle" className="text-[9px] fill-gold font-medium">Candlestick ★</text>
        <rect x="315" y="40" width="16" height="35" rx="1" fill="hsl(var(--success) / 0.3)" stroke="hsl(var(--success))" /><line x1="323" y1="30" x2="323" y2="40" stroke="hsl(var(--success))" /><line x1="323" y1="75" x2="323" y2="90" stroke="hsl(var(--success))" />
        <rect x="340" y="35" width="16" height="30" rx="1" fill="hsl(var(--destructive) / 0.3)" stroke="hsl(var(--destructive))" /><line x1="348" y1="25" x2="348" y2="35" stroke="hsl(var(--destructive))" /><line x1="348" y1="65" x2="348" y2="85" stroke="hsl(var(--destructive))" />
      </svg>
    ),
    "candlestick-patterns": (
      <svg viewBox="0 0 400 130" className="w-full max-w-md mx-auto" aria-label="Key candlestick patterns">
        <text x="50" y="14" textAnchor="middle" className="text-[8px] fill-muted-foreground">Engulfing</text>
        <rect x="35" y="40" width="10" height="25" rx="1" fill="hsl(var(--destructive) / 0.3)" stroke="hsl(var(--destructive))" />
        <rect x="50" y="25" width="14" height="50" rx="1" fill="hsl(var(--success) / 0.3)" stroke="hsl(var(--success))" />
        <text x="150" y="14" textAnchor="middle" className="text-[8px] fill-muted-foreground">Pin Bar</text>
        <rect x="145" y="35" width="10" height="10" rx="1" fill="hsl(var(--success) / 0.3)" stroke="hsl(var(--success))" /><line x1="150" y1="45" x2="150" y2="85" stroke="hsl(var(--success))" />
        <text x="250" y="14" textAnchor="middle" className="text-[8px] fill-muted-foreground">Doji</text>
        <line x1="250" y1="25" x2="250" y2="85" stroke="hsl(var(--muted-foreground))" /><rect x="247" y="52" width="6" height="3" rx="1" fill="hsl(var(--muted-foreground))" />
        <text x="350" y="14" textAnchor="middle" className="text-[8px] fill-muted-foreground">Inside Bar</text>
        <rect x="338" y="25" width="14" height="55" rx="1" fill="hsl(var(--muted-foreground) / 0.2)" stroke="hsl(var(--muted-foreground))" />
        <rect x="355" y="35" width="10" height="30" rx="1" fill="hsl(var(--gold) / 0.3)" stroke="hsl(var(--gold))" />
      </svg>
    ),
  };
  return diagrams[type] ? <div className="my-6 bg-muted/30 border rounded-lg p-4">{diagrams[type]}</div> : null;
};

export default function LessonPage() {
  const { slug } = useParams();
  const result = findLessonBySlug(slug || "");
  const { isComplete, toggle } = useProgress();
  const allLessons = getAllLessons();

  if (!result) return <div className="container mx-auto px-4 py-12">Lesson not found.</div>;

  const { module: mod, lesson, lessonIndex } = result;
  const prevLesson = lessonIndex > 0 ? mod.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < mod.lessons.length - 1 ? mod.lessons[lessonIndex + 1] : null;
  const nextModule = modules.find(m => m.id === mod.id + 1);
  const done = isComplete(lesson.id);

  const InteractiveComponent = lesson.interactiveComponent
    ? interactiveComponents[lesson.interactiveComponent]
    : null;

  const relatedLessonObjects = lesson.relatedLessons
    .map(s => allLessons.find(l => l.slug === s))
    .filter(Boolean);

  return (
    <>
      <SEO title={lesson.seoTitle} description={lesson.metaDescription} path={`/academy/${lesson.slug}`} />
      <article className="container mx-auto max-w-3xl px-4 py-12">
        <Link to={`/academy/module/${mod.id}`} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Module {mod.id}: {mod.title}
        </Link>

        <header className="mb-8">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <Clock className="h-3 w-3" /> {lesson.duration}
            <span className="text-muted-foreground/40">•</span>
            <span>Module {mod.id}</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold">{lesson.title}</h1>
        </header>

        {/* Introduction */}
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">{lesson.introduction}</p>

        {/* SVG Diagram */}
        {lesson.svgDiagram && <SvgDiagram type={lesson.svgDiagram} />}

        {/* Key Takeaways - top */}
        <div className="bg-gold/5 border border-gold/20 rounded-lg p-5 mb-8">
          <h2 className="font-display font-semibold text-sm mb-3 flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-gold" /> Key Takeaways
          </h2>
          <ul className="space-y-1.5">
            {lesson.keyTakeaways.map((t, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-gold mt-0.5">✓</span>{t}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="prose prose-sm max-w-none space-y-4 mb-8">
          {lesson.content.map((p, i) => (
            <p key={i} className="text-foreground leading-relaxed">{p}</p>
          ))}
        </div>

        {/* Examples */}
        {lesson.examples && lesson.examples.length > 0 && (
          <div className="bg-muted/40 border rounded-lg p-5 mb-8">
            <h2 className="font-display font-semibold text-sm mb-3">📋 Examples</h2>
            <div className="space-y-3">
              {lesson.examples.map((ex, i) => (
                <p key={i} className="text-sm text-muted-foreground leading-relaxed">{ex}</p>
              ))}
            </div>
          </div>
        )}

        {/* Interactive component */}
        {InteractiveComponent && (
          <Suspense fallback={<div className="bg-muted/50 border rounded-lg p-6 my-6 text-center text-sm text-muted-foreground">Loading interactive tool...</div>}>
            <InteractiveComponent />
          </Suspense>
        )}

        {/* Tool link */}
        {lesson.toolLink && (
          <Link to={lesson.toolLink.path} className="flex items-center gap-3 bg-muted/50 border rounded-lg p-4 mb-8 hover:border-gold/50 transition-colors">
            <Wrench className="h-5 w-5 text-gold shrink-0" />
            <div>
              <p className="text-sm font-medium">Try this tool</p>
              <p className="text-xs text-muted-foreground">{lesson.toolLink.label}</p>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto" />
          </Link>
        )}

        {/* FAQ */}
        {lesson.faq.length > 0 && (
          <div className="mb-8">
            <h2 className="font-display font-semibold text-lg mb-3 flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-gold" /> Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible>
              {lesson.faq.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-sm font-medium text-left">{f.question}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}

        {/* Quiz */}
        <Quiz questions={lesson.quiz} />

        {/* Related Lessons */}
        {relatedLessonObjects.length > 0 && (
          <div className="mt-8 mb-8">
            <h2 className="font-display font-semibold text-sm mb-3 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-gold" /> Related Lessons
            </h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {relatedLessonObjects.map(rl => rl && (
                <Link key={rl.slug} to={`/academy/${rl.slug}`} className="border rounded-lg p-3 hover:border-gold/50 transition-colors text-sm">
                  <p className="font-medium">{rl.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{rl.metaDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Mark complete */}
        <div className="mt-8 flex items-center gap-3">
          <button onClick={() => toggle(lesson.id)} className="flex items-center gap-2 text-sm font-medium hover:text-gold transition-colors">
            {done ? <CheckCircle className="h-5 w-5 text-success" /> : <Circle className="h-5 w-5 text-muted-foreground" />}
            {done ? "Completed" : "Mark as complete"}
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-8 flex justify-between gap-4" aria-label="Lesson navigation">
          {prevLesson ? (
            <Button variant="outline" size="sm" asChild>
              <Link to={`/academy/${prevLesson.slug}`}>
                <ArrowLeft className="h-4 w-4 mr-1" /> {prevLesson.title}
              </Link>
            </Button>
          ) : <div />}
          {nextLesson ? (
            <Button variant="gold" size="sm" asChild>
              <Link to={`/academy/${nextLesson.slug}`}>
                {nextLesson.title} <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          ) : nextModule ? (
            <Button variant="gold" size="sm" asChild>
              <Link to={`/academy/module/${nextModule.id}`}>
                Next: {nextModule.title} <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          ) : (
            <Button variant="gold" size="sm" asChild>
              <Link to="/academy">Back to Academy <ArrowRight className="h-4 w-4 ml-1" /></Link>
            </Button>
          )}
        </nav>
      </article>
    </>
  );
}
