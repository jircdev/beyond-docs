import * as React from "react";

export function CodeBlock(props) {
    return (
        <pre {...props.attributes}>
            <code>{props.children}</code>
        </pre>
    )
}
