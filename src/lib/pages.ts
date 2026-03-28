import fs from "fs";
import path from "path";
import matter from "gray-matter";

const pagesDirectory = path.join(process.cwd(), "content/pages");

export type PageContent = {
  title: string;
  content: string;
};

export function getPageContent(slug: string): PageContent | null {
  const fullPath = path.join(pagesDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    title: data.title || slug,
    content,
  };
}
