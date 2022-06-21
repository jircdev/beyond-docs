import {Document} from "@beyond/docs/components/html/code";
import {module} from "beyond_context";
import * as React from "react";

const tpl1 = `
{
  "application": {
    "processor": "sass",
    "path": "application",
    "files": [
      "*"
    ]
  },
  "global": {
    "processor": "sass",
    "path": "global",
    "files": [
      "*"
    ]
  }
}`;
const tpls = {
    tpl1: {tpl: tpl1, title: "module.json", "language": "json"}
}

export /*bundle*/ function StylesTemplatePage() {
    return (
        <>
            <Document tpls={tpls} moduleId={module.resource} textId="styles"/>
            <Document tpls={tpls} moduleId={module.resource} textId="templateApplication"/>
            <Document
                tpls={tpls}
                moduleId={module.resource} textId="templateGlobal"
                nextLinks={["/docs/styles/modules"]}
            />
        </>
    );
}
