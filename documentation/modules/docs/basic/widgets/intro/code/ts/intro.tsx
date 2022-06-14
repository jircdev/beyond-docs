import * as React from 'react';
import {Elink, Link} from "@beyond/ui/link/code";
import {useDocsContext} from "@beyond/docs/store/code";
import {Notice} from "@beyond/docs/components/html/code"

export function Intro() {
    const {texts: {intro: {h1, p1, p2, n1}}} = useDocsContext();
    return (
        <>
            <h1 id="intro">{h1}</h1>
            <p>{p1.t1} <Elink href={p1.e1.href}>{p1.e1.label}</Elink>, {p1.t2}.</p>
            <p>{p2.t1}<Link href="/docs/bundles">{p2.l1}</Link> {p2.t2} <Elink
                href={p2.e1.href}>{p2.e1.label}</Elink> {p2.t3} <Elink
                href={p2.e2.href}>{p2.e2.label}</Elink> {p2.t4}.</p>
            <Notice text={n1.t1} link={n1.l1}/>
        </>
    )
}
