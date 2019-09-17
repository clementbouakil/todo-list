import React from "react";

import "./Counter.css";

const Counter = ({ number }) => (
    <div className="counter" hidden={number > 0 ? false : true}>
        {number}
    </div>
);

export default Counter;
