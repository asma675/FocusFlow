import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

export default function TaskList({ tasks, onToggleComplete }) {
  if (!tasks || tasks.length === 0) {
    return <p className="muted">No tasks yet. Add one and start a focus sprint!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <button
            className="icon-button"
            onClick={() => onToggleComplete && onToggleComplete(task.id)}
          >
            {task.completed ? (
              <FaCheckCircle className="task-icon completed" />
            ) : (
              <FaRegCircle className="task-icon" />
            )}
          </button>
          <div className="task-main">
            <div className="task-title-row">
              <span className={task.completed ? "task-title done" : "task-title"}>
                {task.title}
              </span>
              {task.estimatedMinutes ? (
                <span className="pill">
                  {task.estimatedMinutes} min
                </span>
              ) : null}
            </div>
            {task.description && (
              <p className="task-description">{task.description}</p>
            )}
            <div className="task-meta">
              <span className="chip">
                Created {new Date(task.createdAt).toLocaleString()}
              </span>
              {task.completed && (
                <span className="chip success">
                  Completed {new Date(task.completedAt).toLocaleString()}
                </span>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
