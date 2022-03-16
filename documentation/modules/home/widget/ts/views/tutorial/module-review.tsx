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
            <h2>Bundle Bridge</h2>

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
                forma superficial. Si quieres conocer más y entender como funcionan, dirigitete a la seccion de bridges
                tip: La definición de bundles en el module.json se cubre completamente en la sección module.json de la
                documentación.
            </div>
            <p>
                Para crear nuestro bundle bridge, debemos dirigirnos al archivo de configuración de nuestro modulo, el
                module.json ubicado adentro de la carpeta home. la ruta, si se siguió este tutorial, deberia ser
                <span className="inline-code">“proyecto/modules/home/module.json”,</span>
                allí, debemos agregar la siguiente estructura:

            </p>
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
                    que garantiza el funcionamiento universal, cada modulo creado puede especificar
                    que plataformas estan soportadas por el mismo. Con la entrada <span
                    className="inline-code">platforms</span>
                    le especificamos que queremos que nuestro modulo soporte las plataformas
                    <span className="inline-code">web</span> y <span className="inline-code">backend</span>
                </li>
                <li>
                    Agregamos la configuración para generar un bundle de tipo bridge, que como mencionamos antes
                    es un bundle especial que maneja acciones en un servicio node y genera el código
                    para poder consumirlo desde el código cliente.
                </li>
            </ul>

        </>
    )
}
