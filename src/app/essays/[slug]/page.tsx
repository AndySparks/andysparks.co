import { Container } from "@/components/Container";
import { getEssayBySlug, getAllEssaySlugs } from "@/lib/essays";
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
    openGraph: {
      title: essay.title,
      description: essay.description,
      type: "article",
      publishedTime: essay.date,
    },
  };
}

export default async function EssayPage({ params }: Props) {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);

  if (!essay) {
    notFound();
  }

  return (
    <section className="essay-page">
      <Container>
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
                width={640}
                height={400}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
          )}
        </header>

        <div className="essay-content">
          <MDXRemote source={essay.content} />
        </div>

        <Link href="/essays" className="essay-back">
          &larr; All essays
        </Link>
      </Container>
    </section>
  );
}
