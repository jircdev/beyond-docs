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

export function Page({uri, component}): JSX.Element {

    return (
        <>
            <Header/>
            <main>
                <div className="container cards__container">
                    <Card title="Node y NPM" href="/docs/intro">
                        Puedes crear proyectos node y servicios que se comuniquen con aplicaciones
                        clientes o entre ellos, tambien paquetes npm

                    </Card>
                    <Card title="Web Y Móvil" href="/docs/intro">
                        Listo para desarrollo web con <span className="accent">SSR</span> y <span
                        className="accent">CSR</span>

                    </Card>
                    <Card title="Frameworks de vistas" href="/docs/intro">
                        Listo para usar con
                        <span className="accent">React</span>
                        <span className="accent">Vue</span> y
                        <span className="accent">Svelte</span>.
                        Listo tambien para agregar otros framworks o librerias de gestion de vistas.
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

