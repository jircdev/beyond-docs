import * as React from 'react';
import {BeyondName} from "../../views/beyond";
import {Link} from "@beyond/ui/link/code";

const PROJECT_NAME = '@beyond-js/create-project';

export function ProjectStructure() {
    return (
        <>
            <h1 id="structure">Estructura de un proyecto</h1>

            <p><BeyondName/> posee una arquitectura configurable que permite tener estructuras flexibles en los
                proyectos. Sin embargo, al crear un proyecto por medio del Dashboard o
                de <span className="inline">{PROJECT_NAME}</span>, la estructura inicial creada es la siguiente:</p>


            <h3>Estructura</h3>

            <p>Este comando crea la siguiente estructura:</p>

            <ul>
                <li>Un archivo <Link className="inline" href="/docs/project/json">project.json</Link>, con la
                    configuración del proyecto.
                </li>
                <li>Un archivo <Link className="inline" href="/docs/beyond/json">beyond.json</Link> que permite
                    gestionar configuraciones para el servidor de desarrollo.
                </li>
                <li><span className="inline">modules/</span> Carpeta en donde se encuentran los módulos del proyecto. La
                    ubicación de los módulos es configurable en el <Link href="/docs/projects/json"
                                                                         className="inline">project.json</Link> del
                    proyecto.
                </li>
            </ul>
        </>
    )
}
