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
  tags?: string[];
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
        tags: data.tags,
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
    tags: data.tags,
    content,
  };
}

export function getAllEssaySlugs(): string[] {
  const fileNames = fs.readdirSync(essaysDirectory);
  return fileNames
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}

export function getRelatedEssays(slug: string, limit = 3): EssayMeta[] {
  const all = getAllEssays();
  const current = all.find((e) => e.slug === slug);
  if (!current?.tags?.length) return all.filter((e) => e.slug !== slug).slice(0, limit);

  const scored = all
    .filter((e) => e.slug !== slug)
    .map((e) => {
      const shared = (e.tags || []).filter((t) => current.tags!.includes(t)).length;
      return { essay: e, score: shared };
    })
    .sort((a, b) => b.score - a.score || new Date(b.essay.date).getTime() - new Date(a.essay.date).getTime());

  return scored.slice(0, limit).map((s) => s.essay);
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
