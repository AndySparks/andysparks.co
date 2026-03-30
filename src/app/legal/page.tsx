import { Container } from "@/components/Container";
import { getPageContent } from "@/lib/pages";
import { MDXRemote } from "next-mdx-remote/rsc";
import "../../styles/static-page.css";

export const metadata = {
  title: "Legal",
  description:
    "Terms of use, privacy policy, and copyright information for andysparks.co.",
  alternates: {
    canonical: "/legal",
  },
};

export default function LegalPage() {
  const page = getPageContent("legal");
  if (!page) return null;

  return (
    <section className="static-page">
      <Container wide>
        <h1>{page.title}</h1>
        <div className="static-page-content about-body">
          <MDXRemote source={page.content} />
        </div>
      </Container>
    </section>
  );
}
