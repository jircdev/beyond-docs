import * as React from 'react';
import {Elink, Link} from "@beyond/ui/link/code";

export function SSR() {
    return (
        <div className="content">
            <h2 id="ssr-rendering">Server Side Rendering <small>(SSR)</small></h2>


            <div className="block__note">

                Hoy en día <Elink
                href="https://developers.google.com/search/docs/advanced/javascript/javascript-seo-basics">
                los rastreadores web interpretan código javascript
            </Elink> y pueden entender el contenido que genera.
                Se recomienda siempre evaluar cúal estrategía es más conveniente en cada caso.
            </div>


            <p>La renderización del lado de Servidor o SSR (por sus siglas en ingles), es una técnica que permite
                que el contenido de una url sea parseado en el servidor, generando el código HTML
                final y devolviendo este al cliente, de esta forma, se evita el procesamiento posterior en el navegador
                cliente y se acelera la carga del contenido.
            </p>
            <p>
                <span className="beyond">BeyondJS</span> permite implementar SSR de forma simple,
                para ello, es necesario que se entienda el ciclo de vida del motor de renderizado de
                los <Link href="/docs/widgets/">widgets</Link> y seguir la lógica
                asociada a este.</p>

            <p>A continuación, se detalla el circuito de renderización de widgets y páginas</p>
            <ul>
                <li>Se realiza la solicitud de la url al servidor, este retorna el archivo <span
                    className="inline">index.html</span>.
                </li>
                <li>
                    Cuando el cliente recibe el archivo <span className="inline">index.html</span>,
                    se dispara una segunda solicitud consultando por la informacion necesaria para
                    renderizar toda la página, lo cual incluye el  código html y css de los
                    widgets existentes en la página y los layouts.
                </li>
                <li>Cuando el cliente recibe la información solicitada, se ejecuta el javascript para registrar
                    los <span className="inline">web components</span> en el documento HTML y cargar todo el contenido
                    de la página.
                </li>
                <li>
                    En el momento en que se hace la carga del contenido inicial, se dispara la <i>hidratación</i> del
                    contenido. La hidratación representa la capa CSR, que implica disponibilizar en el
                    cliente, todo el código javascript utilizado en el servidor para procesar la solicitud, de esta
                    forma el sitio puede empezar a funcionar como una SPA y habilitar las funcionalidades de
                    interacción que puedan existir.
                </li>

            </ul>
        </div>
    )
}
