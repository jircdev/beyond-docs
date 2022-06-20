import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html/code";

import {module} from "beyond_context";
import {tpls} from "../templates";


export /*bundle*/ function TutorialIntro() {
    return (
        <>
            <Document moduleId={module.resource} textId="intro"/>
            <Document
                moduleId={module.resource}
                textId="starting"
                tpls={tpls.starting}
                nextLinks={[
                    ["First Module", "/docs/tutorial/first-module"],
                    ["Backend", "/docs/tutorial/backend"],
                ]}
            />
        </>
    );
}
