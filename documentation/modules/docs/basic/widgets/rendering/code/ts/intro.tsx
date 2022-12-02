import * as React from 'react';

import {Elink, Link} from "@beyond/ui/link";
import {useDocsContext} from "@beyond/docs/store";
import {List} from "@beyond/docs/components/html";

export function RenderingIntro() {
    const {texts: {intro: {h1, p1, p2, p3, items}}} = useDocsContext();
    return (
        <>
            <h1 id="intro">{h1}</h1>
            <p>{p1}
            </p>

            <div className="block__note">
                {p2.t1} <Link href="/docs/widgets">{p2.l1}</Link>, {p2.t2} <Elink
                href={p2.elink2.href}>{p2.elink2.label} </Elink> {p2.t3} <Elink
                href={p2.elink3.href}>{p2.elink3.label}</Elink>{p2.t4}
            </div>
            <p>{p3}</p>
            <List items={items}/>
        </>
    )
}
