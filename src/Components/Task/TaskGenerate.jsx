import React, { Component } from "react";

import TaskForm from "./TaskForm";
import Task from "./Task";
import "./Task.css";

import ListGroup from "react-bootstrap/ListGroup";

class TaskGenerate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isSuccess: null
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
        return (
            <div className="task-generate-container">
                <div>
                    <h1 className="task-generate-title">Todos</h1>
                    <TaskForm onTaskAdd={this.handleAdd} />
                </div>
                <ListGroup className="task-list">
                    {this.state.tasks.map(task => (
                        <Task
                            key={task.id}
                            details={task}
                            onDelete={this.handleDelete}
                        />
                    ))}
                </ListGroup>
            </div>
        );
    }
}

export default TaskGenerate;
