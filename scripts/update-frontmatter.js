// https://www.adamcollier.co.uk/posts/adding-an-updated-date-to-markdown-and-mdx-posts
const fs = require("fs/promises");
const matter = require("gray-matter");

const updateFrontmatter = async () => {
  const [, , ...mdFilePaths] = process.argv;

  for (const path of mdFilePaths) {
    const file = matter.read(path);
    const { data: frontmatter } = file;

    if (frontmatter.publishedAt) {
      const updatedFrontmatter = {
        ...frontmatter,
        updatedAt: new Date().toISOString(),
      };
      file.data = updatedFrontmatter;
      await fs.writeFile(path, matter.stringify(file));
    }
  }
};

updateFrontmatter();
