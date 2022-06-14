import * as React from 'react';
import {TypeProperty} from "@beyond/docs/components/html/code";
import {Link} from '@beyond/ui/link/code';
import {Code} from "@beyond/docs/code/code";

const tpl = `routing.redirect = async function redirect(uri): Promise<string> {
    return '/';
};
`

export function RoutingPage() {
    return (
        <div className="content">
            <h1 id="routing">Enrutamiento</h1>

            <p>
                <span className="beyond">BeyondJS</span> tiene un manejo de rutas simple y potente al mismo tiempo. Para
                la mayoria de los casos, las urls pueden ser definidas en la configuración de los <Link
                href="/widgets/pages">widgets de tipo page</Link>, por medio de la propiedad <span
                className="inline-code">url</span>, pero pueden existir casos donde se requiera alguna configuración más
                avanzada.
            </p>
            <h2 id="object-routing"> Objeto <div className="inline-code">routing</div></h2>

            <p>El objeto
                <span className="inline-code">routing</span> gestiona el historico del navegador y se encarga
                de manejar la compatibilidad para proyectos web y moviles. Ofrece una api que permite trabajar con el
                historico y manipularlo.
            </p>
            <p>Es disponibilizado por el <span className="inline-code">kernel</span> y se importa de la siguiente
                forma:
            </p>
            <Code language="ts">
                {`import {routing} from "@beyond-js/kernel/routing/ts";`}
            </Code>

            <p>El objeto <span className="inline-code">routing</span> de <span className="beyond">BeyondJS</span> existe
                para cubrir los siguientes escenarios:
            </p>
            <ul>
                <li>Disponibilizar al programador una api simple para hacer tratamientos complejos de las urls, como
                    validaciones, redireccionamientos y manejo de variables.
                </li>
                <li>Identificar el flujo e historico de navegación del usuario adentro del aplicativo. El objeto
                    <span className="inline-code">history</span> del navegador tiene un tratamiento muy limitado del
                    mismo
                    y sólo permite acceder al número de navegaciones existentes. <span
                        className="beyond">BeyondJS</span> por su parte, maneja un historico detallado.
                </li>
                <li>
                    Debido a que las aplicaciones hibridas realizadas con javascript, resuelven el manejo de archivos
                    por meido de un protocolo distinto a las aplicaciones accedidas desde un navegador, <span
                    className="beyond">BeyondJS</span> realiza un tratamiento del mismo para abstraer al programador de
                    ello y garantizar el mismo comportamiento sin importar la plataforma en que se trabaje.
                </li>
            </ul>
            <h2>Navegación</h2>
            <p>Con la finalidad de mantener compatibilidad con las APIs Conocidas, el objeto <span
                className="inline">Routing</span> tiene métodos homólogos a los
                métodos de la API del historial del navegador y básicamente cubren las mismas necesidades pero a la vez,
                se encargan de unificar los comportamientos entre las plataformas y actualizar los elementos del
                historico de <span
                    className="beyond">BeyondJS.</span></p>
            <p>Los métodos disponibles son:</p>
            <h4><span className="inline-code">routing.pushState</span></h4>
            <p> Registra un nuevo elemento en el historico</p>
            <Code language="ts">
                {`routing.pushState('/home', [{state}]);`}
            </Code>

            <h4><span className="inline-code">routing.replaceState</span></h4>
            <p>Modifica la url actual sin agregar nuevos elementos en el historico.</p>
            <Code language="ts">
                {`routing.replaceState('/home', [{state}]);`}
            </Code>

            <p>tiene la misma interfaz que el método pushState del objeto <span
                className="inline-code">history</span> de la Api Web y adicional se encarga de actualizar el historico
                de <span className="beyond">BeyondJS.</span>
            </p>
            <h2 id="rewrite">Sobreescritura de rutas <br/>
                <div className="inline-code">routing.redirect</div>
            </h2>

            <p>Generalmente, aunque pueden haber más, existen dos contextos típicos en los cuales es necesario darle
                tratamiento a las urls:
            </p>
            <ul>
                <li>Cuando se requiere manejar urls amigables.</li>
                <li>Cuando es necesario validar permisos de acceso y, en caso de que quien intenta entrar a la url no
                    los tenga, se pretenda hacer una redirección a un flujo determinado.
                </li>
            </ul>

            <p>Para este tipo de casos,
                se puede definir una función asincrona
                <span className="inline-code">redirect</span>
                como propiedad del objeto routing. Esta función recibe un ubjeto de tipo
                <TypeProperty type="URI" href="/api/uri"/> que tiene una propiedad <span
                    className="inline-code">pathname
            </span> la cual representa la ruta actual.
            </p>

            <div className="block__note">La definición del método <span className="inline">routing</span> debe hacerse
                en un bundle de tipo <span
                    className="inline">start</span> a fin de que pueda ejecutarse al comienzo del proyecto, antes de
                cualquier solicitud http.
            </div>

            <p>
                La función redirect puede retornar una ruta diferente, en cuyo caso <span
                className="beyond">BeyondJS</span> realizará la redirección a la url devuelta o, puede no devolver nada,
                en cuyo caso se interpreta que el usuario tiene acceso a la ruta, el cual es el comportamiento por
                defecto.
            </p>
            <Code language="ts">{tpl}</Code>
            <p>En el ejemplo anterior, cualquier ruta recibida es redireccionada a <span
                className="inline-code">/</span>.</p>
        </div>
    )
        ;
}
