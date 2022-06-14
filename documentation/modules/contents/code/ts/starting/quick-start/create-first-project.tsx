import * as React from 'react';
import {Code} from "@beyond/docs/code/code";
import {BeyondName} from "@beyond/docs/components/html/code";
import {Elink, Link} from "@beyond/ui/link/code";
import {NPXOptions} from "./npx/options";
import {NextLinks} from "@beyond/docs/components/next-links/code";

const PROJECT_NAME = '@beyond-js/create-project';

export function CreateFirstProject() {
    return (
        <>
            <h2 className="inline">{PROJECT_NAME}</h2>
            <p>
                Para empezar, posiblemente la manera más sencilla de arrancar un proyecto en <BeyondName/> sea por medio
                del <span className="inline">beyond-first-project</span>.
            </p>
            <Code>
                npx beyond-first-project -name @scope/name [-type node] [-container folderName]
            </Code>
            <NPXOptions/>

            <p>
                Al finalizar la ejecución del comando, se debió crear la estructura del proyecto y ya estaría listo para
                ser ejecutado.
            </p>

            <p>Para levantar el servidor de desarrollo, se ejecuta el siguiente comando:</p>
            <Code>
                npm start
            </Code>
            <p>
                ¡Listo! Ya se puede comenzar a programar y probar el proyecto.
                Se puede acceder al Dashboard desde <Elink
                href="http://localhost:4000">http://localhost:4000</Elink> y
                el proyecto creado se encuentra disponible en <Elink
                href="http://localhost:6500">http://localhost:6500 </Elink></p>


            <div className="block__note">
                El Dashboard es un sistema que <BeyondName/> provee para brindar al desarrollador una mejor experiencia
                de usuario. Puedes leer más sobre el <Link href="/docs/dashboard">aquí</Link>.
            </div>

            <p>A continuación, puedes leer sobre <Link href="/docs/projects/structure">la estructura de
                proyectos</Link> o seguir con la <Link href="/docs/modules/create">creación de un módulo</Link>.
            </p>

        </>
    )
}
