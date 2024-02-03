"use client";
import clsx from "clsx";
import type { CSSProperties } from "react";
import { useRef, useState } from "react";
import styles from "./index.module.css";

const useTimer = () => {
  const TimeFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Shanghai",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    weekday: "short",
    hour12: false,
  }).format();
  const [, t] = TimeFormatter.split(" ");

  const [, forceUpdate] = useState(new Date().getTime());
  const prevTimeRef = useRef(performance.now());
  const cb = useRef<FrameRequestCallback>((time) => {
    if (time - prevTimeRef.current >= 1000) {
      forceUpdate(new Date().getTime());
      prevTimeRef.current = time;
    }
    globalThis.requestAnimationFrame?.(cb.current);
  });
  globalThis.requestAnimationFrame?.(cb.current);
  const [hours, minutes, seconds] = t.split(":");
  return { hours, minutes, seconds };
};

export function Countdown() {
  const { hours, minutes, seconds } = useTimer();
  return (
    <div className={clsx(styles.countdown)}>
      <span style={{ "--value": hours } as CSSProperties} />:
      <span style={{ "--value": minutes } as CSSProperties} />:
      <span style={{ "--value": seconds } as CSSProperties} />
    </div>
  );
}
