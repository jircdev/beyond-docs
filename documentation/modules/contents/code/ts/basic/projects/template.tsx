import * as React from 'react';
import {Code} from "@beyond/docs/code/code";
import {Link} from '@beyond/ui/link/code';
import {variablesTPL} from "../styles/tpl/variables";

const tplConfig = `
"application": {
    "processor": "sass",
    "path": "application",
    "files": [
      "*"
    ]
  }
`;

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
                <span className="beyond">BeyondJS</span> brinda una arquitectura simple pero robusta para el manejo de
                plantillas en los proyectos, la cual cuenta con las siguientes caracteristicas:
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

            <p>
                La configuración de la plantilla, al igual que todos los elementos en <span
                className="beyond">BeyondJS</span>, se maneja por medio de un archivo de configuración, cuyo nombre, por
                convención es <span className="inline">template.json</span> y se ubica en la carpeta <span
                className="inline">template</span> en la raiz del proyecto. Sin embargo, tanto el nombre como la
                ubicación son valores configurables en el <Link href="/project/config">project.json</Link>.
            </p>

            <div className="block__note">La plantilla puede ser manejada desde el <Link
                href="/docs/dashboard">Dashboard</Link> y cuando
                se crea un proyecto ya viene configurada la estructura por defecto para su manejo.
            </div>

            <p>A continuación se explican las propiedades de configuración</p>

            <h2 id="template-application">template.application</h2>

            <p>Las <strong>custom properties</strong> juegan un papel importante en el manejo de los widgets.
                Los componentes webs con Shadow DOM no se ven afectados por los estilos generales del sitio web en donde
                están incluidos. Sin
                embargo, las propiedades css si pueden ser accedidas y utilizadas.
            </p>
            <p>La propiedad de configuración <span className="inline">application</span> representa al archivo de
                estilos generales del proyecto y tiene como foco principal ser el lugar en donde se definan las
                propiedades css personalizadas y cualquier estilo que se requiera aplicar al documento general, externo
                a los widgets.</p>

            <div className="block__note">
                El manejo de estilos puede verse en detalle en la sección de <Link href="/docs/styles/template">Estilos
                en la plantilla</Link>.
            </div>
            <p>la configuración de <span className="inline">template.application</span> recibe un objeto con las
                siguientes propiedades: </p>
            <Code>
                {tplConfig}
            </Code>

            <p>Cómo se puede ver en el código anterior, se puede definir tres propiedades</p>
            <ul>
                <li><span className="inline">processor</span> Procesador a utilizar. Soporta <span
                    className="inline">sass</span> y <span className="inline">less</span></li>
                <li><span className="inline">path</span> Directorio donde se encuentran los archivos, sino se define se
                    buscaran todos los archivos relativos a la ubicación del archivo de configuración.
                </li>
                <li><span className="inline">files</span>, el <span className="inline">*</span> indica que se debe tomar
                    en cuenta cualquier archivo adentro del path definido. Si se específican archivos por nombre, sólo
                    se tomara en cuenta los archivos indicados.
                </li>
            </ul>


        </div>
    )
}
