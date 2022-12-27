import * as React from "react";

import { PreloadPage } from "@beyond/docs/preload";
import { DocsContext } from "./context";
import { ContentsContainer } from "./container";
import MDXComponent from "./views/mdx/test.mdx";

export /*bundle*/ function ContentsPage({}) {
    return (
        <DocsContext.Provider value={{}}>
            <ContentsContainer>
                <h3>Content page</h3>
                <MDXComponent />
            </ContentsContainer>
        </DocsContext.Provider>
    );
}
