import * as React from 'react';
import {BeyondName} from "../../views/beyond";
import {Link} from '@beyond/ui/link/code';

export function ProjectDependencies() {
    return (
        <>
            <h1>Dependencias <BeyondName/></h1>

            <p><BeyondName/> ofrece un listado de dependencias requeridas según el tipo de proyecto que se desee
                realizar.</p>

            <h3 id="beyond-kernel">
                <span className="inline">@beyond/kernel</span>
            </h3>
            <p>Es la libreria principal de <BeyondName/>, contiene módulos para cubrir las funcionalidades bases del
                Framework. Contiene los siguientes paquetes:</p>
            <ul>
                <li><strong>bundle:</strong> utilizado por cualquier <Link href="/docs/bundles">bundle</Link>, funciones
                    comunes para ellos.
                </li>
                <li><strong>core:</strong> gestiona el manejo importacion de paquetes de forma universal.</li>
                <li><strong>routing:</strong> Contiene todas las funcionalidades asociadas al historico y navegación del
                    proyecto.
                </li>
                <li><strong>styles:</strong> Sirve para trabajar hojas de estilos de forma reactiva.</li>
                <li><strong>texts:</strong> requerido para el manejo de las funcionalidades de multilenguaje.</li>
            </ul>

            <h3 id="beyond-kernel"><span className="inline">@beyond/backend</span></h3>
            <p>
                Libreria que gestiona la parte cliente y servidor de conexión real time y bridges.
                Requerida en los proyectos de tipo <strong>node</strong> y <strong>backend</strong>.
            </p>
            <h3 id="beyond-kernel"><span className="inline">@beyond/ssr</span></h3>
            <p>Se encarga de proveer las apis para poder acceder a la información de renderizado de los widgets y disponibilizar el renderizado servidor.</p>
            <h3 id="beyond-kernel">Librerias para widgets</h3>

            <p><BeyondName/> ofrece librerias que brindan soporte al manejo de widgets para `react`, `vue` y `svelte`.
                Son requeridas en la medida en que se desee trabajar con estas tecnologías. Las librerias son
            </p>
            <ul>
                <li><span className="inline">@beyond/react-widget</span></li>
                <li><span className="inline">@beyond/vue-widget</span></li>
                <li><span className="inline">@beyond/svelte-widget</span></li>
            </ul>

        </>
    )
}
