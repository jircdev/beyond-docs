import * as React from "react";
import {useModel} from '@beyond/docs/store/code';
import {Example} from "./example";
import {Tutorial} from "./tutorial";
import {Starting} from "./starting/starting";
import {RightAside} from "./right-aside";
import {WhatIs} from "./what-is/what-is";
import {Concepts} from "./concepts/concepts";
import {ErrorPage} from "./error";
import {Install} from "./starting/install";
import {TutorialPage} from "./tutorial/tutorial-page";

export function Page({uri, component}): JSX.Element {
    const [state, setState] = React.useState();
    const propsContent = uri.vars.get('content');

    const contentId = !['', undefined, null].includes(propsContent) ? propsContent : 'what-is-beyond';

    const [titles, setTitles] = React.useState([]);
    const [fetching, setFetching] = React.useState(false);
    const [content, setContent] = React.useState(contentId);

    const controls = {
        default: Example,
        Starting: Starting,
        'web-tutorial': TutorialPage,
        'what-is-beyond': WhatIs,
        concepts: Concepts,
        error: ErrorPage,
        install: Install
    };

    React.useEffect(() => {
        setFetching(true);
        window?.setTimeout(() => {

            if (!controls.hasOwnProperty(content)) {
                setContent('error');
                setFetching(false);
                return;
            }
            setContent(content);
            setFetching(true);
            window.setTimeout(() => {
                window.scrollTo(0, 0);
            }, 200);
        }, 1000);
    }, [content])
    React.useEffect(() => {
        window?.setTimeout(() => {
            const titles = Array.from(component.shadowRoot.querySelectorAll('h2'));
            setTitles(titles);
        }, 500);
    }, []);
    const Control = controls[content];
    return (
        <div className="page__main-container">
            <section className="page__main-content">
                <Control/>
            </section>
            {titles && <RightAside container={component.shadowRoot} titles={titles}/>}
        </div>

    );
}
