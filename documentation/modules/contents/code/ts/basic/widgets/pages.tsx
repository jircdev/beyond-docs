import * as React from 'react';
import {Code} from "@beyond/docs/code/code";
import {TypeProperty} from "../../views/type-property";

export function Pages() {
    return (
        <>
            <h2>Páginas</h2>
            <Code language="json">
                {tplPage}
            </Code>
            <p>
                Las páginas se configuran igual que cualquier widget, pero tienen los siguientes parametros adicionales
                para su configuración:
            </p>

            <ul>
                <li><strong>route:</strong> <TypeProperty type="string"/>: Representa la ruta con la que deseas poder
                    acceder a tu componente
                </li>
                <li><strong>layout</strong> <TypeProperty type="string" optional/>: y define si quieres usar un layout o
                    no en tu página.
                </li>
                <li><strong>vdir</strong> <TypeProperty type="string" optional/>: Permite definir si quieres manejar
                    algún valor dinámico en la url
                </li>
            </ul>

            <h3 id="route-pattern">Patrón de rutas</h3>
            <p> Se pueden definir urls con valores dinámicos agregando las
                variables a la propiedad <span className="inline">route</span> utilizando una sintaxis similar a la de
                las template strings.</p>
            <p>
                Para ejemplificarlo, supongamos que se tiene una página de módificación de
                datos de un usuario
                y se necesita manejar el id por medio de la url. La propiedad <span className="inline">route</span> del
                widget tendría el siguiente valor</p>
            <Code language="json">
                {'/user/edit/${userId}'}
            </Code>

            <p>
                Con esto, podremos acceder a nuestra variable userId desde nuestro widget accediendo al mapa <span
                className="inline-code">vars</span> disponible en el objeto uri que recibe nuestro widget.
            </p>

            <h2 id="layouts">Layouts</h2>

            <p>Los layouts representan la estructura general de un sitio web, que puede ser compartida entre varias
                páginas internas.</p>
            <Code language="json">
                {tplLayout}
            </Code>

        </>
    )
}
