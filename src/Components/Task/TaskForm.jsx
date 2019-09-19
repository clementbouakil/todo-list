import React, { Component } from "react";
import Button from "react-bootstrap/Button";

import "./Task.css";
import AlertMessage from "../Alert/AlertMessage";

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
            this.setState({ isEmpty: !this.state.isEmpty });
        } else {
            this.setState({ isEmpty: false });
        }
    };

    render() {
        return (
            <div className="task-form mb-5">
                <AlertMessage error={this.state.isEmpty} />
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter a task"
                        aria-label="task_name"
                        aria-describedby="task"
                        value={this.state.item}
                        onChange={this.handleChange}
                        className="task-form-control"
                    />
                    <Button
                        variant="btn btn-outline-light"
                        type="submit"
                        className="task-form-button"
                    >
                        <ion-icon name="add-circle"></ion-icon>
                    </Button>
                </form>
            </div>
        );
    }
}

export default TaskForm;
