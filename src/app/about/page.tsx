import { Container } from "@/components/Container";
import { getPageContent } from "@/lib/pages";
import { MDXRemote } from "next-mdx-remote/rsc";
import "../../styles/static-page.css";

export const metadata = {
  title: "About",
  description:
    "Executive coach to startup founders and CEOs. Previously co-founded Mattermark and Holloway.",
};

export default function AboutPage() {
  const page = getPageContent("about");
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
