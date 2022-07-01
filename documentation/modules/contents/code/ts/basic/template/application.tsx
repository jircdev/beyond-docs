import * as React from 'react';
import {Link} from "@beyond/ui/link";
import {Code} from "@beyond/docs/code";

const tplConfig = `
"application": {
    "processor": "sass",
    "path": "application",
    "files": [
      "*"
    ]
},
"global": {
    "processor": "sass",
    "path": "application",
    "files": [
      "*"
    ]
  }
`;

export function TemplateApplication() {
    return (
        <>


            <p>
                Las propiedades <span className="inline">application</span> y <span
                className="inline">global</span> reciben los mismos parametros de configuración, pero tienen fines
                distintos.
            </p>

            <h4 className="inline">template.application</h4>

            <p>La propiedad de configuración <span className="inline">application</span> representa al archivo de
                estilos generales del proyecto y tiene como foco principal ser el lugar en donde se definan las
                propiedades css personalizadas y cualquier estilo que se requiera aplicar al documento general, externo
                a los widgets.</p>
            <p>Las <strong>custom properties</strong> juegan un papel importante en el manejo de los widgets.
                Los componentes webs con Shadow DOM no se ven afectados por los estilos generales del sitio web en donde
                están incluidos. Sin
                embargo, las propiedades css si pueden ser accedidas y utilizadas.
            </p>
            <div className="block__note">
                El manejo de estilos puede verse en detalle en la sección de <Link href="/docs/styles/template">Estilos
                en la plantilla</Link>.
            </div>
            <h4 id="template-global" className="inline">template.global</h4>
            <p>
                Tiene como finalidad suministrar al desarrollador la posibilidad de compartir código
                entre widgets. Los archivos agregados en la configuración de global, son compilados en un archivo de
                nombre <span
                className="inline">global.css</span>, que es incluido en el shadow dom de cada widget para que
                tengan acceso a los estilos.
            </p>
            <h3>Parametros de configuración</h3>

            <Code>
                {tplConfig}
            </Code>
            <p>Cómo se puede ver en el código anterior, la configuración de ambas propiedades funciona igual, reciben un objeto con las
                siguientes propiedades: </p>
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
