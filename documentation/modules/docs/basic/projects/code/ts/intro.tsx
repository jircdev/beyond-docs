import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html/code";
import {module} from "beyond_context";


export /*bundle*/ function ProjectsIntro() {
    return (

        <>
            <Document
                moduleId={module.resource} textId="intro"
                nextLinks={[["Tutorial", "/docs/tutorial/bridge"]]}
            />
        </>
    );
}
