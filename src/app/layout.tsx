import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Andy Sparks",
    template: "%s | Andy Sparks",
  },
  description:
    "Executive coach to startup founders and CEOs. Writing about craft, psychology, and human flourishing.",
  metadataBase: new URL("https://andysparks.co"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Andy Sparks",
  },
  twitter: {
    card: "summary_large_image",
    site: "@SparksZilla",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${ibmPlexMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
