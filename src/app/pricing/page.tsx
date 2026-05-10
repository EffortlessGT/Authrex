import { Metadata } from "next";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Link from "next/link";
import "./pricing.css";

export const metadata: Metadata = {
  title: "Pricing - Authrex",
  description: "Compare AUTHREX plans. Choose the authentication solution that scales with your needs.",
};

export default function PricingPage() {
  const check = <i className="fa-solid fa-check check-icon"></i>;

  return (
    <>
      <Navbar />
      <main className="pricing-main-container">
        {/* Hero */}
        <section className="pricing-hero">
          <div className="popular-badge" style={{ position: 'relative', top: '0', display: 'inline-block', marginBottom: '20px', transform: 'none', left: '0' }}>Early Access</div>
          <h1>Authrex is free while in Beta</h1>
          <p>Get full access to our enterprise-grade authentication infrastructure for free during our early access phase. No credit card required.</p>
        </section>

        {/* Pricing Cards */}
        <section className="pricing-cards-container" style={{ gridTemplateColumns: '1fr', maxWidth: '600px' }}>
          <div className="pricing-card popular">
            <div className="popular-badge">Free Phase</div>
            <div className="plan-name">Early Access Plan</div>
            <div className="plan-price">$0<span>/month</span></div>
            <div className="plan-desc">Complete access to our core identity platform, security features, and developer tools as we build the future of authentication together.</div>
            <Link href="/sign-up" className="pricing-btn btn-accent">Get Early Access</Link>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="comparison-section">
          <h2 style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--primary-color)' }}>Included in Early Access</h2>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Features</th>
                <th>Early Access Plan</th>
              </tr>
            </thead>
            <tbody>
              {/* Category */}
              <tr><td colSpan={2} className="category-header">Authentication</td></tr>
              <tr><td>Monthly Active Users</td><td>Unlimited (During Beta)</td></tr>
              <tr><td>Passwordless Authentication</td><td>{check}</td></tr>
              <tr><td>Social Login Providers</td><td>Unlimited</td></tr>
              <tr><td>Multi-Factor Authentication (MFA)</td><td>{check}</td></tr>
              <tr><td>Biometric Authentication</td><td>{check}</td></tr>
              
              {/* Category */}
              <tr><td colSpan={2} className="category-header">Security & Access Control</td></tr>
              <tr><td>Risk-Based Authentication</td><td>{check}</td></tr>
              <tr><td>Session Management</td><td>Advanced</td></tr>
              <tr><td>Token Lifecycle Control</td><td>{check}</td></tr>
              <tr><td>Device Fingerprinting</td><td>{check}</td></tr>
              <tr><td>Security Audit Logs</td><td>90 Days</td></tr>

              {/* Category */}
              <tr><td colSpan={2} className="category-header">Developer Tools</td></tr>
              <tr><td>REST & GraphQL API Access</td><td>{check}</td></tr>
              <tr><td>SDK Support (All Languages)</td><td>{check}</td></tr>
              <tr><td>Unlimited Webhooks</td><td>{check}</td></tr>
              <tr><td>Sandbox Environment</td><td>{check}</td></tr>
              <tr><td>Custom Domains</td><td>{check}</td></tr>
            </tbody>
          </table>
        </section>

        {/* Feature Highlights */}
        <section className="features-detail-section">
          <div className="features-detail-header">
            <h2>Platform Capabilities</h2>
            <p>Everything included in the current free version of Authrex</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-block">
              <i className="fa-solid fa-fingerprint"></i>
              <h3>Authentication</h3>
              <p>Support for passwordless, biometric, and social login methods.</p>
              <ul className="feature-list">
                <li><i className="fa-solid fa-check"></i> Email & SMS OTP</li>
                <li><i className="fa-solid fa-check"></i> Magic Links</li>
                <li><i className="fa-solid fa-check"></i> WebAuthn & FIDO2</li>
                <li><i className="fa-solid fa-check"></i> Social OAuth</li>
              </ul>
            </div>

            <div className="feature-block">
              <i className="fa-solid fa-shield-halved"></i>
              <h3>Security</h3>
              <p>Layer additional security with flexible MFA and risk options.</p>
              <ul className="feature-list">
                <li><i className="fa-solid fa-check"></i> Time-based OTP (TOTP)</li>
                <li><i className="fa-solid fa-check"></i> Hardware Security Keys</li>
                <li><i className="fa-solid fa-check"></i> Device Fingerprinting</li>
                <li><i className="fa-solid fa-check"></i> Anomaly Detection</li>
              </ul>
            </div>

            <div className="feature-block">
              <i className="fa-solid fa-code"></i>
              <h3>Developer Experience</h3>
              <p>Clean APIs and comprehensive tooling for developers.</p>
              <ul className="feature-list">
                <li><i className="fa-solid fa-check"></i> REST & GraphQL APIs</li>
                <li><i className="fa-solid fa-check"></i> SDKs for All Languages</li>
                <li><i className="fa-solid fa-check"></i> Unlimited Webhooks</li>
                <li><i className="fa-solid fa-check"></i> Extensive Docs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pricing-cta">
          <h2>Get Started with Authrex Today</h2>
          <p>Join our early access program and start securing your applications with zero cost.</p>
          <div className="cta-actions">
            <Link href="/sign-up" className="btn-accent pricing-btn">Create Free Account</Link>
            <Link href="/security" className="btn-outline pricing-btn">Security Overview</Link>
          </div>
          <div className="contact-note">No credit card required. Free during beta phase.</div>
        </section>
      </main>
      <Footer />
    </>
  );
}
