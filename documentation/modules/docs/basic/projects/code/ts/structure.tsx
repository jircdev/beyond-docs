import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html/code";
import {module} from "beyond_context";


export /*bundle*/ function ProjectStructure() {
    return (
        <>
            <Document textId="dashboard" moduleId={module.resource}/>
            <Document textId="features" moduleId={module.resource}/>
            <Document textId="structure" moduleId={module.resource}/>
            <Document textId="ts" moduleId={module.resource}/>
            <Document textId="editor" moduleId={module.resource}/>
            <Document
                moduleId={module.resource} textId="deploy"
                nextLinks={[["Tutorial", "/docs/tutorial/bridge"]]}
            />
        </>
    );
}
