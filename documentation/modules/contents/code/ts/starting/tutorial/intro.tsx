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
                <p>Lo primero que debe hacerse es instalar BeyondJS de forma global, lo cual se puede hacer por medio
                    del siguiente comando:
                </p>
                <Code language="shell">
                    {`> npm i -g beyond`}
                </Code>
                <p>A continuación, podemos crear la configuración inicial de nuestro proyecto por medio del
                    paquete <span className="inline">@beyond-js/create-project</span>.
                </p>
                <Code language="shell">
                    {`> npx @beyond-js/create-project --name @test/login --type web-backend --container beyond`}
                </Code>


                <p>
                    En el comando anterior, se solicitó crear un proyecto de tipo web con backend y se le agregó como
                    scope <strong>testing</strong> y como nombre <strong>login</strong>.
                </p>

                <div className="block__note">
                    El scope y el nombre, son datos que permiten identificar el proyecto y que lo dejan listo para ser
                    publicado como paquete npm o para importarlo desde otro proyecto. Estas configuraciones pueden
                    hacerse de forma manual, el dashboard sólo simplifica el proceso. Puedes ver la explicación de ello
                    en
                    <Link href="/project/config"> la sección de Configuración de proyecto.</Link>
                </div>


                <p>Al finalizar el comando, podremos ver que se crearon los siguientes archivos, podremos ver que se
                    creó la carpeta <span className="inline">beyond</span> que definimos como container y adentro de
                    ella tendremos la siguiente estructura:</p>
                <ul>
                    <li><strong>beyond.json</strong>: Archivo para manejar el servidor de desarrollo, gestionado por
                        BeyondJS.
                    </li>
                    <li><strong>package.json</strong>: Archivo de dependencias del proyecto</li>
                    <li><strong>projects.json</strong>: Archivo de configuración de proyectos, permite a BeyondJS
                        identificar los proyectos a levantar.
                    </li>
                    <li>
                        <strong>login</strong> Carpeta del proyecto.
                        <ul>
                            <li>
                                <strong>project.json:</strong> Contiene la configuración básica del proyecto (puede
                                variar
                                según el tipo y las necesidades del mismo).

                            </li>
                            <li><strong>/modules</strong>: Carpeta en donde se crean los módulos del proyecto por
                                defecto. Este valor es configurable, puedes leer más de ello en la sección de <Link
                                    href="/docs/projects/json">Configuración de Proyectos</Link>.
                            </li>
                            <li>
                                <strong>template:</strong> Esta carpeta contiene todos los elementos necesarios para
                                definir el
                                template general del
                                proyecto.
                                <ul>
                                    <li><strong>template.json:</strong> Archivo que permite realizar ajustes en la
                                        configuración
                                        del template del proyecto.
                                    </li>
                                </ul>

                            </li>
                        </ul>
                    </li>

                </ul>

                <div className="block__note">
                    Puedes aprender más acerca de los tipos de proyecto disponibles en la sección de <Link
                    href="/docs/quick-start">Inicio Rápido</Link>.
                </div>
                <p>Luego de haber ejecutado el comando, ya estamos listos para empezar nuestro proyecto, para ello
                    ejecutamos lo siguiente.</p>
                <Code language="shell">
                    {`> npm start`}
                </Code>
            </section>
        </>
    )
}
