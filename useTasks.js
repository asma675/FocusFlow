import { useEffect, useState } from "react";

const STORAGE_KEY = "procrastination-tracker-tasks";

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setTasks(JSON.parse(raw));
      }
    } catch (e) {
      console.error("Failed to load tasks", e);
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (e) {
      console.error("Failed to save tasks", e);
    }
  }, [tasks, loaded]);

  const addTask = (task) => {
    const now = new Date().toISOString();
    setTasks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title: task.title,
        description: task.description || "",
        estimatedMinutes: task.estimatedMinutes || 0,
        createdAt: now,
        completed: false,
        completedAt: null
      }
    ]);
  };

  const toggleTaskComplete = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              completed: !t.completed,
              completedAt: !t.completed ? new Date().toISOString() : null
            }
          : t
      )
    );
  };

  const clearAll = () => setTasks([]);

  return { tasks, addTask, toggleTaskComplete, clearAll, loaded };
}
