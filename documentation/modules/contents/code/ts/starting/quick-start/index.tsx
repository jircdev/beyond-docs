import * as React from 'react';
import {CreateFirstProject} from "./create-first-project";
import {GlobalInstalation} from "./global-instalation";
import {NextLinks} from "@beyond/docs/components/next-links/code";
import {Prerequisites} from "./prerequisites";

export function _QuickStart() {
    return (
        <>
            <h1>Comienzo rápido</h1>
            <Prerequisites/>
            <CreateFirstProject/>
            <GlobalInstalation/>
            <NextLinks items={[
                ['Crear un proyecto', '/docs/projects/create'],
                ['Tutorial', '/docs/tutorial/web'],
            ]}/>
        </>
    )
}
