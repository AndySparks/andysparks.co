import type { NextConfig } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

function buildRedirects() {
  const essaysDir = path.join(process.cwd(), "content/essays");
  if (!fs.existsSync(essaysDir)) return [];

  const files = fs.readdirSync(essaysDir).filter((f) => f.endsWith(".md"));
  const redirects: {
    source: string;
    destination: string;
    permanent: boolean;
  }[] = [];

  for (const file of files) {
    const content = fs.readFileSync(path.join(essaysDir, file), "utf8");
    const { data } = matter(content);
    const slug = file.replace(/\.md$/, "");

    if (data.oldPath) {
      redirects.push({
        source: data.oldPath,
        destination: `/essays/${slug}`,
        permanent: true,
      });
    }
  }

  // Static redirects
  redirects.push({
    source: "/hoo-boy",
    destination: "/essays",
    permanent: true,
  });

  redirects.push({
    source: "/blog",
    destination: "/essays",
    permanent: true,
  });

  // Old Tumblr numeric-ID URLs that match existing essays
  redirects.push({
    source: "/post/119618212704/failure-depression-and-yoda",
    destination: "/essays/failure-depression-and-yoda",
    permanent: true,
  });

  // Catch-all for remaining old Tumblr numeric-ID URLs with no matching essay
  redirects.push({
    source: "/post/:id(\\d+)/:slug",
    destination: "/essays",
    permanent: true,
  });

  // Case-insensitive root-level old paths
  redirects.push({
    source: "/Losing-a-Battle-and-Focusing-on-Winning-the-War",
    destination: "/essays",
    permanent: true,
  });

  return redirects;
}

const nextConfig: NextConfig = {
  async redirects() {
    return buildRedirects();
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
