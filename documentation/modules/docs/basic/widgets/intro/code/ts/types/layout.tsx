import * as React from 'react';
import {BeyondName, Document} from "@beyond/docs/components/html";
import {CodeBox, Code} from "@beyond/docs/code";
import {module} from "beyond_context";

const tpl = `
"widget": {
    "is": "layout",
    "element": {
      "name": "main-layout"
    },
...
}`

const tpls = {
    tpl1: {title: "module.json", tpl, language: "json"}
}

export /*bundle*/ function WidgetLayout() {
    return (
        <>
            <Document
                tpls={tpls}
                specifier={module.specifier}
                textId="layout" nextLinks={["/docs/widgets/definition"]}/>
        </>
    )
}
