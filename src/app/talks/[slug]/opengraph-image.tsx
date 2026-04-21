import { ImageResponse } from "next/og";
import { getTalkBySlug } from "@/lib/talks";

export const alt = "Drinking the Radioactive Gatorade";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const talk = getTalkBySlug(params.slug);
  const title = talk?.title || "Radioactive Gatorade";

  const phrase = title.toLowerCase().includes("radioactive")
    ? "Radioactive Gatorade."
    : title;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1e1a16",
        }}
      >
        <div
          style={{
            fontSize: 148,
            fontWeight: 700,
            color: "#e8c76a",
            lineHeight: 1.05,
            textAlign: "center",
            maxWidth: "80%",
            fontFamily: "serif",
          }}
        >
          {phrase}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
