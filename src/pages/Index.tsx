import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { modules } from "@/data/modules";
import { goldPosts } from "@/data/gold-insights";
import { BookOpen, Calculator, TrendingUp, ArrowRight, Shield, Target, Gem, BarChart3 } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  BookOpen, BarChart3, Shield, Target, Gem,
};

const tools = [
  { title: "Lot Size Calculator", desc: "Calculate the perfect position size for your account", path: "/tools/lot-size-calculator", icon: Calculator },
  { title: "Margin Calculator", desc: "Check margin requirements before you trade", path: "/tools/margin-calculator", icon: Shield },
  { title: "Risk Per Trade", desc: "Know exactly how much you're risking", path: "/tools/risk-calculator", icon: Target },
];

export default function Home() {
  const latestPost = goldPosts[0];

  return (
    <>
      <SEO
        title="Learn Forex & Gold Trading for Small Accounts"
        description="Free step-by-step trading academy with calculators to help beginners learn forex and gold trading safely with small accounts."
        path="/"
      />

      {/* Hero */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold-foreground rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4 text-gold" />
            Free Trading Education
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Learn Trading Safely<br />
            <span className="text-gold">With Small Accounts</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Step-by-step academy + free trading calculators to help you avoid blowing small accounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="gold" size="lg" asChild>
              <Link to="/academy">Start Learning <ArrowRight className="h-4 w-4 ml-1" /></Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/tools">Use Free Tools <Calculator className="h-4 w-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 bg-muted/30 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-2">Learn in 5 Modules</h2>
          <p className="text-muted-foreground text-center mb-10">From complete beginner to placing your first trade</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((m) => {
              const Icon = iconMap[m.icon] || BookOpen;
              return (
                <Link
                  key={m.id}
                  to={`/academy/module/${m.id}`}
                  className="group bg-card border rounded-lg p-6 hover:shadow-md transition-all hover:border-gold/50"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-lg bg-gold/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-gold" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">Module {m.id}</span>
                  </div>
                  <h3 className="font-display font-semibold mb-1 group-hover:text-gold transition-colors">{m.title}</h3>
                  <p className="text-sm text-muted-foreground">{m.description}</p>
                  <p className="text-xs text-muted-foreground mt-2">{m.lessons.length} lessons</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-2">Free Trading Tools</h2>
          <p className="text-muted-foreground text-center mb-10">Essential calculators for every trade</p>
          <div className="grid md:grid-cols-3 gap-4">
            {tools.map(t => (
              <Link key={t.path} to={t.path} className="group bg-card border rounded-lg p-6 hover:shadow-md transition-all hover:border-gold/50">
                <t.icon className="h-8 w-8 text-gold mb-3" />
                <h3 className="font-display font-semibold mb-1 group-hover:text-gold transition-colors">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gold snapshot */}
      {latestPost && (
        <section className="py-16 bg-muted/30 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-2">Today's Gold Snapshot</h2>
            <p className="text-muted-foreground text-center mb-8">Latest XAUUSD analysis</p>
            <Link to={`/gold-insights/${latestPost.id}`} className="block bg-card border rounded-lg p-6 hover:shadow-md transition-all">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-gold" />
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  latestPost.tag === "bullish" ? "bg-success/10 text-success" :
                  latestPost.tag === "bearish" ? "bg-destructive/10 text-destructive" :
                  "bg-gold/10 text-gold"
                }`}>{latestPost.tag}</span>
                <span className="text-xs text-muted-foreground">{latestPost.date}</span>
              </div>
              <h3 className="font-display font-semibold mb-2">{latestPost.title}</h3>
              <p className="text-sm text-muted-foreground">{latestPost.bias}</p>
            </Link>
          </div>
        </section>
      )}

      {/* Email capture */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-xl text-center">
          <h2 className="font-display text-2xl font-bold mb-2">Get Weekly Beginner Lessons</h2>
          <p className="text-muted-foreground mb-6 text-sm">No spam, no signals — just education.</p>
          <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! You'll receive weekly lessons."); }} className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-2 rounded-md border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <Button variant="gold" type="submit" size="sm">Subscribe</Button>
          </form>
        </div>
      </section>
    </>
  );
}
