import * as React from 'react';
import {AppIcon} from "@beyond/docs/ui/icons/code";
import {ModalImage} from "../../views/modal-image";
import {BeyondName} from "../../views/beyond";
import {Functionalities} from "./functionalities";
import {Structure} from "./structure";
import {Elink, Link} from "@beyond/ui/link/code";
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
