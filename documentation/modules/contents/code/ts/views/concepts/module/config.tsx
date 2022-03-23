import * as React from 'react';
import {TypeProperty} from "../../type-property";
import {Link} from '@beyond/ui/link/code';
import {Code} from "../../content/code";

const tpl = `"platforms": [
    "backend",
    "web"
 ]`;

const jsonTpl =`\r{
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
            <h2>Configuracion de modulos </h2>

            <p>El archivo de configuracion de modulos es el <code className="inline-code">module.json</code></p>

            <Code language="json">
                {jsonTpl}
            </Code>
            <p>Las propiedades de configuración son:</p>
            <ul>
                <li><strong>name</strong> <TypeProperty type="string"/>: Define el nombre del modulo, necesario para que
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
                    tipo de bundle que se desea agregar en el modulo.
                    Un modulo puede poseer uno o varios bundles. Cada bundle recibe un objeto de configuracíón con los
                    procesadores que utiliza y alguna variación inherita del tipo de bundle agregado.

                </li>
            </ul>

            <h2>Bundles</h2>

            <p>
                Como se ha mencioando en otras partes de la web. Un bundle representa a un archivo final compilado,
                puede estar compuesto por el contenido de múltiples procesadores
            </p>
        </>
    )
}
