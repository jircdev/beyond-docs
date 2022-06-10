import * as React from 'react';

export function BackendMagicComments() {
    return (
        <>
            <h3>Comentarios mágicos</h3>

            <h2>bundle <code className="inline">backend</code></h2>

            <p>
                Los bundles <code className="inline">backend</code> representan código javascript que es ejecutado en el
                servidor y sólo pueden ser utilizados por módulos que tambien funcionen en el servidor. Dicho en otras
                palabras, representan cualquier servicio típico de <span className="inline">NodeJS</span>, con la
                salvedad de que, en entorno de desarrollo, son ejecutados por medio de un BEE o proceso <span
                className="beyond">BeyondJS</span> lo cual aumenta la productividad al poder trabajar
                con <strong>HMR</strong> de forma automatizada <i>y sin configuración</i>.
            </p>
        </>
    )
}
