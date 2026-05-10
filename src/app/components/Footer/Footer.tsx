import Link from 'next/link';
import './Footer.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <Image src="/icon.png" alt="Authrex Logo" width={120} height={40} className="footer-logo" />
          <p>Adaptive authentication infrastructure for modern applications.</p>
        </div>

        <div className="footer-links-grid">
          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li><Link href="#features">Features</Link></li>
              <li><Link href="#pricing">Pricing</Link></li>
              <li><Link href="#security">Security</Link></li>
              <li><Link href="#enterprise">Enterprise</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Developers</h4>
            <ul>
              <li><Link href="/docs">Documentation</Link></li>
              <li><Link href="/docs/sdk">API Reference</Link></li>
              <li><Link href="/docs/sdk">SDKs</Link></li>
              <li><Link href="/docs">Guides</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="#careers">Careers</Link></li>
              <li><Link href="#blog">Blog</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><Link href="#privacy">Privacy Policy</Link></li>
              <li><Link href="#terms">Terms of Service</Link></li>
              <li><Link href="#compliance">Compliance</Link></li>
              <li><Link href="#security-legal">Security</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 AUTHREX. All rights reserved.</p>
        <p className="powered-by">Engineered with passion by <strong>GT</strong></p>
      </div>
    </footer>
  );
}
