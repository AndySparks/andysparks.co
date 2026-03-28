import { Container } from "@/components/Container";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container>
      <div
        style={{
          paddingTop: "var(--space-2xl)",
          paddingBottom: "var(--space-2xl)",
        }}
      >
        <h1
          style={{
            fontSize: "var(--type-display)",
            color: "var(--color-evergreen)",
            marginBottom: "var(--space-sm)",
          }}
        >
          Lost in the forest.
        </h1>
        <p style={{ marginBottom: "var(--space-md)" }}>
          This page doesn&apos;t exist, but there&apos;s plenty to explore.
        </p>
        <Link href="/">Head back home</Link>
      </div>
    </Container>
  );
}
