import * as React from 'react';
import {Elink, Link} from '@beyond/ui/link/code';
import {SSR} from "./ssr";
import {CSR} from "./csr";
import {SR} from "./sr";
import {BeyondName} from "../../views/beyond";
import {NextLinks} from '@beyond/docs/components/next-links/code';
import {RenderingIntro} from "./intro";

export /*bundle*/ function RenderingPage() {
    return (
        <>
            <RenderingIntro/>
            <SSR/>
            <CSR/>
            <SR/>
            <NextLinks items={[
                ['Renderización', '/docs/rendering'],
                ['Widgets', '/docs/widgets'],
            ]}/>

        </>
    )
}
