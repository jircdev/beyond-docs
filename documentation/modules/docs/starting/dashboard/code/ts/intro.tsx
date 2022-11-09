import * as React from "react";
import {hmr, Document} from "@beyond/docs/components/html";
import {module} from "beyond_context";


export /*bundle*/ function DashboardPage() {
    return (
        <>
            <Document textId="dashboard" specifier={module.specifier}/>
            <Document textId="features" specifier={module.specifier}/>
            <Document textId="structure" specifier={module.specifier}/>
            <Document textId="ts" specifier={module.specifier}/>
            <Document textId="editor" specifier={module.specifier}/>
            <Document
                specifier={module.specifier} textId="deploy"
                nextLinks={[["Tutorial", "/docs/tutorial/bridge"]]}
            />
        </>
    );
}
