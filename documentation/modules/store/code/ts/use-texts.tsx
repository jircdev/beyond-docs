import * as React from "react";
import {CurrentTexts} from "@beyond-js/kernel/texts/ts";

interface IDocsValue {
    ready?: boolean,
    texts?: object
}

const value: IDocsValue = {};
export /*bundle*/ const DocsContext = React.createContext<IDocsValue>(value);
export /*bundle*/ const useDocsContext = () => React.useContext(DocsContext);

export /*bundle*/function useTexts(moduleId):[boolean, object] {
    const [ready, setReady] = React.useState(false);
    const [texts, setTexts] = React.useState({});
    React.useEffect(() => {
        const modelTexts = new CurrentTexts(moduleId, true);
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
    const isReady = ready && !!texts;
    return [isReady, texts];
}
