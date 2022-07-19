import * as React from 'react';
import {useContent} from "./use-content";
import {PreloadPage} from "@beyond/docs/preload";
import {DocsContext} from "./context";
import {ContentsContainer} from "./container";


export /*bundle*/ function ContentsPage({component, contentId, sub, hmrChanged}) {
    const [content, fetching, texts] = useContent(contentId, sub, hmrChanged);

    const isFetching = fetching || !texts ;
    if (isFetching) {
        return (
            <div className="page__main-container is-fetching">
                <section className="page__main-content">
                    <PreloadPage/>
                    <div/>
                </section>
            </div>
        );
    }
    const Control = content.control;

    return (
        <DocsContext.Provider value={{texts: texts, component}}>
            <ContentsContainer>
                <Control/>
            </ContentsContainer>
        </DocsContext.Provider>
    );
}
