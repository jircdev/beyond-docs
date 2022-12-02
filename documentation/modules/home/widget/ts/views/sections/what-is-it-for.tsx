import * as React from "react";
export function WhatIsItFor() {
    return (
        <section className="container--800">
            <h2>Programación módular basada en paquetes universales</h2>
            <h3 className="primary-color">¿Para que sirve?</h3>
            <ul className="container--800">
                <li>Crear librerias o paquetes que esperen ser consumidos por otros equipos de desarrolladores </li>
                <li>Composite applications, microfrontends/Microservicios de forma directa </li>
                <li>Crear proyectos SPA y aplicaciones Hibridas para moviles </li>
                <li>Crear proyectos con SSR, renderizado estático o Hibrido </li>
                <li>
                    Crear soluciones con tecnología actualizada e integrarla de manera simple en proyectos
                    preexistentes.
                </li>
            </ul>
            <h3 className="primary-color">Pero hay más</h3>

            <ul className=" container--800">
                <li>Puedes consumir paquetes desde y para cualquier entorno.</li>

                <li>
                    <strong> Typescript First</strong>: genera de forma automática los tipos (archivos .d.ts) y realiza
                    un chequeo de tipos optimizado.
                </li>

                <li>
                    Cuenta con un workspace que gestiona el manejo de dependencias, el proceso deployment y el manejo de
                    errores.
                </li>

                <li>Posee *HMR* integrado y multiplataforma.</li>

                <li>Web Socket intergrado.</li>

                <li>
                    Desarrollo modular basado en modulos ES, con generación automática de importmaps y SystemJS para el
                    browser.
                </li>

                <li>
                    Desarrollo con super poderes: <strong>css, sass, vue, svelte y react</strong> integrado de forma
                    automática.
                </li>

                <li>Optimización de paquetes npm para erradicar el "npm dependency hell".</li>

                <li>Pensado para agregar tecnologías futuras y evitar obsolescencia.</li>
            </ul>
        </section>
    );
}
