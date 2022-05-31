import * as React from 'react';
import {Overview} from "./overview";
import {Universal} from "./universal";
import {NextLinks} from '@beyond/docs/components/next-links/code';
import {Features} from "./features";
import {Quiz} from "../../quiz";

export function Intro() {
    return (
        <>
            <Universal/>
            <Overview/>
            <Features/>
            {/*<Quiz id="intro"/>*/}
            <NextLinks items={[
                ['Comienzo rápido', '/docs/quick-start'],
                ['Widgets', '/docs/widgets'],
            ]}/>
        </>
    )
}
