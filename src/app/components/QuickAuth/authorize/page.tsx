"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PrivacyModal from "../../Modals/PrivacyModal";
import "./authorize.css";

export default function AuthorizePage() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="authorize-page-container">
      <div className="authorize-top-bar">
        <Link href="/" className="auth-logo">
          <Image src="/icon.png" alt="Authrex" width={120} height={40} />
        </Link>
        <Link href="/" className="back-link">
          <i className="fa-solid fa-arrow-left"></i> Back to Home
        </Link>
      </div>

      <div className="authorize-card-wrapper">
        <div className="authorize-card">
          <div className="authorize-header">
            <h2>Continue with AUTHREX</h2>
            <p>DevForum wants to authenticate using your AUTHREX account</p>
          </div>

          <div className="target-app-card">
            <div className="app-initials">DF</div>
            <div className="app-info">
              <h3>DevForum</h3>
              <p>DevForum Inc.</p>
            </div>
          </div>

          <div className="permissions-section">
            <h4>Requested Permissions</h4>

            <div className="permission-item">
              <div className="permission-icon">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="permission-text">
                <strong>Basic profile</strong>
                <p>Access your name and profile information</p>
              </div>
            </div>

            <div className="permission-item">
              <div className="permission-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="permission-text">
                <strong>Email address</strong>
                <p>Access your email address</p>
              </div>
            </div>
          </div>

          <div className="secure-notice">
            <i className="fa-solid fa-shield-check"></i>
            <div className="notice-content">
              <strong>Secure Authorization</strong>
              <p>AUTHREX will share only the requested information. You can revoke access anytime.</p>
            </div>
          </div>

          <div className="authorize-actions">
            <button className="btn-primary">Continue</button>
            <button className="btn-outline">Cancel</button>
          </div>

          <div className="authorize-footer">
            <div className="protected-by">
              <i className="fa-solid fa-lock"></i> Protected by AUTHREX Identity Infrastructure
            </div>
            <div className="footer-links">
              <button onClick={() => setIsPrivacyOpen(true)} className="footer-modal-btn">Privacy Policy</button>
              <span className="dot">•</span>
              <Link href="#">Terms</Link>
              <span className="dot">•</span>
              <Link href="#">Security</Link>
              <span className="dot">•</span>
              <Link href="#">AUTHREX Status</Link>
            </div>
            <div className="copyright">
              © AUTHREX Identity Infrastructure
            </div>
          </div>
        </div>
      </div>

      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </div>
  );
}
