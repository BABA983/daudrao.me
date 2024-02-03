import mdx from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkMdxImages from "remark-mdx-images";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import('rehype-pretty-code').Options} */
const options = {
  // See Options section below.
  theme: "vitesse-light",
};

const withMDX = mdx({
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkFrontmatter,
      remarkMdxFrontmatter,
      // for next/image otherwise it will yield at us to provide width and height
      // Next.js will automatically determine width and height if we statically imported image
      remarkMdxImages,
    ],
    rehypePlugins: [[rehypePrettyCode, options], rehypeMdxCodeProps],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default withMDX(nextConfig);
