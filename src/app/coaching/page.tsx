import { Container } from "@/components/Container";
import { Testimonials } from "@/components/Testimonials";
import { JsonLd } from "@/components/JsonLd";
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

export default function CoachingPage() {
  const page = getPageContent("coaching");
  if (!page) return null;

  return (
    <section className="static-page">
      <JsonLd data={coachingSchema} />
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
