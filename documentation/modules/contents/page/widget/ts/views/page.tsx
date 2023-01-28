import * as React from "react";
import { hmr, ContentsPage } from "@beyond/docs/contents-data";

export function Page(props): JSX.Element {
    const { uri, component } = props;
    const content = uri.vars.get("content");
    const [hmrChanged, setHmr] = React.useState(performance.now());
    const contentId = !["", undefined, null].includes(content) ? content : "intro";

    return <ContentsPage contentId={contentId} component={component} />;
}
