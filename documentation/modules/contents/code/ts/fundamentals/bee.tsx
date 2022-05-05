import * as React from 'react';

export function BEE() {
    return (
        <div className="content">
            <h1>BEE (Beyond Execution Environment)</h1>
            <p>
                Los bee son procesos gestionados por BeyondJS , se comportan como un servicio node, con la diferencia de
                que son gestionados por el servicio principal de Beyond, el cual analiza, revisa y compila los cambios
                en real time para dejar disponible en mejoria una nueva versión de los bundles, realizando los cambios de
                los segmentos de código afectados por los cambios, por medio de HMR para poder tener acceso a las
                funcionalidades actualizadas sin necesidad de reiniciar el servicio, lo cual ofrece una ventaja en
                tiempo de ejecución pues evita realizar toda la carga a nivel de tiempo y recursos que implica levantar
                un servicio en simismo. Beyond detecta los cambios hechos en un archivo o módulo interno, actualiza el
                cambio y deja disponible una nueva versión del bundle al momento.
            </p>
            <p>El flujo de funcionamiento del Bee es el siguiente:</p>
            <ul>
                <li>Beyond levanta el servicio.</li>
                <li>Se realiza un repaso del arbol de dependencias de los bundles (notar que es a nivel de bundles y no
                    módulos internos).
                </li>
                <li> Se carga en memoria el código procesado y se agregan whatchers para poder detectar cambios.</li>
                <li>Si existe un cambio en un archivo, el mismo es detectado y se reemplaza ese segmento de código.</li>
            </ul>
            <div className="block__note">
                Los imports dinamicos no son cargados cuando el BEE levanta, sino que se solicitan a demanda.

            </div>
        </div>
    )
}
