import * as React from 'react';
import {Code} from "@beyond/docs/code/code";

export function StylesImportBundle() {
    return (
        <>
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

        </>
    )
}
