import * as React from "react";
import { hmr, ContentsPage } from "@beyond/docs/contents-data.code";
import Component from "./test.mdx";

export function Page({ uri, component }): JSX.Element {
    const propsContent = uri.vars.get("content");
    const [hmrChanged, setHmr] = React.useState(performance.now());
    const sub = uri.vars.get("sub");
    const contentId = !["", undefined, null].includes(propsContent) ? propsContent : "intro";

    return (
        <div>
            <Component />
            <ContentsPage />
        </div>
    );
}
