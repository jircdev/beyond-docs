import * as React from 'react';

export function HMR() {
    return (
        <div className="content">
            <h1>HMR</h1>
            <p>
                Todos los bundles exponen de forma automática un objeto <span className="inline">hmr</span> que le
                permite que el desarrollador pueda suscribirse
                a los cambios de código y persistir de esta forma el estado del proyecto en el que se encuentre,
                optimizando el proceso de desarrollo, pues se evita la necesidad de repetir nuevamente
                los flujos para llegar al estado actual.

            </p>
            <p>Para explicarlo mejor, supongamos que se está realizando una lógica de filtrado de elementos de una base
                de datos en un módulo backend, este módulo realiza los siguientes pasos:
            </p>
            <ul>
                <li>Realiza el login contra la base de datos.</li>
                <li>Realiza dos consultas a base de datos.</li>
                <li>Retorna la información disponible para que el programador trabaje con ella.</li>
                <li>Genera una estructura de datos en la cual se integra toda la información consultada para que esta
                    sea devuelta al cliente.
                </li>
            </ul>
            <p>
                La suscripción de cambios de parte del desarrollador con hmr, permite a este enfocarse en el último
                punto sin necesidad de repetir por cada cambio los primeros tres, lo cual significa una optimización en
                tiempo de pruebas bastante alta.
            </p>
            <p>
                La implementación de hmr se encarga de forma automática de realizar el reemplazo de contenido de un
                archivo en el mismo momento en el que este es cambiado, dejando disponible de manera inmediata la
                actualización del mismo, sin necesidad de realizar ninguna acción adicional y además, el programador
                puede suscribirse a estos cambios para definir que desea hacer a partir de ellos, ofreciendole la
                versatilidad de ejecutar funciones de manera automática ante cada cambio.

            </p>

            <h2>Eventos</h2>
            <ul>
                <li><strong>change</strong></li>
                <li><strong>change:[nombre-procesador]</strong></li>
            </ul>
        </div>
    )
}
