import * as React from 'react';
import {ModalImage} from "../modal-image";
import {Link} from '@beyond/ui/link/code';
import {Code} from "../content/code";

export function TutorialIntro() {
    return (
        <>
            <h1>Tutorial: Proyecto Web </h1>

            <h2 id="before-start">Antes de Empezar</h2>
            <p>
                Este tutorial busca el flujo principal de desarrollo con <span className="beyond">Beyond</span> y
                mostrar de manera clara los beneficios que ofrece. Está creado para personas que deseen aprender
                mientras practican, por tanto, los conceptos que definen la estructura de <span
                className="beyond">Beyond</span> son abordados de forma general, con el foco de hacer un ejercicio
                rápido, conciso y claro. Si deseas ver en detalle los conceptos, podrás conseguirlos en la documentación
                cuando requieras.

            </p>
            <p>El tutorial se divide en las siguientes partes:</p>
            <ul>
                <li>El dashboard.</li>
                <li>Creación de primer modulo.</li>
                <li>Integración con backend</li>
                <li>Navegación</li>
            </ul>
            <p>
                Es ideal lo completes para que veas como en poco tiempo logras integrar código cliente y servidor,
                utilizando la misma estructura javascript.
            </p>

            <p>Antes de empezar, repasa estos conceptos para que los tengas presente a medida que avanzas</p>

            <ul>
                <li>
                    <strong>Bundle:</strong> Representa un conjunto de archivos fuentes que generan un único archivo
                    final, el cual es incluido en el navegador.

                </li>
                <li>
                    <strong>Modulo:</strong> Representa uno o multiples bundles.
                </li>
                <li>
                    <strong>Processor:</strong> Representa el procesador, compilador o transpilador de código de la
                    tecnología que se está utilizando.

                </li>
            </ul>
            <section>
                <h2>Empezando</h2>
                <p>
                    Lo primero que se debe hacer es inicializar beyond, el mismo debe estar instalado de forma global, a
                    continuación, dirigite por la consola de comando a la carpeta raiz en donde quieras manejar tus
                    proyectos, ten en cuenta que al crear un proyecto desde beyond, esté creará una carpeta adicional.
                </p>
                <p>Al estar con la línea de comandos, ubicado en tu workspace, sólo tienes que ejecutar el siguiente
                    comando: </p>
                <Code language="shell">
                    {`> beyond`}
                </Code>

                <p>Listo, con esto <span className="beyond">Beyond</span> se encuentra iniciado y estamos listos para
                    empezar utilizando el dashboard.</p>

                <div className="block__note">
                    Beyond cuenta con un dashboard, que es una herramienta muy potente y se encuentra en versión beta,
                    está creada con la intención de agilizar el proceso de creación y desarrollo del programador y será
                    usado durante el ejemplo a continuación. Por supuesto, puedes hacer la configuración de proyectos,
                    modules y cualquier cosa necesaria a través de código y podrás encontrar como en <Link
                    href="/docs-list"> La documentación.</Link>
                </div>
            </section>
        </>
    )
}
