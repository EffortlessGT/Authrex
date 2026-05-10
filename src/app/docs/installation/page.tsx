import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation - Authrex",
  description: "How to install Authrex in your project.",
};

export default function InstallationPage() {
  return (
    <div>
      <h1>Installation</h1>
      <p>
        Getting started with Authrex is incredibly simple. We provide official SDKs for major languages and frameworks.
      </p>

      <h2>Node.js / JavaScript</h2>
      <p>
        To install the Authrex SDK for a Node.js environment, use npm or yarn:
      </p>
      <pre>
<code>npm install @authrex/sdk</code>
      </pre>

      <h2>Python</h2>
      <p>
        To install the Authrex SDK for Python, use pip:
      </p>
      <pre>
<code>pip install authrex-sdk</code>
      </pre>

      <div className="docs-alert">
        <p><strong>Note:</strong> You will need an API Key to initialize the SDK. You can generate one from your Authrex Developer Dashboard.</p>
      </div>

      <h2>Initialization</h2>
      <p>Once installed, you can initialize the client like so:</p>
      <pre>
<code>{`import { AuthRex } from '@authrex/sdk';

const auth = new AuthRex({
  apiKey: 'YOUR_API_KEY',
});`}</code>
      </pre>
    </div>
  );
}
