"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import "../styles/cookie-consent.css";

const GA_ID = "G-Q6TXGGC33Q";
const CONSENT_KEY = "cookie-consent";

type Consent = "granted" | "denied" | null;

function getStoredConsent(): Consent {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(CONSENT_KEY);
  if (value === "granted" || value === "denied") return value;
  return null;
}

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      setConsent(stored);
    } else {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "granted");
    setConsent("granted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, "denied");
    setConsent("denied");
    setVisible(false);
  }

  return (
    <>
      {consent === "granted" && (
        <>
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
        </>
      )}

      {visible && (
        <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
          <p className="cookie-banner-text">
            This site uses cookies for analytics.{" "}
            <a href="/legal">
              Learn more
            </a>
          </p>
          <div className="cookie-banner-actions">
            <button className="cookie-banner-decline" onClick={decline}>
              Decline
            </button>
            <button className="cookie-banner-accept" onClick={accept}>
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
