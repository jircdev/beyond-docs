import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html";
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

export /*bundle*/ function ModulesIntro() {
    return (
        <>
            <Document specifier={module.specifier} textId="introduction"/>
            <Document tpls={tpls} specifier={module.specifier} textId="internal"/>
            <Document tpls={tpls} specifier={module.specifier} textId="working"/>
            <Document
                tpls={tpls}
                specifier={module.specifier} textId="identifier"
                nextLinks={["/docs/modules/create"]}
            />
        </>
    );
}
