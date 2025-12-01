import GlowCard from "@/components/GlowCard";
import { useTasks } from "@/hooks/useTasks";

export default function ProfilePage() {
  const { tasks } = useTasks();

  const totalMinutes = tasks.reduce(
    (sum, t) => sum + (t.estimatedMinutes || 0),
    0
  );
  const completedMinutes = tasks
    .filter((t) => t.completed)
    .reduce((sum, t) => sum + (t.estimatedMinutes || 0), 0);

  return (
    <GlowCard title="Profile & Stats">
      <div className="profile-grid">
        <div className="profile-card">
          <h2 className="section-title">Focus Summary</h2>
          <p>Total tasks created: <strong>{tasks.length}</strong></p>
          <p>Total planned focus minutes: <strong>{totalMinutes}</strong></p>
          <p>Completed focus minutes: <strong>{completedMinutes}</strong></p>
        </div>
        <div className="profile-card">
          <h2 className="section-title">Demo Identity</h2>
          <p className="muted">
            In this demo, profile data is stored locally in your browser, no account
            is created on a server. This is perfect for portfolio demos and offline use.
          </p>
        </div>
      </div>
    </GlowCard>
  );
}
