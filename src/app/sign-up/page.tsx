"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../auth.css";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [terms, setTerms] = useState(false);

  const [errors, setErrors] = useState<{
    email?: string;
    org?: string;
    password?: string;
    confirmPassword?: string;
    terms?: string;
  }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!org) {
      newErrors.org = "Organization name is required";
    } else if (org.length < 2) {
      newErrors.org = "Organization name must be at least 2 characters";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!terms) {
      newErrors.terms = "You must agree to the Terms of Service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", { email, org, password });
    }
  };

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
            <li><i className="fa-solid fa-check"></i> Zero-trust architecture</li>
            <li><i className="fa-solid fa-check"></i> SOC 2 Type II compliant</li>
            <li><i className="fa-solid fa-check"></i> End-to-end encryption</li>
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

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="email">Work email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="you@company.com" 
                value={email}
                onChange={(e) => { setEmail(e.target.value); setErrors({...errors, email: ""}); }}
                className={errors.email ? "error-input" : ""}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="org">Organization name</label>
              <input 
                type="text" 
                id="org" 
                placeholder="Your Company Inc." 
                value={org}
                onChange={(e) => { setOrg(e.target.value); setErrors({...errors, org: ""}); }}
                className={errors.org ? "error-input" : ""}
              />
              {errors.org && <span className="error-text">{errors.org}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input-container">
                <input 
                  type={showPassword ? "text" : "password"} 
                  id="password" 
                  placeholder="Create a strong password" 
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setErrors({...errors, password: ""}); }}
                  className={errors.password ? "error-input" : ""}
                />
                <i 
                  className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} password-toggle-icon`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm password</label>
              <div className="password-input-container">
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  id="confirmPassword" 
                  placeholder="Confirm your password" 
                  value={confirmPassword}
                  onChange={(e) => { setConfirmPassword(e.target.value); setErrors({...errors, confirmPassword: ""}); }}
                  className={errors.confirmPassword ? "error-input" : ""}
                />
                <i 
                  className={`fa-solid ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"} password-toggle-icon`}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                ></i>
              </div>
              {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
            </div>

            <div className="checkbox-container">
              <div className="checkbox-group">
                <input 
                  type="checkbox" 
                  id="terms" 
                  checked={terms}
                  onChange={(e) => { setTerms(e.target.checked); setErrors({...errors, terms: ""}); }}
                />
                <label htmlFor="terms">I agree to the Terms of Service and Privacy Policy</label>
              </div>
              {errors.terms && <span className="error-text" style={{ marginLeft: '24px', display: 'block', color: '#ef4444', fontSize: '13px', marginTop: '4px' }}>{errors.terms}</span>}
            </div>

            <button type="submit" className="auth-submit-btn">Create account</button>
          </form>

          <div className="auth-footer">
            <div className="security-badge">
              <i className="fa-solid fa-lock"></i>
              We never store plain-text passwords
            </div>
            
            <div className="auth-notice">
              <strong>Email verification required</strong><br/>
              We&apos;ll send a verification link to your email address to complete the registration process.
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
