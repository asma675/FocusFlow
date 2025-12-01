import GlowCard from "@/components/GlowCard";
import { useTasks } from "@/hooks/useTasks";

function calculateStreak(tasks) {
  const completionDays = new Set(
    tasks
      .filter((t) => t.completed && t.completedAt)
      .map((t) => new Date(t.completedAt).toISOString().slice(0, 10))
  );
  if (completionDays.size === 0) return 0;

  const today = new Date();
  let streak = 0;
  let cursor = new Date(today);

  while (true) {
    const key = cursor.toISOString().slice(0, 10);
    if (completionDays.has(key)) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    } else {
      break;
    }
  }
  return streak;
}

export default function StreakPage() {
  const { tasks } = useTasks();
  const streak = calculateStreak(tasks);

  return (
    <GlowCard title="Streak Tracker">
      <div className="streak-card">
        <div className="streak-number glow-text">{streak}</div>
        <div className="streak-label">day streak</div>
      </div>
      <p className="muted">
        Your streak counts how many days in a row you&apos;ve completed at least
        one task. Even one small win per day keeps the streak alive.
      </p>
    </GlowCard>
  );
}
