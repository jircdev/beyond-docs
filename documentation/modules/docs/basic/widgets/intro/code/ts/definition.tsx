import * as React from 'react';
import {module} from "beyond_context";
import {Document} from '@beyond/docs/components/html';

export /*bundle*/ function Widgets() {
    return (
        <Document specifier={module.specifier} textId="definition" nextLinks={["/docs/widgets/controller"]}/>
    )
}
