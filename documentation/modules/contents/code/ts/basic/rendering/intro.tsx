import * as React from 'react';

import {Elink, Link} from "@beyond/ui/link/code";
import {useDocsContext} from "@beyond/docs/store/code";
import {List} from "@beyond/docs/components/html/code";

export function RenderingIntro() {
    const {
        texts
    } = useDocsContext();
    console.log(10, texts);
    return 'aja';
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


            {/*<p>*/}
            {/*    <span className="beyond">BeyondJS</span> verifica las plataformas agregadas en el*/}
            {/*    widget y utiliza la distribución configurada para ella, al momento de consumirlo.*/}
            {/*</p>*/}
        </>
    )
}
