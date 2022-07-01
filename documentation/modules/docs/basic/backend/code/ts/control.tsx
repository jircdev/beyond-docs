import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html";
import {module} from "beyond_context";

const tpl = `
"bridge": {
    "path": "bridge",
    "files": [
      "*"
    ]
  }`;
const tpl2 = `
export /*actions*//*bundle*/
class Auth {
    async login(user: string, password: string) {
        if (user !== data.user || password !== data.password) {
            return {status: true, error: 'Invalid data'};
        }

        return {status: true, data: {valid: true}}
    }
}`;
const tpl3 = `
import {listen} from '@beyond-js/backend/listen/ts';

listen();`;

const tpls = {
    tpl1: {title: "module.json", tpl},
    tpl2: {title: "bridge.ts", tpl: tpl2},
    tpl3: {title: "bridge.ts", tpl: tpl3}
};

export /*bundle*/ function BackendPage() {
    return (
        <>
            <Document tpls={tpls} moduleId={module.resource} textId="code"/>
            <Document tpls={tpls} moduleId={module.resource} textId="server"/>
            <Document
                tpls={tpls}
                moduleId={module.resource} textId="comments"
                nextLinks={["/docs/modules/create"]}
            />
        </>
    );
}
