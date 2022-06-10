import * as React from 'react';

export function BackendIntro() {
    return (
        <>
            <h1>Código <strong>Backend</strong></h1>

            <p>
                <span className="beyond">BeyondJS</span> disponibiliza un entorno seguro y eficiente pare crear código
                backend, bien sea que se requiera para trabajar con servicios independientes, encargados de tareas
                específicas o que busque implementar una conexión de un proyecto cliente con una api backend.
            </p>
            <p>Para efectos de <span className="beyond">BeyondJS</span>, podemos clasificar estas estructuras de código
                en dos tipos:
            </p>

            <ul>
                <li><strong>Servicios Backend:</strong> Código node que representa un servicio en ejecución en el
                    backend y sólo puede ser utilizado por módulos que tambien se ejecuten en el backend.
                </li>
                <li><strong>Api backend</strong>: permiten la conexión entre el código backend y el código cliente.</li>
            </ul>
        </>
    )
}
