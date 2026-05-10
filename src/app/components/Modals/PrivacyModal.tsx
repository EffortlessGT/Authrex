"use client";

import React, { useEffect } from 'react';
import './PrivacyModal.css';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Privacy Policy</h2>
          <button className="close-btn" onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        
        <div className="modal-body">
          <p className="last-updated">Last Updated: May 10, 2026</p>
          
          <section>
            <h3>1. Introduction</h3>
            <p>Welcome to AUTHREX. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our authentication infrastructure and services.</p>
          </section>

          <section>
            <h3>2. Information We Collect</h3>
            <p>We collect information that you provide directly to us when you create an account, use our APIs, or contact support. This may include:</p>
            <ul>
              <li>Contact information (email address, name)</li>
              <li>Authentication credentials</li>
              <li>Organizational data</li>
              <li>Technical data (IP addresses, device information, browser type)</li>
            </ul>
          </section>

          <section>
            <h3>3. How We Use Your Information</h3>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and maintain our authentication services</li>
              <li>Improve and personalize user experience</li>
              <li>Monitor security and prevent fraud</li>
              <li>Communicate with you regarding updates and support</li>
              <li>Ensure compliance with legal obligations</li>
            </ul>
          </section>

          <section>
            <h3>4. Data Security</h3>
            <p>Security is our core foundation. We implement industry-standard security measures, including SOC 2 Type II controls, end-to-end encryption, and zero-trust architecture to protect your data. However, no method of transmission over the Internet is 100% secure.</p>
          </section>

          <section>
            <h3>5. Data Retention</h3>
            <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
          </section>

          <section>
            <h3>6. Your Rights</h3>
            <p>Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. You can exercise these rights through your account settings or by contacting us.</p>
          </section>

          <section>
            <h3>7. Changes to This Policy</h3>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.</p>
          </section>

          <section>
            <h3>8. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p><strong>Email:</strong> security@authrex.com</p>
          </section>
        </div>

        <div className="modal-footer">
          <button className="primary-btn" onClick={onClose}>I Understand</button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
