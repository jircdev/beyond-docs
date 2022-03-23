import * as React from "react";
import {useContent, RightAside, hmr} from "@beyond/docs/contents/code";


export function Page({uri, component}): JSX.Element {
    const propsContent = uri.vars.get('content');
    const sub = uri.vars.get('sub');
    const contentId = !['', undefined, null].includes(propsContent) ? propsContent : 'what-is-beyond';
    const [titles, setTitles] = React.useState([]);

    const [hmrChanged, setHmr] = React.useState(performance.now());
    const [updated, setUpdated] = React.useState();
    const [content, fetching] = useContent(contentId, sub, hmrChanged);
    React.useEffect(() => {
        window?.setTimeout(() => {
            const titles = Array.from(component.shadowRoot.querySelectorAll('h1, h2'));
            setTitles(titles);
        }, 500);
        const onChange = () => setHmr(performance.now());
        hmr.on('change', onChange);
        return () => hmr.off('change', onChange)
    }, []);
    if (fetching) return <div>cargando...</div>;

    const Control = content.control;

    // @ts-ignore
    return (
        <div className="page__main-container">
            <section className="page__main-content">

                <Control/>
            </section>
            {titles && <RightAside container={component.shadowRoot} titles={titles}/>}
        </div>

    );
}
