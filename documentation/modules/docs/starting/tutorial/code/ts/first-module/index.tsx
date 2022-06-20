import * as React from 'react';
import {hmr, Document} from "@beyond/docs/components/html/code";
import {TutorialHomeForm} from "./form";
import {TutorialHomeStyles} from "./styles";
import {TutorialFirstModuleIntro} from "./intro";
import {module} from "beyond_context";
import {tpls} from "../templates";

export /*bundle*/ function TutorialFirstModule() {
    console.log(10, tpls)
    return (
        <>
            <Document tpls={tpls.module} moduleId={module.resource} textId="firstModule"/>
            <Document tpls={tpls.module} moduleId={module.resource} textId="formCreation"/>
            <Document moduleId={module.resource}
                      textId="styles"
                      tpls={tpls.module}
                      nextLinks={[
                          ['Backend', '/docs/tutorial/backend'],
                      ]}
            />
        </>
    )
}
