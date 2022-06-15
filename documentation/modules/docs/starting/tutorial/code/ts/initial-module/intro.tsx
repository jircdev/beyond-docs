import * as React from 'react';
import {Elink, Link} from "@beyond/ui/link/code";

export function DashboardIntro() {
    return (
        <>
            <span className="subtitle">Tutorial</span>
            <h2 id="create-module">Módulo Inicial</h2>
            <p>El proyecto trae un módulo <span className="inline">home</span> creado por defecto. Puedes verlo
                accediendo desde el navegador a <Elink href="http://localhost:6500"
                                                       target="_blank">localhost:6500 </Elink>
            </p>
            <div className="block__note">El puerto se define en el archivo <span className="inline">project.json</span>,
                puedes leer más sobre ello
                en la sección de <Link href="/docs/projects/json">Configuración de Proyectos</Link>.
            </div>

            <p>La estructura del módulo es la siguiente: </p>
            <ul>

                <li><strong>widget</strong>: Carpeta en donde se encuentra el código del componente <span
                    className="inline">page</span></li>
                <li><strong>ts</strong>:
                    <ul>
                        <li><strong>controller.tsx</strong>: Objeto controlador del componente, requerido para poder
                            montar
                            el WebComponent en el navegador.
                        </li>
                        <li><strong>views/page.tsx</strong>: Componente react que renderiza la página</li>
                    </ul>
                </li>
                <li><strong>scss</strong>: Carpeta para agregar estilos al módulo.</li>
                <li><strong>module.json</strong>: Archivo de configuración del módulo (Lugar para definir tipo de
                    bundles y procesadores a utilizar).
                </li>

            </ul>
            <h4>¡Manos a la obra!</h4>

            <p>Teniendo clara la estructura, lo que procede a continuación es crear el formulario de inicio de sesión y
                agregar algo de estilos, para luego continuar con la conexión al backend node.
            </p>

        </>
    )
}
