import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function GET() {
  const sections: string[] = [];

  sections.push(`# Andy Sparks — Full Content

> Executive coach for startup founders and CEOs

---`);

  // About page
  const aboutPath = path.join(process.cwd(), "content/pages/about.md");
  if (fs.existsSync(aboutPath)) {
    const { content } = matter(fs.readFileSync(aboutPath, "utf8"));
    sections.push(`## About\n\n${content.trim()}`);
  }

  // Coaching page
  const coachingPath = path.join(process.cwd(), "content/pages/coaching.md");
  if (fs.existsSync(coachingPath)) {
    const { content } = matter(fs.readFileSync(coachingPath, "utf8"));
    sections.push(`## Coaching\n\n${content.trim()}`);
  }

  // All essays
  const essaysDir = path.join(process.cwd(), "content/essays");
  const files = fs.readdirSync(essaysDir).filter((f) => f.endsWith(".md"));

  const essays = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(essaysDir, file), "utf8");
      const { data, content } = matter(raw);
      return {
        title: data.title || file.replace(/\.md$/, ""),
        date: data.date || "",
        description: data.description || "",
        content: content.trim(),
        slug: file.replace(/\.md$/, ""),
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  sections.push(`## Essays\n`);

  for (const essay of essays) {
    const dateLine = essay.date
      ? `*Published: ${essay.date}*\n`
      : "";
    sections.push(
      `### ${essay.title}\n\n${dateLine}${essay.content}\n\n---`
    );
  }

  // Links
  sections.push(`## Links

- Homepage: https://andysparks.co
- Coaching: https://andysparks.co/coaching
- About: https://andysparks.co/about
- Essays: https://andysparks.co/essays
- Contact: https://andysparks.co/contact
- Management Craft: https://managementcraft.co
- LinkedIn: https://www.linkedin.com/in/andyjsparks/
- X/Twitter: https://x.com/andysparks`);

  const body = sections.join("\n\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
