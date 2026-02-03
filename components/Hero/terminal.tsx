"use client";

import { useState, useEffect } from "react";

export function Terminal() {
  const [lines] = useState([
    {
      id: 1,
      prefix: "➜",
      text: "initializing neso_protocol...",
      color: "text-primary",
    },
    {
      id: 2,
      prefix: "✔",
      text: "core_systems loaded",
      color: "text-green-500",
    },
    {
      id: 3,
      prefix: "✔",
      text: "knowledge_base connected",
      color: "text-green-500",
    },
    {
      id: 4,
      prefix: "ℹ",
      text: "waiting for user input...",
      color: "text-blue-500",
    },
  ]);

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const targetLine = lines[currentLineIndex];

    if (currentText.length < targetLine.text.length) {
      const timeout = setTimeout(
        () => {
          setCurrentText(targetLine.text.slice(0, currentText.length + 1));
        },
        30 + Math.random() * 30,
      ); // Random typing speed for realism
      return () => clearTimeout(timeout);
    } else {
      // Line finished
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentText("");
      }, 400); // 400ms pause between lines
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentText, lines]);

  return (
    <div className="space-y-4 font-mono text-sm min-h-[140px]">
      {lines.map((line, index) => {
        const isCurrent = index === currentLineIndex;
        const isCompleted = index < currentLineIndex;

        if (!isCurrent && !isCompleted) return null; // Don't show future lines

        return (
          <div key={line.id} className="flex gap-3">
            <span className={line.color}>{line.prefix}</span>
            <span
              className={
                isCompleted && line.id !== 4
                  ? "text-muted-foreground"
                  : "text-foreground"
              }
            >
              {isCurrent ? currentText : line.text}
              {isCurrent && (
                <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1 align-middle" />
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
}
