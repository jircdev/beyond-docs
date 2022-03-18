import * as React from 'react';
import {Example} from "./example";
import {Starting} from "./starting/starting";
import {TutorialPage} from "./tutorial/tutorial-page";
import {WhatIs} from "./what-is/what-is";
import {Concepts} from "./concepts/concepts";
import {Install} from "./starting/install";
import {Error404} from "./error-404";
import {ProjectJson} from "./concepts/project-json/project-json";
import {DashboardPage} from "./dashboard/dashboard";

interface IControl {
    id: string,
    control: () => JSX.Element
}

export function useContent(contentId): [IControl, boolean] {
    const [content, setContent] = React.useState<IControl>();
    const [fetching, setFetching] = React.useState(true);


    const controls = {
        'what-is-beyond': WhatIs,
        dashboard: DashboardPage,
        default: Example,
        Starting: Starting,
        'web-tutorial': TutorialPage,
        concepts: Concepts,
        install: Install,
        error404: Error404,
        'project-json': ProjectJson

    };

    React.useEffect(() => {
        setFetching(true);


        const Control = controls.hasOwnProperty(contentId) ? controls[contentId] : controls.error404;
        setContent({id: contentId, control: Control});
        setFetching(false);

    }, [contentId])


    return [content, fetching];

}
