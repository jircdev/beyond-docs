import * as React from 'react';
import {Link} from '@beyond/ui/link/code';
import {Code} from "../../views/content/code";
import {ModalImage} from "../../views/modal-image";

const tpl = `"widget": {
    "hmr": true,
    "element": {
      "name": "web-login"
    },
    "ts": {
      "path": "/widget/ts",
      "files": [
        "*"
      ]
    }
  }`;


export function WidgetsPage() {
    return (
        <>
            <h1>Widgets</h1>


            <p> En BeyondJS, las páginas y layouts son manejados como
                <Link href="/bundles">bundles</Link> de tipo <strong>widget</strong>, Estos bundles, representan a un
                <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">
                    Web Component
                </a>, lo que quiere decir que son expuestos como etiquetas HTML que se incrustan directamente el DOM.
            </p>

            <p>Un bundle debe estar contenido en un modulo y puede ser creado desde el dashboard en la opción
                correspondiente.</p>

            <ModalImage src="/contents/static/create-module-widget.png" alt="create widget module beyond"/>
            <p>La configuración en los <Link href="/module/config">module.json</Link> se puede hacer directamente, con
                una estructura simple como la siguiente:</p>
            <Code language="json">
                {tpl}
            </Code>
            <p>Estés o no asociado con los Web Components, a continuación explicamos la ventaja de utilizar web
                components en BeyondJS</p>
            <ul>
                <li>Cada widget puede usar una suite de tecnología distinta sin interferir con el resto. Esto implica,
                    que en un mismo proyecto, podrías trabajar con React y Vue, por poner un ejemplo, sin
                    inconvenientes.
                </li>
                <li>
                    Los web components cargan modularmente sus dependencias a demanda y no tienen dependencias externas,
                    esto permite que queden disponibles para ser incluidos en otros proyectos de forma simple.
                </li>
            </ul>


            <h2>Páginas</h2>
            <p>
                Las páginas se configuran igual que cualquier widget, pero pueden tener dos parametros de configuración
                adicionales.
            </p>

            <ul>
                <li><strong>route:</strong> Representa la ruta con la que deseas poder acceder a tu componente</li>
                <li><strong>layout:</strong> es opcional y define si quieres usar un layout o no en tu página.</li>
                <li><strong>vdir</strong> es opcional. Permite definir si quieres manejar algún valor dinámico en la url
                </li>
            </ul>

            <h3>Patrón de rutas</h3>

            <p>Puedes definir urls con valores dinamicos,</p>

        </>
    )
}
