import * as React from 'react';
import {Link} from "@beyond/ui/link/code";
import {Code} from "@beyond/docs/code/code";

export function TemplateApplication() {
    return (
        <>
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


        </>
    )
}
