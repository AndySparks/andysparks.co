import { Container } from "@/components/Container";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { getPageContent } from "@/lib/pages";
import { MDXRemote } from "next-mdx-remote/rsc";
import "../../../styles/static-page.css";

export const metadata = {
  title: "Kicking Off Coaching",
  description:
    "What to expect when we start working together: agendas, commitments, confidentiality, and how sessions run.",
  alternates: {
    canonical: "/coaching/kick-off",
  },
};

export default function CoachingKickOffPage() {
  const page = getPageContent("coaching-kick-off");
  if (!page) return null;

  return (
    <section className="static-page">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://andysparks.co" },
          { name: "Executive Coaching", url: "https://andysparks.co/coaching" },
          { name: "Kicking Off Coaching", url: "https://andysparks.co/coaching/kick-off" },
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
