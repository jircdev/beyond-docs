import * as React from 'react';
import {Card} from "../card";
import {Elink} from "@beyond/ui/link/code";

export function Solution() {
    return (
        <div className="container">
            <header className="header__section text-center">
                <h3>Desarrollo universal</h3>
                <span className="subtitle">
                    Enfocado en hacer que las mismas herramientas y técnicas
                            funcionen para múltiples distribuciones  y tecnologías de manera simple y en  la creación
                    de micro servicios y micro frontends.
                </span>
            </header>


            <div className="container cards__container">
                <Card title="Typescript Universal" href="/docs/backend">
                    Diseñado para crear desde un mismo proyecto, múltiples distribuciones como sitios web,
                    aplicaciones <Elink href="https://cordova.apache.org/">Córdova</Elink>, <Elink
                    href="https://docs.npmjs.com/packages-and-modules">paquetes NPM</Elink> y código <Elink
                    href="https://nodejs.org">Node</Elink>.
                </Card>
                <Card title="Desarrollo Isomorfico" href="/docs/tutorial/web">
                    Listo para publicar sitios estáticos, <strong>SSR</strong>, <strong>CSR</strong> o
                    arquitecturas <Elink href="https://jamstack.org/">Jamstack</Elink> y con posibilidad de
                    usarlas en conjunto por medio de <Elink href="https://micro-frontends.org/">micro frontends</Elink>.


                </Card>
                <Card title="Frameworks de vistas" href="/docs/widgets">
                    Compatible con&nbsp;
                    <Elink href="https://reactjs.org">React</Elink>,&nbsp;
                    <Elink href="https://vuejs.org/">Vue</Elink> y <Elink
                    href="https://svelte.dev/">Svelte</Elink>.
                    Preparado para incluir otros frameworks o librerias de gestion de vistas.
                </Card>
            </div>


        </div>
    )
}
