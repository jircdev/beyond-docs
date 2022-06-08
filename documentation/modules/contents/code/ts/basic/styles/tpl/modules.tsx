import * as React from 'react';
import {Link} from "@beyond/ui/link/code";
import {CodeBox} from "@beyond/docs/code/code";
import {Link} from "@beyond/ui/link/code";
import {CodeBox} from "@beyond/docs/code/code";
const tplProcessor = `\r{
    ...
    "sass": {
        "path": "sass",
        "files": ["*"]
    },
    ...
}
`
export function StylesModules() {
    return (
        <>
            <h2 id="module-styles">Estilos en el módulo</h2>

            <p>Para agregar estilos en un módulo/bundle creado, debe agregarse el <Link href="/docs/processors">
                procesador</Link> <code className="inline">SASS</code>.
            </p>

            <div className="block__note">
                Si se usa el dashboard para la creación de proyectos, el procesador <span
                className="inline">sass</span> es incluido por defecto en los bundles de
                tipo <strong>code</strong> y <strong>widget</strong> de cualquier tipo.
            </div>
            <p>la configuración estandar de un procesador <span className="inline">sass</span> es la siguiente:
            </p>
            <CodeBox title="module.json">
                {tplProcessor}
            </CodeBox>

            <p>
                En la configuración anterior, se está definiendo que en el módulo existe una carpeta sass, con ubicación
                relativa al archivo <span className="inline">module.json</span> y que todos los archivos de esta carpeta
                deben ser tomados en cuenta como archivos de estilo.
            </p>
            <p>
                El bundle contenedor del procesador se encarga de insertar los estilos en el DOM cuando el elemento es
                renderizado, de esta forma, <strong>no es requerido hacer
                imports con semántica de javascript de archivos externos en nuestro código</strong>.
            </p>
        </>
    )
}
