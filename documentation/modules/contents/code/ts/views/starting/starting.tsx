import * as React from 'react';
import {Code} from "@beyond/docs/code/code";
import {Before} from "./before";
import {Project} from "./project";


export function Starting() {
    return (
        <>
            <section className="content" id="beyond">
                <h2 id="que-es-beyond">¿Que es BeyondJS?</h2>

                <p>
                    BeyondJS es un meta-framework para el desarrollo de aplicaciones con tecnología web, focalizado en
                    permitir de una manera sencilla la posibilidad de utilizar Javascript como un lenguaje universal,
                    que es
                    en definitiva, su comportamiento por naturaleza pero que, debido a la diversidad de usos y
                    herramientas
                    existentes no existe hoy una forma sencilla de crear proyectos que si sean universales.
                </p>
                <h3>Goals</h3>
                <ul>
                    <li>
                        Crear proyectos compatibles con cualquier entorno, utilizando el mismo criterio de desarrollo.
                    </li>
                    <li>Permitir que los paquetes, proyectos, librerias puedan ser consumidos de forma directa desde
                        cualquier otro proyecto una vez realizada su publicación, sin necesidad de pasar por algún
                        proceso
                        de transpilación.
                    </li>
                    <li>Foco en la productividad: Integrar todas las herramientas necesarias para el desarrollo de
                        manera eficiente. (Desarrollar)
                    </li>
                </ul>

            </section>
            <Before/>
            <Project/>
        </>
    )
}
