import { Container } from "@/components/Container";
import { Testimonials } from "@/components/Testimonials";
import { JsonLd } from "@/components/JsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { getPageContent } from "@/lib/pages";
import { MDXRemote } from "next-mdx-remote/rsc";
import "../../styles/static-page.css";

export const metadata = {
  title: "Executive Coaching for Startup Founders & CEOs",
  description:
    "Executive coaching for startup founders and CEOs navigating growth, leadership, and the challenges of building companies. 1,500+ hours coaching startup leaders.",
  alternates: {
    canonical: "/coaching",
  },
};

const coachingSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Andy Sparks Executive Coaching",
  description:
    "Executive coaching for startup founders and CEOs navigating growth, leadership, and the challenges of building companies.",
  url: "https://andysparks.co/coaching",
  provider: {
    "@type": "Person",
    name: "Andy Sparks",
    url: "https://andysparks.co",
  },
  areaServed: "Worldwide",
  serviceType: "Executive Coaching",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who does Andy Sparks coach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Andy works with startup founders, CEOs, and their executive teams. Usually venture-backed, usually B2B software, usually somewhere between ten and a few hundred employees.",
      },
    },
    {
      "@type": "Question",
      name: "How does coaching with Andy Sparks work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sessions happen over Zoom or phone, usually every two weeks, and are about whatever's most alive — hiring decisions, co-founder conflicts, leadership challenges, or personal growth. Andy doesn't follow a curriculum.",
      },
    },
    {
      "@type": "Question",
      name: "How much coaching experience does Andy Sparks have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Andy has been coaching since 2020, works with 15-20 clients at a time, and has coached over 50 people for more than 1,500 hours.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Andy Sparks different from other executive coaches?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Andy is a former startup CEO and COO who co-founded Mattermark and Holloway. He combines real operator experience with coaching skills, offering both direct advice from his own experience and the coaching presence to help founders develop their own decision-making capacity.",
      },
    },
  ],
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Andy Sparks Executive Coaching",
  url: "https://andysparks.co/coaching",
  review: [
    {
      "@type": "Review",
      reviewBody:
        "Andy has changed my life as a founder, husband, and general human being. He's helped me navigate the toughest career challenges.",
      author: { "@type": "Person", name: "CEO, client since 2020" },
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
      },
    },
    {
      "@type": "Review",
      reviewBody:
        "Andy has been invaluable because he combines his real-world executive experience with expert coaching skills, offering advice that is both practical and insightful.",
      author: { "@type": "Person", name: "CEO, client since 2021" },
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
      },
    },
    {
      "@type": "Review",
      reviewBody:
        "Andy has helped me navigate restructuring a company, my cofounder split, and many subjects you simply won't find textbooks for.",
      author: { "@type": "Person", name: "CEO, client since 2023" },
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
      },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 5,
    reviewCount: 4,
    bestRating: 5,
  },
};

export default function CoachingPage() {
  const page = getPageContent("coaching");
  if (!page) return null;

  return (
    <section className="static-page">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://andysparks.co" },
          { name: "Executive Coaching", url: "https://andysparks.co/coaching" },
        ]}
      />
      <JsonLd data={coachingSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={reviewSchema} />
      <Container wide>
        <h1>{page.title}</h1>
        <div className="static-page-content about-body">
          <MDXRemote source={page.content} />
        </div>
        <Testimonials />
      </Container>
    </section>
  );
}
