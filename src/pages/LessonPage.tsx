import { Link, useParams } from "react-router-dom";
import SEO from "@/components/SEO";
import { modules } from "@/data/modules";
import { useProgress } from "@/hooks/useProgress";
import Quiz from "@/components/Quiz";
import { ArrowLeft, ArrowRight, CheckCircle, Circle, Wrench, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LessonPage() {
  const { moduleId, lessonId } = useParams();
  const mod = modules.find(m => m.id === Number(moduleId));
  const lesson = mod?.lessons.find(l => l.id === lessonId);
  const { isComplete, toggle } = useProgress();

  if (!mod || !lesson) return <div className="container mx-auto px-4 py-12">Lesson not found.</div>;

  const lessonIndex = mod.lessons.findIndex(l => l.id === lessonId);
  const prevLesson = lessonIndex > 0 ? mod.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < mod.lessons.length - 1 ? mod.lessons[lessonIndex + 1] : null;
  const nextModule = modules.find(m => m.id === mod.id + 1);
  const done = isComplete(lesson.id);

  return (
    <>
      <SEO title={lesson.title} description={lesson.summary.join(". ")} path={`/academy/module/${mod.id}/lesson/${lesson.id}`} />
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <Link to={`/academy/module/${mod.id}`} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Module {mod.id}: {mod.title}
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <Clock className="h-3 w-3" /> {lesson.duration}
          </div>
          <h1 className="font-display text-3xl font-bold">{lesson.title}</h1>
        </div>

        {/* Summary */}
        <div className="bg-gold/5 border border-gold/20 rounded-lg p-4 mb-8">
          <h3 className="font-display font-semibold text-sm mb-2">Key Takeaways</h3>
          <ul className="space-y-1">
            {lesson.summary.map((s, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-gold mt-0.5">•</span>{s}
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none space-y-4 mb-8">
          {lesson.content.map((p, i) => (
            <p key={i} className="text-foreground leading-relaxed">{p}</p>
          ))}
        </div>

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

        {/* Quiz */}
        <Quiz questions={lesson.quiz} />

        {/* Mark complete */}
        <div className="mt-8 flex items-center gap-3">
          <button onClick={() => toggle(lesson.id)} className="flex items-center gap-2 text-sm font-medium hover:text-gold transition-colors">
            {done ? <CheckCircle className="h-5 w-5 text-success" /> : <Circle className="h-5 w-5 text-muted-foreground" />}
            {done ? "Completed" : "Mark as complete"}
          </button>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between gap-4">
          {prevLesson ? (
            <Button variant="outline" size="sm" asChild>
              <Link to={`/academy/module/${mod.id}/lesson/${prevLesson.id}`}>
                <ArrowLeft className="h-4 w-4 mr-1" /> {prevLesson.title}
              </Link>
            </Button>
          ) : <div />}
          {nextLesson ? (
            <Button variant="gold" size="sm" asChild>
              <Link to={`/academy/module/${mod.id}/lesson/${nextLesson.id}`}>
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
        </div>
      </div>
    </>
  );
}
