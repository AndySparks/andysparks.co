import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Contact Andy Sparks — Executive Coach for Startup Founders",
  description:
    "Get in touch with Andy Sparks. Reach out about executive coaching for startup founders, or just to say hello.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://andysparks.co" },
          { name: "Contact", url: "https://andysparks.co/contact" },
        ]}
      />
      {children}
    </>
  );
}
