import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Newsletter — Andy Sparks",
  description:
    "Subscribe to essays on startups, coaching, craft, and human flourishing from Andy Sparks.",
  alternates: {
    canonical: "/newsletter",
  },
};

export default function NewsletterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://andysparks.co" },
          { name: "Newsletter", url: "https://andysparks.co/newsletter" },
        ]}
      />
      {children}
    </>
  );
}
