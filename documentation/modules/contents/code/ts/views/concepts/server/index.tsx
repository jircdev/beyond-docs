import * as React from 'react';
import {Code} from "../../content/code";
import {TypeProperty} from "../../type-property";

const tpl1 = `{
  "applications": "projects.json",
  "bundles": {},
  "libraries": []
}`;

export function Server() {
    return (
        <>
            <h1 id="dev-server">Servidor de desarrollo</h1>

            <p>El servidor de desarrollo de <span className="beyond">Beyond</span> se configura por medio de un archivo
                json de configuración cuyo nombre debe ser <code className="inline-code">beyond.json</code>. Este
                documento es gestionado de forma automática por el dashboard de beyond, por tanto no es necesario
                configurarlo para empezar a trabajar en un proyecto, la presente documentación es para comprender como
                hacer configuraciones de forma manual en caso que se desee.
            </p>

            <h2><code className="inline-code">beyond.json</code></h2>

            <Code language="json">
                {tpl1}
            </Code>

            <h3>Propiedades</h3>

            <ul>
                <li><strong>applications</strong>
                    <TypeProperty type="AOC" href="/aoc"/>: Recibe un arreglo con la lista de proyectos o aplicaciones
                    configuradas para que <span className="beyond">Beyond</span> pueda leearlas y levantarlas. Este
                    archivo, es gestionado por <span className="beyond">Beyond</span> si se hace uso del dashboard.
                </li>
                <li><strong>bundles</strong> <TypeProperty type="object"/>: Permite configurar la inclusión de bundles
                    creados por el programador.
                </li>
                <li><strong>libraries</strong> <TypeProperty type="AOC" href="/aoc"/>: Arreglo de configuración de
                    librerias <span className="beyond">Beyond</span> a utilizar.
                </li>
            </ul>

        </>
    )
}
