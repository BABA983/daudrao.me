import { ResetTagsButton, Tag, TagList } from '@/components/tags/Tags';
import { useTags } from '@/components/tags/TagsContext';
import { formateDatePreview, validDate } from '@/utils/formatDate';
import { getAllPostsMeta } from '@/utils/loadMDX';
import { InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const getStaticProps = async () => {
  const posts = await getAllPostsMeta();
  return { props: { posts } };
};

export const formatTags = (tags: string) => {
  let formattedTagsArr: string[] = [];
  for (const tagStr of tags.split(',')) {
    formattedTagsArr.push(`#${tagStr}`);
  }
  return formattedTagsArr;
};

export const PostPreview: React.FC<PostMeta> = ({
  slug,
  title,
  date,
  tags,
}) => {
  const router = useRouter();

  return (
    <li className="my-8">
      <Link
        className="flex items-center p-1 capitalize transition-colors duration-200 rounded outline-none"
        href={`${router.asPath}/${slug}`}
      >
        <p className="text-sm mr-8 min-w-[50px]">
          <time dateTime={validDate(date)}>{formateDatePreview(date)}</time>
        </p>
        <h3 className="font-light link-btn">{title}</h3>
      </Link>
      {/* <small>{formatTags(tags)}</small>
       */}
      {formatTags(tags).map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </li>
  );
};

export const PostPreviewList: React.FC<{ posts: PostMeta[] }> = ({ posts }) => {
  const { tags: selectedTags } = useTags();

  const showAllPosts = selectedTags.size === 0;

  const postTagCountMap = posts.reduce((tagCountMap, post) => {
    formatTags(post.tags).forEach((tag) =>
      tagCountMap.set(tag, (tagCountMap.get(tag) ?? 0) + 1)
    );
    return tagCountMap;
  }, new Map());

  const filteredPosts = showAllPosts
    ? posts
    : posts.filter((post) => {
        const postTagSet = new Set(formatTags(post.tags));
        return Array.from(selectedTags).every((selectedTag) =>
          postTagSet.has(selectedTag)
        );
      });

  if (!showAllPosts && filteredPosts.length === 0) {
    return (
      <>
        <TagList postTagCountMap={postTagCountMap} />
        <ResetTagsButton />
      </>
    );
  }

  const postsByYear: Record<string, PostMeta[]> = {};

  filteredPosts.forEach((post) => {
    const year = new Date(post.date).getFullYear();
    const knownPosts = postsByYear[year] || [];
    postsByYear[year] = [...knownPosts, post];
  });

  return (
    <>
      <TagList postTagCountMap={postTagCountMap} />
      {Object.entries(postsByYear)
        .reverse()
        .map(([year, posts]) => {
          return (
            <div key={year} className="w-full">
              <h2 className="pl-1 text-lg font-semibold">{year}</h2>
              <ul>
                {posts.map((post) => {
                  return <PostPreview key={post.slug} {...post} />;
                })}
              </ul>
            </div>
          );
        })}
    </>
  );
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <NextSeo
        title="Posts"
        canonical="https://daudrao.me/posts"
        openGraph={{ url: 'https://daudrao.me/posts' }}
      />
      <div className="w-full sm:max-w-[75ch] m-auto px-5 py-16 flex flex-col justify-center items-center">
        <PostPreviewList posts={posts} />
      </div>
    </>
  );
};

export default Posts;
