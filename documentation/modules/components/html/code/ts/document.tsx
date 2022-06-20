import * as React from "react";
import {Loading} from "./loading";
import {useTexts, DocsContext} from "@beyond/docs/store/code";
import {Render} from "./render";
import {Link} from "@beyond/ui/link/code";
import {NextLinks} from "@beyond/docs/components/next-links/code";

export /* bundle */ function Document({moduleId, tpls, textId, nextLinks}) {
    const [ready, texts] = useTexts(moduleId);
    if (!ready) return <Loading/>;
    const textsUsed = textId ? texts[textId] : texts;
    console.log(120, tpls)
    return (
        <DocsContext.Provider value={{texts, ready, tpls}}>
            <Render content={textsUsed} tpls={tpls}/>
            {nextLinks && <NextLinks items={nextLinks}/>}
        </DocsContext.Provider>
    );
}
