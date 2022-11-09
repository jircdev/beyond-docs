import * as React from "react";
import {Loading} from "./loading";
import {useTexts, DocsContext} from "@beyond/docs/store";
import {Render} from "./render";
import {NextLinks} from "@beyond/docs/components/next-links";

export /* bundle */ function Document({specifier, tpls, components, textId, nextLinks, d}) {
    const [ready, texts] = useTexts(specifier);
    if (!ready) return null;
    const textsUsed = textId ? texts[textId] : texts;
    if (d) {
        console.log(1.1, specifier, texts, components);
        console.log(1.2, textId, textsUsed);
    }
    return (
        <DocsContext.Provider value={{texts, ready, tpls, components}}>
            <Render content={textsUsed} tpls={tpls} components={components}/>
            {nextLinks && <NextLinks items={nextLinks}/>}
        </DocsContext.Provider>
    );
}
