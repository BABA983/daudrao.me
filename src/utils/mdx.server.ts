import glob from "tiny-glob";
import type { ReactNode } from "react";

const POSTS_PATTERN = "**/content/posts/**/index.mdx";

interface IPostMetadata {
  title: string;
  description: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

interface IPostCache {
  default: () => ReactNode;
  frontmatter: IPostMetadata;
}

const cache = new Map<string, IPostCache>();

function getPostSlug(filename: string) {
  const segments = filename
    .split("/")
    .filter(Boolean)
    .filter((segment) => segment !== "index.mdx")
    .filter((segment) => segment !== "");
  const penultimatePathSegment = segments.at(-2);
  if (penultimatePathSegment !== "posts") {
    throw new Error(`filename "${filename}" was unexpected`);
  }
  const lastPathSegment = segments.at(-1);
  if (!lastPathSegment) {
    throw new Error(`filename "${filename}" lastPathSegment is not a string`);
  }
  return lastPathSegment;
}

export async function getAllPost() {
  const allPostPath = await glob(POSTS_PATTERN);
  const data = await Promise.all(
    allPostPath.map(async (postPath) => {
      const slug = getPostSlug(postPath);
      const postData = await getPost(slug);
      // TODO use zod validate frontmatter?
      return { ...postData, slug };
    }),
  );
  return data
    .filter(({ frontmatter }) => frontmatter.publishedAt)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.createdAt).getTime() -
        new Date(a.frontmatter.createdAt).getTime(),
    );
}

export async function getPost(slug: string) {
  const item = cache.get(slug);
  if (item) return item;
  const post = (await import(
    `../content/posts/${slug}/index.mdx`
  )) as IPostCache;
  cache.set(slug, post);
  return post;
}
