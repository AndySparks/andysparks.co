import { Container } from "@/components/Container";
import { getPageContent } from "@/lib/pages";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import "../../styles/static-page.css";

export const metadata = {
  title: "About",
  description:
    "Executive coach to startup founders and CEOs. Previously co-founded Mattermark and Holloway.",
};

export default function AboutPage() {
  const page = getPageContent("about");
  if (!page) return null;

  const splitMarker = "\n## How I got here";
  const splitIndex = page.content.indexOf(splitMarker);
  const introContent = page.content.slice(0, splitIndex);
  const restContent = page.content.slice(splitIndex);

  return (
    <section className="static-page">
      <Container wide>
        <h1>{page.title}</h1>
        <div className="about-intro">
          <div className="about-intro-text static-page-content">
            <MDXRemote source={introContent} />
          </div>
          <Image
            src="/images/about-photo.jpg"
            alt="Andy Sparks"
            width={256}
            height={320}
            className="about-photo"
          />
        </div>
        <div className="static-page-content">
          <MDXRemote source={restContent} />
        </div>
      </Container>
    </section>
  );
}
