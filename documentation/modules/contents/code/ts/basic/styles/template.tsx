import * as React from 'react';
import {Code} from "../../views/content/code";
import {variablesTPL} from "./tpl/variables";
import {Link} from '@beyond/ui/link/code';


export function TemplatePage() {
    return (
        <div className="content">
            <h1>Plantilla de un protecto</h1>


            <p>
                <span className="beyond">BeyondJS</span> brinda una arquitectura robusta para el manejo de plantillas en
                los proyectos, la cual cuenta con las siguientes caracteristicas:
            </p>

            <ul>
                <li><strong>Estilos: </strong> Soporte integrado de preprocesadores LESS y SASS.</li>
                <li><strong>Propiedades CSS</strong>: estructura básica de variables que permite trabajar con
                    los componentes web eficientemente.
                </li>
                <li><strong>Estilo global</strong>: Hoja de estilo global para el proyecto.</li>
                <li><strong>Sobreescritura</strong>: Esto es una característica especial que permite redefinir estilos y
                    textos de módulos existentes sin necesidad de tocar el código original.
                </li>
                <li><strong>Separación de código</strong>: Manejo independiente de los archivos de estilos con proceso
                    automatizado para la generación de archivos finales independientes y optimizados.
                </li>
                <li><strong>Light & Dark Theme</strong> integrados.</li>
            </ul>

            <h2>Configuración</h2>

            <p>
                La configuración de la plantilla, al igual que todos los elementos en <span
                className="beyond">BeyondJS</span>, se maneja por medio de un archivo de configuración, cuyo nombre y
                ubicación es definido en el <Link href="/project/config">project.json</Link>. En general, por convención
                el nombre suele ser <span className="inline-code">template.json</span>
            </p>

            <p>La plantilla puede ser manejada desde el <strong>Dashboard</strong> y cuando
                se crea un proyecto, ya viene configurada la estructura por defecto para su manejo.
            </p>


            <Code>
                {variablesTPL}
            </Code>
        </div>
    )
}
