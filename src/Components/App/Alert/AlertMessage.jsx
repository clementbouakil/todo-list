import React from "react";

import Alert from "react-bootstrap/Alert";

import "./AlertMessage.css";

const AlertMessage = ({ error }) => {
    return (
        <Alert
            variant="danger"
            dismissible
            className="task-form-error"
            hidden={error}
        >
            Please send a valid value
        </Alert>
    );
};

export default AlertMessage;
