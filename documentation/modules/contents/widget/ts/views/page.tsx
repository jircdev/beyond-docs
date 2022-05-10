import * as React from "react";
import {ContentsPage, hmr} from "@beyond/docs/contents/code";


export function Page({uri, component}): JSX.Element {
    console.log(1.1, performance.now() / 1000);
    const propsContent = uri.vars.get('content');
    const sub = uri.vars.get('sub');
    const contentId = !['', undefined, null].includes(propsContent) ? propsContent : 'what-is-beyond';
    const [hmrChanged, setHmr] = React.useState(performance.now());
    console.log(2, performance.now() / 1000);
    React.useEffect(() => {
        const onChange = () => {
            setHmr(performance.now());
        }
        hmr.on('change', onChange);
        return () => hmr.off('change', onChange)
    }, []);
    // @ts-ignore
    return (
        <ContentsPage component={component} contentId={contentId} sub={sub}/>

    );
}
