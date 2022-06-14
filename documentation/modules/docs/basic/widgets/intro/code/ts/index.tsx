import * as React from 'react';
import {Intro} from "./intro";
import {ViewFrameworks} from "./view-frameworks";
import {NextLinks} from "@beyond/docs/components/next-links/code";
import {useTexts, DocsContext} from "@beyond/docs/store/code";
import {module} from "beyond_context";
import {Loading} from '@beyond/docs/components/html/code';

export /*bundle*/ function Widgets() {
    const [ready, texts] = useTexts(module.resource);
    if (!ready) return <Loading/>;
    return (
        <DocsContext.Provider value={{ready, texts}}>
            <Intro/>
            <ViewFrameworks/>
            <NextLinks items={[
                ['Crear un Widget', '/docs/widgets/creation'],
                ['Objeto Controller', '/docs/widgets/controller'],
            ]}/>
        </DocsContext.Provider>
    )
}
