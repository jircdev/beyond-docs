import * as React from 'react';
import {Code} from "@beyond/docs/code/code";
import {BeyondName} from "../../views/beyond";
import {Elink, Link} from "@beyond/ui/link/code";

const PROJECT_NAME = 'beyond-first-project';

export function CreateFirstProject() {
    return (
        <>
            <h2 className="inline">{PROJECT_NAME}</h2>
            <p>La forma más simple de empezar un proyecto en <BeyondName/> es por medio del <span
                className="inline">beyond-first-project</span>.
            </p>
            <Code>
                npx github:beyondjs/first-app [folderName]
            </Code>

            <p>Este comando se encarga de realizar la instalación de un proyecto <BeyondName/> y la inicialización del
                servidor de desarrollo de forma automática. Cuándo la ejecución del comando finaliza, el servidor de
                desarrollo queda levantado y se puede acceder al Dashboard en <Elink
                    href="http://localhost:4000">http://localhost:4000</Elink>.
            </p>

            <div className="block__note">
                El Dashboard es un sistema que <BeyondName/> provee para brindar al desarrollador una mejor experiencia
                de usuario. Puedes leer más sobre el <Link href="/docs/dashboard">aquí</Link>.
            </div>

            <p>Por defecto se crea un proyecto de tipo web, si se desea especificar otro tipo de proyecto, se puede
                pasar el flag <span className="inline">--type</span> con el valor que se desee.</p>

            <div className="block__note">
                Luego de tener <BeyondName/> instalado de forma global, los proyectos pueden crearse directamente desde
                el Dashboard, solo se necesita ejecutar el comando <span className="inline">beyond</span> desde la línea
                de comandos en la carpeta en la que se desee trabajar.
            </div>
            <h3>Opciones del comando</h3>
            <p>
                A continuación se listan las banderas que pueden ser utilizadas al instalar <span
                className="inline">.beyond-first-project</span>.
            </p>


            <ul>
                <li>
                    <span className="inline">-name</span>:
                    Permite definir el <strong>scope</strong> y <strong>nombre</strong> del proyecto.
                </li>
                <li>
                    <span className="inline">-type</span>: permite identificar el tipo de proyecto a crear, los valores
                    aceptados son:
                    <ul>
                        <li>web</li>
                        <li>node</li>
                        <li>backend</li>
                        <li>library</li>
                        <li>web-backend</li>
                    </ul>
                    <div>Puedes leer más información sobre los tipos de proyecto <Link
                        href="/docs/projects/types">aquí</Link>.
                    </div>
                </li>
                <li><span className="inline">-container</span>: Permite especificar si se desea agregar una carpeta
                    contenedora
                    de proyectos. Recuerde que <BeyondName/> soporta la posibilidad de manejar múltiples proyectos en
                    simultáneo.
                </li>


            </ul>

            <p>Para ejemplificar, imaginemos que se desea crear un proyecto <span className="inline">login</span> de
                tipo web, lo podriamos crear con el siguiente comando:</p>

            <Code>
                npx github:beyondjs/first-app --name login --d web
            </Code>
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

            <p>Ahora solo es necesario ejecutar el siguiente comando asegurandose de estar en la carpeta del
                proyecto</p>
            <Code language="json">
                {`> beyond`}
            </Code>

            <p>
                ¡Listo! ya podemos navegar nuestro primer proyecto web con <BeyondName/> accediendo a <Elink
                href="http://localhost:3000">http://localhost:4000</Elink> y al <Link
                href="/docs/dashboard">Dashboard</Link> accediendo a <Elink
                href="http://localhost:4000">http://localhost:4000</Elink>
            </p>


        </>
    )
}
