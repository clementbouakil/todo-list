import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import AlertDismissible from "../AlertDismissible/AlertDismissible";

import "./Task.css";

class TaskForm extends Component {
    state = {
        item: "",
        isEmpty: true
    };

    handleChange = event => {
        this.setState({ item: event.currentTarget.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.item !== "") {
            const id = new Date().getTime();
            const name = this.state.item;
            this.props.onTaskAdd({ name, id });
            this.setState({ item: "" });
            this.setState({ isEmpty: true });
        } else {
            this.setState({ isEmpty: false });
        }
    };

    render() {
        return (
            <div className="task-form">
                <Alert variant="danger" hidden={this.state.isEmpty} className="task-form-error">
                    Please send a valid value
                </Alert>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter a task"
                        aria-label="task_name"
                        aria-describedby="task"
                        value={this.state.item}
                        onChange={this.handleChange}
                        className="task-form-control mb-3"
                    />
                    <Button
                        variant="btn btn-outline-light"
                        type="submit"
                        className="task-form-button mb-3"
                    >
                        Add
                    </Button>
                </form>
            </div>
        );
    }
}

export default TaskForm;
