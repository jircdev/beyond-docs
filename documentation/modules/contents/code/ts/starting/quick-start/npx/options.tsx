import * as React from 'react';
import {Link} from "@beyond/ui/link/code";
import {BeyondName} from "@beyond/docs/components/html/code";
import {Code} from "@beyond/docs/code/code";

export function NPXOptions() {
    return (
        <>
            <h3>Opciones del comando</h3>
            <p>
                A continuación se listan las banderas que pueden ser utilizadas al instalar <span
                className="inline">.beyond-first-project</span>.
            </p>
            <ul>
                <li>
                    <span className="inline">--name</span>:
                    Permite definir el <strong>scope</strong> y <strong>nombre</strong> del proyecto. Los proyectos,
                    siguen el estandar de <strong>NPM</strong>, puedes leer más sobre ello <Link
                    href="/docs/intron#projects">aquí</Link>.
                </li>
                <li>
                    <span className="inline">--type</span>: Permite definir el tipo de proyecto a crear, es opcional,
                    sino se pasa se crea un proyecto de tipo web por defecto. Los valores
                    aceptados son:
                    <ul>
                        <li>web</li>
                        <li>node</li>
                        <li>backend</li>
                        <li>library</li>
                        <li>web-backend</li>
                    </ul>
                    <div className="block__note">Puedes leer más información sobre los tipos de proyecto <Link
                        href="/docs/projects/types">aquí</Link>.
                    </div>
                </li>
                <li><span className="inline">--container</span>: Permite especificar si se desea agregar una carpeta
                    contenedora
                    de proyectos. Recuerde que <BeyondName/> soporta la posibilidad de manejar múltiples proyectos en
                    simultáneo.
                </li>


            </ul>
            <p>Para ejemplificar, se puede imaginar que se necesita crear un proyecto <span
                className="inline">login</span> de
                tipo <strong>node</strong>, lo podriamos crear con el siguiente comando:</p>
            <Code>
                {`> npx create-first-project -name @scope/name -type node`}
            </Code>
        </>
    )
}
