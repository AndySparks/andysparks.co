// Frontmatter shapes for markdown content in content/essays and content/pages.
// gray-matter's `data` field is typed as `{ [key: string]: any }` upstream, so
// we narrow it at the boundary via these interfaces. They reflect what authors
// actually write in YAML frontmatter — all fields are optional because parsing
// can't enforce them; callers fall back to sensible defaults.

export type EssayFrontmatter = {
  title?: string;
  date?: string;
  description?: string;
  oldPath?: string;
  image?: string;
  imageAlt?: string;
  tags?: string[];
};

export type PageFrontmatter = {
  title?: string;
};
