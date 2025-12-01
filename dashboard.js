import Link from "next/link";
import GlowCard from "@/components/GlowCard";
import TaskList from "@/components/TaskList";
import TimerWidget from "@/components/TimerWidget";
import { useTasks } from "@/hooks/useTasks";

export default function Dashboard() {
  const { tasks, toggleTaskComplete } = useTasks();

  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;
  const completionRate = totalCount ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <GlowCard
      title="Dashboard"
      actions={
        <div className="button-row">
          <Link href="/add-task" className="btn primary">Add Task</Link>
          <Link href="/timer" className="btn secondary">Open Timer</Link>
          <Link href="/analytics" className="btn ghost">View Analytics</Link>
        </div>
      }
    >
      <div className="dashboard-grid">
        <div className="stat-grid">
          <div className="stat-card">
            <span className="stat-label">Total Tasks</span>
            <span className="stat-value glow-text">{totalCount}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Completed</span>
            <span className="stat-value glow-text">{completedCount}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Completion Rate</span>
            <span className="stat-value glow-text">{completionRate}%</span>
          </div>
        </div>
        <div className="dashboard-main">
          <h2 className="section-title">Today&apos;s Tasks</h2>
          <TaskList tasks={tasks} onToggleComplete={toggleTaskComplete} />
        </div>
        <aside className="dashboard-side">
          <h2 className="section-title">Quick Focus Timer</h2>
          <TimerWidget defaultMinutes={25} />
        </aside>
      </div>
    </GlowCard>
  );
}
