import React, { Component } from "react";

import TaskForm from "./TaskForm";
import Task from "./Task";

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
            <div className="todo-list">
                <p>Number of task in list : {this.state.tasks.length}</p>
                <ListGroup className="mb-1">
                    {this.state.tasks.map(task => (
                        <Task
                            key={task.id}
                            details={task}
                            onDelete={this.handleDelete}
                        />
                    ))}
                </ListGroup>
                <TaskForm onTaskAdd={this.handleAdd} />
            </div>
        );
    }
}

export default TaskGenerate;
