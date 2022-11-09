import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html";
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
            <Document specifier={module.specifier} textId="processors"/>
            <Document specifier={module.specifier} textId="types"/>
            <Document specifier={module.specifier} textId="properties"/>
            <Document
                tpls={tpls}
                specifier={module.specifier} textId="examples"
                nextLinks={["/docs/modules/create"]}
            />
        </>
    );
}
