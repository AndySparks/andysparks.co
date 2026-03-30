import { Container } from "@/components/Container";
import { getPageContent } from "@/lib/pages";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import "../../styles/static-page.css";

export const metadata = {
  title: "About Andy Sparks — Executive Coach, Writer & Former Startup CEO",
  description:
    "Andy Sparks is an executive coach for startup founders and CEOs. Previously co-founded Mattermark and Holloway. Harvard Business School case study subject.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const page = getPageContent("about");
  if (!page) return null;

  const splitMarker = "\n## How I got here";
  const splitIndex = page.content.indexOf(splitMarker);
  const introContent = page.content.slice(0, splitIndex);
  const restContent = page.content.slice(splitIndex);

  // Split intro into the h2 heading and the body paragraphs
  // so the heading renders full-width and only paragraphs sit beside the photo
  const firstParagraphIndex = introContent.indexOf("\n\n", introContent.indexOf("##"));
  const introHeading = introContent.slice(0, firstParagraphIndex);
  const introBody = introContent.slice(firstParagraphIndex).trim();

  return (
    <section className="static-page">
      <Container wide>
        <h1>{page.title}</h1>
        <div className="about-intro-heading static-page-content">
          <MDXRemote source={introHeading} />
        </div>
        <div className="about-intro">
          <div className="about-intro-text static-page-content">
            <MDXRemote source={introBody} />
          </div>
          <figure className="about-photo-figure">
            <Image
              src="/images/about-photo.jpg"
              alt="Andy Sparks"
              width={256}
              height={320}
              className="about-photo"
            />
            <figcaption className="about-photo-caption">
              Wedding day, Shotwell&apos;s Saloon.
            </figcaption>
          </figure>
        </div>
        <div className="static-page-content about-body">
          <MDXRemote source={restContent} />
        </div>
      </Container>
    </section>
  );
}
