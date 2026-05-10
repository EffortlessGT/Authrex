import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webhooks - Authrex",
  description: "Subscribing to Authrex events.",
};

export default function WebhooksPage() {
  return (
    <div>
      <h1>Webhooks</h1>
      <p>
        Webhooks allow your application to react to events happening within Authrex in real-time.
      </p>

      <h2>Common Events</h2>
      <ul>
        <li><code>user.created</code>: Triggered when a new user signs up.</li>
        <li><code>user.login.failed</code>: Triggered when a login attempt fails (useful for fraud detection).</li>
        <li><code>policy.updated</code>: Triggered when an authorization policy changes.</li>
      </ul>

      <h2>Verifying Signatures</h2>
      <p>
        To ensure that webhook payloads are actually coming from Authrex, you must verify the cryptographic signature included in the <code>X-Authrex-Signature</code> header.
      </p>

      <pre>
<code>{`import { verifyWebhook } from '@authrex/sdk';

app.post('/webhook', (req, res) => {
  const isValid = verifyWebhook(
    req.rawBody, 
    req.headers['x-authrex-signature'], 
    process.env.WEBHOOK_SECRET
  );

  if (!isValid) return res.status(400).send("Invalid signature");

  // Process event...
  res.status(200).send("OK");
});`}</code>
      </pre>
    </div>
  );
}
