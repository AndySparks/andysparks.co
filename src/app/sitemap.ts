import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://andysparks.co";

  const essaysDir = path.join(process.cwd(), "content/essays");
  const files = fs.readdirSync(essaysDir).filter((f) => f.endsWith(".md"));

  let latestEssayDate = new Date("2026-03-07");
  const essayPages: MetadataRoute.Sitemap = files.map((file) => {
    const content = fs.readFileSync(path.join(essaysDir, file), "utf8");
    const { data } = matter(content);
    const slug = file.replace(/\.md$/, "");
    const date = data.date ? new Date(data.date) : undefined;

    if (date && date > latestEssayDate) latestEssayDate = date;

    return {
      url: `${baseUrl}/essays/${slug}`,
      lastModified: date,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    };
  });

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: latestEssayDate, changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date("2026-03-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/coaching`, lastModified: new Date("2026-03-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/essays`, lastModified: latestEssayDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date("2026-03-28"), changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/media`, lastModified: new Date("2026-03-28"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/newsletter`, lastModified: new Date("2026-04-06"), changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/legal`, lastModified: new Date("2026-03-28"), changeFrequency: "yearly", priority: 0.3 },
  ];

  return [...staticPages, ...essayPages];
}
