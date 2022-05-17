import * as React from 'react';
import {SSR} from "./ssr";
import {Link} from '@beyond/ui/link/code';

export /*bundle*/ function CSR() {
    return (
        <>
            <h2 id="csr-render">Renderizado Cliente (CSR)</h2>

            <p>El renderizado cliente, es el funcionamiento natural de las SPA. Su ciclo de vida puede plantearse de la
                siguiente forma:</p>

            <ul>
                <li>Se realiza una solicitud a un servidor o CDN, el cual retorna un <span
                    className="inline">index.html</span> con archivos de estilos y javascript.
                </li>
                <li>El navegador interpreta el <span className="inline">index.html</span>y solícita al servidor
                    los recursos necesarios para poder finalizar el renderizado del contenido.
                </li>
                <li>Cuando los recursos son recibidos en el navegador, se ejecuta el proceso de renderizado del
                    contenido html final por medio de javascript y la página queda disponible para su uso.
                </li>
                <li>Eventualmente, el cliente consulta APIs que retornan data y vuelven a ser renderizadas en el
                    sitio web actualizando su contenido.
                </li>
            </ul>

            <h3 id="store-server-rendering"><small>Store Server Rendering</small></h3>

            <p>
                Como se expresa en el ciclo de vida CSR, es común la necesidad de realizar consultas a una api para
                actualizar la información del sitio por medio de <span className="inline">http</span> o <span
                className="inline">web sockets</span>, esto suele requerir la construcción de APIs que retornan la
                información.
                <span className="beyond">BeyondJS</span> maneja la posibilidad de que esta información sea definida en
                el estado del widget y que se actualice de forma directa desde el servidor sin necesidad de una API
                adicional.
            </p>

            <p>Puedes leer más sobre este tópico en la sección de <Link href="/doccs/state-management">Manejo de
                estados</Link>.</p>
        </>
    )
}
