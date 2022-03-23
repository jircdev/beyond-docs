import * as React from 'react';
import {Link} from '@beyond/ui/link/code';
import {ModalImage} from '../modal-image';
import {Code} from "../content/code";
import {PageCodeStarted} from "./templates/page-code-started";
import {pageStyles} from "./templates/page-styles";

export function HomeModule() {
    return (
        <section className="content">
            <h2 id="create-module">Modulo Inicial</h2>

            <p>El proyecto trae un modulo home creado por defecto, el cual puede navegarse directamente si se desea al
                acceder a <a href="http://localhost:6500">localhost:6500 </a> (Si colocaste otro puerto, debes
                cambiarlo).
            </p>

            <p>
                Si nos fijamos en el dashboard, podremos verlo en la lista de modulos, al hacer click en el, se abrirá
                el board del modulo. Esta pantalla nos permite ver la información general del módulo.
            </p>

            <p>La estructura del modulo es la siguiente: </p>

            <ul>

                <li><strong>widget</strong>: Carpeta en donde se encuentra el código del componente page.</li>
                <li><strong>ts</strong>:
                    <ul>
                        <li><strong>controller.tsx</strong>: Objeto controlador del componente, requerido para poder
                            montar
                            el WebComponent en el navegador.
                        </li>
                        <li><strong>views/page.tsx</strong>: Componente react que renderiza la pagina</li>
                    </ul>
                </li>
                <li><strong>scss</strong>: Carpeta para agregar estilos al modulo.</li>
                <li><strong>module.json</strong>: Archivo de configuración del módulo, acá se define que tipo de
                    bundles contiene y los tipos de procesadores que utiliza.
                </li>

            </ul>

            <h4>Manos a la obra!</h4>

            <p>Teniendo clara la estructura, lo que procede a continuación es crear el formulario de inicio de sesión y
                agregar algo de estilos, para luego continuar con la conexión al backend node.
                podremos editarlo y ver como se actualiza en realtime.
            </p>

            <h3>Creemos el Formulario</h3>

            <p>
                Si has trabajado con React, lo que viene es la parte que seguramente
                conoces mejor, con algunas sutilezas seguramente. A continuación, editaremos nuestro
                archivo page.tsx para crear un formulario de inicio de sesión y la funcionalidad básica
                para actualizar el estado.
            </p>
            <h4>Page.tsx</h4>
            <Code language="tsx">
                {PageCodeStarted}
            </Code>

            <h3>Agreguemos el estilo</h3>
            <p>
                <span className="beyond">BeyondJS</span> maneja los estilos por defecto
                con el preprocesador SASS, ahora vamos a nuestro archivo
                <span className="inline-code"> styles.scss</span> y agreguemos un poco de estilo al formulario.
            </p>
            <div className="block__note">
                SASS es un procesador en BeyondJS, si quieres leer a profundidad sobre el mecanismo de procesadores
                podrás encontrar los detalles en <Link href="/processors">La sección de procesadores.</Link>
            </div>

            <h4>styles.scss</h4>
            <Code language="scss">
                {pageStyles}
            </Code>

            <h4>Expliquemos un poco el código anterior</h4>
            <ul>
                <li>Agregamos estilo básico al formulario, los inputs, el botón de envio y para manejar un mensaje de
                    error.
                </li>
                <li>
                    <strong>Custom properties:</strong> las custom properties utilizadas, son una estructura básica
                    para manejo de variables incluidas por beyond en el <Link href="/template">Template del
                    proyecto</Link>
                </li>

            </ul>

        </section>
    )
}
