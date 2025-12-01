import GlowCard from "@/components/GlowCard";
import { useTasks } from "@/hooks/useTasks";

function getAnalytics(tasks) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const totalMinutes = tasks.reduce(
    (sum, t) => sum + (t.estimatedMinutes || 0),
    0
  );
  const completedMinutes = tasks
    .filter((t) => t.completed)
    .reduce((sum, t) => sum + (t.estimatedMinutes || 0), 0);

  const byDay = {};
  tasks.forEach((t) => {
    const d = new Date(t.createdAt).toISOString().slice(0, 10);
    byDay[d] = (byDay[d] || 0) + 1;
  });

  const dayEntries = Object.entries(byDay).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  return {
    total,
    completed,
    totalMinutes,
    completedMinutes,
    completionRate: total ? Math.round((completed / total) * 100) : 0,
    dayEntries
  };
}

export default function AnalyticsPage() {
  const { tasks } = useTasks();
  const stats = getAnalytics(tasks);

  return (
    <GlowCard title="Analytics & Insights">
      <div className="analytics-grid">
        <div className="stat-card">
          <span className="stat-label">Total Tasks</span>
          <span className="stat-value glow-text">{stats.total}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Completed Tasks</span>
          <span className="stat-value glow-text">{stats.completed}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Total Planned Minutes</span>
          <span className="stat-value glow-text">{stats.totalMinutes}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Completed Minutes</span>
          <span className="stat-value glow-text">{stats.completedMinutes}</span>
        </div>
        <div className="stat-card wide">
          <span className="stat-label">Completion Rate</span>
          <span className="stat-value glow-text">{stats.completionRate}%</span>
        </div>
      </div>
      <div className="chart-placeholder">
        <h2 className="section-title">Tasks created per day</h2>
        {stats.dayEntries.length === 0 ? (
          <p className="muted">Add tasks to see your timeline build up.</p>
        ) : (
          <ul className="day-list">
            {stats.dayEntries.map(([day, count]) => (
              <li key={day} className="day-item">
                <span>{day}</span>
                <span className="pill">{count} task(s)</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </GlowCard>
  );
}
