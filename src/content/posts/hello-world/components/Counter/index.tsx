"use client";
import { useState } from "react";
import styles from "./index.module.css";
import { clsx } from "clsx";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={clsx(styles.container, "flex items-center my-2")}>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
};
