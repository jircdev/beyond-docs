import * as React from 'react';
import {TypeProperty} from "@beyond/docs/components/html/code";
import {Link} from '@beyond/ui/link/code';
import {Code} from "@beyond/docs/code/code";
import {NextLinks} from '@beyond/docs/components/next-links/code';

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
            <h1 id="config">Configuracion de módulos </h1>

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

                <li>

                    <TypeProperty type="bundle" href="/module#bundle">
                        bundle
                    </TypeProperty>: Refiere al nombre
                    identificador del
                    tipo de bundle que se desea agregar en el módulo.
                    Un módulo puede poseer uno o varios bundles. Cada bundle recibe un objeto de configuracíón con los
                    procesadores que utiliza y alguna variación inherita del tipo de bundle agregado.

                </li>
            </ul>
            <NextLinks items={[
                ["Bundles", "/docs/bundles"],
                ["Widgets", '/docs/widgets']
            ]}/>
        </>
    )
}
