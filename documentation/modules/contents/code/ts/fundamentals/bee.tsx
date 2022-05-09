import * as React from 'react';
import {Link, Elink} from '@beyond/ui/link/code';

export function BEE() {
    return (
        <div className="content">
            <h1>Distribuciones</h1>

            <p>Las distribuciones representan el entorno de ejecución de un proyecto. Es necesario configurar una
                distribución por cada entorno en el que se desee trabajar.
                <span className="beyond">BeyondJS</span> crea un <strong>Entorno de Ejecución de Beyond
                    (BEE)</strong> por cada distribución creada. Más adelante se explicará que es exactamente un BEE y
                las ventajas que ofrece.
            </p>
            <h1>Node</h1>
            <p>
                <span className="beyond">BeyondJS</span> permite realizar proyectos escalables y eficientes con
                <Elink href="https://nodejs.org">Node.js</Elink> construidos directamente con typescript y buscando
                mejorar la experiencia de desarrollo, por medio de la integración de HMR.
            </p>

            <p>Para trabajar con node, es necesario crear una distribución de tipo node. A partir de allí, <span
                className="beyond">BeyondJS</span> se encargará de levantar el entorno de ejecución (BEE) y dejar
                disponible todos los modulos del proyecto que esten configurados para las plataformas que manejan node.
            </p>
            <h3>Distribución</h3>

            <p>La configuración de modulos node en <span className="beyond">BeyondJS</span> se hace por medio de las
                distribuciones. El desarrollador configura una distribución</p>
            <p>
                Como se explica en otras partes de esta documentación, un modulo en BeyondJS es un contenedor de
                bundles, donde puede existir uno o varios <code className="inline-code">bundles</code>.A su vez, cada
                uno de estos bundles, contiene un conjunto de modulos internos. Cuando el proyecto
                . <span
                className="beyond">BeyondJS</span> hace uso de los BEE(Beyond Execution Environment) sobre lo cual se
                explicará más adelante, para optimizar los tiempos de desarrollo y ofrecer mejores resultados en la
                experiencia.
            </p>


            <h2>BEE&nbsp;
                <small>(Beyond Execution Environment)</small></h2>
            <p>
                Los bee son procesos gestionados por <span className="beyond">BeyondJS</span>. Se comportan como un
                servicio node, con la diferencia de que son gestionados por el servicio principal de <span
                className="beyond">Beyond</span>, el cual analiza, revisa y compila los cambios
                en tiempo real para dejar disponible en memoria una nueva versión de los bundles con los cambios de
                código aplicados por medio de <strong className="highlight">HMR</strong>, brindando la oportunidad de
                temer acceso a las funcionalidades de código actualizadas, sin necesidad de reiniciar el proceso node.
            </p>

            <p>La actualización en tiempo real en el proceso <span className="highlight">Node</span> ofrece ventajas en
                tiempo de ejecución pues evita realizar toda la carga a nivel de tiempo recursos que implica detener el
                proceso completo y volver a levantarlo, esto puede aplicar para valores en memoria o conexiones a bases
                de datos, por mencionar ejemplos. <span className="beyond">BeyondJS</span> detecta los cambios en un
                archivo o <Link href="/docs/modules#internal-modules">Modulo interno</Link>, actualiza el cambio,
                realiza
                una compilación nueva del bundle en el momento y deja la nueva versión disponible para ser consumida.
            </p>


            <h5>El flujo de funcionamiento del Bee es el siguiente:</h5>
            <ul>
                <li>Beyond levanta el servicio.</li>
                <li>Se realiza un repaso del arbol de dependencias de los bundles (notar que es a nivel de bundles y
                    no
                    módulos internos).
                </li>
                <li> Se carga en memoria el código procesado y se agregan whatchers para poder detectar cambios.
                </li>
                <li>Si existe un cambio en un archivo, el mismo es detectado y se reemplaza ese segmento de
                    código.
                </li>
            </ul>
            <div className="block__note">
                Los imports dinamicos no son cargados cuando el BEE levanta, sino que se solicitan a demanda.

            </div>
        </div>
    )
}
