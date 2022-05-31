import * as React from 'react';
import {BeyondName} from "../../views/beyond";
import {Link} from '@beyond/ui/link/code';
import {Code} from "@beyond/docs/code/code";

const tpl = `  "libraries": {
    "imports": [
      "@beyond-js/kernel"
    ]
  },`;
export function ImportProject2() {
    return (
        <>
            <h1>Importación de proyectos</h1>


            <p>
                Es común tener módulos que se reutilicen en distintos proyectos o soluciones. <BeyondName/> permite
                agregar este tipo de módulos en proyectos independientes que pueden ser incluidos en otro proyecto para
                que funcionen como librerias. Técnicamente cualquier proyecto en <BeyondName/> puede ser importado por
                otro.
            </p>


            <p>
                Para ejemplificarlo, podemos hablar de una solución que maneja una página web, una aplicación movil y un
                panel administrativo, todos como proyectos independientes que alimentan una misma fuente de datos.
                La importación de proyectos permite que se maneje toda la lógica de datos en un proyecto independiente
                que es utilizado por los tres aplicativos, permitiendo así reutilizar el código.
            </p>
            <p>La importación de proyectos se realiza desde el <Link href="/docs/projects/json"
                                                                     className="inline">project.json</Link>.</p>


            <p>
                Siguiendo el caso de ejemplo, el proyecto con los módulos que gestionan los datos y se conectan a la
                base
                de datos podría llamarse <span className="inline">models</span> y para importarlo en los otros
                proyectos, tendría que agregarse el siguiente código en el <span className="inline">project.json</span>
            </p>

            <Code language="json">
                {tpl}
            </Code>

        </>
    )
}
