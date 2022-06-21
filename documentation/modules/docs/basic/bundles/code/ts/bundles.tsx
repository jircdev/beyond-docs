import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html/code";
import {module} from "beyond_context";

const tpl = `
{
    "name": "first-module",
    "platforms": [
        "web"
    ]
    "code" : {
        "ts": {
          "path": "ts",
          "files": [
            "*"
          ]
        },
        "sass": {
          "path": "scss",
          "files": [
            "*"
          ]
        }
    }
}`;
const tpls = {modulejson: {title: "module.json", language: "json", tpl}};

export /*bundle*/ function Bundles() {
    return (
        <>
            <Document tpls={tpls} moduleId={module.resource} textId="bundles"/>
            <Document tpls={tpls} moduleId={module.resource} textId="transversal"/>
            <Document
                tpls={tpls}
                moduleId={module.resource} textId="types"
                nextLinks={["/docs/modules/create"]}
            />
        </>
    );
}
