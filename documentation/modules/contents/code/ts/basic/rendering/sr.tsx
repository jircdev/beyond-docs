import * as React from 'react';
import {BeyondName} from "@beyond/docs/components/html/code";
export /*bundle*/ function SR() {
    return (
        <>
            <h2 id="sr-rendering">Renderizado estático</h2>
            <p>
                El renderizado estático, como su nombre lo indica, es especialmente útil cuando el contenido no
                varia y se puede prescindir de la existencia de un servidor que procese las peticiones y basta con un
                CDN que retorne toda la información.
            </p>
            <p>
                <BeyondName/> permite generar el código estático final en el proceso de deployment.
                en entorno de desarrollo los archivos siguen siendo servidor por el servidor de desarrollo del
                framework.
            </p>
        </>
    )
}
