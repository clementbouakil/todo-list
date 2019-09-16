import React from "react";

import ListGroup from "react-bootstrap/ListGroup";

const Task = ({ details, onDelete }) => (
    <div className="task mb-1">
        <ListGroup.Item>{details.name}</ListGroup.Item>
        <button className="delete" onClick={() => onDelete(details.id)}>
            <ion-icon name="close-circle"></ion-icon>
        </button>
    </div>
);

export default Task;
