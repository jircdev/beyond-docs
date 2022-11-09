import * as React from 'react';

import {module} from "beyond_context";
import {Document, Loading} from '@beyond/docs/components/html';

export /*bundle*/ function WidgetsDefinition() {
    return (
        <>
            <Document specifier={module.specifier} textId="intro" nextLinks={["/docs/widgets/definition"]}/>
        </>
    )
}
