import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://andysparks.co";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/coaching`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/essays`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/media`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const essaysDir = path.join(process.cwd(), "content/essays");
  const files = fs.readdirSync(essaysDir).filter((f) => f.endsWith(".md"));

  const essayPages: MetadataRoute.Sitemap = files.map((file) => {
    const content = fs.readFileSync(path.join(essaysDir, file), "utf8");
    const { data } = matter(content);
    const slug = file.replace(/\.md$/, "");

    return {
      url: `${baseUrl}/essays/${slug}`,
      lastModified: data.date ? new Date(data.date) : undefined,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    };
  });

  return [...staticPages, ...essayPages];
}
