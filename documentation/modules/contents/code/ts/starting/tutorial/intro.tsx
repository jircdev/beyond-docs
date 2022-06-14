import * as React from 'react';
import {BeyondName} from "@beyond/docs/components/html/code";
import {Link} from '@beyond/ui/link/code';
import {Code} from "@beyond/docs/code/code";

export function TutorialIntro() {
    return (
        <>
            <h1>Tutorial: Proyecto Web </h1>

            <h2 id="before-start">Antes de Empezar</h2>
            <p>
                Este tutorial busca el flujo principal de desarrollo con <BeyondName/> y
                demostrar de manera clara los beneficios que este ofrece.
                Está creado para personas que deseen aprender mientras practican, por tanto, los conceptos que definen
                la estructura de <BeyondName/> son abordados de forma general, focalizando en
                hacer un ejercicio rápido, conciso y claro. Para mayor detalle los conceptos estarán disponbiles en la
                documentación cuando sea requerida.

            </p>
            <p>El tutorial se divide en las siguientes partes:</p>
            <ul>
                <li>El dashboard.</li>
                <li>Creación de primer módulo.</li>
                <li>Integración con backend.</li>
                <li>Enrutamiento.</li>
            </ul>
            <p>
                Sugerimos que este sea completado para demostrar como en poco tiempo se logra integrar código cliente y
                servidor,
                utilizando la misma estructura JavaScript.
            </p>

            <p>Antes de empezar, recomendamos la revisión de los siguientes conceptos para que estén presentes a medida
                que se avanza.</p>

            <ul>
                <li>
                    <strong>Bundle:</strong> Representa un conjunto de archivos fuentes que generan un único archivo
                    final, el cual es incluido en el navegador.

                </li>
                <li>
                    <strong>Módulo:</strong> Representa uno o múltiples bundles.
                </li>
                <li>
                    <strong>Processor:</strong> Representa el procesador, compilador o transpilador de código de la
                    tecnología que se está utilizando.

                </li>
            </ul>
            <section>
                <h2 id="starting">Empezando</h2>
                <p>
                    Lo primero que debes hacer es inicializar <BeyondName/>. Sí lo instalaste
                    de forma global, sólo debes ejecutar el comando <BeyondName/> desde la
                    consola, ubicado en la carpeta que definas cómo raiz de tus proyectos.
                    Ten en cuenta que al crear un proyecto desde el dashboard, deberás definirle un nombre
                    y <BeyondName/> creará en tu directorio raiz una carpeta para tu proyecto con el nombre que hayas definido.
                </p>
                <p>Al estar con la línea de comandos, ubicado en tu workspace, sólo tienes que ejecutar el siguiente
                    comando: </p>
                <Code language="shell">
                    {`> beyond`}
                </Code>

                <p>Listo, ahora <BeyondName/> se encuentra iniciado y estamos listos para
                    empezar utilizando el dashboard.</p>

                <div className="block__note">
                    <div className="beyond">BeyondJS</div>
                    cuenta con un dashboard (actualmente en versión beta), que es una herramienta muy potente, creada
                    con la intención de agilizar el proceso de creación y desarrollo del programador y será
                    usado durante el ejemplo a continuación. El Dashboard se encuentra en versión Beta.
                    Por supuesto, puedes hacer la configuración de proyectos,
                    modules y cualquier cosa necesaria a través de código. Puedes encontrar como en <Link
                    href="/project/config"> La documentación.</Link>
                </div>
            </section>
        </>
    )
}
