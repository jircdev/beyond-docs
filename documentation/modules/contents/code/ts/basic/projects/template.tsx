import * as React from 'react';
import {Code} from "@beyond/docs/code/code";
import {Link} from '@beyond/ui/link/code';
import {variablesTPL} from "../styles/tpl/variables";
//
// <p>Los proyectos en <span className="beyond">BeyondJS</span>, vienen con una estructura de plantilla por
//     defecto, la misma se puede encontrar en la carpeta <span className="inline">template</span> en la raiz
//     del mismo y que internamente tiene la siguiente estructura:</p>
//
// <ul className="filelist-path">
//     <li><strong>application/</strong>: carpeta con archivos de estilos a incluir en la hoja de estilos
//         general del proyecto.
//     </li>
//     <li><strong>global</strong>: Estilaaos globales definidos para ser incluidos en los módulos.</li>
//     <li><strong>overwrites</strong>: Más información de esto puede encontrarse en la sección dedicada
//         a <Link href="/template/overwrites">
//             sobreescritura de módulos
//         </Link>
//     </li>
//     <li><strong>sass</strong>: Archivos de estilos manejados con sass y de extensión <span
//         className="inline">.scss</span>.
//     </li>
//     <li><span className="inline">template.json</span>: Archivo de configuración de la plantilla.</li>
// </ul>
export function TemplatePage() {
    return (
        <div className="content">
            <h1>Plantilla de un protecto</h1>
            <p>
                <span className="beyond">BeyondJS</span> brinda una arquitectura robusta para el manejo de plantillas en
                los proyectos, la cual cuenta con las siguientes caracteristicas:
            </p>

            <ul>
                <li><strong>Estilos: </strong> Soporte integrado de preprocesadores LESS y SASS.</li>
                <li><strong>Propiedades CSS</strong>: estructura básica de variables que permite trabajar con
                    los componentes web eficientemente.
                </li>
                <li><strong>Estilo global</strong>: Hoja de estilo global para el proyecto.</li>
                <li><strong>Sobreescritura</strong>: Esto es una característica especial que permite redefinir estilos y
                    textos de módulos existentes sin necesidad de tocar el código original.
                </li>
                <li><strong>Separación de código</strong>: Manejo independiente de los archivos de estilos con proceso
                    automatizado para la generación de archivos finales independientes y optimizados.
                </li>
                <li><strong>Light & Dark Theme</strong> integrados.</li>
            </ul>

            <h2 id="config">Configuración</h2>

            <p>Los <strong>componentes web</strong> proveen un modelo de encapsulamiento de estilos que hace que estos
                no tengan un alcance global y por tanto, no afecten otros componentes ni se vean afectadoss por estilos
                globales. Asimismo, todos comparten el acceso a las <strong>custom properties</strong>.</p>

            <p><span className="beyond">BeyondJS</span></p>
            <p>
                La configuración de la plantilla, al igual que todos los elementos en <span
                className="beyond">BeyondJS</span>, se maneja por medio de un archivo de configuración, cuyo nombre y
                ubicación es definido en el <Link href="/project/config">project.json</Link>. En general, por convención
                el nombre suele ser <span className="inline-code">template.json</span>
            </p>

            <p>La plantilla puede ser manejada desde el <strong>Dashboard</strong> y cuando
                se crea un proyecto, ya viene configurada la estructura por defecto para su manejo.
            </p>

            <h2 id="template-application">template.project</h2>

            <p>Las <strong>custom properties</strong> juegan un papel importante en el manejo de los componentes web.
                Por naturaleza, los componentes webs no se ven afectados por los estilos generales del sitio web. Sin
                embargo, las propiedades css si pueden ser accedidas y utilizadas. Esta estructura permite realizar
                componentes web que compartan los colores que necesiten de la aplicación y puedan al mismo tiempo tener
                estilos propios sin preocuparse porque estos generen colisión con el código de otros componentes.
            </p>


            <p>
                Es la configuración para elementos de estilo generales que apliquen a todo el proyecto. Teniendo en
                cuenta que <span className="beyond">BeyondJS</span> trabaja con <strong>Componentes Web</strong>, el uso
                de <i>custom properties</i> es esencial y este suele ser el lugar apropiado para definirlas, de hecho,
                por defecto vienen definidas algunas con soporte básico para definir el tema de un proyecto y su
                impplementación en modo oscuro.
            </p>
            <Code>
                {variablesTPL}
            </Code>
        </div>
    )
}
