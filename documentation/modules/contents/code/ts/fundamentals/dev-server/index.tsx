import * as React from 'react';
import {BeyondName} from "@beyond/docs/components/html/code";
import {Elink} from "@beyond/ui/link/code";
import {Code} from "@beyond/docs/code/code";
import {TypeProperty} from "@beyond/docs/components/html/code";

const tpl1 = `{
  "applications": "projects.json",
  "bundles": {},
  "libraries": []
}`;

export function DevServer() {
    return (
        <>
            <h1>Servidor de desarrollo</h1>

            <p>
                El servidor de desarrollo de <BeyondName/> se inicia cuando se ejecuta el comando <span
                className="inline">beyond</span> y puede leer determinadas configuraciones a partir del archivo <span
                className="inline">beyond.json</span>, pero no es necesario para crearlo. <BeyondName/> está creado para
                que el programador trabaje haciendo uso del Dashboard y este gestiona la mayoría de las configuraciones
                habituales, que suelen tener que ver con el poder levantar algún proyecto.
            </p>

            <p>Cuando el servidor de desarrollo se levanta, el Dashboard queda disponible para ser accedido desde <Elink
                href="http://localhost:4000">http://localhost:4000</Elink> y este genera y edita el archivo <span
                className="inline">beyond.json</span> cuando se crea, edita o elimina algún proyecto.</p>
            <h2><code className="inline-code">beyond.json</code></h2>

            <Code language="json">
                {tpl1}
            </Code>

            <h3>Propiedades</h3>

            <ul>
                <li>
                    <TypeProperty type="AOC" href="/aoc">applications</TypeProperty>
                    Recibe un arreglo con la lista de proyectos o aplicaciones
                    configuradas para que <span className="beyond">Beyond</span> pueda leearlas y levantarlas. Este
                    archivo, es gestionado por <span className="beyond">Beyond</span> si se hace uso del dashboard.
                </li>
                <li><TypeProperty type="object">bundles</TypeProperty> Permite configurar la inclusión de bundles
                    creados por el programador.
                </li>
                <li>
                    <TypeProperty type="AOC" href="/aoc">libraries</TypeProperty> Arreglo de configuración de
                    librerias <span className="beyond">Beyond</span> a utilizar.
                </li>
            </ul>
        </>
    )
}
