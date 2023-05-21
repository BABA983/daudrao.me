import fs from 'fs';
import path from 'path';
import { bundleMDX } from 'mdx-bundler';
import glob from 'tiny-glob';
import matter from 'gray-matter';

const ROOT_PATH = process.cwd();
const POSTS_PATH = path.join(ROOT_PATH, 'posts');

const TWEET_RE = /<StaticTweet\sid="[0-9]+"\s\/>/g;

export async function loadMDX(source: string) {
  return await bundleMDX({
    source,
    // esbuildOptions(options, frontmatter) {
    //   options.target = [
    //     'es6',
    //   ];
    //   return options;
    // },
    // mdxOptions(options, frontmatter) {
    //   // this is the recommended way to add custom remark/rehype plugins:
    //   // The syntax might look weird, but it protects you in case we add/remove
    //   // plugins in the future.
    //   options.remarkPlugins = [
    //     ...(options.remarkPlugins ?? []),
    //     myRemarkPlugin,
    //   ];
    //   options.rehypePlugins = [
    //     ...(options.rehypePlugins ?? []),
    //     myRehypePlugin,
    //   ];

    //   return options;
    // },
  });
}

export const getAllPostsMeta = async () => {
  const allPostPaths = await glob(`${POSTS_PATH}/**/*.mdx`);

  return allPostPaths
    .map((postPath) => {
      const post = fs.readFileSync(path.join(ROOT_PATH, postPath), 'utf8');
      const slug = path.basename(postPath).replace(/\.mdx$/, '');
      const meta = matter(post).data;
      return { ...meta, slug } as PostMeta;
    })
    .filter((meta) => meta.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPost = async (slug: string) => {
  const source = fs.readFileSync(path.join(POSTS_PATH, `${slug}.mdx`), 'utf-8');

  const { code, frontmatter, matter } = await loadMDX(source);

  const tweetMatch = matter.content.match(TWEET_RE);

  const tweetIDs = tweetMatch?.map((mdxTweet) => {
    const id = mdxTweet.match(/[0-9]+/g)![0];
    return id;
  });

  const meta = { ...frontmatter, slug } as PostMeta;

  return { meta, code, tweetIDs: tweetIDs ?? [] };
};
