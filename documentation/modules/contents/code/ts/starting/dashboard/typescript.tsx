import * as React from 'react';
import {BeyondName} from "../../views/beyond";
import {ModalImage} from "../../views/modal-image";

export function DashboardTypescript() {
    return (
        <>
            <h2>Integración con Typescript</h2>
            <p>
                <strong>Typescript</strong> es un lenguaje tipado y el chequeo de tipos es una tarea pesada. El
                Dashboard hace uso del compilador de typescript para detectar en tiempo real los errores que pueden
                existir en el código y suministrar información al programador acerca de ellos en trés niveles distintos:
            </p>
            <ModalImage alt="BeyondJS Dashboard structure" src="/images/dashboard/errors.png"/>
            <ul>
                <li><strong>Módulo en desarrollo</strong>: El módulo en el cual se está trabajando</li>
                <li><strong>Dependencias</strong>: Los módulos importados por el módulo en desarrollo.</li>
                <li><strong>Consumidores</strong>: Los módulos que consumen el módulo sobre el cual estamos trabajando.
                </li>
            </ul>
            <p>
                El programador puede acceder a un módulo/bundle y ver los errores existentes en el o en un consumidor o
                dependencia. Identificar de forma simple el archivo y acceder directamente a la línea donde debe
                realizar la corrección.
            </p>
            <div className="block__note">
                <h4>Tiempos de typescript</h4>
                <p>
                    Debido a que los tiempos de análisis del compilador de typescript son extensos cuando hace el
                    chequeo
                    de tipos, <BeyondName/> implementa una estrategía hibrida que gestiona en simultáneo el chequeo de
                    tipos por medio del compilador y la actualización de archivos con HMR por medio del transpilador,
                    esto ofrece la posibilidad de ver los cambios al momento y recibir la información de errores en
                    paralelo. Es posible que la primera vez que se realice la validacion de tipos de un proyecto, este
                    proceso tome un tiempo extendido el cual luego se minimiza con la gestión de cache que
                    integra <BeyondName/>
                </p>
            </div>
        </>
    )
}
