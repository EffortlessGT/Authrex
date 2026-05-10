import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SDKs & APIs - Authrex",
  description: "Reference for Authrex API endpoints and SDKs.",
};

export default function SdkPage() {
  return (
    <div>
      <h1>SDKs & APIs</h1>
      <p>
        Authrex provides a robust RESTful API and native SDKs to make integration as seamless as possible.
      </p>

      <h2>REST API Base URL</h2>
      <pre>
<code>https://api.authrex.io/v1</code>
      </pre>

      <h2>Authentication Header</h2>
      <p>All API requests must include your secret API key in the Authorization header.</p>
      <pre>
<code>{`Authorization: Bearer YOUR_API_KEY`}</code>
      </pre>

      <h2>Rate Limits</h2>
      <p>
        By default, API endpoints are rate-limited to 1,000 requests per minute per IP address. If you exceed this limit, you will receive a <code>429 Too Many Requests</code> response.
      </p>
    </div>
  );
}
