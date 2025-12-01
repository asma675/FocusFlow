import { useState } from "react";
import Link from "next/link";
import GlowCard from "@/components/GlowCard";
import { useTasks } from "@/hooks/useTasks";

export default function AddTask() {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [minutes, setMinutes] = useState(25);
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask({
      title: title.trim(),
      description: description.trim(),
      estimatedMinutes: Number(minutes) || 0
    });
    setTitle("");
    setDescription("");
    setMinutes(25);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <GlowCard
      title="Add a Focus Task"
      actions={
        <div className="button-row">
          <Link href="/dashboard" className="btn ghost">Back to Dashboard</Link>
        </div>
      }
    >
      <form className="form-grid" onSubmit={handleSubmit}>
        <label>
          <span>Task title</span>
          <input
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Study for exam, finish assignment, write report..."
          />
        </label>
        <label>
          <span>Details (optional)</span>
          <textarea
            className="input textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Break down steps or notes for this task."
          />
        </label>
        <label>
          <span>Estimated focus time (minutes)</span>
          <input
            className="input"
            type="number"
            min="5"
            max="240"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
          />
        </label>
        <button type="submit" className="btn primary wide">
          Save Task
        </button>
        {saved && <p className="success-text">Task saved! ✨</p>}
      </form>
    </GlowCard>
  );
}
