import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "../auth.css";

export const metadata: Metadata = {
  title: "Sign In - Authrex",
  description: "Sign in to your Authrex account",
};

export default function SignInPage() {
  return (
    <div className="auth-page-container">
      {/* Left Panel */}
      <div className="auth-left-panel">
        <div className="auth-left-content">
          <div className="auth-logo">
            <Link href="/">
              <Image src="/icon.png" alt="Authrex" width={140} height={45} />
            </Link>
          </div>
          <h1>Secure access to your authentication infrastructure</h1>
          <p>
            Enterprise-grade identity orchestration platform trusted by security-conscious development teams worldwide.
          </p>
          <ul className="auth-features">
            <li>
              <i className="fa-solid fa-check"></i>
              Zero-trust architecture
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              SOC 2 Type II compliant
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              End-to-end encryption
            </li>
          </ul>
        </div>
      </div>

      {/* Right Panel */}
      <div className="auth-right-panel">
        <div className="auth-form-container">
          <div className="auth-form-header">
            <h2>Welcome back</h2>
            <p>Sign in to your Authrex account</p>
          </div>

          <form className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Work email</label>
              <input type="email" id="email" placeholder="you@company.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" required />
            </div>

            <button type="button" className="auth-submit-btn">Sign in</button>
          </form>

          <div className="auth-footer">
            <div className="security-badge">
              <i className="fa-solid fa-shield"></i>
              Enterprise-grade security by default
            </div>
            
            <div className="auth-notice" style={{ borderLeftColor: 'var(--finishing-color)', background: 'rgba(50, 222, 132, 0.05)' }}>
              <i className="fa-solid fa-lock" style={{ color: 'var(--finishing-color)' }}></i> <strong>Login activity is monitored for your safety</strong>
            </div>

            <div className="auth-switch">
              Don't have an account? <Link href="/sign-up">Create account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
