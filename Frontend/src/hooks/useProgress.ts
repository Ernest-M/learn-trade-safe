import { useState, useCallback } from "react";

const STORAGE_KEY = "sata-progress";

function getProgress(): Record<string, boolean> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

export function useProgress() {
  const [progress, setProgress] = useState(getProgress);

  const toggle = useCallback((lessonId: string) => {
    setProgress((prev) => {
      const next = { ...prev, [lessonId]: !prev[lessonId] };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const isComplete = useCallback((lessonId: string) => !!progress[lessonId], [progress]);

  return { progress, toggle, isComplete };
}
