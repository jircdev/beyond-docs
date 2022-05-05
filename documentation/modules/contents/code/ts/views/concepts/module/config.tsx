import * as React from 'react';
import {TypeProperty} from "../../type-property";
import {Link} from '@beyond/ui/link/code';
import {Code} from "@beyond/docs/code/code";

const tpl = `"platforms": [
    "backend",
    "web"
 ]`;

const jsonTpl = `\r{
  "name": "home",
  "platforms": [
    "backend",
    "web"
  ],
  "widget": {
    "hmr": true,
    "element": {
      "name": "home-page"
    },
    "name": "home",
    "route": "/\${content}",
    "is": "page",
    "ts": {
      "path": "/widget/ts",
      "files": [
        "*"
      ]
    }
  }
}
`;

export function ModuleConfig() {
    return (
        <>
            <h2>Configuracion de módulos </h2>

            <p>El archivo de configuracion de módulos es el <code className="inline-code">module.json</code></p>

            <Code language="json">
                {jsonTpl}
            </Code>
            <p>Las propiedades de configuración son:</p>
            <ul>
                <li><strong>name</strong> <TypeProperty type="string"/>: Define el nombre del módulo, necesario para que
                    los elementos puedan ser importados.
                </li>
                <li>
                    <strong>platforms</strong><TypeProperty type="array"/>: Define las
                    <Link href="/concepts/platforms"> plataformas</Link> soportadas por el módulo. Los valores
                    soportados
                    son los identificadores de las plataformas existentes.

                    <Code language="json">
                        {tpl}
                    </Code>
                </li>

                <li><strong>[bundle]</strong> <TypeProperty type="bundle" href="/module#bundle"/>: Refiere al nombre
                    identificador del
                    tipo de bundle que se desea agregar en el módulo.
                    Un módulo puede poseer uno o varios bundles. Cada bundle recibe un objeto de configuracíón con los
                    procesadores que utiliza y alguna variación inherita del tipo de bundle agregado.

                </li>
            </ul>
        </>
    )
}
