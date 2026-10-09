import { Container } from "@/components/Container";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { getPageContent } from "@/lib/pages";
import { MDXRemote } from "next-mdx-remote/rsc";
import "../../../styles/static-page.css";

export const metadata = {
  title: "Coaching Logistics",
  description:
    "Fees, availability, cadence, cancellations, and billing for executive coaching with Andy Sparks.",
  alternates: {
    canonical: "/coaching/logistics",
  },
};

export default function CoachingLogisticsPage() {
  const page = getPageContent("coaching-logistics");
  if (!page) return null;

  return (
    <section className="static-page">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://andysparks.co" },
          { name: "Executive Coaching", url: "https://andysparks.co/coaching" },
          { name: "Coaching Logistics", url: "https://andysparks.co/coaching/logistics" },
        ]}
      />
      <Container wide>
        <h1>{page.title}</h1>
        <div className="static-page-content about-body">
          <MDXRemote source={page.content} />
        </div>
      </Container>
    </section>
  );
}
