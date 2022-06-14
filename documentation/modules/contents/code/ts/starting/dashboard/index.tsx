import * as React from 'react';
import {Functionalities} from "./functionalities";
import {Structure} from "./structure";
import {DashboardIntro} from "./intro";
import {DashboardTypescript} from "./typescript";
import {DashboardEditor} from "./editor";
import {DashboardDeployment} from "./deployment";
import {NextLinks} from "@beyond/docs/components/next-links/code";
export function DashboardPage() {
    return (
        <>
            <DashboardIntro/>
            <Functionalities/>
            <Structure/>
            <DashboardTypescript/>
            <DashboardEditor/>
            <DashboardDeployment/>
            <NextLinks items={[
                ['Tutorial', '/docs/tutorial/web'],
                ['Crear proyecto', '/docs/projects/intro'],
            ]}/>

        </>
    )
}
