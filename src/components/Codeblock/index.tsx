"use client";
import { ComponentProps } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import styles from "./index.module.css";
import clsx from "clsx";
import { theme } from "./theme";

interface ICodeblockProps {
  code: ComponentProps<typeof LiveProvider>["code"];
  scope: ComponentProps<typeof LiveProvider>["scope"];
  noInline: ComponentProps<typeof LiveProvider>["noInline"];
}

export function Codeblock({ code, scope, noInline }: ICodeblockProps) {
  return (
    <section className={clsx(styles.container)}>
      <LiveProvider code={code} scope={scope} theme={theme} noInline={noInline}>
        <LivePreview
          Component={(props) => (
            <div {...props} className={styles.preview}></div>
          )}
        />
        <LiveEditor />
        <LiveError />
      </LiveProvider>
    </section>
  );
}
