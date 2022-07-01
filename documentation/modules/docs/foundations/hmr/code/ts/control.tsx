import {Document} from "@beyond/docs/components/html";
import {module} from "beyond_context";
import * as React from "react";


export /*bundle*/ function HMRPage() {

    return (
        <>
            <Document moduleId={module.resource} textId="hmr"/>
            <Document
                moduleId={module.resource} textId="events"
                nextLinks={["/docs/foundations/bee"]}
            />
        </>
    );
}


