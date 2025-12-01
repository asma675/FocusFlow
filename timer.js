import Link from "next/link";
import GlowCard from "@/components/GlowCard";
import TimerWidget from "@/components/TimerWidget";

export default function TimerPage() {
  return (
    <GlowCard
      title="Deep Focus Timer"
      actions={
        <div className="button-row">
          <Link href="/dashboard" className="btn ghost">Back to Dashboard</Link>
        </div>
      }
    >
      <TimerWidget defaultMinutes={25} />
      <p className="muted">
        Pro tip: pair this with a specific task from your list and commit to
        zero distractions until the timer ends.
      </p>
    </GlowCard>
  );
}
