import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zero Trust Architecture - Authrex",
  description: "Understanding continuous verification.",
};

export default function ZeroTrustPage() {
  return (
    <div>
      <h1>Zero Trust Architecture</h1>
      <p>
        Traditional session management assumes that once a user is logged in, they remain secure until they log out. Authrex operates on a <strong>Zero Trust</strong> model, which means trust is never assumed and continuously verified.
      </p>

      <h2>Risk-Based Decisions</h2>
      <p>
        Every time you call the Authrex API, our engine evaluates the context of the request.
      </p>
      <ul>
        <li><strong>IP Velocity:</strong> Is the user suddenly logging in from a different country?</li>
        <li><strong>Device Fingerprinting:</strong> Is this an unrecognized device?</li>
        <li><strong>Behavioral Anomalies:</strong> Is the user requesting access to highly sensitive data out of their normal working hours?</li>
      </ul>

      <div className="docs-alert">
        <p><strong>Action Required:</strong> If Authrex detects high risk, the <code>decision</code> object will prompt you to step up authentication (e.g., challenge with MFA) rather than denying access outright.</p>
      </div>
    </div>
  );
}
