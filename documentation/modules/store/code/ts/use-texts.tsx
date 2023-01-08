import * as React from "react";
import { CurrentTexts } from "@beyond-js/kernel/texts";

export /*bundle*/ function useTexts(specifier, key?: string): [boolean, object] {
    const [ready, setReady] = React.useState(false);
    const [texts, setTexts] = React.useState({});

    React.useEffect(() => {
        // console.trace(1,specifier)
        const modelTexts = new CurrentTexts(specifier, true);
        const triggerEvent = () => {
            let value = modelTexts.value;
            if (modelTexts.ready && key) {
                if (!value.hasOwnProperty(key)) {
                    console.warn(
                        `the key specified for texts was not found. Key passed: ${key}, module specifier: ${specifier}`
                    );
                }
                value = modelTexts.value[key];
            }
            setTexts(value);
            setReady(modelTexts.ready);
        };
        modelTexts.bind("change", triggerEvent);
        triggerEvent();
        return () => {
            modelTexts.unbind("change", triggerEvent);
        };
    }, []);
    const isReady = ready && !!texts;
    return [isReady, texts];
}
