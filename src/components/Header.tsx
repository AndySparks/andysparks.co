import Link from "next/link";
import { Container } from "./Container";
import "../styles/header.css";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/coaching", label: "Coaching" },
  { href: "/essays", label: "Essays" },
];

export function Header() {
  return (
    <header className="site-header">
      <Container wide>
        <div className="site-header-inner">
          <Link href="/" className="site-header-name">
            Andy Sparks
          </Link>
          <nav className="site-header-nav">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
