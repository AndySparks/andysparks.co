import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { getEssayBySlug, getAllEssaySlugs, getRelatedEssays } from "@/lib/essays";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import "../../../styles/essay.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllEssaySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);
  if (!essay) return {};

  return {
    title: essay.title,
    description: essay.description,
    alternates: {
      canonical: `/essays/${slug}`,
    },
    openGraph: {
      title: essay.title,
      description: essay.description,
      type: "article",
      publishedTime: essay.date,
      ...(essay.image ? { images: [{ url: essay.image }] } : {}),
    },
  };
}

export default async function EssayPage({ params }: Props) {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);

  if (!essay) {
    notFound();
  }

  const related = getRelatedEssays(slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: essay.title,
    description: essay.description,
    datePublished: essay.date,
    url: `https://andysparks.co/essays/${slug}`,
    ...(essay.image ? { image: `https://andysparks.co${essay.image}` } : {}),
    author: {
      "@type": "Person",
      name: "Andy Sparks",
      url: "https://andysparks.co",
    },
    publisher: {
      "@type": "Person",
      name: "Andy Sparks",
      url: "https://andysparks.co",
    },
  };

  return (
    <section className="essay-page">
      <JsonLd data={articleSchema} />
      <Container prose>
        <Link href="/essays" className="essay-back">
          &larr; Essays
        </Link>
        <header className="essay-header">
          <h1 className="essay-title">{essay.title}</h1>
          <div className="essay-date">
            {new Date(essay.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          {essay.image && (
            <div className="essay-hero-image">
              <Image
                src={essay.image}
                alt={essay.imageAlt || essay.title}
                width={720}
                height={450}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
          )}
        </header>

        <div className="essay-content">
          <MDXRemote source={essay.content} />
        </div>

        {related.length > 0 && (
          <nav className="essay-related">
            <h2>Keep reading</h2>
            <ul>
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/essays/${r.slug}`}>{r.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Container>
    </section>
  );
}
