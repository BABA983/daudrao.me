import clsx from 'clsx';
import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowOutwardIcon } from './components/Icons';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // https://github.com/vercel/next.js/blob/9bdaf07233574b6a090c523d1be255549ba8bc92/test/development/acceptance-app/fixtures/app-hmr-changes/app/(post)/components/footnotes.tsx
    a: ({ children, className = '', href = '', ref, ...props }) => {
      const isExternal = href.startsWith('http') || href.startsWith('https');
      const _className = clsx(
        'border-b text-gray-600 border-gray-300 transition-[border-color] hover:border-gray-600',
        className,
      );
      return isExternal ? (
        <Link
          href={href}
          className={_className}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
          <span className="inline-flex">
            <ArrowOutwardIcon width={14} height={14} />
          </span>
        </Link>
      ) : (
        <Link href={href} className={_className} {...props}>
          {children}
        </Link>
      );
    },
    h1: ({ children }) => (
      <h1 className="text-2xl font-bold mb-1">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="group font-bold text-xl my-8 relative">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="group font-bold text-lg my-8 relative">{children}</h3>
    ),
    hr: (props) => (
      <div
        {...props}
        className="my-8 text-center after:content-['﹡﹡﹡'] after:text-sm after:text-center after:inline"
      />
    ),
    li: ({ children }) => (
      <li
        className={clsx(
          "my-2 [ul_&]:relative [ul_&]:pl-4 [ul_&]:before:text-gray-400 [ul_&]:before:content-['–'] [ul_&]:before:mr-2 [ul_&]:before:absolute [ul_&]:before:-ml-4",
        )}
      >
        {children}
      </li>
    ),
    ol: ({ children }) => {
      return <ol className="my-5 list-decimal list-inside">{children}</ol>;
    },
    ul: ({ children }) => {
      return <ul className="my-5 list-none list-inside">{children}</ul>;
    },
    p: ({ children }) => {
      return <p className="my-5 [blockquote_&]:my-2">{children}</p>;
    },
    blockquote: ({ children }) => {
      return (
        <blockquote className="my-5 text-gray-500 pl-3 border-l-4">
          {children}
        </blockquote>
      );
    },
    // @ts-expect-error
    img: (props) => <Image {...props} />,
    code: (props) => {
      return <code className="inline-code" {...props} />;
    },
    pre: (props) => {
      return (
        <pre
          className="border my-2 border-gray8 bg-gray3 px-4 py-3 rounded-md overflow-x-auto"
          {...props}
        />
      );
    },
  };
}
