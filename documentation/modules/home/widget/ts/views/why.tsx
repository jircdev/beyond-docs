import * as React from "react";
import { BeyondIcon } from "@beyond/ui/icons";
import { AppIcon } from "@beyond/docs/ui/icons";
import { Elink, Link } from "@beyond/ui/link";

export function Why() {
    return (
        <section className="container">
            <header className="header__section">
                <h3 className="primary-color">Caracteristicas</h3>
            </header>

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
