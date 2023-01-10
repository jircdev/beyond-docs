import * as React from "react";
import { hmr, ContentsPage } from "@beyond/docs/contents-data";

export function Page({ uri, component }): JSX.Element {
    const content = uri.vars.get("content");
    const [hmrChanged, setHmr] = React.useState(performance.now());
    const contentId = !["", undefined, null].includes(content) ? content : "intro";

    return (
        <div>
            <ContentsPage contentId={contentId} />
        </div>
    );
}
