import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import type { QuizQuestion } from "@/data/modules";

export default function Quiz({ questions }: { questions: QuizQuestion[] }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = submitted
    ? questions.filter((q, i) => answers[i] === q.correctIndex).length
    : 0;

  return (
    <div className="bg-muted/50 rounded-lg p-6 mt-8">
      <h3 className="font-display font-semibold text-lg mb-4">Quick Quiz</h3>
      <div className="space-y-6">
        {questions.map((q, qi) => (
          <div key={qi}>
            <p className="font-medium mb-2">{qi + 1}. {q.question}</p>
            <div className="space-y-2">
              {q.options.map((opt, oi) => {
                const selected = answers[qi] === oi;
                const isCorrect = q.correctIndex === oi;
                let optClass = "border rounded-md px-4 py-2 text-sm cursor-pointer transition-colors ";
                if (submitted) {
                  if (isCorrect) optClass += "border-success bg-success/10 text-foreground";
                  else if (selected && !isCorrect) optClass += "border-destructive bg-destructive/10 text-foreground";
                  else optClass += "border-border text-muted-foreground";
                } else {
                  optClass += selected
                    ? "border-primary bg-primary/5 text-foreground"
                    : "border-border hover:border-primary/50 text-foreground";
                }

                return (
                  <button
                    key={oi}
                    className={`${optClass} w-full text-left flex items-center gap-2`}
                    onClick={() => !submitted && setAnswers({ ...answers, [qi]: oi })}
                    disabled={submitted}
                  >
                    {submitted && isCorrect && <CheckCircle className="h-4 w-4 text-success shrink-0" />}
                    {submitted && selected && !isCorrect && <XCircle className="h-4 w-4 text-destructive shrink-0" />}
                    {opt}
                  </button>
                );
              })}
            </div>
            {submitted && answers[qi] !== undefined && (
              <p className="text-sm text-muted-foreground mt-2 pl-2">
                {answers[qi] === q.correctIndex ? "✓ " : "✗ "}{q.explanation}
              </p>
            )}
          </div>
        ))}
      </div>
      {!submitted ? (
        <button
          onClick={() => Object.keys(answers).length === questions.length && setSubmitted(true)}
          disabled={Object.keys(answers).length < questions.length}
          className="mt-4 bg-primary text-primary-foreground px-6 py-2 rounded-md text-sm font-medium disabled:opacity-50 transition-colors hover:bg-primary/90"
        >
          Check Answers
        </button>
      ) : (
        <p className="mt-4 font-medium">
          Score: {score}/{questions.length} {score === questions.length ? "🎉 Perfect!" : score >= 2 ? "👍 Good job!" : "📚 Review the lesson and try again!"}
        </p>
      )}
    </div>
  );
}
