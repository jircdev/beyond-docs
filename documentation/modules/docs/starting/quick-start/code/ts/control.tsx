import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html";
import {module} from "beyond_context";


const build = (tpl) => ({language: 'shell', tpl})
const tpls = {
    npx1: build(`npx @beyond-js/create-project --type web-backend --name @testing/login`),
    npx2: build(`npx @beyond-js/create-project --type node --name  @scope/name \n`),
    npm1: build(`beyond`),
    npm2: build(`npm i -g beyond`),
    beyond: build('beyond')
};

export /*bundle*/ function QuickStart() {
    return (
        <>
            <Document textId="requires" specifier={module.specifier} tpls={tpls}/>
            <Document textId="global" specifier={module.specifier} tpls={tpls}/>
            <Document
                textId="create"
                specifier={module.specifier}
                tpls={tpls}
                nextLinks={[
                    "/docs/tutorial/start"
                ]}
            />
        </>
    );
}
