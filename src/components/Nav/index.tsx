"use client";
import clsx from "clsx";
import Link from "next/link";
import {
  usePathname,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";
import styles from "./index.module.css";

const routes = [
  { route: "/posts", title: "posts" },
  // { route: '/notes', title: 'notes' }
];

function LocalTime() {
  const TimeFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Shanghai",
    hour: "numeric",
    minute: "numeric",
    weekday: "short",
    hour12: false,
  }).format();
  return <span>{TimeFormatter}, 顺德</span>;
}

export const Nav = () => {
  const segment = useSelectedLayoutSegment();
  return (
    <header
      className={clsx(
        "sticky top-0 h-20 w-full flex justify-between backdrop-blur-[20px] backdrop-saturate-150 bg-white/50 dark:bg-[#0D0D1050]",
        styles.container,
      )}
    >
      <nav className="w-full sm:max-w-[75ch] m-auto flex px-5 justify-between items-center ">
        <Link title="Home" href="/" aria-label="Home">
          <LocalTime />
        </Link>
        <div className="flex items-center gap-5">
          {/* {['/posts', '/art'].map((path) => (
		  <Link key={path} href={path}>
			<a className={`capitalize ${isActive(path) ? '' : 'opacity-50'}`}>
			  {path.replace('/', '')}
			</a>
		  </Link>
		))} */}
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
          {/* <ThemeSwitch /> */}
          {/* <RSSIcon /> */}
          {/* <DocSearch /> */}
        </div>
      </nav>
    </header>
  );
};
