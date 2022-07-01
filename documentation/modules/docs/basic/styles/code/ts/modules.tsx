import {Document} from "@beyond/docs/components/html";
import {module} from "beyond_context";
import * as React from "react";

const tpl1 = `
{
    ...
    "sass": {
        "path": "sass",
        "files": ["*"]
    },
    ...
}`;
const tpls = {
    tpl1: {tpl: tpl1, title: "module.json", "language": "json"}
}

export /*bundle*/ function StylesModulesPage() {
    return (
        <>
            <Document
                tpls={tpls}
                moduleId={module.resource} textId="modules"
                nextLinks={["/docs/styles/imports"]}
            />
        </>
    );
}
