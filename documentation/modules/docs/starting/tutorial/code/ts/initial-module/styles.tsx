import * as React from 'react';
import {Code} from "@beyond/docs/code/code";
import {pageStyles} from "../templates/page-styles";
import {Link} from "@beyond/ui/link/code";

export function TutorialHomeStyles() {
    return (
        <>
            <h4>styles.scss</h4>
            <Code language="scss">
                {pageStyles}
            </Code>

            <h4>Expliquemos un poco el código anterior</h4>
            <ul>
                <li>Agregamos estilo básico al formulario, los inputs, el botón de envío y para manejar un mensaje de
                    error.
                </li>
                <li>
                    <strong>Custom properties:</strong> las custom properties utilizadas, son una estructura básica
                    para manejo de variables incluidas por beyond en el <Link href="/template">Template del
                    proyecto</Link>
                </li>

            </ul>

        </>
    )
}
