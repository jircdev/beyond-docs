import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html/code";
import {module} from "beyond_context";

const internal = `
export /*bundle*/ class Auth {
    //.... 
}
// or
export /*bundle*/ const B = {...}; `;
const tpls = {
    internal: {
        tpl: internal
    },
    import1: {
        tpl: `import * as Mod from 'module-identifier'`
    },
    import2: {tpl: "@company/project/login"},
    import3: {tpl: `import {Auth} from '@company/project/login/code'`}
}

export /*bundle*/ function ModulesConfig() {
    return (
        <>
            <Document moduleId={module.resource} textId="introduction"/>
            <Document tpls={tpls} moduleId={module.resource} textId="internal"/>
            <Document tpls={tpls} moduleId={module.resource} textId="working"/>
            <Document
                tpls={tpls}
                moduleId={module.resource} textId="identifier"
                nextLinks={["/docs/modules/create"]}
            />
        </>
    );
}
