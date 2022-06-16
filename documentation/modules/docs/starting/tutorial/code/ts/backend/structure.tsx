import * as React from 'react';
import {Code} from "@beyond/docs/code/code";
import {moduleJson} from "../templates/module.json";

export function TutorialBackendStructure() {
    return (
        <>
            <p>Allí, debemos agregar la siguiente estructura:</p>
            <Code language="json">
                {moduleJson.bridge}
            </Code>
            <p>
                Nuestro <span className="inline">module.json</span> final deberia quedar con la siguiente estructura:
            </p>
            <Code language="json">
                {moduleJson.module}
            </Code>

            <h4>Explicamos lo que acabamos de hacer</h4>
            <ul>
                <li>
                    Como <span className="beyond">BeyondJS</span> es un framework
                    que garantiza el funcionamiento universal, cada módulo creado puede especificar
                    que plataformas estan soportadas por el mismo. Con la entrada
                    <span className="inline-code"> platforms</span> le especificamos que queremos que
                    nuestro módulo soporte las plataformas
                    <span className="inline-code"> web</span> y <span className="inline-code">backend</span>.
                </li>
                <li>
                    Agregamos la configuración de un bundle de tipo bridge
                    para manejar las acciones en un servicio node y la interconexión con el código
                    cliente.
                </li>
                <li>En la entrada <span className="inline-code">Bridge</span>, agregamos
                    la propiedad "path" que define el directorio relativo en donde se encontrará el código del bundle.
                </li>
            </ul>
            <p>A cotinuación, creamos una carpeta con el nombre "bridge" para que <span
                className="beyond">Beyond</span> consiga el path definido en module.json y, adentro de la carpeta
                bridge, creamos un archivo <span className="inline-code">index.ts</span> en el cual se
                agregará la lógica servidor.

            </p>

        </>
    )
}
