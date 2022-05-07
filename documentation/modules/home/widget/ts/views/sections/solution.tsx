import * as React from 'react';
import {Card} from "../card";
import {Elink} from "@beyond/ui/link/code";

export function Solution() {
    return (
        <div className="container">
            <header className="header__section text-center">
                <h3>Desarrollo universal</h3>
                <span className="subtitle">El framework enfocado en hacer que las mismas herramientas y técnicas
                            funcionen para múltiples distribuciones  y tecnologías de manera simple.</span>
            </header>


            <div className="container cards__container">
                <Card title="Universal" href="/docs/backend">
                    Permite configurar distintas distribuciones para crear servicios <span
                    className="accent">Node</span>, Backends listos para conectarlos con aplicaciones cliente u otros
                    backends <span className="accent">Node</span> y paquetes <span
                    className="highlight">NPM</span> estandarizados.
                </Card>
                <Card title="Desarrollo Isomorfico" href="/docs/tutorial/web">
                    Con capacidad de crear sitios con renderizado <span className="accent">SSR</span>, <span
                    className="accent">CSR</span> o un estaticos, incluso se pueden integrar estas metodologías
                    simultaneamente por medio de módulos.

                </Card>
                <Card title="Frameworks de vistas" href="/docs/widgets">
                    Compatible con&nbsp;
                    <Elink href="https://reactjs.org" className="accent">React</Elink>,&nbsp;
                    <Elink href="https://vuejs.org/" className="accent">Vue&nbsp;</Elink> y
                    <Elink href="https://svelte.dev/" className="accent">&nbsp;Svelte</Elink>.
                    Preparado para incluir otros frameworks o librerias de gestion de vistas.
                </Card>
            </div>


            <section>
                <p className="text-center">
                    Ideal para desarrollar desde paquetes npm, como librerias o widgets hasta la creación de
                    proyectos webs con arquitectura <a target="_blank"
                                                       href="https://jamstack.org/">Jamstack</a> o con
                    Renderizado servidor (SSR), aplicaciones moviles con <a target="_blank"
                                                                            href="https://cordova.apache.org/">Cordova</a>,
                    servicios o backends en <a href="https://nodejs.org/en/" target="_blank">NodeJS</a> que
                    pueden
                    intercomunicarse entre ellos de forma automática por medio de websockets.
                </p>
            </section>
        </div>
    )
}
