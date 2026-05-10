import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authrex Documentation - Getting Started",
  description: "Learn how to integrate Authrex into your application.",
};

export default function DocsPage() {
  return (
    <div>
      <h1>Introduction to Authrex</h1>
      <p>
        Welcome to the <strong>Authrex</strong> documentation! Authrex is a modern, developer-friendly authentication and authorization engine designed to secure your applications without locking you into rigid UI or complex business logic.
      </p>

      <div className="docs-alert">
        <p><strong>Note:</strong> Authrex is currently in V1. Expect frequent updates to the SDKs and APIs as we continue to roll out new features.</p>
      </div>

      <h2>Why Authrex?</h2>
      <p>
        Authentication systems often become fragile, over-complicated, or tightly coupled with business logic. AUTHREX addresses this problem by offering a dedicated, modular, and security-first authorization layer that integrates seamlessly into modern application stacks.
      </p>
      <ul>
        <li><strong>Security by Design</strong> – Built with threat models and attack surfaces in mind.</li>
        <li><strong>Separation of Concerns</strong> – Authentication, authorization, and application logic remain isolated.</li>
        <li><strong>Minimal Trust</strong> – Enforces least-privilege access at every level.</li>
        <li><strong>Scalability First</strong> – Designed to grow without architectural rewrites.</li>
      </ul>

      <h2>Quick Integration</h2>
      <p>
        Authrex offers a headless API design. You can use our SDK to easily authenticate users while assessing real-time risk context. Here is a simple example using our Node.js SDK:
      </p>

      <pre>
<code>{`// Initialize AUTHREX SDK
import { AuthRex } from '@authrex/sdk';

const auth = new AuthRex({
  apiKey: process.env.AUTHREX_API_KEY,
  environment: 'production'
});

// Authenticate user with risk assessment
const result = await auth.authenticate({
  userId: 'user_123',
  method: 'passwordless',
  context: {
    ipAddress: req.ip,
    userAgent: req.headers['user-agent']
  }
});

if (result.decision === 'allow') {
  // Grant access
  return res.json({ token: result.token });
}`}</code>
      </pre>

      <h2>Next Steps</h2>
      <p>
        Now that you understand the core concepts, you can move on to the <code>Installation</code> guide to get Authrex set up in your local development environment, or explore our <code>Authentication</code> guides for deep dives into passwordless and MFA flows.
      </p>
    </div>
  );
}
