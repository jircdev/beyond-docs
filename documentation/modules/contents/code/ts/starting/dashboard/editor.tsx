import * as React from 'react';
import {ModalImage} from "@beyond/docs/components/html/code";

export function DashboardEditor() {
    return (
        <>
            <h3 data-title="Editor y Navegador">Editor y Navegador incluidos</h3>
            <p>
                El Dashboard cuenta con un editor de código integrado que puede resultar sumamente útil para
                acceder a los archivos de forma rápida y corregir errores detectados, trabajar con estilos o con los
                bridges. Asimismo, tambien cuenta con un Board que permite navegar los proyectos.
            </p>

            <div className="block__note">
                El editor del Dashboard no es un IDE y no pretende reemplazar las funciones de uno.
            </div>
            <ModalImage alt="Beyond Dashboard with editor and iframe navigator" src="/images/dashboard/editor.png"/>
        </>
    )
}
