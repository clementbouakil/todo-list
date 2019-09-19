import React from "react";

import ListGroup from "react-bootstrap/ListGroup";

import "./Task.css";

const Task = ({ details, onDelete }) => (
    <div className="task">
        <ListGroup.Item>{details.name}</ListGroup.Item>
        <div>
            <button
                className="task-action"
                onClick={() => onDelete(details.id)}
            >
                <ion-icon name="close-circle"></ion-icon>
            </button>
            {/* <button className="task-action" onClick={() => onCheck(details.id)}>
                <ion-icon name="checkmark"></ion-icon>
            </button> */}
        </div>
    </div>
);

export default Task;
