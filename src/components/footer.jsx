export const Footer = ({
  countNotDone,
  FilterTask,
  deletedFullTasks,
  statusFilter,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">{`Task not done ${countNotDone}`}</span>
      <ul className="filters">
        <li>
          <button
            className={statusFilter === "All" ? "selected" : ""}
            onClick={FilterTask}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={statusFilter === "Active" ? "selected" : ""}
            onClick={FilterTask}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={statusFilter === "Completed" ? "selected" : ""}
            onClick={FilterTask}
          >
            Completed
          </button>
        </li>
      </ul>
      <button className="clear-completed" onClick={deletedFullTasks}>
        Clear completed
      </button>
    </footer>
  );
};
