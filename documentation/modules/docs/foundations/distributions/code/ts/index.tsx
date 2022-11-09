import {Document} from "@beyond/docs/components/html";
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

            <Document tpls={tpls} specifier={module.specifier} textId="distributions"/>
            <Document tpls={tpls} specifier={module.specifier} textId="node"/>
            <Document
                tpls={tpls}
                specifier={module.specifier} textId="distribution"
                nextLinks={["/docs/distributions"]}
            />
        </>
    );
}
