import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html/code";
import {module} from "beyond_context";


export /*bundle*/ function RoutingPage() {
    console.log(2, "ak")
    return (
        <>
            <Document moduleId={module.resource} textId="routing"/>
            <Document moduleId={module.resource} textId="object"/>
            <Document moduleId={module.resource} textId="navigation"/>
            <Document moduleId={module.resource} textId="overwrite"
                nextLinks={["/docs/modules/create"]}
            />
        </>
    );
}
