import * as React from 'react';
import {module} from "beyond_context";
import {Document} from '@beyond/docs/components/html';

export /*bundle*/ function WidgetsRendering() {
    return (
        <>
            <Document specifier={module.specifier} textId="intro"/>
            <Document specifier={module.specifier} textId="ssr"/>
            <Document specifier={module.specifier} textId="csr"/>
            <Document specifier={module.specifier} textId="sr" nextLinks={["/docs/widgets/controller"]}/>
        </>
    )
}
