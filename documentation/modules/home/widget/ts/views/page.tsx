import * as React from "react";
import {useModel} from '@beyond/docs/store/code';
import {Example} from "./example";

import {Starting} from "./starting/starting";
import {RightAside} from "./right-aside/index";
import {useContent} from "./use-content";

export function Page({uri, component}): JSX.Element {
    const propsContent = uri.vars.get('content');
    const contentId = !['', undefined, null].includes(propsContent) ? propsContent : 'what-is-beyond';
    const [titles, setTitles] = React.useState([]);
    const [content, fetching] = useContent(contentId);

    React.useEffect(() => {
        window?.setTimeout(() => {
            const titles = Array.from(component.shadowRoot.querySelectorAll('h2'));
            setTitles(titles);
        }, 500);
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
