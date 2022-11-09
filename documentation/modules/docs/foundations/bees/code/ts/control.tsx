import {Document} from "@beyond/docs/components/html";
import {module} from "beyond_context";
import * as React from "react";

export /*bundle*/ function BEEPage() {

    return (
        <>
            <Document specifier={module.specifier} textId="bee"/>
        </>
    );
}


