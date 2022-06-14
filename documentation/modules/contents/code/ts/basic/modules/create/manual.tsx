import * as React from 'react';
import {Link} from '@beyond/ui/link/code';
import {Code} from "@beyond/docs/code/code";
import {BeyondName} from "@beyond/docs/components/html/code";
import {NextLinks} from '@beyond/docs/components/next-links/code';

const tpl1 = `
{
    "name": "first-module",
    "platforms": [
        "web"
    ]
    "code" : {
        "ts": {
          "path": "ts",
          "files": [
            "*"
          ]
        },
        "sass": {
          "path": "scss",
          "files": [
            "*"
          ]
        }
    }
}
`;

export function ModulesManualCreation() {
    return (
        <>
            <h2 id="dashboard-creation">Creación manual</h2>
            <p>
                La configuración de módulos sigue el mismo principio que el resto de elementos configurativos
                en <BeyondName/> y debe crearse en un archivo de nombre <span className="inline">module.json</span>.
            </p>
            <p>
                El <span className="inline">module.json</span> recibe cómo mínimo dos propiedades: El nombre del módulo
                y la configuración de un bundle.
            </p>
            <Code language="json">{tpl1}</Code>
            <p>En el ejemplo anterior, se está creando un módulo de nombre <span className="inline">first-module</span>,
                con un bundle <span className="inline">code</span> que contiene un procesador <span
                    className="inline">sass</span> y un procesador <span className="inline">ts</span> que procesan
                código Sass y Typescript respectivamente y que será empaquetado para plataforma web.
            </p>

            <p>Un módulo puede contener varios bundles, estos se definen como propiedades del objeto de configuración
                del módulo y un módulo pureciben como valor un objeto de configuración que aparte de los procesadores,
                puede recibir algunas propiedades adicionales
                según el tipo de bundle. Puedes leer más en detalle sobre esto en <Link href="/docs/bundles">La
                    sección de bundles</Link>.
            </p>

            <NextLinks items={[
                ["Configuración de módulos", "/docs/modules/json"],
                ["Widgets", '/docs/widgets']
            ]}/>
        </>
    )
}
