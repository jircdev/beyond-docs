import * as React from "react";
import {updateCount} from "@beyond-tests/widget-app/actions/ts";

export /*bundle*/
function Widget() {
    const [count, setCount] = React.useState(0);
    const add = () => {
        setCount(count + 1);
        updateCount();
    };

    return (
        <div className="list">
            <div className="item" onClick={add}>
                <h3>React counter</h3>
                <span>clicks here: {count}</span>
            </div>
        </div>
    );
}