import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html/code";
import {module} from "beyond_context";


export /*bundle*/ function ProjectCreate() {
    return (
        <>

            <Document
                moduleId={module.resource} textId="create"
                nextLinks={[["Tutorial", "/docs/tutorial/bridge"]]}
            />
        </>
    );
}