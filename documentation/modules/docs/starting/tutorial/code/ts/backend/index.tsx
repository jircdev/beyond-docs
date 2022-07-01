import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html";
import {module} from "beyond_context";
import {tpls} from "../templates";

export /*bundle*/ function TutorialBackend() {
    return (
        <>
            <Document moduleId={module.resource} textId="backendLogic"/>
            <Document
                moduleId={module.resource}
                textId="backendInitialization"
                tpls={tpls.backend}
                nextLinks={["/docs/tutorial/bridge"]}
            />
        </>
    );
}
