import {Document} from "@beyond/docs/components/html/code";
import {module} from "beyond_context";
import * as React from "react";

const tpl = `
{
  "applications": "projects.json",
  "bundles": {},
  "libraries": []
}`;
const tpls = {
    tpl: {tpl, title: "beyond.json"}
}

export /*bundle*/ function DevServer() {

    return (
        <>
            <Document tpls={tpls} moduleId={module.resource} textId="server"/>
            <Document
                tpls={tpls}
                moduleId={module.resource} textId="properties"
                nextLinks={["/docs/distributions"]}
            />
        </>
    );
}
