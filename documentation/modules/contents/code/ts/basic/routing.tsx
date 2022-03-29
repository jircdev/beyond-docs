import * as React from 'react';
import {TypeProperty} from "../views/type-property";
import {Link} from '@beyond/ui/link/code';
import {Code} from "../views/content/code";

const tpl = `routing.redirect = async function redirect(uri): Promise<string> {
    return '/';
};
`

export function RoutingPage() {
    return (
        <div className="content">
            <h1 id="routing">Enrutamiento</h1>

            <p>
                <span className="beyond">BeyondJS</span> tiene un manejo de rutas bastante simple y potente. Para la
                mayoria de los casos, las urls de acceso pueden ser definidas en la configuración de los <Link
                href="/widgets#pages">widgets de tipo page</Link>, por medio de la propiedad <span
                className="inline-code">url</span>.
            </p>
            <p>Asimismo, <span className="beyond">BeyondJS</span> provee un objeto <span
                className="inline-code">routing</span> que sirve para trabajar con todo lo asociado a la navegación
                cliente y ofrece algunas mejoras con respecto a la api web de los navegadores.</p>
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
            <p>Con la finalidad de mantener compatibilidad con las APIs Conocidas, beyond tiene métodos homologos a los
                de la API del historial del navegador, los cuales cubren las mismas funcionalidades con el plus de
                unificar los comportamientos entre las plataformas y actualizar los elementos del historico de <span
                    className="beyond">BeyondJS.</span></p>
            <p>Los métodos disponible son:</p>
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

            <p>Para este tipo de casos, se puede definir una función asincrona <span
                className="inline-code">redirect</span> como
                propiedad del objeto routing. Esta función recibe un ubjeto de tipo
                <TypeProperty type="URI" href="/api/uri"/> que tiene una propiedad <span
                    className="inline-code">pathname
            </span> la cual representa la ruta actual.
            </p>

            <p>
                La función redirect puede retornar una ruta diferente, en cuyo caso <span
                className="beyond">BeyondJS</span> realizará la redirección a la url devuelta o, puede no devolver nada,
                en cuyo caso se interpreta que el usuario tiene acceso a la ruta, el cual es el comportamiento por
                defecto.
            </p>
            <Code language="ts">{tpl}</Code>
            <p>En el ejemplo anterior, cualquier ruta recibida es redireccionada a <span
                className="inline-code">/</span>.</p>


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
        </div>
    )
        ;
}
