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
const tpls = {creation: {language: "json", tpl}};

export /*bundle*/ function ModulesBundles() {
    return (
        <>

            <Document
                tpls={tpls}
                moduleId={module.resource} textId="create"
                nextLinks={["/docs/modules/create"]}
            />
        </>
    );
}
