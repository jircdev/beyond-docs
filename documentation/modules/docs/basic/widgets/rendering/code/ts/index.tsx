import * as React from 'react';
import {SSR} from "./ssr";
import {CSR} from "./csr";
import {SR} from "./sr";
import {NextLinks} from '@beyond/docs/components/next-links/code';
import {RenderingIntro} from "./intro";
import {useTexts, DocsContext} from "@beyond/docs/store/code";
import {module} from "beyond_context";
import {Loading} from '@beyond/docs/components/html/code';

export /*bundle*/ function RenderingPage() {

    const [ready, texts] = useTexts(module.resource);
    if (!ready) return <Loading/>;

    return (
        <DocsContext.Provider value={{ready, texts}}>
            <RenderingIntro/>
            <SSR/>
            <CSR/>
            <SR/>
            <NextLinks items={[
                ['Renderización', '/docs/rendering'],
                ['Widgets', '/docs/widgets'],
            ]}/>

        </DocsContext.Provider>
    )
}
