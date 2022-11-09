import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html";
import {module} from "beyond_context";


export /*bundle*/ function ProjectsIntro() {
    return (
        <Document
            specifier={module.specifier} textId="intro"
            nextLinks={["/docs/projects/create"]}
        />
    );
}
