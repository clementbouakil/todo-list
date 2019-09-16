import React from "react";

const Task = ({ details, onDelete }) => (
    <li>
        {details.name} <button onClick={() => onDelete(details.id)}>X</button>
    </li>
);

export default Task;
