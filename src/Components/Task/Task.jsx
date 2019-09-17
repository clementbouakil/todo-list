import React from "react";

import ListGroup from "react-bootstrap/ListGroup";

import "./Task.css";

const Task = ({ details, onDelete }) => (
    <div className="task">
        <ListGroup.Item>{details.name}</ListGroup.Item>
        <button className="task-delete" onClick={() => onDelete(details.id)}>
            <ion-icon name="close-circle"></ion-icon>
        </button>
    </div>
);

export default Task;
