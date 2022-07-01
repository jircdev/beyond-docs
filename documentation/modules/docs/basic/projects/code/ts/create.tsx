import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html";
import {module} from "beyond_context";

const tpls = {
    beyond: {language: 'shell', tpl: 'beyond'},
    tpl1: {language: 'shell', tpl: 'beyond'},
    tpl2: {language: 'shell', tpl: 'beyond'}
}

export /*bundle*/ function ProjectCreate() {

    const attrs = {moduleId: module.resource, tpls};
    return (
        <>
            <Document {...attrs} textId="create"/>
            <Document {...attrs} textId="dashboard"/>
            <Document {...attrs} textId="createInfo"/>
            <Document
                {...attrs} textId="manual"

                nextLinks={["/docs/tutorial/bridge"]}
            />
        </>
    );
}
