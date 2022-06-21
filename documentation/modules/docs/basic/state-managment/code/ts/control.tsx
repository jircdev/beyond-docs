import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html/code";
import {module} from "beyond_context";


export /*bundle*/ function StateManagement() {
    return (
        <>
            <Document
                moduleId={module.resource} textId="handling"
                nextLinks={["/docs/modules/create"]}
            />
        </>
    );
}
