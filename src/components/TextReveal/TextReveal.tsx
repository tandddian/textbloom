
import { useState, useEffect } from "react";
import "./TextReveal.css";

export interface TextRevealProps {
  children: string;
  color?: string;
  delay?: number;        // 每个字符间隔 ms，默认 80
  initialDelay?: number; // 整体起始延迟 ms，默认 0
  className?: string;
  style?: React.CSSProperties;
  text?: string;
}

export function TextReveal({
  children,
  color = "inherit",
  delay = 80,
  initialDelay = 0,
  className,
  style,
  text,
}: TextRevealProps) {
  const content = text ?? children ?? "";
  const [visibleCount, setVisibleCount] = useState(0);
  const chars = [...content];

  useEffect(() => {
    setVisibleCount(0)
    const timers = chars.map((_, i) =>
      setTimeout(() => setVisibleCount(i + 1), initialDelay + (i + 1) * delay)
    );
    return () => timers.forEach(clearTimeout);
  }, [content, delay, initialDelay]);

  return (
    <div className={className} style={{ color, ...style }}>
      {chars.map((char, i) => (
        <span
          key={i}
          className={i < visibleCount ? "tb-char tb-visible" : "tb-char"}
        >
          {char}
        </span>
      ))}
    </div>
  );
}