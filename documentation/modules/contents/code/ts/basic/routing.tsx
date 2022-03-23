import * as React from 'react';
import {TypeProperty} from "../views/type-property";

export function RoutingPage() {
    return (
        <div className="content">
            <h1>Enrutamiento</h1>

            <li><strong>current:</strong><TypeProperty type="string"/>
                url de navegacion actual.
            </li>
            <li><strong>=initial:</strong> Hace referencia al indice asociado al historico de la api web del navegador
                sobre el cual comienza la navegacion adentro del proyecto beyond. beyond hace uso del session_storage
                <ul>
                    <li>__beyond_navigation_position</li>
                    <li>__beyond_navigation_records</li>
                    <li>History state
                        <ul>
                            <li><strong>__beyond_navigation_position:</strong> posicion del stado del navegador que
                                registra el indice del elemento en el
                                cual la navegación queda registrada en el history de beyond.
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>


            <li>position <TypeProperty type="HistoryPosition"/>:
                <ul>
                    <li><strong>value:</strong> posicion en la cual se encuentra la navegación adentro de los registros
                        de beyond.
                    </li>
                </ul>
            </li>

            <li><strong>following:</strong> proxima navegación dentro del historico de beyond.</li>
            <li><strong>previous:</strong> navegacion previa adentro de los registros de beyond.</li>
            <li><strong>records:</strong> <TypeProperty type="HistoryRecords"/> :
                <ul>
                    <li>position:</li>
                    position adentro del history del navegador
                    <li>uri:</li> url de navegacion
                    <li>entries:
                        <TypeProperty type="map"/>
                        Listado de urls navegadas dentro de proyecto beyond.
                    </li>

                </ul>

            </li>

        </div>
    )
}
