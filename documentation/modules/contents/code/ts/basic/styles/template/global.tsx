import * as React from 'react';
import {Elink, Link} from "@beyond/ui/link/code";
import {BeyondName} from "../../../views/beyond";

export function StylesTemplateGlobal() {
    return (
        <>
            <h3 id="styles.css">
                <span className="inline">template.global</span>
            </h3>

            <p>La propiedad <span className="inline">global</span> representa al archivo <span
                className="inline">global.css</span> que a diferencia del <span className="inline">styles.css</span>,
                tiene como finalidad compartir estilos que el desarrollador considere <i>globales</i> y por tanto deban
                poder ser compartidos por todos los widgets. Para lograr esto, el archivo final es incluido dentro de
                los estilos de cada widget.
            </p>


            <p>
                El igual que con la propiedad <span className="inline">application</span>, por defecto se incluyen todos
                los archivos que se encuentren adentro de la carpeta <span className="inline">/global</span> y de base
                sólo viene incluido un archivo <span className="inline">styles.scss</span>
            </p>
        </>
    )
}
