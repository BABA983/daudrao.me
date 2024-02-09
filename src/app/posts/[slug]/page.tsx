import { getAllPost, getPost } from '@/utils/mdx.server';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { a11yDate, postFullDate } from '@/utils/date';
import clsx from 'clsx';

interface IProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateStaticParams() {
  const data = await getAllPost();
  return data.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(props: IProps): Promise<Metadata> {
  const post = await getPost(props.params.slug);
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    authors: { name: 'BABA983', url: 'https://github.com/BABA983' },
    // keywords: post.frontmatter.keywords || [],
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      authors: 'https://github.com/BABA983',
      type: 'article',
      tags: post.frontmatter.tags,
      publishedTime: post.frontmatter.publishedAt,
    },
    publisher: 'Daud',
    // archives
    twitter: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      card: 'summary_large_image',
      creator: 'BABA983',
    },
  };
}

export default async function Page(props: IProps) {
  try {
    const { default: Post, frontmatter } = await getPost(props.params.slug);
    return (
      <article>
        <h1>{frontmatter.title}</h1>
        <p className="italic">{frontmatter.description}</p>
        <div
          className={clsx(
            'flex flex-col text-sm mt-4 mb-8 uppercase font-thin text-gray-500',
          )}
        >
          <time dateTime={a11yDate(frontmatter.publishedAt || '')}>
            Published on {postFullDate(frontmatter.publishedAt || '')}
          </time>
          {a11yDate(frontmatter.updatedAt) !==
            a11yDate(frontmatter.publishedAt || '') && (
            <time dateTime={a11yDate(frontmatter.updatedAt)}>
              Last updated on {postFullDate(frontmatter.updatedAt)}
            </time>
          )}
        </div>
        <Post />
      </article>
    );
  } catch (error) {
    return notFound();
  }
}
