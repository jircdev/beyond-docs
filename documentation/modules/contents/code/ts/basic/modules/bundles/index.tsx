import * as React from 'react';
import {BundlesIntro} from "./intro";
import {BundlesTransversals} from "./transversals";
import {BundlesTypes} from "./types";
import {BundlesExample} from "./example";
import {NextLinks} from "@beyond/docs/components/next-links/code";

export function Bundles() {
    return (
        <>
            <BundlesIntro/>
            <BundlesTransversals/>
            <BundlesTypes/>
            <BundlesExample/>
            <NextLinks items={[
                ['Crear módulos', '/docs/modules/create'],
                ['Tutorial', '/docs/tutorial/web'],

            ]}/>
        </>
    )
}
