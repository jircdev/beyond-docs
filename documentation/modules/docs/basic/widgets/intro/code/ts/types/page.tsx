import * as React from 'react';
import {module} from "beyond_context";
import {Document} from '@beyond/docs/components/html';

const tpl1 = `
"widget": {
    "route": "login"
    "layout: "main",
    "item": {
      "name": "login-page"
    },
....
}
`;
const tpls = {
    tpl1: {language: "json", tpl: tpl1, title: "module.json"},
    tpl2: {tpl: '/user/edit/${userId}'},
    tpl3: {tpl: 'this.uri.vars.get(\'userId\');'}
}

export /*bundle*/ function WidgetPage() {
    return (
        <Document
            tpls={tpls}
            specifier={module.specifier}
            textId="page" nextLinks={["/docs/widgets/controller"]}/>
    )
}
