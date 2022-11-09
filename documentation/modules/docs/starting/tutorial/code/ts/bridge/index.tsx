import * as React from 'react';
import {hmr, Document} from "@beyond/docs/components/html";
import {module} from "beyond_context";
import {tpls} from "../templates";

export /*bundle*/ function TutorialBridge() {

    return (
        <>
            <Document specifier={module.specifier} textId="bridgeCode" tpls={tpls.bridge}/>
            <Document
                nextLinks={['/docs/tutorial/routing']}
                tpls={tpls.bridge}
                specifier={module.specifier}
                textId="connectClientAndServer"/>
        </>
    );
}
