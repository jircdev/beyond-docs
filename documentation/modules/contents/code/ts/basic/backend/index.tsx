import * as React from 'react';
import {BackendIntro} from "./intro";
import {BackendBridge} from "./bridge";
import {BackendMagicComments} from "./magic-comments";
import {BackendBackend} from "./backend";
import {NextLinks} from "@beyond/docs/components/next-links/code";

export function Backend() {
    return (
        <>
            <BackendIntro/>
            <BackendBridge/>
            <BackendMagicComments/>
            <BackendBackend/>
            <NextLinks items={[
                ['Crear un módulo', '/docs/modules/create'],
                ['Bundles', '/docs/bundles'],
            ]}/>
        </>
    )
}
