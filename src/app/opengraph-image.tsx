import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Andy Sparks — Executive Coach for Startup Founders & CEOs";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const photoData = await readFile(
    join(process.cwd(), "public/images/headshot-circle.png")
  );
  const photoSrc = `data:image/png;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#f2ead4",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "48px",
          padding: "64px",
        }}
      >
        <img src={photoSrc} width={240} height={240} alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#2d3a2d",
            }}
          >
            Andy Sparks
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#5a6b5a",
            }}
          >
            Executive Coach for Startup Founders & CEOs
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
