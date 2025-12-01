import Link from "next/link";
import GlowCard from "@/components/GlowCard";

export default function Home() {
  return (
    <GlowCard
      title="Welcome to Procrastination Tracker"
      actions={
        <div className="button-row">
          <Link href="/login" className="btn primary">Login</Link>
          <Link href="/register" className="btn secondary">Register</Link>
          <Link href="/dashboard" className="btn ghost">Skip to Dashboard</Link>
        </div>
      }
    >
      <p>
        Aesthetic glow-themed app to turn procrastination into focused, trackable progress.
        Log tasks, run focus timers, see your analytics, and keep your streak alive.
      </p>
      <p className="muted">
        Built with Next.js, client-side storage, and a neon cyber-focus aesthetic.
      </p>
    </GlowCard>
  );
}
