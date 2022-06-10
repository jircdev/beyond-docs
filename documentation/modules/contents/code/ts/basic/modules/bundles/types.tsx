import * as React from 'react';
import {Link} from "@beyond/ui/link/code";

export function BundlesTypes() {
    return (
        <>
            <h2 id="types">Tipos</h2>
            <ul>
                <li><strong>Widget</strong>: Contienen el código de un <code className="inline">web-component</code>.
                    Las páginas y los layouts son manejados como widgets. Puedes leer más acerca de este tipo de bundle
                    en la sección de <Link href="/widgets"> Widgets.</Link>
                </li>
                <li><strong>Code:</strong> Bundle que permite crear funcionalidades diversas para ser consumidas desde
                    otro bundle o módulo. Soporta la integración de múltiples procesadores.
                </li>
                <li><strong>TS(Typescript):</strong> sólo soporta el procesador para manejo de archivos <span
                    className="inline">typescript</span></li>
                <li><strong>Bridge:</strong> bundle de código backend, que genera código cliente y disponibiliza la
                    conexión <code className="inline">websocket</code> para conectar el cliente y el backend.
                </li>
                <li><strong>backend</strong>: sólo soporta código que va a ser ejecutado en entornos de ejecución
                    cómo <strong>Node</strong> o <strong>Rhino</strong>.
                </li>
                <li><strong>Vue:</strong> Bundle especifico para manejo de módulos con el Framework Vue.</li>
                <li><strong>Svelte:</strong> especifico para manejo de código svelte y su estructura de single file
                    component.
                </li>
                <li><strong>start:</strong> Bundle transversal, útil si se requiere ejecutar lógica en el arranque del
                    aplicativo.
                </li>
                <li><strong>txt-start:</strong> Bundle transversal, que permite manejar textos múltilenguajes requeridos
                    en el arranque del aplicativo.
                </li>

            </ul>
        </>
    )
}
