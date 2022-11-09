import * as React from 'react';
import {hmr, Document} from "@beyond/docs/components/html";
import {module} from "beyond_context";
import {tpls} from "../templates";

export /*bundle*/ function TutorialRouting() {
    return (
        <Document
            specifier={module.specifier}
            tpls={tpls.routing}
            textId="routing"/>
    );
}
