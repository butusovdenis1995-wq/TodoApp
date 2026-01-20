import React from "react";

export class NewTaskForm extends React.Component {
  handleAddTask = (e) => {
    const value = e.target.value;
    if (e.key === "Enter" && value.trim()) {
      e.preventDefault();
      this.props.addItemTask(value);
      e.target.value = "";
    }
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          onKeyDown={this.handleAddTask}
          className="new-todo"
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}
