import { useEffect, useState } from "react";

function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

export default function TimerWidget({ defaultMinutes = 25 }) {
  const [secondsLeft, setSecondsLeft] = useState(defaultMinutes * 60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((s) => s - 1);
      }, 1000);
    }
    if (secondsLeft === 0) {
      setRunning(false);
    }
    return () => clearInterval(interval);
  }, [running, secondsLeft]);

  const handleReset = () => {
    setSecondsLeft(defaultMinutes * 60);
    setRunning(false);
  };

  const handleStartPause = () => {
    if (secondsLeft === 0) {
      setSecondsLeft(defaultMinutes * 60);
    }
    setRunning((r) => !r);
  };

  return (
    <div className="timer">
      <div className="timer-time glow-text">{formatTime(secondsLeft)}</div>
      <div className="timer-actions">
        <button className="btn primary" onClick={handleStartPause}>
          {running ? "Pause" : "Start"}
        </button>
        <button className="btn ghost" onClick={handleReset}>
          Reset
        </button>
      </div>
      <p className="muted">
        Use this as a Pomodoro-style focus timer. When it hits 00:00, take a short break.
      </p>
    </div>
  );
}
