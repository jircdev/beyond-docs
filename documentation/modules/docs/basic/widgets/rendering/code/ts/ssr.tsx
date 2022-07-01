import * as React from 'react';
import {Elink, Link}from "@beyond/ui/link";
import {useDocsContext} from "@beyond/docs/store";
import {CHtml, List} from "@beyond/docs/components/html";

export function SSR() {
    const {texts: {ssr: {title, p1, p2, p3, p4, items}}} = useDocsContext();
    return (
        <>
            <h2 id="ssr-rendering"><CHtml content={title}/></h2>
            <div className="block__note">
                {p1.t1} <Elink href={p1.elink1.href}>{p1.elink1.label} </Elink> {p1.t2}
            </div>
            <p>{p2}</p>
            <p>
                {p3.t1}<Link href="/docs/widgets/">{p3.l1}</Link> {p3.t2}</p>

            <p>{p4}</p>
            <List content={items}/>
        </>
    )
}
