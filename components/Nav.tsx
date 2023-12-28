import Link from 'next/link';
import { useRouter } from 'next/router';
// import { RSSIcon } from './RssIcon';
// import { DocSearch } from './DocSearch';

import ThemeSwitch from './ThemeSwitch';
import { useTags } from './tags/TagsContext';

const routes = [
  { route: '/posts', title: 'posts' },
  // { route: '/notes', title: 'notes' }
];

const Nav: React.FC = () => {
  const router = useRouter();

  const isActive = (pathname: string) => router.asPath.includes(pathname);

  const { resetTags } = useTags();

  return (
    <header className="sticky top-0 h-20 w-full flex justify-between backdrop-blur-[20px] backdrop-saturate-150 bg-white/50 dark:bg-[#0D0D1050]">
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
              className={`capitalize ${isActive(route) ? '' : 'opacity-50'}`}
              onClick={resetTags}
            >
              {title}
            </Link>
          ))}
          <ThemeSwitch />
          {/* <RSSIcon /> */}
          {/* <DocSearch /> */}
        </div>
      </nav>
    </header>
  );
};

function LocalTime() {
  const TimeFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Shanghai',
    hour: 'numeric',
    minute: 'numeric',
    weekday: 'short',
    hour12: false,
  }).format();
  return <span>{TimeFormatter}, ShunDe</span>;
}

export default Nav;
