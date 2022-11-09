import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html";
import {module} from "beyond_context";


export /*bundle*/ function StateManagement() {
    return (
        <>
            <Document
                specifier={module.specifier} textId="handling"
                nextLinks={["/docs/modules/create"]}
            />
        </>
    );
}
