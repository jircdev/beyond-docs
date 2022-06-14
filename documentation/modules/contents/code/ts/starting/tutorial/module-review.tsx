import * as React from 'react';
import {Link} from '@beyond/ui/link/code';
import {ModalImage} from "@beyond/docs/components/html/code";
import {Code} from "@beyond/docs/code/code";
import {PageCode} from "./templates/page-code";
import {pageStyles} from "./templates/page-styles";
import {PageCodeStarted} from "./templates/page-code-started";
import {moduleJson} from "./templates/module.json";

export function ModuleReview() {

    return (
        <>
            <h2 id="bundle-bridge">Lógica <strong>Backend</strong></h2>

            <p>
                Por su naturaleza, Los formularios de inicio de sesión requieren validar los datos contra un backend que
                se conecte a algún manejador de datos. A continuación, vamos a emular la conexión a la base de datos,
                creando nuestra integración con un servicio node, que tendrá un usuario y clave predefinidos y así,
                podremos revisar si la sesión es válida o no. Para lograrlo, haremos uso de websockets.
            </p>
            <p>
                Es necesario crear un bundle BRIDGE para crear de forma simple un servicio node y lograr la integración
                con el código cliente. Los bundles bridges, como su nombre lo indica, crean un puente de conexión entre
                el código cliente y servidor permitiendo manejar el código de manera uniforme.
            </p>
            <div className="block__note">
                NOTA: Los bridges son un feature central y muy poderoso en <div className="beyond">BeyondJS</div> y en
                este tutorial solo se muestran de
                forma superficial. Si quieres conocer más y entender cómo funcionan, dirígite a la seccion de bridges.
            </div>
            <div className="block__note">
                Tip: La definición de bundles en el module.json se cubre completamente en la sección module.json de la
                documentación.
            </div>
            <p>

                Para agregar un bundle bridge al módulo, debemos dirigirnos al archivo de configuración (module.json),
                ubicado dentro de la carpeta home. La ruta debería ser
                <span className="inline-code">“proyecto/modules/home/module.json”</span>
            </p>
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
