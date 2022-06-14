import * as React from 'react';
import {Code} from '@beyond/docs/code/code';
import {BeyondName} from "@beyond/docs/components/html/code";
import {Link} from '@beyond/ui/link/code';

const tpl = `
{
  "name": "project-name",
  "version": "1.0.0",
  "title": "Project title",
  "description": "Description"
  "languages": {
    "default": "en",
    "supported": [
      "en"
    ]
  },,
  "modules": {
    "path": "modules"
  }
}
`;
const tplBeyond = `
{
  "applications": [
    "path-to-project/project.json"
  ]
}
`;

export function ManualCreation() {
    return (
        <>
            <h2 id="manual-creation">Creación manual</h2>
            <p>La definición de un proyecto se hace por medio del archivo <span className="inline">project.json</span>.
            </p>
            <p>La estructura mínima necesaria para la creación de un proyecto es la siguiente:</p>

            <Code>
                {tpl}
            </Code>
            <p>
                Habiendo creado el archivo <span className="inline">project.json</span>, solo resta crear el archivo de
                configuración del servidor de <BeyondName/>, que lleva por nombre <span
                className="inline">beyond.json</span> y cuya estructura básica es la siguiente:
            </p>
            <Code>
                {tplBeyond}
            </Code>

            <p>
                La entrada <span className="inline">applications</span> es un arreglo que puede contener una lista de
                rutas relativas a archivos de configuración de proyectos.
            </p>

            <div className="block__note">
                Puedes leer más sobre las opciones de configuración de <BeyondName/> en entorno de desarrollo en la
                sección del <Link href="/docs/dev-server">Servidor de desarrollo</Link>
            </div>

        </>
    )
}
