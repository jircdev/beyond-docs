import * as React from 'react';
import {getContent} from "./db";

interface IControl {
    contentId: string,
    sub: string,
    hmrChanged: any
    control: () => JSX.Element
}

export /*bundle*/function useContent(contentId, sub, hmrChanged): [IControl, boolean] {

    const [content, setContent] = React.useState<IControl>(getContent(contentId, sub));
    const [fetching, setFetching] = React.useState(true);
    const [updated, setUpdated] = React.useState(hmrChanged);

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


    return [content, fetching];

}
