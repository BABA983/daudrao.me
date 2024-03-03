import { a11yDate, postListDate } from '@/utils/date';
import { getAllPost } from '@/utils/mdx.server';
import Link from 'next/link';

export default async function PostList() {
  const ALL_POSTS = await getAllPost();
  const POST_GROUP_BY_YEAR = ALL_POSTS.reduce((prev, next) => {
    const year = new Date(next.frontmatter.createdAt).getFullYear();
    prev.set(year, [...(prev.get(year) || []), next]);
    return prev;
  }, new Map<number, typeof ALL_POSTS>());
  return (
    <section>
      {Array.from(POST_GROUP_BY_YEAR).map(([year, posts]) => {
        return (
          <div key={year}>
            <h2>{year}</h2>
            <ul>
              {posts.map((post) => {
                return (
                  <li
                    className="flex flex-col my-6"
                    key={post.frontmatter.title}
                  >
                    <Link href={`/posts/${post.slug}`}>
                      <time
                        dateTime={a11yDate(post.frontmatter.createdAt)}
                        className="mr-4"
                      >
                        {postListDate(post.frontmatter.createdAt)}
                      </time>
                      {post.frontmatter.title}
                    </Link>
                    <small>
                      {post.frontmatter.tags.map((tag) => (
                        <code key={tag} className="mr-2">
                          #{tag}
                        </code>
                      ))}
                    </small>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
}
