import * as React from 'react';
import {Link} from '@beyond/ui/link/code';
import {useDocsContext} from "@beyond/docs/store/code";
import {List} from "@beyond/docs/components/html/code";

export function CSR() {
    const {
        texts: {
            csr: {title, p1, items, storeRendering}
        }
    } = useDocsContext();

    return (
        <>
            <h2 id="csr-render">{title}</h2>
            <p>{p1}</p>
            <List items={items}/>
            <h3 id="store-server-rendering">{storeRendering.title}</h3>
            <p>{storeRendering.p1}</p>
            <p>{storeRendering.p2.t1} <Link href="/doccs/state-management">{storeRendering.p2.l1}</Link>.
            </p>
        </>
    )
}
