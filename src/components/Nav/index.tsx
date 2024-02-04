"use client";
import clsx from "clsx";
import Link from "next/link";
import {
  usePathname,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";
import styles from "./index.module.css";
import { Countdown } from "../Countdown";

const routes = [
  { route: "/posts", title: "posts" },
  // { route: '/notes', title: 'notes' }
];

function LocalTime() {
  const TimeFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Shanghai",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    weekday: "short",
    hour12: false,
  }).format();
  const [weekday] = TimeFormatter.split(" ");
  return (
    <span>
      {weekday} <Countdown />, 顺德
    </span>
  );
}

export const Nav = () => {
  const segment = useSelectedLayoutSegment();
  return (
    <header
      className={clsx(
        "sticky top-0 h-20 w-full flex justify-between backdrop-blur-[20px] backdrop-saturate-150 bg-white/50",
        styles.container,
      )}
    >
      <nav className="w-full sm:max-w-[75ch] m-auto flex px-5 justify-between items-center ">
        <Link title="Home" href="/" aria-label="Home">
          <LocalTime />
        </Link>
        <div className="flex items-center gap-5">
          {routes.map(({ route, title }) => (
            <Link
              key={route}
              href={route}
              className={clsx("capitalize", {
                "opacity-50": segment !== title,
              })}
              //   onClick={resetTags}
            >
              {title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};
