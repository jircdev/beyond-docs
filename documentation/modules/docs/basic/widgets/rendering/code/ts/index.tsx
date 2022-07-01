import * as React from 'react';
import {module} from "beyond_context";
import {Document} from '@beyond/docs/components/html';

export /*bundle*/ function WidgetsRendering() {
    return (
        <>
            <Document moduleId={module.resource} textId="intro"/>
            <Document moduleId={module.resource} textId="ssr"/>
            <Document moduleId={module.resource} textId="csr"/>
            <Document moduleId={module.resource} textId="sr" nextLinks={["/docs/widgets/controller"]}/>
        </>
    )
}
