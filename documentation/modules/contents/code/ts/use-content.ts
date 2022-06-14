import * as React from 'react';
import {getContent} from "./db";
import {CurrentTexts} from '@beyond-js/kernel/texts/ts';
import {module} from "beyond_context";

interface IControl {
    contentId: string,
    sub: string,
    hmrChanged: any
    control: () => JSX.Element
}

export /*bundle*/function useContent(contentId, sub, hmrChanged): [IControl, boolean, object] {

    const [content, setContent] = React.useState<IControl>(getContent(contentId, sub));
    const [fetching, setFetching] = React.useState(true);
    const [updated, setUpdated] = React.useState(hmrChanged);

    const [ready, setReady] = React.useState(false);
    const [texts, setTexts] = React.useState({});
    React.useEffect(() => {
        const modelTexts = new CurrentTexts(module.resource, true);
        const triggerEvent = () => {
            setReady(modelTexts.ready);
            setTexts(modelTexts.value)
        };
        modelTexts.bind('change', triggerEvent);
        triggerEvent();
        return () => {
            modelTexts.unbind('change', triggerEvent);
        }
    }, []);

    React.useEffect(() => {
        setFetching(true);
        setContent(getContent(contentId, sub));
        if (updated === hmrChanged) {
            setFetching(false);
            return;
        }
        window.setTimeout(() => {
            setUpdated(hmrChanged)
            setFetching(false);
        }, 30);

    }, [contentId, hmrChanged])

    const isFetching = fetching && !ready;
    return [content, isFetching, texts];

}
