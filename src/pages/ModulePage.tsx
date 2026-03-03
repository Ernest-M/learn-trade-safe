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

  return (
    <>
      <SEO title={`Module ${mod.id}: ${mod.title}`} description={mod.description} path={`/academy/module/${mod.id}`} />
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <Link to="/academy" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Academy
        </Link>
        <div className="mb-8">
          <span className="text-xs font-medium text-gold">Module {mod.id}</span>
          <h1 className="font-display text-3xl font-bold mt-1">{mod.title}</h1>
          <p className="text-muted-foreground mt-2">{mod.description}</p>
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
                  <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" /> {lesson.duration}
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
