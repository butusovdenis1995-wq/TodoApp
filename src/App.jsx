import React from "react";
import { NewTaskForm } from "./components/new-task-form";
import { TaskList } from "./components/task-list";
import { Footer } from "./components/footer";

export class App extends React.Component {
  state = {
    myTask: [
      { id: 1, title: "Completed task", created: new Date(), isDone: false },
      { id: 2, title: "Editing task", created: new Date(), isDone: false },
      { id: 3, title: "Active task", created: new Date(), isDone: false },
    ],
    filter: "All",
  };

  addItemTask = (value) => {
    this.setState(({ myTask }) => {
      const currentDate = new Date();
      const newArr = [...myTask];
      newArr.push({
        id: currentDate,
        title: value,
        created: new Date(),
        isDone: false,
      });
      return { myTask: newArr };
    });
  };

  doneItem = (id) => {
    this.setState(({ myTask }) => {
      const newArr = myTask.map((task) => {
        if (task.id === id) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      });
      return { myTask: newArr };
    });
  };

  deleteItem = (id) => {
    this.setState(({ myTask }) => {
      const newArr = myTask.filter((task) => task.id !== id);
      return {
        myTask: newArr,
      };
    });
  };

  FilterTask = (e) => {
    const filterType = e.target.textContent;
    this.setState({
      filter: filterType,
    });
  };

  getFilterTask = () => {
    const { filter, myTask } = this.state;
    if (filter === "Active") {
      return myTask.filter((task) => !task.isDone);
    }
    if (filter === "Completed") {
      return myTask.filter((task) => task.isDone);
    }
    if (filter === "All") {
      return myTask;
    }
  };

  deletedFullTasks = () => {
    this.setState(({ myTask }) => {
      const newArr = myTask.filter((task) => !task.isDone);
      return {
        myTask: newArr,
      };
    });
  };
  editingTask = (value, id) => {
    this.setState(({ myTask }) => {
      const newArr = myTask.map((task) => {
        if (task.id === id) {
          return { ...task, title: value };
        }
        return task;
      });
      return { myTask: newArr };
    });
  };

  render() {
    const countNotDone = this.state.myTask.filter(
      (task) => !task.isDone
    ).length;

    const filteredTask = this.getFilterTask();

    return (
      <section className="todoapp">
        <NewTaskForm addItemTask={this.addItemTask} />
        <TaskList
          myTaskList={filteredTask}
          onDeleted={this.deleteItem}
          onDoneItem={this.doneItem}
          editingTask={this.editingTask}
        />
        <Footer
          countNotDone={countNotDone}
          FilterTask={this.FilterTask}
          deletedFullTasks={this.deletedFullTasks}
          statusFilter={this.state.filter}
        />
      </section>
    );
  }
}
