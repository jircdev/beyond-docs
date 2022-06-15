import * as React from 'react';
import {Code} from "@beyond/docs/code/code";
import {PageCodeStarted} from "../templates/page-code-started";
import {Link} from "@beyond/ui/link/code";

export function TutorialHomeForm() {
    return (
        <>
            <h3>Creación del Formulario</h3>

            <p>
                Si has trabajado con React, lo que viene es la parte que seguramente
                conoces mejor, con algunas sutilezas seguramente. A continuación, editaremos nuestro
                archivo <span className="inline">page.tsx</span> para crear un formulario de inicio de sesión y la
                funcionalidad básica para actualizar el estado.
            </p>
            <h4>Page.tsx</h4>
            <Code language="tsx">
                {PageCodeStarted}
            </Code>

            <h3 id="styles">Estilos</h3>
            <p>
                <span className="beyond">BeyondJS</span> maneja los estilos por defecto
                con el preprocesador SASS, ahora vamos a nuestro archivo
                <span className="inline-code"> styles.scss</span> y agreguemos un poco de estilo al formulario.
            </p>
            <div className="block__note">
                SASS es un procesador en BeyondJS, si quieres leer a profundidad sobre el mecanismo de procesadores
                podrás encontrar los detalles en <Link href="/processors">La sección de procesadores.</Link>
            </div>

        </>
    )
}
