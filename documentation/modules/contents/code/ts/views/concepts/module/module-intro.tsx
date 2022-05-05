import * as React from 'react';
import {Code} from "@beyond/docs/code/code";
import {ModuleConfig} from "./config";
import {Link} from "@beyond/ui/link/code";

const exportTpl = `
export /*bundle*/ class Auth {
    //....
}`

export function ModuleIntro() {
    return (
        <>
            <h1 id="intro">Introducción</h1>

            <p> En <span className="beyond">BeyondJS</span> los módulos
                representan la unidad básica de desarrollo y tienen <strong>características</strong> que es necesario
                tener presente. Para poder entender bien las diferencias y ventajas del
                ecosistema de módulos de Beyond, es necesario antes repasar como funcionan los módulos de Javascript y
                como se integran en el proceso de desarrollo en la actualidad.
            </p>
            <p>Un
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules" target="_blank">
                    módulo javascript
                </a>hoy es representado por un único archivo, con tareas independientes y un scope
                propio, Este módulo puede exportar elementos y ser importado por otros módulos que consumen las
                variables, objetos o funciones que este provee.
            </p>

            <p>Los empaquetadores por su parte, suelen utilizar una sintaxis compatible con las imports de ecmascript 6,
                pero son ellos quienes se encargan de analizar el arbol de dependencias, quitando aquellos elementos que
                no son utilizados en el codigo y
                <strong> generando un “bundle”</strong> que es a su vez, un contenedor de todos los
                módulos utilizados por el equipo de desarrollo.
            </p>

            <p>En <span className="beyond">BeyondJS</span>, el concepto de módulo es un poco más abarcativo y se divide
                en dos: Módulos y Módulos Internos. </p>

            <h2 id="internal-modules">Módulos Internos</h2>
            <p>
                Representan el concepto de módulos javascript conocido, con la diferencia de que el programador
                puede definir si estos quedan disponbiles para ser consumidos desde un módulo externo o no. Esto se
                logra por medio del comentario mágico <span className="inline-code">/*bundle*/</span> que se coloca en
                la exportación.
            </p>
            <Code language="typescript">
                {exportTpl}
            </Code>
            <p>
                Los módulos internos, pueden ser importados por cualquier otro módulo interno por medio de la ruta
                relativa del archivo.
            </p>


            <h2 id="modules">Módulos</h2>

            <p>
                Como se comentó antes, representan la unidad minima de desarrollo de <span
                className="beyond">BeyondJS</span> y está compuesto por todos los módulos internos que requiera</p>
            <p>Esto permite que el concepto de módulo en <span className="beyond">BeyondJS</span> se acerque más a la
                definición de un módulo en la informática general, donde este representa una
                funcionalidad dentro de un programa o sistema. Aunque los módulos javascript son compatibles con este
                concepto, en la practica un módulo (bajo e concepto informático) de un proyecto, aplicación o libreria
                contiene todo un conjunto de módulos javascript (módulos internos en <span
                    className="beyond">BeyondJS</span>), en conjunto con el resto de herramientas y tecnologías que se
                requieran para componerlo, como estilos, imagenes o texto.</p>


            <p>En otras palabras, en <span className="beyond">BeyondJS</span> es el contenedor de todas las herramientas
                y tecnologías necesarias para garantizar el funcionamiento completo de una funcionalidadrepresenta una
                funcionalidad desarrollada y donde el programador tiene la capacidad de definir que desea exportar para
                que pueda ser consumido de forma externa y que no.</p>


            <h2 id="work-in">Trabajando con módulos</h2>
            <p>Los módulos deben estar
                contenidos en un proyecto y son consumidos por este, pero tambien pueden ser consumidos
                por otros proyectos que los importen como bibliotecas.
            </p>

            <p><span className="beyond">BeyondJS</span> gestiona la importación de módulos a través de la
                especificación <strong>npm</strong> que permite definir la estructura
                <code className="inline-code">@scope/nombre-proyecto/nombre-módulo</code>. El <span
                    className="inline-code">scope</span> es un valor opcional y en conjunto con el <span
                    className="inline-code">nombre del proyecto</span> son propiedades definidas en la configuración del
                proyecto y se encuentran en el <Link href="/project#properties">project.json</Link>.</p>

            <p>La definición de nombre de módulos es una característica vital en <span
                className="beyond">BeyondJS</span>ya que ayuda al mantenimiento futuro del proyecto, permitiendo que los
                módulos y carpetas puedan reestructurarse sin que el comportamiento del mismo sea puesto en risgo a
                causa de las importaciones.
            </p>
            <p>Cuando<span className="beyond">BeyondJS</span> levanta el entorno de
                desarrollo, realiza un mapeo de los módulos existentes e interpreta las rutas de cada módulo para poder
                referenciarlas correctamente cuando estos son importados. Posteriormente, en la fase de despliegue, se
                encarga de armar la estructura necesaria y convertir las importaciones.</p>


            <h2 id="module-identifier">Identificador de un módulo</h2>
            El identificador de un módulo es el que se utiliza para importarlo

            <Code language="ts">
                {`import * as Mod from 'module-identifier'`}
            </Code>

            <p>En <span className="beyond">BeyondJS</span> los identificadores se definen por medio del identificador
                del paquete (proyecto) y el nombre del módulo. </p>

            <p>Para ejemplificarlo, supongamos se crea un proyecto <span className="inline-code">"project"</span> bajo
                el scope <span className="inline-code">@company</span>, luego agregamos
                un módulo de nombre <span className="inline-code">login</span>, la ruta para importar este módulo
                sería:</p>


            <Code language="ts">
                {`@company/project/login`}
            </Code>

            <p>Ahora bien, los módulos, son contenedores de <span className="inline-code">bundles</span> y los bundles,
                representan el archivo final incluido. Por tanto, para poder hacer una importación de un
                <span className="inline-code">bundle</span>, es necesario especificar el bundle a consumir.
            </p>

            <p>Para ejemplificarlo, supongamos que tenemos un bundle
                <span className="inline-code">code</span> que disponibiliza un objeto <span
                    className="inline-code">Auth</span>
                adentro del módulo <span className="inline-code">login</span> que hemos creado. Nuestra importación
                quedaría de la siguiente manera:
            </p>

            <Code language="ts">
                {`import {Auth} from '@company/project/login/code'`}
            </Code>
            <ModuleConfig/>

        </>
    )
}
