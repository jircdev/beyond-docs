import * as React from 'react';
import {Link} from '@beyond/ui/link/code';
import {ModalImage} from "../modal-image";
import {Code} from "../content/code";
import {PageCode} from "./templates/page-code";
import {pageStyles} from "./templates/page-styles";
import {PageCodeStarted} from "./templates/page-code-started";
import {moduleJson} from "./templates/module.json";

export function ModuleReview() {

    return (
        <>
            <h2 id="bundle-bridge">Lógica <strong>Backend</strong></h2>

            <p>
                Los formularios de inicio de sesion requieren, por naturaleza validar los datos contra un backend que se
                conecte a algún manejador de datos. A continuación vamos a emular la conexión a la base de datos,
                creando nuestra integración con un servicio node el cual tendrá un usuario y clave predefinidos contra
                el cual validaremos si la sesión es valida o no. Para lograrlo, haremos uso de websockets.
            </p>
            <p>
                Es necesario crear un bundle BRIDGE para crear de forma simple un servicio node y lograr la integración
                con el código cliente. Los bundles bridges, como su nombre lo indica, crean un puente de conexión entre
                el código cliente y servidor permitiendo manejar el código de manera uniforme.
            </p>
            <div className="block__note">
                NOTA: Los bridges son un feature central y muy poderoso en beyond y en este tutorial solo se muestran de
                forma superficial. Si quieres conocer más y entender como funcionan, dirigite a la seccion de bridges
                tip: La definición de bundles en el module.json se cubre completamente en la sección module.json de la
                documentación.
            </div>
            <p>

                Para agregar un bundle bridge al modulo, debemos dirigirnos al archivo de configuración (module.json),
                ubicado adentro de la carpeta home. la ruta, deberia ser
                <span className="inline-code">“proyecto/modules/home/module.json”</span>
            </p>
            <p>Allí, debemos agregar la siguiente estructura:</p>
            <Code language="json">
                {moduleJson.bridge}
            </Code>
            <p>
                Nuestro module.json final, deberia quedar con la siguiente estructura:
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
                    nuestro modulo soporte las plataformas
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
