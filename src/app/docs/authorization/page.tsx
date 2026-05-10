import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authorization Policies - Authrex",
  description: "Configuring role-based and attribute-based access control.",
};

export default function AuthorizationPage() {
  return (
    <div>
      <h1>Authorization Policies</h1>
      <p>
        Authrex decouples authorization logic from your application code. By defining policies in the dashboard, you can enforce complex access control rules universally.
      </p>

      <h2>RBAC vs ABAC</h2>
      <p>
        We support both <strong>Role-Based Access Control (RBAC)</strong> and <strong>Attribute-Based Access Control (ABAC)</strong>.
      </p>
      <ul>
        <li><strong>RBAC:</strong> Assign users to roles (e.g., <code>admin</code>, <code>editor</code>) and check their permissions.</li>
        <li><strong>ABAC:</strong> Evaluate dynamic attributes (e.g., &quot;User can edit document IF document.ownerId === user.id&quot;).</li>
      </ul>

      <h2>Enforcing Policies</h2>
      <p>In your backend, simply ask Authrex if an action is permitted:</p>

      <pre>
<code>{`const decision = await auth.authorize({
  userId: 'user_123',
  action: 'document:delete',
  resource: { type: 'document', id: 'doc_456' }
});

if (!decision.allowed) {
  throw new Error("Unauthorized access attempt.");
}`}</code>
      </pre>
    </div>
  );
}
