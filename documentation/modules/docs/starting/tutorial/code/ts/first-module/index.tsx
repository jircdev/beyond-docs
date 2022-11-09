import * as React from 'react';
import {hmr, Document} from "@beyond/docs/components/html";
import {module} from "beyond_context";
import {tpls} from "../templates";

export /*bundle*/ function TutorialFirstModule() {
    return (
        <>
            <Document tpls={tpls.module} specifier={module.specifier} textId="firstModule"/>
            <Document tpls={tpls.module} specifier={module.specifier} textId="formCreation"/>
            <Document specifier={module.specifier}
                      textId="styles"
                      tpls={tpls.module}
                      nextLinks={['/docs/tutorial/backend']}
            />
        </>
    )
}
