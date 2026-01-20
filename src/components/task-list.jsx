import React from "react";
import { Task } from "./task";

export class TaskList extends React.Component {
  render() {
    const { myTaskList, onDeleted, onDoneItem, editingTask } = this.props;
    return (
      <section className="main">
        <ul className="todo-list">
          {myTaskList.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDeleted={() => onDeleted(task.id)}
              onDoneItem={() => onDoneItem(task.id)}
              editingTask={(value, id) => editingTask(value, id)}
            />
          ))}
        </ul>
      </section>
    );
  }
}
