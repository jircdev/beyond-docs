import * as React from 'react';
import {Code} from "@beyond/docs/code/code";
import {Link} from '@beyond/ui/link/code';
import {variablesTPL} from "./tpl/variables";
import {SASSVAriables} from "./tpl/sass-variables";

const tplProcessor = `\r{
    ...
    "sass": {
        "path": "sass",
        "files": ["*"]
    },
    ...
}
`

export function StylesPage() {
    return (
        <div className="content">
            <h1>Manejo de estilos</h1>

            <p>El manejo de estilos es parte esencial de todo proyecto con tecnología web. <span
                className="beyond">BeyondJS</span> maneja varias definiciones a nivel de estructura, que pueden resultar
                interesantes para el desarrollador. A continuación y cómo introducción, se mencionan los puntos a tener
                en cuenta.</p>

            <h2 id="module-styles">Estilos en el módulo</h2>
            <p>Se puede definir estilos en cada módulo/bundle creado. Para esto debe agregarse el procesador de
                estilo <code className="inline">SASS</code>, el cual viene incluido por defecto en los bundles de
                tipo <Link href="/bundles#page"><span className="inline">widget</span></Link> y
                <Link href="/bundles#code"><span className="inline">code</span></Link> si son creados desde el
                <Link href="/dashboard">Dashboard</Link>.

            </p>
            <p>Si la configuración del bundle se hace de forma manual, el programador debe asegurarse de
                agregar el procesador en el <Link href="/module/config">archivo de configuración</Link>, con una
                estructura como la siguiente:
            </p>
            <Code>
                {tplProcessor}
            </Code>

            <p>
                En la configuración anterior, se está definiendo que en el módulo existe una carpeta sass, con ubicación
                relativa al archivo <span className="inline">module.json</span> y que todos los archivos de esta carpeta
                deben ser tomados en cuenta como archivos de estilo. De esta forma, <strong>no es requerido hacer
                imports con semántica de javascript de archivos externos en nuestro código</strong>.
            </p>

            <h2 id="template-styles">Estilos en el <span className="inline">template</span></h2>
            <p>las <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*" target="_blank"> custom properties</a>,
                son el único medio para compartir valores css entre componentes web y beyond recomienda agregar estas en
                la estructura de archivos que generan el <span className="inline">styles.css</span> general del
                proyecto, de hecho incorpora una serie de variables por defecto.</p>

            <p>La configuración de la plantilla al igual que los módulos, funciona por medio de procesadores, pero
                básicamente permite configurar estilos para tres niveles:</p>
            <ul>
                <li><span className="inline">"application"</span>: Estilos generales de la aplicación</li>
                <li><span className="inline">"global"</span>: Estilos que son incluidos y quedan disponibles en
                    cualquier bundle que tenga el mismo procesador de estilos.
                </li>
                <li><span className="inline">"processors"</span>: Diseñado para agregar funcionalidades de
                    preprocesadores que no impriman código, como <span className="inline">mixins</span>, <span
                        className="inline">funciones</span> o <span className="inline">variables</span>
                </li>
            </ul>


            <p>Los proyectos en <span className="beyond">BeyondJS</span>, vienen con una estructura de plantilla por
                defecto, la misma se puede encontrar en la carpeta <span className="inline">template</span> en la raiz
                del mismo y que internamente tiene la siguiente estructura:</p>

            <ul className="filelist-path">
                <li><strong>application/</strong>: carpeta con archivos de estilos a incluir en la hoja de estilos
                    general del proyecto.
                </li>
                <li><strong>global</strong>: Estilaaos globales definidos para ser incluidos en los módulos.</li>
                <li><strong>overwrites</strong>: Más información de esto puede encontrarse en la sección dedicada
                    a <Link href="/template/overwrites">
                        sobreescritura de módulos
                    </Link>
                </li>
                <li><strong>sass</strong>: Archivos de estilos manejados con sass y de extensión <span
                    className="inline">.scss</span>.
                </li>
                <li><span className="inline">template.json</span>: Archivo de configuración de la plantilla.</li>
            </ul>

            <h2 id="custom-properties">Propiedades <span className="inline">CSS</span></h2>

            <p>Las propiedades css incluidas por defecto son:</p>
            <Code language="css">
                {variablesTPL}
            </Code>

            <h2 id="sass-variables">Variables <span className="inline">SASS / SCSS</span></h2>

            <p>
                Se provee la misma lista de variables definidas como <strong>custom properties</strong> como variables
                para sass. Estas por defecto, se encuentran disponibles a nivel de procesadores y no requieren ser
                importadas.
            </p>

            <h3 id="libraries-css">Node Modules</h3>

            <p>Si se requiere incluir un archivo de estilos de alguna libreria instalada en <span
                className="path">node_modules</span>, se puede importar de forma no relativa, desde el archivo del
                módulo en el que se requiera, haciendo uso del caracter <span className="inline">~</span> seguido de la
                ruta del paquete en la carpeta <span className="path">node_modules</span>
            </p>

            <p>De esta forma, supongamos que se desea trabajar con <span className="path">bootstrap</span>, podriamos
                importarlo de la siguiente forma:
            </p>
            <Code language="scss">
                @import ~bootstrap/sass/bootstrap.scss;
            </Code>

            <p>De la misma forma, si se requiere importar un archivo especifico dentro de la libreria, como el de
                <span className="inline">_variables.scss</span>, puede importarse de forma directa:
            </p>
            <Code language="scss">
                @import ~bootstrap/sass/variables.scss;
            </Code>

            <h3>Importación de estilos de un <span className="inline">bundle</span></h3>

            <p>
                la importación de módulos de estilo es considerada en <span className="beyond">BeyondJS</span> como una
                importación no relativa, por tanto sigue las mismas reglas de importación de un archivo existente en una
                libreria de npm, pero la ruta de inclusión en este caso, sigue la estructura de nombres de los módulos
                realizados con el framework, que como hemos visto antes, puede estar compuesta por <span
                className="inline">@scope/name</span>, donde el scope es opcional.
            </p>

            <p>Para ejemplificarlo, imaginemos que se tiene un <strong>módulo</strong> llamado <i>form</i>, que incluye
                un bundle <span className="inline">code</span>, el cúal define componentes de un formulario y se
                requiere importar los estilos desde otro módulo. en el módulo, se creo un archivo
                <span className="inline">sass</span> que define estilos para los labels, cuyo nombre es <span
                    className="inline">labels.scss</span>
                La línea de importación sería:
            </p>
            <Code language="scss">
                @import ~@scope/project-name/form/sass/scss/label.scss;
            </Code>


        </div>
    )
}
