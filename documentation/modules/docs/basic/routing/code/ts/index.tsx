import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html";
import {module} from "beyond_context";


const tpl = `
routing.redirect = async function redirect(uri): Promise<string> {
    return '/';
}`
const tpls = {
    tpl1: {tpl: `import {routing} from "@beyond-js/kernel/routing";`, language: "ts"},
    tpl2: {tpl: `routing.pushState('/home', [{state}]);`, language: "ts"},
    tpl3: {tpl: `routing.replaceState('/home', [{state}]);`, language: "ts"},
    tpl4: {tpl: tpl}
}

export /*bundle*/ function RoutingPage() {

    return (
        <>
            <Document tpls={tpls} moduleId={module.resource} textId="routing"/>
            <Document tpls={tpls} moduleId={module.resource} textId="object"/>
            <Document tpls={tpls} moduleId={module.resource} textId="navigation"/>
            <Document tpls={tpls} moduleId={module.resource} textId="overwrite"
                      nextLinks={["/docs/modules/create"]}
            />
        </>
    );
}
