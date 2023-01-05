import * as React from "react";
import { PreTitle, Title, SubTitle } from "@beyond/docs/titles";
import { Code, InlineCode } from "@beyond/docs/code";
import { ELink } from "@beyond/docs/links";
import { PreloadPage } from "@beyond/docs/preload";
import { beyond } from "@beyond-js/kernel/core";
import { DocsContext } from "./context";
import { ContentsContainer } from "./container";

export /*bundle*/ function ContentsPage({ contentId, sub }) {
    const { pathname } = location;

    const contents = {
        intro: "intro.mdx",
        "/widgets/pepito": "@beyond/docs/pepito",
    };

    const [Component, setComponent] = React.useState();
    React.useEffect(() => {
        (async () => {
            const { current: lang } = beyond.languages;
            const Component = await import(`./mdx/${lang}/${contents[contentId]}`);
            setComponent(Component);
        })();
    }, [contentId]);

    let ComponentToShow = Component;
    if (!Component) ComponentToShow = () => <>'404'</>;

    return (
        <DocsContext.Provider value={{}}>
            <ContentsContainer>
                <h3>Content page</h3>
                <ComponentToShow />
            </ContentsContainer>
        </DocsContext.Provider>
    );
}
