import * as React from 'react';
import {Link} from '@beyond/ui/link/code';
import {BeyondName} from "../../beyond";

export function Bundle() {
    return (
        <div className="content">
            <h1>Bundles</h1>
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
            <p><strong>Un bundle</strong> representa el o los archivos compilados ya listos para ser incluidos en
                el navegador. Estos archivos se componen por código generado por los procesadores incluidos en la
                configuración
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
            <h2 id="transversal">Bundles Transversales</h2>
            <p>Los bundles transversales, se definen igual que el resto de bundles, pero tienen una particularidad que
                ofrece ventajas productivas: el código de un bundle transversal es compilado en un archivo único.</p>
            <p>
                <BeyondName/> los ubica, integra y unifica en un único bundle o archivo final. Los
                bundle de tipo <span className="inline-code">start</span> son un ejemplo claro de ello, permiten al
                programador definir lógica que desea sea ejecutada en el arranque de la aplicación.
            </p>
            <h2 id="id">Tipos</h2>
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
        </div>
    )
}
