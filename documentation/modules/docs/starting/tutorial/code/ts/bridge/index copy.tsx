import * as React from 'react';
import {hmr, Document} from "@beyond/docs/components/html/code";
import {module} from "beyond_context";
export /*bundle*/ function TutorialBridge() {

    return (
    <Document 
        nextLinks={[
                ['First Module', '/docs/tutorial/first-module'],
                ['Backend', '/docs/tutorial/backend'],
        ]}
        moduleId={module.resource} 
        textId="bridge"/> 
    );
}
