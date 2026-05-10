import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "../auth.css";

export const metadata: Metadata = {
  title: "Create Account - Authrex",
  description: "Start building secure authentication workflows",
};

export default function SignUpPage() {
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
            <h2>Create your account</h2>
            <p>Start building secure authentication workflows</p>
          </div>

          <form className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Work email</label>
              <input type="email" id="email" placeholder="you@company.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="org">Organization name</label>
              <input type="text" id="org" placeholder="Your Company Inc." required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Create a strong password" required />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm password</label>
              <input type="password" id="confirmPassword" placeholder="Confirm your password" required />
            </div>

            <div className="checkbox-group">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">I agree to the Terms of Service and Privacy Policy</label>
            </div>

            <button type="button" className="auth-submit-btn">Create account</button>
          </form>

          <div className="auth-footer">
            <div className="security-badge">
              <i className="fa-solid fa-lock"></i>
              We never store plain-text passwords
            </div>
            
            <div className="auth-notice">
              <strong>Email verification required</strong><br/>
              We'll send a verification link to your email address to complete the registration process.
            </div>

            <div className="auth-switch">
              Already have an account? <Link href="/sign-in">Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
