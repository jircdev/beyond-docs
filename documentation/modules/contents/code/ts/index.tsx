import * as React from "react";

import { beyond } from "@beyond-js/kernel/core";
import { DocsContext } from "./context";
import * as Contents from "@beyond/docs/contents/esp";
import { useState, useEffect } from "react";
import { RightAside } from "./views/right-aside";
import "@beyond/docs/missing.widget";
import "@beyond/docs/under-construction.widget";
import { MDXComponentsProvider } from "./mdx-provider";

export /*bundle*/ function ContentsPage({ contentId, component }) {
    const { current: lang } = beyond.languages;
    // const ComponentToShow = contents[contentId][lang];

    const [Component, setComponent] = useState();
    const [sections, setSections] = useState<Element[]>();
    const [updated, setUpdated] = useState<EpochTimeStamp>(performance.now());
    const { shadowRoot } = component;

    function ContentWrapper({ children }) {
        return <>{children}</>;
    }

    const replace = (text) => text.replace(text[0], text[0].toUpperCase());
    const name = contentId.split("-").map(replace).join("");

    useEffect(() => {
        const items: NodeList = shadowRoot.querySelectorAll("h1,h2,h3,h4");
        const onChange = () => setUpdated(performance.now());
        Contents.hmr.on("change", onChange);
        setSections(Array.from(items));
        return () => Contents.hmr.on("change", onChange);
    }, []);
    console.log(100, name, Contents);
    if (!Contents[name]) {
        return (
            <main className="page__main-container">
                <section className="page__main-content">
                    <app-under-construction />
                </section>
            </main>
        );
    }

    const Content = Contents[name];

    return (
        <MDXComponentsProvider>
            <DocsContext.Provider value={{ sections, setSections, shadowRoot, component }}>
                <main className="page__main-container">
                    <section className="page__main-content">
                        <Content components={{ wrapper: ContentWrapper }} />
                    </section>
                    {sections?.length && <RightAside />}
                </main>
            </DocsContext.Provider>
        </MDXComponentsProvider>
    );
}
