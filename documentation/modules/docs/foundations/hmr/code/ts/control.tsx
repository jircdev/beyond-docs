import {Document} from "@beyond/docs/components/html";
import {module} from "beyond_context";
import * as React from "react";


export /*bundle*/ function HMRPage() {

    return (
        <>
            <Document specifier={module.specifier} textId="hmr"/>
            <Document
                specifier={module.specifier} textId="events"
                nextLinks={["/docs/foundations/bee"]}
            />
        </>
    );
}


