import * as React from "react";
import {Loading} from "./loading";
import {useTexts, DocsContext} from "@beyond/docs/store/code";
import {Render} from "./render";
import {NextLinks} from "@beyond/docs/components/next-links/code";

export /* bundle */ function Document({moduleId, tpls, textId, nextLinks}) {
    const [ready, texts] = useTexts(moduleId);
    if (!ready) return null;
    const textsUsed = textId ? texts[textId] : texts;
    return (
        <DocsContext.Provider value={{texts, ready, tpls}}>
            <Render content={textsUsed} tpls={tpls}/>
            {nextLinks && <NextLinks items={nextLinks}/>}
        </DocsContext.Provider>
    );
}
