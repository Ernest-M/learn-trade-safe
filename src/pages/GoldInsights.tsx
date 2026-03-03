import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { goldPosts } from "@/data/gold-insights";
import { TrendingUp, ArrowRight } from "lucide-react";

export default function GoldInsights() {
  return (
    <>
      <SEO title="Gold Insights & Analysis" description="Daily XAUUSD analysis with key levels, bias, and trading notes. Educational gold market insights for beginners." path="/gold-insights" />
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Gold Insights</h1>
        <p className="text-muted-foreground mb-10">Educational XAUUSD analysis. Not trading signals — just observations to help you learn to read the market.</p>

        <div className="space-y-4">
          {goldPosts.map(post => (
            <Link key={post.id} to={`/gold-insights/${post.id}`} className="block border rounded-lg p-6 hover:shadow-md hover:border-gold/50 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-gold" />
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  post.tag === "bullish" ? "bg-success/10 text-success" :
                  post.tag === "bearish" ? "bg-destructive/10 text-destructive" :
                  "bg-gold/10 text-gold"
                }`}>{post.tag}</span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <h2 className="font-display font-semibold mb-1">{post.title}</h2>
              <p className="text-sm text-muted-foreground">{post.bias}</p>
              <span className="text-sm text-gold flex items-center gap-1 mt-2">Read analysis <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-8 text-center">
          Posts are stored in <code className="bg-muted px-1 rounded">src/data/gold-insights.ts</code> — edit that file to add new insights.
        </p>
      </div>
    </>
  );
}
