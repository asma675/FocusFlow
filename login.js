import Link from "next/link";
import GlowCard from "@/components/GlowCard";

export default function Login() {
  return (
    <GlowCard
      title="Login"
      actions={
        <div className="button-row">
          <Link href="/dashboard" className="btn primary">Login (demo)</Link>
          <Link href="/register" className="btn ghost">Create account</Link>
        </div>
      }
    >
      <div className="form-grid">
        <label>
          <span>Email</span>
          <input className="input" type="email" placeholder="you@example.com" />
        </label>
        <label>
          <span>Password</span>
          <input className="input" type="password" placeholder="••••••••" />
        </label>
      </div>
      <p className="muted">
        This demo uses local storage only (no real auth). Click &quot;Login (demo)&quot; to continue.
      </p>
    </GlowCard>
  );
}
