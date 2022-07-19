import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html";
import {module} from "beyond_context";
import {AboutHeader} from "./header";

const tpl = `
routing.redirect = async function redirect(uri): Promise<string> {
    return '/';
};`;
const tpls = {
    modulejson: {
        language: 'json',
        tpl: `
{
 "name": "start-backend",
 "bundle": "start",
 "platforms": "backend",
 "ts": {
   "files": "*"
 }
}
`
    }
}

export /*bundle*/ function DocsIntro() {
    return (
        <>
            <Document
                components={{
                    about: AboutHeader
                }}
                tpls={tpls} textId="universal" moduleId={module.resource}/>
            <Document textId="features" tpls={tpls} moduleId={module.resource}
                      nextLinks={["/docs/quick-start", "/docs/tutorial/start"]}/>
        </>
    );
}
