import { Container } from "@/components/Container";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { getPageContent } from "@/lib/pages";
import { MDXRemote } from "next-mdx-remote/rsc";
import "../../styles/static-page.css";

export const metadata = {
  title: "Media",
  description:
    "Podcast appearances, interviews, and media features with Andy Sparks.",
  alternates: {
    canonical: "/media",
  },
};

const appearances = [
  { name: "The Inner Frontier", url: "https://castro.fm/episode/Eo5lSC", year: 2022 },
  { name: "The Passion People Podcast", url: "https://open.spotify.com/episode/09AhANikVnI8uqJcswTWsw?si=8vZ0OuFkRJyFZKaS2lPQDQ", year: 2021 },
  { name: "Forward Thinking Founders", url: "https://ftf.matsherman.com/episodes/056-andy-sparks-holloway-on-the-future-of-books", year: 2020 },
  { name: "Tech Talks Daily", url: "https://techblogwriter.co.uk/holloway/", year: 2020 },
  { name: "Boundless", url: "https://think-boundless.com/andy-sparks/", year: 2019 },
  { name: "Crazy Wisdom", url: "https://podcasts.apple.com/gb/podcast/andy-sparks-how-do-you-write-clearly-for-business/id1354589767?i=1000444285877", year: 2019 },
  { name: "Upside FM (SXSW 2019)", url: "https://upside.fm/sxsw-2019/", year: 2019 },
  { name: "52 Founders", url: "https://soundcloud.com/52founders/52-founders-009-andy-sparks", year: 2016 },
  { name: "SaaStr Podcast", url: "https://www.saastr.com/saastr-podcast-044-andy-sparks-co-founder-coo-on-how-to-hire-train-incentivize-your-sales-team/", year: 2015 },
  { name: "500 Startups Podcast", url: "https://player.fm/series/500-startups-podcast/episode-36-danielle-morrill-and-andy-sparks-co-founders-of-mattermark", year: 2015 },
  { name: "Flyover Labs", url: "http://www.flyoverlabs.io/podcasts/andy-sparks-co-founder-coo-at-mattermark-interview/", year: 2015 },
  { name: "Product Hunt Radio", url: "https://metacast.app/podcast/product-hunt-radio/kmoediZe/product-hunt-radio-episode-18-w-danielle-morrill-andy-sparks-and-angela-kingyens/Pue2rul2", year: 2014 },
  { name: "Rocketship FM", url: "https://goodpods.com/podcasts/rocketshipfm-55145/interview-andy-sparks-of-mattermark-on-the-pipeline-tactics-of-matterm-12180311", year: 2014 },
];

export default function MediaPage() {
  const page = getPageContent("media");
  if (!page) return null;

  return (
    <section className="static-page">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://andysparks.co" },
          { name: "Media", url: "https://andysparks.co/media" },
        ]}
      />
      <Container>
        <h1>{page.title}</h1>
        <div className="static-page-content">
          <MDXRemote source={page.content} />
        </div>
        <table className="media-table">
          <thead>
            <tr>
              <th>Appearance</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {appearances.map((a) => (
              <tr key={a.url}>
                <td>
                  <a href={a.url} target="_blank" rel="noopener noreferrer">
                    {a.name}
                  </a>
                </td>
                <td>{a.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </section>
  );
}
