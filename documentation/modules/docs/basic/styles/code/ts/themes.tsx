import {Document} from "@beyond/docs/components/html";
import {module} from "beyond_context";
import * as React from "react";

const tpl1 = `
@use 'dark';
@use 'light';
:root {
  @include light.properties();
  @media(prefers-color-scheme: dark) {
    @include dark.properties();
  }
}

html[data-beyond-mode="light"] {
  @include light.properties();
}

html[data-beyond-mode="dark"] {
  @include dark.properties();
}

`;

const tpl2 = `
:host-context(html[data-beyond-mode]) {
    //styles here...
}`;
const tpl3 = `
:host-context(html[data-beyond-mode]) {
    //styles here...
}
`;
const tpls = {
    tpl1: {tpl: tpl1, title: "definition.scss", "language": "scss"},
    tpl2: {tpl: tpl2, "language": "scss"},
    tpl3: {tpl: tpl3, "language": "scss"}
}

export /*bundle*/ function StylesThemePage() {
    return (
        <>

            <Document tpls={tpls} moduleId={module.resource} textId="lightAndDarkTheme"/>
            <Document tpls={tpls} moduleId={module.resource} textId="themesDefinition"/>
            <Document
                tpls={tpls}
                moduleId={module.resource} textId="code"
                nextLinks={["/docs/styles/modules"]}
            />
        </>
    );
}
