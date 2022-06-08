import * as React from 'react';
import {BeyondName} from "../../views/beyond";
import {Link} from "@beyond/ui/link/code";
import {Code} from "@beyond/docs/code/code";

const PROJECT_NAME = '@beyond-js/create-project';
const tpl = `
"modules": {
    "path": "modules"
}`;

export function ProjectStructure() {
    return (
        <>
            <h1 id="structure">Estructura de un proyecto</h1>

            <p><BeyondName/> posee una arquitectura configurable que permite tener estructuras flexibles en los
                proyectos. Sin embargo, al crear un proyecto por medio del Dashboard o
                de <span className="inline">{PROJECT_NAME}</span>, la estructura inicial creada es la siguiente:</p>


            <ul>
                <li>Un archivo <Link className="inline" href="/docs/projects/json">project.json</Link>, con la
                    configuración del proyecto.
                </li>
                <li>Un archivo <Link className="inline" href="/docs/dev-server">beyond.json</Link> que permite
                    gestionar configuraciones para el servidor de desarrollo.
                </li>
                <li>
                    <span className="inline">template/</span>
                    Carpeta con la estructura de la plantilla del proyecto. Esta carpeta aplica para los proyectos web y
                    móvil. Puedes leer más en detalle sobre el sistema de plantillas <Link
                    href="/docs/basics/template">aqui</Link>.
                </li>
            </ul>

            <p>La estructura de carpetas puede variar y extenderse según las consideraciones del proyecto.</p>

            <h3 id="module-path">Gestión de directorios</h3>

            <p>
                <BeyondName/> sigue una estructura de directorios basada en mantener una semántica simple y concisa que
                permita al programador ubicarse a partir de los nombres de carpeta. Sin embargo, el programador puede
                tener un estandar de estructura que desee seguir, para lo cual se permite hacer cambios en la
                configuración de directorios.
            </p>

            <p>La ubicación de los módulos de un proyecto, suele estar por convención en la carpeta <span
                className="inline">modules</span>, esto se define en el <span className="inline">project.json</span>, en
                la propiedad <span className="inline">module</span>
            </p>
            <Code language="json">
                {tpl}
            </Code>
            <p>Al igual que todas las propiedades configurativas de directorios. la propiedad <span
                className="inline">module.path</span> evalúa el valor recibido de forma relativa al directorio en donde
                se encuentra, dicho en otras palabras, la carpeta <strong>modules</strong> debe encontrarse, según el
                ejemplo a la misma altura que el archivo <span className="inline">project.json</span>, si esta propiedad
                se remueve, <BeyondName/> intentará encontrar los módulos en el directorio raíz del proyecto, el cúal
                corresponde a el lugar en donde se encuentra el <span className="inline">module.json</span></p>
        </>
    )
}
