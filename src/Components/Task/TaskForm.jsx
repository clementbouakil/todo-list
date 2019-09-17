import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Alert from "react-bootstrap/Alert";

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
            <form onSubmit={this.handleSubmit}>
                <Alert variant="danger" hidden={this.state.isEmpty}>
                    Please send a valid value
                </Alert>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="task">Tasks</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        type="text"
                        placeholder="Enter a task"
                        aria-label="task_name"
                        aria-describedby="task"
                        value={this.state.item}
                        onChange={this.handleChange}
                    />
                </InputGroup>
                <Button variant="info" type="submit">
                    Confirm
                </Button>
            </form>
        );
    }
}

export default TaskForm;
