import * as React from 'react';
import {hmr, Document} from "@beyond/docs/components/html/code";
import {TutorialHomeForm} from "./form";
import {TutorialHomeStyles} from "./styles";
import {TutorialFirstModuleIntro} from "./intro";
import {module} from "beyond_context";

export /*bundle*/ function TutorialFirstModule() {
    return (
        <>
        <Document moduleId={module.resource} textId="firstModule" />
        <Document moduleId={module.resource} textId="formCreation" />
        <Document moduleId={module.resource}
        textId="styles"
        nextLinks={[
            ['Backend', '/docs/tutorial/backend'],
        ]}
        />
        </>
    )
}
