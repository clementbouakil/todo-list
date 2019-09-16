import React, { Component } from "react";

class DisplayItems extends Component {
    render() {
        const { details, onDelete } = this.props;

        return (
            <li key={details.id}>
                {details.name}{" "}
                <button onClick={() => onDelete(details.id)}>X</button>
            </li>
        );
    }
}

export default DisplayItems;
