import { Link, useParams } from "react-router-dom";
import SEO from "@/components/SEO";
import { goldPosts } from "@/data/gold-insights";
import { ArrowLeft, TrendingUp, AlertTriangle } from "lucide-react";

export default function GoldPost() {
  const { postId } = useParams();
  const post = goldPosts.find(p => p.id === postId);

  if (!post) return <div className="container mx-auto px-4 py-12">Post not found.</div>;

  return (
    <>
      <SEO title={post.title} description={post.bias} path={`/gold-insights/${post.id}`} />
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <Link to="/gold-insights" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> All Insights
        </Link>

        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="h-4 w-4 text-gold" />
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
            post.tag === "bullish" ? "bg-success/10 text-success" :
            post.tag === "bearish" ? "bg-destructive/10 text-destructive" :
            "bg-gold/10 text-gold"
          }`}>{post.tag}</span>
          <span className="text-xs text-muted-foreground">{post.date}</span>
        </div>

        <h1 className="font-display text-3xl font-bold mb-6">{post.title}</h1>

        {/* Key levels */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-success/5 border border-success/20 rounded-lg p-4">
            <h3 className="text-sm font-medium text-success mb-2">Support Levels</h3>
            <ul className="space-y-1">
              {post.supportLevels.map((l, i) => (
                <li key={i} className="text-sm font-mono">{l}</li>
              ))}
            </ul>
          </div>
          <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
            <h3 className="text-sm font-medium text-destructive mb-2">Resistance Levels</h3>
            <ul className="space-y-1">
              {post.resistanceLevels.map((l, i) => (
                <li key={i} className="text-sm font-mono">{l}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bias */}
        <div className="bg-gold/5 border border-gold/20 rounded-lg p-4 mb-8">
          <h3 className="text-sm font-medium mb-1">Bias</h3>
          <p className="text-sm">{post.bias}</p>
        </div>

        {/* Content */}
        <div className="space-y-4 mb-8">
          {post.content.map((p, i) => (
            <p key={i} className="text-foreground leading-relaxed">{p}</p>
          ))}
        </div>

        {/* Watch for */}
        <div className="bg-muted/50 border rounded-lg p-4 mb-8">
          <h3 className="text-sm font-medium mb-2">What to Watch</h3>
          <ul className="space-y-1">
            {post.watchFor.map((w, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-gold mt-0.5">•</span>{w}
              </li>
            ))}
          </ul>
        </div>

        {/* Risk reminder */}
        <div className="bg-warning/5 border border-warning/20 rounded-lg p-4 flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 text-warning shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground">
            This is educational commentary, not a trading signal. Always do your own analysis and manage your risk. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </>
  );
}
