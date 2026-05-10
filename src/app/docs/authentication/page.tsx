import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication - Authrex",
  description: "Learn about Authrex's authentication methods.",
};

export default function AuthenticationPage() {
  return (
    <div>
      <h1>Authentication</h1>
      <p>
        Authrex supports a variety of modern authentication methods, focusing on passwordless and continuous verification flows.
      </p>

      <h2>Supported Methods</h2>
      <ul>
        <li><strong>Magic Links:</strong> Send a secure, one-time login link to a user's email.</li>
        <li><strong>OTP via SMS/Email:</strong> Send a 6-digit code for verification.</li>
        <li><strong>WebAuthn / Biometrics:</strong> Use device-level biometrics (FaceID, TouchID) for secure, passwordless logins.</li>
        <li><strong>OAuth 2.0 / OIDC:</strong> Connect with providers like Google, GitHub, and Microsoft.</li>
      </ul>

      <h2>Example: Sending a Magic Link</h2>
      <pre>
<code>{`const response = await auth.signIn.magicLink({
  email: 'user@example.com',
  redirectUrl: 'https://yourapp.com/callback'
});

console.log(response.status); // "email_sent"`}</code>
      </pre>

      <div className="docs-alert">
        <p><strong>Security Tip:</strong> Magic links automatically expire after 15 minutes by default. You can adjust this in your tenant settings.</p>
      </div>
    </div>
  );
}
