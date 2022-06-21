import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html/code";
import {module} from "beyond_context";

const project = `
"libraries": {
    "imports": [
      "@project/models"
    ]
}`;
const libraries = `
"libraries": {
    "imports": [
      "@project/models"
    ]
}`;
const tpls = {
    project: {title: "project.json", "language": "json", tpl: project},
    libraries: {tpl: libraries, language: "json"}
}

export /*bundle*/ function ProjectImports() {
    return (
        <>
            <Document
                tpls={tpls}
                moduleId={module.resource} textId="imports"
                nextLinks={["/docs/projects/dependencies"]}
            />
        </>
    );
}
