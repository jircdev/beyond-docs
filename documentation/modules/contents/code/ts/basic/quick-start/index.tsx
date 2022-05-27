import * as React from 'react';
import {BeyondName} from "../../views/beyond";
import {Link} from "@beyond/ui/link/code";

export function QuickStart() {
    return (
        <>
            <h1>Comienzo rápido</h1>


            <p>
                En <BeyondName/> se puede crear proyectos de dos maneras, por medio
                del <Link href="/docs/dashboard" className="inline"> Dashboard </Link> o con una configuración mínima
                realizada de forma manual.
            </p>

            <h2 id="Dashboard">

                <div className="block__notes note--required note-info">
                    <h4>Pre-requisitos</h4>
                    <ul>
                        <li>Conocimientos de línea de comandos</li>
                        <li></li>
                    </ul>
                </div>
            </h2>
            <p>

            </p>

        </>
    )
}
