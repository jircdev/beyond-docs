import * as React from 'react';
import {Link, Elink} from '@beyond/ui/link/code';

export function BEE() {
    return (
        <div className="content">
            <h1>Node</h1>

            <p>
                <span className="beyond">BeyondJS</span> permite realizar proyectos escalables y eficientes con
                <Elink href="https://nodejs.org">Node.js</Elink> construidos directamente con typescript y buscando
                mejorar la experiencia de desarrollo, por medio de la integración de HMR.
            </p>

            <p>La configuración de modulos node en <span className="beyond">BeyondJS</span> se hace por medio</p>
            <p>
                Como se explica en otras partes de esta documentación, un modulo en BeyondJS es un contenedor de
                bundles, donde puede existir uno o varios <code className="inline-code">bundles</code>.A su vez, cada
                uno de estos bundles, contiene un conjunto de modulos internos. Cuando el proyecto
                . <span
                className="beyond">BeyondJS</span> hace uso de los BEE(Beyond Execution Environment) sobre lo cual se
                explicará más adelante, para optimizar los tiempos de desarrollo y ofrecer mejores resultados en la
                experiencia.
            </p>

            <h3 id="configure-node">Configurar un modulo para node</h3>
            <p>Para trabajar con node, es necesario crear alguno de los siguientes bundles:
                <code className="inline-code">code</code>, <code className="inline-code">ts</code>, <code
                    className="inline-code">backend</code> o <code className="inline-code">bridge</code>. Asimismo,
                debe especificarse en el <code className="inline-code">module.json</code> el platform correspondiente,
                el cual puede ser
                <code className="inline-code">backend</code> o <code className="inline-code">node</code>
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
