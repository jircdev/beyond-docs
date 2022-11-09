import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html";
import {module} from "beyond_context";


export /*bundle*/ function ProjectDependencies() {
    return (
        <Document
            specifier={module.specifier} textId="dependencies"
            nextLinks={["/docs/projects/dependencies"]}
        />
    );
}
