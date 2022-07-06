import * as React from 'react';
import {useContent} from "./use-content";
import {PreloadPage} from "./preload/loading";
import {DocsContext} from "./context";
import {ContentsContainer} from "./container";

export /*bundle*/ function ContentsPage({component, contentId, sub, hmrChanged}) {
    const [content, fetching, texts] = useContent(contentId, sub, hmrChanged);
    if (fetching || !texts) return <PreloadPage/>;

    const Control = content.control;

    return (
        <DocsContext.Provider value={{texts: texts, component}}>
            <ContentsContainer>
                <Control/>
            </ContentsContainer>
        </DocsContext.Provider>
    );
}
