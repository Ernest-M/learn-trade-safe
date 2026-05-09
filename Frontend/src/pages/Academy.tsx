import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { modules } from "@/data/modules";
import {
  BookOpen, BarChart3, Shield, Target, Gem, CheckCircle,
  Compass, Settings, Clock, LineChart, Brain, Trophy
} from "lucide-react";
import { useProgress } from "@/hooks/useProgress";

const iconMap: Record<string, React.ElementType> = {
  BookOpen, BarChart3, Shield, Target, Gem, Compass, Settings, Clock, LineChart, Brain, Trophy
};

export default function Academy() {
  const { isComplete } = useProgress();

  const totalLessons = modules.reduce((a, m) => a + m.lessons.length, 0);
  const completedLessons = modules.reduce((a, m) => a + m.lessons.filter(l => isComplete(l.id)).length, 0);
  const overallPct = Math.round((completedLessons / totalLessons) * 100);

  return (
    <>
      <SEO title="Trading Academy" description="Free 9-module trading course for beginners. Learn forex and gold trading step by step with interactive tools." path="/academy" />
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Trading Academy</h1>
        <p className="text-muted-foreground mb-4">9 modules from zero to your first trade. Interactive lessons, quizzes, and practice tools.</p>

        {/* Overall progress */}
        <div className="bg-muted/50 border rounded-lg p-4 mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Overall Progress</span>
            <span className="text-sm text-muted-foreground">{completedLessons}/{totalLessons} lessons</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-gold rounded-full transition-all" style={{ width: `${overallPct}%` }} />
          </div>
          {overallPct === 100 && (
            <p className="text-sm text-success font-medium mt-2 flex items-center gap-1">
              <CheckCircle className="h-4 w-4" /> Congratulations! You've completed the entire academy! 🎉
            </p>
          )}
        </div>

        <div className="space-y-4">
          {modules.map((m) => {
            const Icon = iconMap[m.icon] || BookOpen;
            const completed = m.lessons.filter(l => isComplete(l.id)).length;
            const total = m.lessons.length;
            const pct = Math.round((completed / total) * 100);

            return (
              <div key={m.id} className="border rounded-lg overflow-hidden">
                <Link to={`/academy/module/${m.id}`} className="flex items-center gap-4 p-5 hover:bg-muted/30 transition-colors">
                  <div className="h-12 w-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-muted-foreground">Module {m.id}</span>
                      {pct === 100 && <CheckCircle className="h-4 w-4 text-success" />}
                    </div>
                    <h2 className="font-display font-semibold">{m.title}</h2>
                    <p className="text-sm text-muted-foreground">{m.description}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gold rounded-full transition-all" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-xs text-muted-foreground">{completed}/{total}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
