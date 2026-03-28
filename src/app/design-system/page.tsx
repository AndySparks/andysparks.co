import { Container } from "@/components/Container";
import "../../styles/design-system.css";

const COLORS = {
  Greens: [
    { name: "Evergreen", hex: "#2b3a24", light: true },
    { name: "Forest", hex: "#3d4f2f", light: true },
    { name: "Olive", hex: "#556b3a", light: true },
    { name: "Leaf", hex: "#6e8a4a", light: true },
    { name: "Spring", hex: "#8aaa5e", light: false },
  ],
  "Golds & Warm": [
    { name: "Brass", hex: "#c9952c", light: true },
    { name: "Gilt", hex: "#deb04a", light: false },
    { name: "Firelight", hex: "#e8c76a", light: false },
    { name: "Ember", hex: "#b85c2a", light: true },
  ],
  Foundations: [
    { name: "Parchment", hex: "#f2ead4", light: false },
    { name: "Warm Paper", hex: "#e5dabf", light: false },
    { name: "Khaki", hex: "#c4b496", light: false },
    { name: "Chocolate", hex: "#3b2f26", light: true },
    { name: "Night", hex: "#1e1a16", light: true },
  ],
  "Cool Note": [
    { name: "River", hex: "#6b8fa3", light: true },
    { name: "Smoke", hex: "#8fb3c4", light: false },
  ],
};

const SPACING = [
  { name: "--space-xs", value: "8px" },
  { name: "--space-sm", value: "16px" },
  { name: "--space-md", value: "32px" },
  { name: "--space-lg", value: "48px" },
  { name: "--space-xl", value: "64px" },
  { name: "--space-2xl", value: "96px" },
  { name: "--space-3xl", value: "128px" },
];

export default function DesignSystem() {
  return (
    <Container>
      <div style={{ paddingTop: "var(--space-xl)" }}>
        <h1>Design System</h1>
        <p
          style={{
            fontStyle: "italic",
            color: "var(--color-olive)",
            marginBottom: "var(--space-xl)",
          }}
        >
          Living reference for andysparks.co. Serious aims, playful methods.
        </p>

        {/* Colors */}
        <div className="ds-section">
          <div className="ds-section-title">Colors</div>
          {Object.entries(COLORS).map(([group, swatches]) => (
            <div key={group}>
              <h3
                style={{
                  fontSize: "var(--type-sm)",
                  color: "var(--color-ink-light)",
                  marginBottom: "var(--space-xs)",
                }}
              >
                {group}
              </h3>
              <div className="ds-swatch-grid">
                {swatches.map((swatch) => (
                  <div
                    key={swatch.name}
                    className="ds-swatch"
                    style={{
                      background: swatch.hex,
                      color: swatch.light ? "#f2ead4" : "#2a2520",
                      borderColor: swatch.light ? "transparent" : undefined,
                    }}
                  >
                    <span className="ds-swatch-name">{swatch.name}</span>
                    <span className="ds-swatch-hex">{swatch.hex}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Typography */}
        <div className="ds-section">
          <div className="ds-section-title">Typography</div>

          <div className="ds-type-sample">
            <div className="ds-type-label">
              Display / 42px / Fraunces 700
            </div>
            <div
              style={{
                fontSize: "var(--type-display)",
                fontWeight: 700,
                lineHeight: "var(--leading-tight)",
                color: "var(--color-evergreen)",
              }}
            >
              Serious aims, playful methods.
            </div>
          </div>

          <div className="ds-type-sample">
            <div className="ds-type-label">H1 / 32px / Fraunces 700</div>
            <h1>Why Co-Founders Struggle</h1>
          </div>

          <div className="ds-type-sample">
            <div className="ds-type-label">H2 / 26px / Fraunces 600</div>
            <h2>The Bear Market for Progress</h2>
          </div>

          <div className="ds-type-sample">
            <div className="ds-type-label">H3 / 22px / Fraunces 600</div>
            <h3>Curiosity as a Civic Virtue</h3>
          </div>

          <div className="ds-type-sample">
            <div className="ds-type-label">
              Subtitle / 22px / Fraunces 300 Italic
            </div>
            <p
              style={{
                fontSize: "var(--type-subtitle)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: "var(--leading-snug)",
                color: "var(--color-olive)",
              }}
            >
              A philosophy of human flourishing.
            </p>
          </div>

          <div className="ds-type-sample">
            <div className="ds-type-label">
              Body / 19px / Fraunces 400 / 1.7 line-height
            </div>
            <p>
              The best partnerships are built on{" "}
              <a href="#">mutual trust</a>, but trust is not a permanent state.
              It erodes slowly, then all at once. The question is whether you
              notice before the fracture, or after. Every generation faces two
              challenges: to create <em>real progress</em> that broadly improves
              the human condition, and to convince people we can continue to do
              so.
            </p>
          </div>

          <div className="ds-type-sample">
            <div className="ds-type-label">
              Meta / 13px / IBM Plex Mono 400
            </div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--type-xs)",
                color: "var(--color-ink-light)",
              }}
            >
              March 28, 2026 &middot; 12 min read
            </p>
          </div>
        </div>

        {/* Spacing */}
        <div className="ds-section">
          <div className="ds-section-title">Spacing (base 8)</div>
          {SPACING.map((space) => (
            <div key={space.name} className="ds-spacing-row">
              <div
                className="ds-spacing-bar"
                style={{ width: space.value }}
              />
              <span className="ds-spacing-label">
                {space.name} ({space.value})
              </span>
            </div>
          ))}
        </div>

        {/* Layout */}
        <div className="ds-section">
          <div className="ds-section-title">Layout</div>
          <div style={{ marginBottom: "var(--space-sm)" }}>
            <div className="ds-type-label">Content width: 640px</div>
            <div
              style={{
                width: "var(--width-content)",
                maxWidth: "100%",
                height: 24,
                background: "var(--color-forest)",
                opacity: 0.2,
                borderRadius: 2,
              }}
            />
          </div>
          <div>
            <div className="ds-type-label">Wide width: 940px</div>
            <div
              style={{
                width: "var(--width-wide)",
                maxWidth: "100%",
                height: 24,
                background: "var(--color-brass)",
                opacity: 0.2,
                borderRadius: 2,
              }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
