import { DeckScroll } from "@/components/talks/DeckScroll";
import { JsonLd } from "@/components/JsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { getTalkBySlug, getAllTalkSlugs } from "@/lib/talks";
import { notFound } from "next/navigation";
import "../../../styles/talks.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllTalkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const talk = getTalkBySlug(slug);
  if (!talk) return {};
  return {
    title: `${talk.title} — Andy Sparks`,
    description: talk.description,
    alternates: { canonical: `/talks/${slug}` },
    openGraph: {
      title: talk.title,
      description: talk.description,
      type: "article",
      publishedTime: talk.date,
    },
  };
}

export default async function TalkScrollPage({ params }: Props) {
  const { slug } = await params;
  const talk = getTalkBySlug(slug);
  if (!talk) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: talk.title,
    description: talk.description,
    startDate: talk.date,
    url: `https://andysparks.co/talks/${slug}`,
    ...(talk.venue ? { location: { "@type": "Place", name: talk.venue } } : {}),
    performer: {
      "@type": "Person",
      name: "Andy Sparks",
      url: "https://andysparks.co",
    },
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://andysparks.co" },
          { name: "Talks", url: "https://andysparks.co/talks" },
          { name: talk.title, url: `https://andysparks.co/talks/${slug}` },
        ]}
      />
      <JsonLd data={schema} />
      <DeckScroll talk={talk} />
    </>
  );
}
