import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Andy Sparks - Executive coach to startup founders and CEOs";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const photoData = await readFile(
    join(process.cwd(), "public/images/headshot.jpg")
  );
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#f2ead4",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: "64px",
          gap: "64px",
        }}
      >
        {/* Decorative top border */}
        <div
          style={{
            position: "absolute",
            top: "32px",
            left: "64px",
            right: "64px",
            height: "3px",
            background: "#3d4f2f",
            display: "flex",
          }}
        />

        {/* Decorative bottom border */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            left: "64px",
            right: "64px",
            height: "3px",
            background: "#3d4f2f",
            display: "flex",
          }}
        />

        {/* Photo */}
        <img
          src={photoSrc}
          width={360}
          height={360}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #3d4f2f",
          }}
        />

        {/* Text content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "560px",
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              color: "#2b3a24",
              letterSpacing: "-1px",
              display: "flex",
            }}
          >
            Andy Sparks
          </div>

          {/* Divider */}
          <div
            style={{
              width: "80px",
              height: "2px",
              background: "#8b6914",
              display: "flex",
            }}
          />

          {/* Description */}
          <div
            style={{
              fontSize: "26px",
              color: "#3d4f2f",
              lineHeight: 1.5,
              display: "flex",
            }}
          >
            Executive coach to startup founders and CEOs.
          </div>

          <div
            style={{
              fontSize: "22px",
              color: "#6b7c5e",
              lineHeight: 1.5,
              display: "flex",
            }}
          >
            Writing about craft, psychology, and human flourishing.
          </div>

          {/* URL */}
          <div
            style={{
              fontSize: "16px",
              color: "#8b6914",
              letterSpacing: "3px",
              marginTop: "8px",
              display: "flex",
            }}
          >
            andysparks.co
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
