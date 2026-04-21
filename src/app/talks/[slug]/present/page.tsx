import { DeckPresent } from "@/components/talks/DeckPresent";
import { getTalkBySlug, getAllTalkSlugs } from "@/lib/talks";
import { notFound } from "next/navigation";
import "../../../../styles/talks.css";

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
    title: `${talk.title} — present mode`,
    robots: { index: false, follow: false },
  };
}

export default async function TalkPresentPage({ params }: Props) {
  const { slug } = await params;
  const talk = getTalkBySlug(slug);
  if (!talk) notFound();
  return <DeckPresent talk={talk} />;
}
