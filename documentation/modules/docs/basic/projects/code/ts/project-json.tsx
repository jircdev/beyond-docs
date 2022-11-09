import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html";
import {module} from "beyond_context";


export /*bundle*/ function ProjectJson() {
    return (
        <>
            <Document
                specifier={module.specifier} textId="json"
                nextLinks={["/docs/projects/create"]}
            />
        </>
    );
}
