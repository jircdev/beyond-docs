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
            <h5>¡Listo, creamos nuestro modulo!</h5>
            <p>
                Ahora, desde el aside del dashboard, podemos acceder al mismo y ver los archivos creados. Los bundles
                estan compuestos por procesadores, los procesadores son los encargados de manejar, compilar o transpilar
                y empaquetar cualquier lenguaje que utilicemos en nuestro proyecto.

            </p>
            <div className="block__note">
                Beyond soporta la posibilidad de agregar bundles y procesadores, si deseas ver la lista de procesadores
                disponibles, dirigete a la
                <Link href="/processors">Sección de procesadores</Link>
            </div>
            <div className="block__note">
                Los modulos tambien pueden crearse de manera sencilla de forma manual, si prefieres hacerlo asi, puedes
                echarle un ojo a la
                <Link href="/processors"> sección configuración manual de modulos</Link>
            </div>
            <p>
                Ya nuestra página está creada y puede ser navegable, si el puerto agregado fue 7780,
                podremos verla accediendo a <a href="http://localhost:7880">http://localhost:7880</a>.
            </p>
            <p>
                Como hemos mencionado antes, el foco del dashboard es la productividad. Es por esto, que integra
                la posibilidad de listar los modulos, navegarlos, ver los archivos que contienen y editarlos si es
                necesario.
            </p>
            <p>Si hacemos click en el preaside, en la opción de la aplicación, se desplegará el aside con la lista de
                modulos. Al hacer click en el icono de navegación del módulo (la flecha), se abrirá a continuación
                el <strong>board</strong> de detalle del módulo. Este board tiene el link de navegación del módulo, si
                lo
                presionamos,
                estaremos navegando nuestro proyecto adentro del mismo dashboard.</p>
            <ModalImage src="/home/static/module-board-edited.png" alt="Beyond module board"/>

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

            <h2>Configuración de Bridge</h2>

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
