import fs from "fs";
import path from "path";
import matter from "gray-matter";

const essaysDirectory = path.join(process.cwd(), "content/essays");

export type Essay = {
  slug: string;
  title: string;
  date: string;
  description: string;
  oldPath?: string;
  image?: string;
  imageAlt?: string;
  content: string;
};

export type EssayMeta = Omit<Essay, "content">;

export function getAllEssays(): EssayMeta[] {
  const fileNames = fs.readdirSync(essaysDirectory);
  const essays = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(essaysDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || "2020-01-01",
        description: data.description || "",
        oldPath: data.oldPath,
        image: data.image,
        imageAlt: data.imageAlt,
      };
    });

  return essays.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getEssayBySlug(slug: string): Essay | null {
  const fullPath = path.join(essaysDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug,
    date: data.date || "2020-01-01",
    description: data.description || "",
    oldPath: data.oldPath,
    image: data.image,
    imageAlt: data.imageAlt,
    content,
  };
}

export function getAllEssaySlugs(): string[] {
  const fileNames = fs.readdirSync(essaysDirectory);
  return fileNames
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}

export function getRedirectMap(): Record<string, string> {
  const essays = getAllEssays();
  const redirects: Record<string, string> = {};

  for (const essay of essays) {
    if (essay.oldPath) {
      redirects[essay.oldPath] = `/essays/${essay.slug}`;
    }
  }

  return redirects;
}
