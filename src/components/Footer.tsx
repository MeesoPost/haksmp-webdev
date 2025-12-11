// src/components/Footer.tsx
import {
  PageFooter,
  Heading,
  Link,
  Paragraph,
} from "@utrecht/component-library-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <PageFooter>
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="footer-section">
            <Heading level={2} className="footer-heading">
              HAK SMP
            </Heading>
            <Paragraph className="footer-description">
              Seizoen 4: Het Landen Systeem
            </Paragraph>
          </div>

          <div className="footer-section">
            <Heading level={3} className="footer-section-heading">
              Navigation
            </Heading>
            <nav className="footer-nav" aria-label="Footer navigation">
              <ul className="footer-nav-list">
                <li className="footer-nav-item">
                  <Link href="/" className="footer-link">
                    Home
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link href="/plugins" className="footer-link">
                    Mods & Plugins
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link href="#" className="footer-link">
                    Discord
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link href="/wiki" className="footer-link">
                    Wiki
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer-section">
            <Heading level={3} className="footer-section-heading">
              Support
            </Heading>
            <nav aria-label="Support navigation">
              <ul className="footer-nav-list">
                <li className="footer-nav-item">
                  <Link href="#" className="footer-link">
                    Contact Us
                  </Link>
                </li>
                <li className="footer-nav-item">
                  <Link href="#" className="footer-link">
                    Report Bug
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <Paragraph className="footer-copyright">
            &copy; {currentYear} HAK SMP. All rights reserved.
          </Paragraph>
        </div>
      </div>
    </PageFooter>
  );
}
