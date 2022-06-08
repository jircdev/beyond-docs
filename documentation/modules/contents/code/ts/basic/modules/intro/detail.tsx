import * as React from 'react';
import {Link} from "@beyond/ui/link/code";
import {Code} from "@beyond/docs/code/code";

export function ModulesDetail() {
    return (
        <>

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


            <h3 id="module-identifier">Identificador de un módulo</h3>
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
        </>
    )
}
