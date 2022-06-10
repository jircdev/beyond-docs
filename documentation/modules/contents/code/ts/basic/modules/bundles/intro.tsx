import * as React from 'react';
import {CodeBox} from "@beyond/docs/code/code";

const tpl = `
{
  "name": "icons",
  "code": {
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

export function BundlesIntro() {
    return (
        <>
            <h1 id="bundles">Bundles</h1>
            <p><strong>Un bundle</strong> representa el o los archivos compilados ya listos para ser incluidos en
                el navegador. Estos archivos se componen por código generado por los procesadores incluidos en la
                configuración y son definidos como propiedades del objeto de configuración de un módulo, el cúal se
                encuentra en el archivo <span className="inline">module.json</span> de cada módulo creado.
            </p>
            <CodeBox title="module.json">{tpl}</CodeBox>
            <p>
                El código anterior, define un bundle de tipo <span className="inline">code</span>. Un modulo puede
                contener más de un bundle, para ello solo es necesario agregar otra propiedad con el nombre del bundle
                adicional. Es importante tener en cuenta que un módulo no puede contener dos bundles de un mismo tipo.
            </p>
            <p>
                Imagina que necesitas realizar la interfaz de un formulario de registro. El formulario de registro
                podría dividirse en dos capas:
            </p>
            <ul>
                <li>la interfaz de usuario basada en el código HTML y los estilos de la pantalla.</li>
                <li>La lógica asociada a validaciones y funcionalidades.</li>
            </ul>
            <p> Para poder llevar a cabo el desarrollo, es necesario crear algunos archivos en Typescript, que incluyan
                la lógica y elementos de la interfaz y otros archivos de estilo. En <span
                    className="beyond">BeyondJS</span> esto implica trabajar con al menos, dos procesadores básicos:
                <code className="inline">ts</code> y <code className="inline">sass</code>, el primero genera código
                javascript, el segundo genera código css.
            </p>

            <p>Como se explicó anteriormente, la posibilidad de que un bundle genere uno o
                varios archivos finales, depende básicamente de los procesadores incluidos para su empaquetamiento, si
                es necesarario crear sólo código Javascript se genera un único archivo, si por el contrario se necesita
                tambien código CSS se generan dos archivos.
            </p>
            <p>
                Los bundles estan compuestos por procesadores y <span className="beyond">BeyondJS</span> ofrece la
                posibilidad a los desarrolladores de poder crear sus propios bundles.
            </p>
        </>
    )
}
