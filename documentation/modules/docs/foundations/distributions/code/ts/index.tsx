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

export /*bundle*/ function DistributionsPage() {
    return (
        <>

            <Document tpls={tpls} moduleId={module.resource} textId="distributions"/>
            <Document tpls={tpls} moduleId={module.resource} textId="node"/>
            <Document
                tpls={tpls}
                moduleId={module.resource} textId="distribution"
                nextLinks={["/docs/distributions"]}
            />
        </>
    );
}
