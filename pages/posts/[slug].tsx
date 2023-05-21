import { components } from '@/components/MDXComponent';
import { PostPage } from '@/components/PostPage';
import Tweet from '@/components/Tweet';
import { getAllPostsMeta, getPost } from '@/utils/loadMDX';
import { getTweets } from '@/utils/twitter';
import { Feed } from 'feed';
import { writeFileSync } from 'fs';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useMemo } from 'react';
const BASE_URL = 'https://daudrao.me';

const AUTHOR = {
  name: 'Qidi Rao',
  email: 'raoqidi983@gmail.com',
  link: 'https://twitter.com/_BABA983',
};

const generateRSSFeed = (posts: PostMeta[]) => {
  const date = new Date();

  const feed = new Feed({
    title: "Daudrao's Blog",
    description: 'A blog about web development and other cool stuff.',
    id: BASE_URL,
    link: BASE_URL,
    language: 'en',
    feedLinks: {
      rss2: `${BASE_URL}/rss.xml`,
    },
    updated: date,
    author: AUTHOR,
    copyright: `All rights reserved ${new Date().getFullYear()}, Qidi Rao`,
  });

  posts.forEach((post) => {
    const { slug, title, date, description, tags } = post;
    const url = `${BASE_URL}/posts/${slug}`;

    feed.addItem({
      title,
      id: url,
      link: url,
      description,
      content: description,
      author: [AUTHOR],
      date: new Date(date),
      category: tags.split(',').map((name) => ({ name })),
    });
  });
  // Write the RSS output to a public file, making it
  // accessible at ashleemboyer.com/rss.xml
  writeFileSync('public/rss.xml', feed.rss2());
};

export const getStaticPaths = async () => {
  const posts = await getAllPostsMeta();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));
  generateRSSFeed(posts);

  return {
    paths,
    fallback: false, // 404
  };
};
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params?.slug as string;
  const post = await getPost(slug);

  const tweets = await getTweets(post.tweetIDs);

  return { props: { ...post, tweets } };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const Post: React.FC<Props> = ({ meta, code, tweets }) => {
  const StaticTweet = ({ id }) => {
    const tweet = tweets.find((tweet) => tweet.id === id);

    return <Tweet {...tweet} />;
  };

  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <PostPage meta={meta}>
      <Component components={{ ...components, StaticTweet }} />
    </PostPage>
  );
};

export default Post;
