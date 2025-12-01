import GlowCard from "@/components/GlowCard";
import { useTasks } from "@/hooks/useTasks";
import { useState } from "react";

export default function SettingsPage() {
  const { clearAll } = useTasks();
  const [confirming, setConfirming] = useState(false);

  const handleClear = () => {
    if (!confirming) {
      setConfirming(true);
      setTimeout(() => setConfirming(false), 3000);
      return;
    }
    clearAll();
    setConfirming(false);
  };

  return (
    <GlowCard title="Settings">
      <div className="settings-grid">
        <div className="settings-card">
          <h2 className="section-title">Data & Storage</h2>
          <p>
            All tasks are stored in <strong>localStorage</strong> in your browser.
            Clearing your data will remove all tasks and stats.
          </p>
          <button
            className={confirming ? "btn danger" : "btn ghost"}
            onClick={handleClear}
          >
            {confirming ? "Click again to confirm" : "Clear all tasks & data"}
          </button>
        </div>
        <div className="settings-card">
          <h2 className="section-title">Theme</h2>
          <p>
            Glow theme is enabled by default: neon gradients, soft cards, and
            glassmorphism UI. Customize further by editing
            <code> styles/globals.css</code>.
          </p>
        </div>
      </div>
    </GlowCard>
  );
}
