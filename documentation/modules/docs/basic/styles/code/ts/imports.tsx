import {Document} from "@beyond/docs/components/html";
import {module} from "beyond_context";
import * as React from "react";

const tpl1 = `@import ~bootstrap/sass/bootstrap.scss;`
const tpl2 = `@import ~bootstrap/sass/variables.scss;`
const tpl3 = `@import ~@scope/project-name/form/sass/scss/label.scss;`
const tpls = {
    tpl1: {tpl: tpl1, language: "scss"},
    tpl2: {tpl: tpl2, language: "scss"},
    tpl3: {tpl: tpl3, language: "scss"}
}

export /*bundle*/ function StylesImportsPage() {
    return (
        <>
            <Document tpls={tpls} moduleId={module.resource} textId="importOfStyleFiles"/>
            <Document
                tpls={tpls}
                moduleId={module.resource} textId="importingStylesFromABundle"
                nextLinks={["/docs/styles/modules"]}
            />
        </>
    );
}
