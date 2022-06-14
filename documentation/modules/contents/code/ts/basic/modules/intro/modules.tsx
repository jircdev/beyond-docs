import * as React from 'react';
import {Link} from "@beyond/ui/link/code";
import {Code} from "@beyond/docs/code/code";
import {BeyondName} from "@beyond/docs/components/html/code";

export function Modules() {
    return (
        <>
            <h2 id="modules">Módulos en <BeyondName/></h2>
            <p>En <span className="beyond">BeyondJS</span>, el concepto de módulo es un poco más abarcativo y se
                estructura de la siguiente forma: Un módulo está compuesto por bundles, los bundles contienen
                procesadores y puede contener módulos internos. Repasemos los términos.
            </p>

            <ul>
                <li><strong>Bundle</strong> Representa el o los archivos finales de código disponibles para ser leídos
                    por el entorno en el cúal se ejecuten.
                </li>
                <li><strong>Procesadores</strong>: son los encargados de interpretar, transpila o compilar (según sea el
                    caso) el código de los lenguajes que pueden no ser soportados directamente por los entornos de
                    ejecución. Tambien se encargan de hacer tareas de optimización para el despliegue productivo.
                </li>
            </ul>


            <p>La estructura mencionada permite que el concepto de módulos utilizado en <BeyondName/> se acerque más a
                la definición usada en la informática en general, donde este representa a una funcionalidad dentro de un
                programa o sistema. Aunque los módulos javascript son compatibles con este
                concepto, en la práctica un módulo de un proyecto, aplicación o libreria
                contiene una serie de módulos javascript (módulos internos en <span
                    className="beyond">BeyondJS</span>), en conjunto con el resto de herramientas y tecnologías que se
                requieran para componerlo, como estilos, imagenes o texto.
            </p>

            <p>
                En otras palabras, en <BeyondName/> un módulo es el contenedor de todas las herramientas
                y tecnologías necesarias para garantizar el funcionamiento completo de un proceso.
            </p>

        </>
    )
}
