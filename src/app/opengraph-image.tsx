import { ImageResponse } from "next/og";

export const alt = "Andy Sparks - Executive coach to startup founders and CEOs";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f2ead4",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "64px",
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

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {/* Decorative flourish */}
          <div
            style={{
              fontSize: "32px",
              color: "#8b6914",
              letterSpacing: "16px",
              display: "flex",
            }}
          >
            * * *
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "72px",
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
              width: "120px",
              height: "2px",
              background: "#8b6914",
              display: "flex",
            }}
          />

          {/* Description */}
          <div
            style={{
              fontSize: "28px",
              color: "#3d4f2f",
              textAlign: "center",
              maxWidth: "800px",
              lineHeight: 1.5,
              display: "flex",
            }}
          >
            Executive coach to startup founders and CEOs.
          </div>

          <div
            style={{
              fontSize: "24px",
              color: "#6b7c5e",
              textAlign: "center",
              maxWidth: "800px",
              lineHeight: 1.5,
              display: "flex",
            }}
          >
            Writing about craft, psychology, and human flourishing.
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "52px",
            fontSize: "18px",
            color: "#8b6914",
            letterSpacing: "3px",
            display: "flex",
          }}
        >
          andysparks.co
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
