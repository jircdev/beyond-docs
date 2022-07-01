import * as React from 'react';
import {hmr, Document} from "@beyond/docs/components/html";
import {module} from "beyond_context";
import {tpls} from "../templates";

export /*bundle*/ function TutorialBridge() {

    return (
        <>
            <Document moduleId={module.resource} textId="bridgeCode" tpls={tpls.bridge}/>
            <Document
                nextLinks={['/docs/tutorial/routing']}
                tpls={tpls.bridge}
                moduleId={module.resource}
                textId="connectClientAndServer"/>
        </>
    );
}
