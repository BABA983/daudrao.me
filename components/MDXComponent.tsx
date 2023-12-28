import Link from 'next/link';
import type { MDXContentProps } from 'mdx-bundler/client';
import Image from 'next/image';

export const components: MDXContentProps['components'] = {
  a: ({ href = '', ref, ...props }) => {
    if (href.match(/http|https/)) {
      return (
        <a
          href={href}
          className="link-btn"
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        />
      );
    }
    return <Link className="link-btn" href={href} passHref {...props} />;
  },
  img: ({ children, ...props }) => (
    <div className="my-10">
      <img {...props} />
    </div>
  ),
};
