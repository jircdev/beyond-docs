import * as React from 'react';
import {hmr, Document} from "@beyond/docs/components/html";
import {module} from "beyond_context";
import {tpls} from "../templates";

export /*bundle*/ function TutorialFirstModule() {
    return (
        <>
            <Document tpls={tpls.module} moduleId={module.resource} textId="firstModule"/>
            <Document tpls={tpls.module} moduleId={module.resource} textId="formCreation"/>
            <Document moduleId={module.resource}
                      textId="styles"
                      tpls={tpls.module}
                      nextLinks={['/docs/tutorial/backend']}
            />
        </>
    )
}
