import React from "react";
import { Data } from "./Data";

export class Task extends React.Component {
  state = {
    taskEdit: "",
    isEditing: false,
  };
  handleEditTask = () => {
    const { task } = this.props;
    this.setState({
      taskEdit: task.title,
      isEditing: true,
    });
  };
  handleSaveTask = (e) => {
    const { value } = e.target;
    this.setState({
      taskEdit: value,
    });
  };
  handleSubmitTask = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.props.editingTask(this.state.taskEdit, this.props.task.id);
      this.setState({
        taskEdit: "",
        isEditing: false,
      });
    }
  };

  render() {
    const { task, onDeleted, onDoneItem } = this.props;
    const { isEditing } = this.state;
    let classNames = isEditing ? "editing" : task.isDone ? "completed" : "";

    return (
      <li className={classNames}>
        <div className="view">
          <input
            onChange={onDoneItem}
            className="toggle"
            type="checkbox"
            checked={task.isDone}
          />
          <label>
            <span className="description" onDoubleClick={this.handleEditTask}>
              {task.title}
            </span>
            <span className="created">
              <Data taskCreated={task.created} />
            </span>
          </label>
          <button className="icon icon-edit" onClick={this.handleEditTask} />
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        {this.state.isEditing && (
          <input
            type="text"
            className="edit"
            onChange={this.handleSaveTask}
            onKeyDown={this.handleSubmitTask}
            value={this.state.taskEdit}
            onFocus={() => isEditing}
          />
        )}
      </li>
    );
  }
}


