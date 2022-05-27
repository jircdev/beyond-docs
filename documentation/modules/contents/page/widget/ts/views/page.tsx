import * as React from "react";
import {hmr, ContentsPage} from "@beyond/docs/contents-data/code";

export function Page({uri, component}): JSX.Element {
    const propsContent = uri.vars.get('content');
    const [hmrChanged, setHmr] = React.useState(performance.now());
    const sub = uri.vars.get('sub');
    const contentId = !['', undefined, null].includes(propsContent) ? propsContent : 'intro';

    React.useEffect(() => {
        const onChange = () => setHmr(performance.now());
        hmr.on('change', onChange);
        return () => hmr.off('change', onChange)
    }, []);

    return (
        <ContentsPage component={component} contentId={contentId} sub={sub} hmrChanged={hmrChanged}/>
    );
}
