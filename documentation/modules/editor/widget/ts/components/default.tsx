import * as React from "react";

export const DefaultElement = props => {
    return <p {...props.attributes}>{props.children}</p>
}
