import { Link, useParams } from "react-router-dom";
import SEO from "@/components/SEO";
import { modules } from "@/data/modules";
import { useProgress } from "@/hooks/useProgress";
import { CheckCircle, Circle, ArrowLeft, Clock } from "lucide-react";

export default function ModulePage() {
  const { moduleId } = useParams();
  const mod = modules.find(m => m.id === Number(moduleId));
  const { isComplete, toggle } = useProgress();

  if (!mod) return <div className="container mx-auto px-4 py-12">Module not found.</div>;

  const completed = mod.lessons.filter(l => isComplete(l.id)).length;
  const pct = Math.round((completed / mod.lessons.length) * 100);
  const prevModule = modules.find(m => m.id === mod.id - 1);
  const nextModule = modules.find(m => m.id === mod.id + 1);

  return (
    <>
      <SEO title={`Module ${mod.id}: ${mod.title}`} description={mod.description} path={`/academy/module/${mod.id}`} />
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <Link to="/academy" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Academy
        </Link>
        <div className="mb-6">
          <span className="text-xs font-medium text-gold">Module {mod.id} of {modules.length}</span>
          <h1 className="font-display text-3xl font-bold mt-1">{mod.title}</h1>
          <p className="text-muted-foreground mt-2">{mod.description}</p>
        </div>

        {/* Progress */}
        <div className="bg-muted/50 border rounded-lg p-3 mb-6">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium">{completed}/{mod.lessons.length} lessons completed</span>
            <span className="text-xs text-muted-foreground">{pct}%</span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-gold rounded-full transition-all" style={{ width: `${pct}%` }} />
          </div>
        </div>

        <div className="space-y-3">
          {mod.lessons.map((lesson, i) => {
            const done = isComplete(lesson.id);
            return (
              <div key={lesson.id} className="border rounded-lg flex items-center gap-4 p-4 hover:bg-muted/30 transition-colors">
                <button onClick={() => toggle(lesson.id)} className="shrink-0">
                  {done
                    ? <CheckCircle className="h-5 w-5 text-success" />
                    : <Circle className="h-5 w-5 text-muted-foreground" />
                  }
                </button>
                <Link to={`/academy/module/${mod.id}/lesson/${lesson.id}`} className="flex-1 min-w-0">
                  <h3 className={`font-medium text-sm ${done ? "text-muted-foreground line-through" : ""}`}>
                    {i + 1}. {lesson.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" /> {lesson.duration}
                    </span>
                    {lesson.interactiveComponent && (
                      <span className="text-[10px] bg-gold/10 text-gold px-1.5 py-0.5 rounded">Interactive</span>
                    )}
                    {lesson.toolLink && (
                      <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground">Tool linked</span>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Module navigation */}
        <div className="mt-8 flex justify-between">
          {prevModule ? (
            <Link to={`/academy/module/${prevModule.id}`} className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" /> Module {prevModule.id}: {prevModule.title}
            </Link>
          ) : <div />}
          {nextModule ? (
            <Link to={`/academy/module/${nextModule.id}`} className="text-sm text-gold hover:text-gold/80 flex items-center gap-1">
              Module {nextModule.id}: {nextModule.title} <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          ) : <div />}
        </div>
      </div>
    </>
  );
}
