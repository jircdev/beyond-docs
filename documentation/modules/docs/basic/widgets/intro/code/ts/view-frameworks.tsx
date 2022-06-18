import * as React from 'react';
import {BeyondName, CHtml} from "@beyond/docs/components/html/code";
import {Elink, Link} from "@beyond/ui/link/code";
import {useDocsContext} from "@beyond/docs/store/code";

export /*bundle*/function ViewFrameworks() {

    const {texts: {intro: {p4: {t1, links, t2, using, and}}}} = useDocsContext();
    return (
        <>
            <p>
                {t1}
                <Elink href="https://reactjs.org">React</Elink>,&nbsp;
                <Elink href="https://vuejs.org/">Vue</Elink> {and} <Elink
                href="https://svelte.dev/">Svelte</Elink>{t2}
            </p>
            <h3 id="widget-react"><CHtml content={using.react.title}/></h3>
            <p>{using.react.p1}</p>
            <div className="block__note">
                {using.react.p2}
                <Elink href={using.react.e1.href}>{using.react.e1.label}</Elink>
            </div>
            <h3><CHtml content={using.vueSvelte.title}/></h3>
            <p>{using.vueSvelte.p1.t1} <Link
                href="/docs/processors">{using.vueSvelte.p1.l1}</Link> {using.vueSvelte.p1.t2}</p>
        </>
    )
}
