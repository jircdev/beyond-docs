import * as React from 'react';
import {Code} from "@beyond/docs/code/code";
import {TypeProperty} from "../../../views/type-property";

const tplPage = `
"widget": {
    "hmr": true,
    "route": "login"
    "element": {
      "name": "login-page"
    },
....
}`;

const tplLayout = `
"widget": {
    "is": "layout",
    "element": {
      "name": "main-layout"
    },
...
}`

export function LayoutWidget() {
    return (
        <>
            <h2 id="layouts">Layouts</h2>

            <p>Los layouts representan la estructura general de un sitio web, que puede ser compartida entre varias
                páginas internas.</p>
            <Code language="json">
                {tplLayout}
            </Code>
        </>
    )
}
