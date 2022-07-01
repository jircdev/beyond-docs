import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html";

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
                    "/docs/tutorial/first-module",
                    "/docs/tutorial/backend",
                ]}
            />
        </>
    );
}
