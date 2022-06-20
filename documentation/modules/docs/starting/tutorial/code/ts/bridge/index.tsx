import * as React from 'react';
import {hmr, Document} from "@beyond/docs/components/html/code";
import {module} from "beyond_context";
import {tpls} from "../templates";

export /*bundle*/ function TutorialBridge() {

    console.log(55.1, tpls.bridge);
    return (
        <>
            <Document moduleId={module.resource} textId="bridgeCode" tpls={tpls.bridge}/>
            <Document
                nextLinks={[
                    ['Routing', '/docs/tutorial/routing']
                ]}
                tpls={tpls.bridge}
                moduleId={module.resource}
                textId="connectClientAndServer"/>
        </>
    );
}
