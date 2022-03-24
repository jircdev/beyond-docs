import * as React from 'react';

export function SSRPage() {
    return (
        <div className="content">
            <h1>Objeto History</h1>
            <ul>
                <li>
                    current: url de navegacion actual
                </li>
                <li>initial: Hace referencia al indice asociado al historico de la api web del navegador sobre el cual
                    comienza la navegacion adentro del proyecto beyond. beyond hace uso del session_storage
                    <ul>
                        <li>__beyond_navigation_position</li>
                        <li>__beyond_navigation_records</li>
                    </ul>
                </li>
                <li>History state
                    <ul>
                        <li>__beyond_navigation_position: posicion del stado del navegador que registra el indice del
                            elemento en el
                            cual la navegación queda registrada en el history de beyond.
                        </li>
                    </ul>
                </li>
                <li>
                    position: HistoryPosition:
                </li>
                <li>value: posicion en la cual se encuentra la navegación adentro de los registros de beyond.</li>
                <li>
                    following: proxima navegación dentro del historico de beyond.
                </li>
                <li>previous: navegacion previa adentro de los registros de beyond.</li>
            </ul>
        </div>
    )
}