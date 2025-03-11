import React, { useEffect, useRef, ReactNode } from "react";
import ScrollReveal from "scrollreveal";

interface RevealElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  origin?: "top" | "right" | "bottom" | "left";
  distance?: string;
  duration?: number;
  interval?: number;
  reset?: boolean;
  style?: React.CSSProperties;
}

const RevealElement: React.FC<RevealElementProps> = ({
  children,
  className = "",
  delay = 0,
  origin = "top",
  distance = "80px",
  duration = 2000,
  interval = 0,
  reset = true,
  style = {},
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      const sr = ScrollReveal({
        origin,
        distance,
        duration,
        reset,
      });

      const config = interval > 0 ? { interval } : { delay };
      sr.reveal(elementRef.current, config);
    }
  }, [delay, distance, duration, interval, origin, reset]);

  return (
    <div ref={elementRef} className={className} style={style}>
      {children}
    </div>
  );
};

export default RevealElement;
