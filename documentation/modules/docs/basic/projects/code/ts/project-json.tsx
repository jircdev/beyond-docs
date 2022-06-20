import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html/code";
import {module} from "beyond_context";


export /*bundle*/ function ProjectJson() {
    return (
        <>
            <Document textId="json"
                      moduleId={module.resource} textId="deploy"
                      nextLinks={[["Tutorial", "/docs/tutorial/bridge"]]}
            />
        </>
    );
}
