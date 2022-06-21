import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html/code";
import {module} from "beyond_context";

const tpl = `
{
  "name": "components/next-links",
  "code": {
    "sass": {
      "path": "/code/scss",
      "files": [
        "*"
      ]
    },
    "ts": {
      "path": "/code/ts",
      "files": [
        "*"
      ]
    }
  }
}`;
const tpls = {modulejson: {language: "json", tpl}};

export /*bundle*/ function Processors() {
    return (
        <>
            <Document moduleId={module.resource} textId="processors"/>
            <Document moduleId={module.resource} textId="types"/>
            <Document  moduleId={module.resource} textId="properties"/>
            <Document
                tpls={tpls}
                moduleId={module.resource} textId="examples"
                nextLinks={["/docs/modules/create"]}
            />
        </>
    );
}
