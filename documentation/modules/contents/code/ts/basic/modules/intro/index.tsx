import * as React from 'react';
import {NextLinks} from '@beyond/docs/components/next-links/code';
import {IntroIntroduction} from "./introduction";
import {Modules} from "./modules";
import {InternalModules} from "./internal";
import {ModulesDetail} from "./detail";


export function ModuleIntro() {
    return (
        <>
            <IntroIntroduction/>
            <Modules/>
            <InternalModules/>
            <ModulesDetail/>
            <NextLinks items={[
                ['Configuración de modulos', '/docs/modules/config'],
                ['Bundles', '/docs/bundles'],
            ]}/>
        </>
    )
}
