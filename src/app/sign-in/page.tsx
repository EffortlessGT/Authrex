"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../auth.css";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Proceed with authentication
      console.log("Form submitted", { email, password });
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
            <h2>Welcome back</h2>
            <p>Sign in to your Authrex account</p>
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
              <label htmlFor="password">Password</label>
              <div className="password-input-container">
                <input 
                  type={showPassword ? "text" : "password"} 
                  id="password" 
                  placeholder="Enter your password" 
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

            <button type="submit" className="auth-submit-btn">Sign in</button>
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
              Don&apos;t have an account? <Link href="/sign-up">Create account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
