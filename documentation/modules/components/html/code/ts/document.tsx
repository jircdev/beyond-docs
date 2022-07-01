import * as React from "react";
import {Loading} from "./loading";
import {useTexts, DocsContext} from "@beyond/docs/store";
import {Render} from "./render";
import {NextLinks} from "@beyond/docs/components/next-links";

export /* bundle */ function Document({moduleId, tpls, textId, nextLinks, d}) {
    const [ready, texts] = useTexts(moduleId);
    if (!ready) return null;
    const textsUsed = textId ? texts[textId] : texts;
    if (d) {
        console.log(1.1, moduleId, texts);
        console.log(1.2, textId, textsUsed);
    }
    return (
        <DocsContext.Provider value={{texts, ready, tpls}}>
            <Render content={textsUsed} tpls={tpls}/>
            {nextLinks && <NextLinks items={nextLinks}/>}
        </DocsContext.Provider>
    );
}
