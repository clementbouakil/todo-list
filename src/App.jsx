import React, { Component } from "react";

import TaskForm from "./TaskForm";
import Task from "./Task";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    handleDelete = id => {
        const tasks = [...this.state.tasks];
        const index = tasks.findIndex(task => task.id === id);
        tasks.splice(index, 1);
        this.setState({ tasks });
    };

    handleAdd = task => {
        const tasks = [...this.state.tasks];
        tasks.push(task);
        this.setState({ tasks });
    };

    render() {
        const title = "List of tasks";

        return (
            <div>
                <h1>{title}</h1>
                <ul>
                    {this.state.tasks.map(task => (
                        <Task
                            key={task.id}
                            details={task}
                            onDelete={this.handleDelete}
                        />
                    ))}
                </ul>
                <TaskForm onTaskAdd={this.handleAdd} />
            </div>
        );
    }
}

export default App;
