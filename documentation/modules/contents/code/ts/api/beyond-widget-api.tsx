import * as React from 'react';
import {NextLinks} from '@beyond/docs/components/next-links/code';
import {BeyondName} from "../views/beyond";

import {Elink, Link} from "@beyond/ui/link/code";
import {ObjectProperty} from "../views/object-property";


export function BeyondWidgetApi() {
    return (
        <>
            <h1 id="controller">Objeto <span className="inline">BeyondWidget</span></h1>

            <p>El objeto <span className="inline">BeyondWidget</span> es el objeto padre de los widgets y hereda
                directamente del objeto <Elink
                    href="https://developer.mozilla.org/es/docs/Web/API/HTMLElement">HTMLElement</Elink> y ofrece una
                api que permite interactuar con el arbol de widgets de <BeyondName/>
            </p>
            <h3 id="properties">
                Propiedades
            </h3>

            <ul className="properties-list">
                <li>
                    <ObjectProperty type="NodeWidget" href="/docs/api/NodeWidget">wnode</ObjectProperty>
                    Nodo html del widget.
                </li>
                <li>
                    <ObjectProperty type="(BeyondWidget)[]" href="/docs/api/BeyondWidget">wchildren</ObjectProperty>
                    Lista de widgets contenidos
                </li>
                <li>
                    <ObjectProperty type="BeyondWidget" href="/docs/api/BeyondWidget">parent</ObjectProperty>
                    Widget contenedor, retorna <span className="inline">undefined</span> sino existe un widget como
                    contenedor.
                </li>
            </ul>

            <NextLinks items={[
                ['Creación de widgets', '/docs/widgets/creation'],
                ['Widgets de tipo Page', '/docs/widgets/page',]
            ]}/>
        </>
    )
}
