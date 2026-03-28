import { Container } from "@/components/Container";
import { getPageContent } from "@/lib/pages";
import { MDXRemote } from "next-mdx-remote/rsc";
import "../../styles/static-page.css";

export const metadata = {
  title: "Coaching",
  description:
    "Executive coaching for startup founders and CEOs navigating growth, leadership, and the challenges of building companies.",
};

export default function CoachingPage() {
  const page = getPageContent("coaching");
  if (!page) return null;

  return (
    <section className="static-page">
      <Container>
        <h1>{page.title}</h1>
        <div className="static-page-content">
          <MDXRemote source={page.content} />
        </div>
      </Container>
    </section>
  );
}
