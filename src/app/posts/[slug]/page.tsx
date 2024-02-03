import { getAllPost, getPost } from '@/utils/mdx.server';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

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
    // keywords: []
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
    const { default: Post } = await getPost(props.params.slug);
    return (
      <article>
        <Post />
      </article>
    );
  } catch (error) {
    return notFound();
  }
}
