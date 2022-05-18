import * as React from 'react';
import {Intro} from "./intro";
import {ViewFrameworks} from "./view-frameworks";
import {NextLinks} from "@beyond/docs/components/next-links/code";

export function Widgets() {
    return (
        <>
            <Intro/>
            <ViewFrameworks/>
            <NextLinks items={[
                ['Crear un Widget', '/docs/widgets/creation'],
                ['Objeto Controller', '/docs/widgets/controller'],
            ]}/>
        </>
    )
}
