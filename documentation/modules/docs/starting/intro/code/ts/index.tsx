import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html";
import {module} from "beyond_context";
import {AboutHeader} from "./header";

const tpl = `
routing.redirect = async function redirect(uri): Promise<string> {
    return '/';
};`;
const tpls = {
    tpl1: {tpl: `import {routing} from "@beyond-js/kernel/routing";`},
    tpl2: {tpl: `routing.pushState('/home', [{state}]);`},
    tpl3: {tpl: `routing.replaceState('/home', [{state}]);`},
    tpl4: {tpl: tpl},
}

export /*bundle*/ function DocsIntro() {
    return (
        <>
            <Document
                components={{
                    about: AboutHeader
                }}
                tpls={tpls} textId="universal" moduleId={module.resource}/>
            <Document tpls={tpls} textId="overview" moduleId={module.resource}/>
            <Document
                tpls={tpls}
                moduleId={module.resource} textId="features"
                nextLinks={["/docs/tutorial/start"]}/>
        </>
    );
}
