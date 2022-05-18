import * as React from 'react';
import {TypeProperty} from "../views/type-property";
import {Link} from "@beyond/ui/link/code";

export function APIURI() {
    return (
        <>
            <h2 id="routing-uri">URI <div className="inline-code">rounting.uri</div></h2>

            <p>Debido a que el comportamiento del objeto <span className="inline-code">window.location</span> varía
                cuando se está trabajando con aplicaciones móviles, <span className="beyond">BeyondJS</span> agrega el
                objeto <span className="inline-code">URI</span></p>
            <p>Es una instancia de un objeto
                <TypeProperty type="URI" href="/api/uri"/> y representa a la URL actual. Tiene propiedades similares a
                las del objeto <span className="inline-code">location</span> de la Api Web de <span
                    className="inline-code">Javascript</span>, pero agrega un tratamiento a las propiedades para
                unificar la manera de trabajar con javascript cuando se está desarrollando un proyecto móvil.
            </p>
            <h3 id="uri-properties">Propiedades</h3>
            <ul>
                <li><strong>pathname</strong><TypeProperty type="string"/>: url actual, sin querystring ni hash</li>
                <li><strong>uri</strong><TypeProperty type="string"/>: url completa.</li>

                <li><strong>qs</strong><TypeProperty type="Map"/>: Mapa con la lista de variables pasadas por
                    querystring.
                </li>
                <li><strong>hashtag</strong><TypeProperty type="string"/>: contiene el fragmento de la url posterior al
                    '#'. Es equivalente a la propiedad <div className="inline-code">hash</div> del objeto <div
                        className="inline-code">location</div> de la API Web.
                </li>
                <li><strong>vars</strong><TypeProperty type="Map"/>: Mapa contenedor de las variables dinamicas
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
