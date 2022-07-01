import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html";
import {module} from "beyond_context";

const tpl = `
"modules": {
    "path": "modules"
}`;
const tpls = {
    modules: {
        language: "json",
        tpl
    }
}

export /*bundle*/ function ProjectStructure() {
    return (
        <>


            <Document
                moduleId={module.resource} textId="structure"
                tpls={tpls}
                nextLinks={["/docs/projects/json"]}
            />
        </>
    );
}
