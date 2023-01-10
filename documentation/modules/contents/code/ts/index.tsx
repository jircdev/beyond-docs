import * as React from "react";
import { PreTitle, Title, SubTitle } from "@beyond/docs/titles";
import { Code, InlineCode } from "@beyond/docs/code";
import { ELink } from "@beyond/docs/links";
import { PreloadPage } from "@beyond/docs/preload";
import { beyond } from "@beyond-js/kernel/core";
import { DocsContext } from "./context";
import { ContentsContainer } from "./container";
import ContentsEs from "@beyond/docs/contents/esp";
import { useState, useEffect } from "react";

export /*bundle*/ function ContentsPage({ contentId }) {
    const { current: lang } = beyond.languages;
    // const ComponentToShow = contents[contentId][lang];

    const [Component, setComponent] = useState();
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const contents = await globalThis.bimport(`@beyond/ui/contents/${lang}`);
    //             console.log(13, contents);
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     })();
    // }, [contentId]);
    function ContentWrapper({ children }) {
        return <>{children}</>;
    }

    return "listo";
    console.log(12, contentId);
    return (
        <DocsContext.Provider value={{}}>
            <ContentsContainer>
                <ComponentToShow components={{ wrapper: ContentWrapper }} />
            </ContentsContainer>
        </DocsContext.Provider>
    );
}
