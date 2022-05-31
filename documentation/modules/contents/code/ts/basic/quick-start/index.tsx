import * as React from 'react';
import {BeyondName} from "../../views/beyond";
import {Elink, Link} from "@beyond/ui/link/code";
import {Code} from "@beyond/docs/code/code";
import {CreateFirstProject} from "./create-first-project";
import {GlobalInstalation} from "./global-instalation";
import {NextLinks} from "@beyond/docs/components/next-links/code";
import {Prerequisites} from "./prerequisites";
import {GlobalCommand} from "./global";

export function QuickStart() {
    return (
        <>
            <h1>Comienzo rápido</h1>
            <Prerequisites/>
            <GlobalInstalation/>
            <CreateFirstProject/>
            <NextLinks items={[
                ['Crear un proyecto', '/docs/project/create'],
                ['Tutorial', '/docs/tutorial/web'],
            ]}/>

        </>
    )
}
