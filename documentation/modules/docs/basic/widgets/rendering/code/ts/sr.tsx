import * as React from 'react';
import {BeyondName} from "@beyond/docs/components/html";
import {useDocsContext} from "@beyond/docs/store";

export /*bundle*/ function SR() {
    const {texts: {sr: {title, p1, p2}}} = useDocsContext();
    return (
        <>
            <h2 id="sr-rendering">{title}</h2>
            <p>{p1}</p>
            <p>{p2}</p>
        </>
    )
}
