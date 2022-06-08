import * as React from 'react';
import {Code} from "@beyond/docs/code/code";

export function StylesNodeModules() {
    return (
        <>
            <h3 id="libraries-css">Node Modules</h3>

            <p>Si se requiere incluir un archivo de estilos de alguna libreria instalada en <span
                className="path">node_modules</span>, se puede importar de forma no relativa, desde el archivo del
                módulo en el que se requiera, haciendo uso del caracter <span className="inline">~</span> seguido de la
                ruta del paquete en la carpeta <span className="path">node_modules</span>
            </p>

            <p>De esta forma, supongamos que se desea trabajar con <span className="path">bootstrap</span>, podriamos
                importarlo de la siguiente forma:
            </p>
            <Code language="scss">
                @import ~bootstrap/sass/bootstrap.scss;
            </Code>

            <p>De la misma forma, si se requiere importar un archivo especifico dentro de la libreria, como el de
                <span className="inline">_variables.scss</span>, puede importarse de forma directa:
            </p>
            <Code language="scss">
                @import ~bootstrap/sass/variables.scss;
            </Code>

        </>
    )
}
