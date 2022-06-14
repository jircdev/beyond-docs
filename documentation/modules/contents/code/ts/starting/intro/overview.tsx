import * as React from 'react';
import {Link} from '@beyond/ui/link/code';
import {useDocsContext} from "../../context";

export function Overview() {
    const {texts: {intro: {overview: {title, p1, p2, p3, p4}}}} = useDocsContext();

    console.log(12, p3)
    return (
        <>
            <h2 id="projects">{title}</h2>
            <p>{p1}</p>
            <p> {p2}</p>
            <p>
                {p3.t1} <Link href="/docs/modules">{p3.link1}</Link> {p3.t2} <Link
                href="/docs/distributions">{p3.link2}</Link>
                {p3.t3}
            </p>
            <div className="block__note note-info">
                {p4.t1}<Link href="/docs/projects/intro">{p4.l1}</Link>
            </div>
        </>
    )
}
