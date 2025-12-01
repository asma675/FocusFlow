import Link from "next/link";
import GlowCard from "@/components/GlowCard";

export default function Register() {
  return (
    <GlowCard
      title="Create an Account"
      actions={
        <div className="button-row">
          <Link href="/dashboard" className="btn primary">Continue to Dashboard</Link>
          <Link href="/login" className="btn ghost">Back to Login</Link>
        </div>
      }
    >
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input className="input" type="text" placeholder="Your name" />
        </label>
        <label>
          <span>Email</span>
          <input className="input" type="email" placeholder="you@example.com" />
        </label>
        <label>
          <span>Password</span>
          <input className="input" type="password" placeholder="Create a password" />
        </label>
      </div>
      <p className="muted">
        Demo mode only — credentials are not stored. Use this to showcase the onboarding flow.
      </p>
    </GlowCard>
  );
}
