import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, IBM_Plex_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const GA_ID = "G-Q6TXGGC33Q";

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
    template: "%s / Andy Sparks",
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
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
