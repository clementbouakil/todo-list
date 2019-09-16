import React, { Component } from "react";

class TaskForm extends Component {
    state = {
        item: ""
    };

    handleChange = event => {
        this.setState({ item: event.currentTarget.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const id = new Date().getTime();
        const name = this.state.item;
        this.props.onTaskAdd({ name, id });
        this.setState({ item: "" });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.item}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Add a task"
                />
                <button className="btn btn-info">Confirmer</button>
            </form>
        );
    }
}

export default TaskForm;
