import * as React from 'react';

export function TemplateIntro() {
    return (
        <>
            <h1>Plantilla de un protecto</h1>
            <p>
                <span className="beyond">BeyondJS</span> brinda una arquitectura simple pero robusta para el manejo de
                plantillas en los proyectos, la cual cuenta con las siguientes caracteristicas:
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
        </>
    )
}
