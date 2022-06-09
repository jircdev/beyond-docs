import * as React from 'react';
import {Link} from "@beyond/ui/link/code";

export function TemplateConfig() {
    return (
        <>
            <h2 id="config">Configuración</h2>

            <p>
                La configuración de la plantilla, al igual que todos los elementos en <span
                className="beyond">BeyondJS</span>, se maneja por medio de un archivo de configuración, cuyo nombre, por
                convención es <span className="inline">template.json</span> y se ubica en la carpeta <span
                className="inline">template</span> en la raiz del proyecto. Sin embargo, tanto el nombre como la
                ubicación son valores configurables en el <Link href="/project/config">project.json</Link>.
            </p>

            <div className="block__note">La plantilla puede ser manejada desde el <Link
                href="/docs/dashboard">Dashboard</Link> y cuando
                se crea un proyecto ya viene configurada la estructura por defecto para su manejo.
            </div>

            <p>A continuación se explican las propiedades de configuración</p>
        </>
    )
}
