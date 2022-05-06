import * as React from 'react';
import {Header} from "./header";
import {Card} from "./card";
import {BeyondIcon} from "@beyond/ui/icons/code";
import {ConfigModule} from "./sections/config-module";
import {Realtime} from "./sections/realtime";
import {SVGS} from "../icons";
import {DX} from "./sections/dx";
import {Footer} from "./footer";
import {Technologies} from "./sections/technologies";
import {Solution} from "./sections/solution";
import {Elink, Link} from '@beyond/ui/link/code';

export function Page({uri, component}): JSX.Element {

    return (
        <>
            <Header/>
            <main>
                <div className="container cards__container">
                    <Card title="Node y NPM" href="/docs/backend">
                        Puedes crear proyectos node y servicios que se comuniquen con aplicaciones
                        clientes o entre ellos, tambien paquetes npm
                    </Card>
                    <Card title="Web Y Móvil" href="/docs/tutorial/web">
                        Listo para desarrollo web con <span className="accent">SSR</span> y <span
                        className="accent">CSR</span> y webs estaticas. Con capacidad de mezclar estas funcionalidades
                        por modulo.

                    </Card>
                    <Card title="Frameworks de vistas" href="/docs/widgets">
                        Listo para usar con&nbsp;
                        <Elink href="https://reactjs.org" className="accent">React</Elink>,&nbsp;
                        <Elink href="https://vuejs.org/" className="accent">Vue&nbsp;</Elink> y
                        <Elink href="https://svelte.dev/" className="accent">&nbsp;Svelte</Elink>.
                        Pensado para agregar otros framworks o librerias de gestion de vistas.
                    </Card>
                </div>

                <Solution/>
                <Technologies/>
                <div className="container">
                    <ConfigModule/>
                    <Realtime/>
                    <DX/>
                </div>
                <Footer/>
            </main>

        </>
    )
}

