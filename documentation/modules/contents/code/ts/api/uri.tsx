import * as React from 'react';
import {TypeProperty} from "../views/type-property";
import {Link} from "@beyond/ui/link/code";
import {BeyondName} from "../views/beyond";
import {Code} from "@beyond/docs/code/code";

export function APIURI() {
    return (
        <>
            <h1>Objeto <span className="inline">URI</span></h1>

            <h5>Importación</h5>
            <Code language="js">
                {`import {routing: {uri}} from "@beyond-js/kernel/routing/ts";`}
            </Code>

            <p>
                El objeto <span className="inline">uri</span> provee una api equivalente a la del objeto
                <span className="inline-code">window.location</span>, pero con funcionalidades agregadas que aseguran el
                comportamiento correcto en el entorno web y móvil.
            </p>


            <h3 id="uri-properties">Propiedades</h3>
            <ul>
                <li><TypeProperty type="string">pathname</TypeProperty>url actual, sin querystring ni hash</li>
                <li><TypeProperty type="string">uri</TypeProperty> url completa.</li>

                <li><TypeProperty type="Map">qs</TypeProperty> Mapa con la lista de variables pasadas por
                    querystring.
                </li>
                <li><TypeProperty type="string">hashtag</TypeProperty> contiene el fragmento de la url posterior al
                    '#'. Es equivalente a la propiedad <div className="inline-code">hash</div> del objeto <div
                        className="inline-code">location</div> de la API Web.
                </li>
                <li><TypeProperty type="Map">vars</TypeProperty> Mapa contenedor de las variables dinamicas
                    agregadas en la definición de la url del <Link href="/widgets#page">Widget Page.</Link>
                </li>
            </ul>

            <h3 id="routing-history">
                <div className="inline-code">routing.history <TypeProperty type="BeyondHistory"/></div>
            </h3>
            <p>
                El objeto <span className="inline-code">BeyondHistory</span> maneja toda la información asociada a la
                navegación del usuario en la sesión actual.
            </p>
            <h4>Propiedades</h4>
            <ul>
                <li><strong>current:</strong><TypeProperty type="string"/> url de navegacion actual.</li>
                <li><strong>initial:</strong> <TypeProperty type="number"/> Hace referencia al indice asociado al
                    historico de la api web del navegador
                    sobre el cual comienza la navegacion adentro del proyecto <span className="beyond">BeyondJS</span>.
                    Para este manejo, beyond hace uso del objeto <span className="inline-code">SessionStorage</span> de
                    la api web, donde registra dos propiedades:
                    <ul>
                        <li><span className="inline-code">__beyond_navigation_position</span></li>
                        <li><span className="inline-code">__beyond_navigation_records</span></li>
                    </ul>
                </li>
                <li><strong>position</strong> <TypeProperty type="HistoryPosition"/>
                    <ul>
                        <li><strong>value</strong><TypeProperty type="number"/>
                            valor de la posición actual de navegación en el historico propio de
                            <span className="beyond">BeyondJS</span>.
                        </li>
                    </ul>
                </li>
                <li><strong>records</strong><TypeProperty type="HistoryRecords"/>: Objeto de tipo Map que contiene todas
                    las entradas de navegación del usuario en la sesión actual.
                </li>
            </ul>
        </>
    )
}
