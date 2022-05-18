import * as React from 'react';
import {Code} from "@beyond/docs/code/code";
import {TypeProperty} from "../../../views/type-property";
import {BeyondName} from "../../../views/beyond";
import {NextLinks} from '@beyond/docs/components/next-links/code';

const tplPage = `
"widget": {
    "route": "login"
    "layout: "main",
    "element": {
      "name": "login-page"
    },
....
}`;

export function PageWidget() {
    return (
        <>
            <h1 id="widget.page">Widgets page</h1>

            <p>Los widgets de tipo <span className="inlin">page</span> representan a una página de un sitio o aplicativo
                web que puede ser accedido por medio de una URL. Cuando un proyecto web recibe una solicitud por
                url, <BeyondName/> se encarga de identificar al widget con esa url definida para inicializar el
                componente y dejarlo disponible en el DOM.
            </p>
            <Code language="json">
                {tplPage}
            </Code>
            <p>
                Las páginas requieren la misma estructura de configuración que la de cualquier widget, pero aparte
                recieben los siguientes parametros de configuración:
            </p>
            <ul>
                <li><strong>route:</strong> <TypeProperty type="string"/>: Define la url o ruta de acceso al componente.

                </li>
                <li><strong>layout</strong> <TypeProperty type="string" optional/>: y define si quieres usar un layout o
                    no en tu página.
                </li>
                <li><strong>vdir</strong> <TypeProperty type="string" optional/>: Permite definir si quieres manejar
                    algún valor dinámico en la url.
                </li>
            </ul>
            <h2 id="route-pattern">Patrón de rutas</h2>
            <p>
                Se pueden definir urls con valores dinámicos agregando las
                variables a la propiedad <span className="inline">route</span> con una sintaxis similar a la de
                template strings.
            </p>
            <p>
                Para ejemplificarlo, supongamos que se tiene una página de módificación de
                datos de un usuario
                y se necesita manejar el id por medio de la url. La propiedad <span className="inline">route</span> del
                widget tendría el siguiente valor:\</p>
            <Code language="json">
                {'/user/edit/${userId}'}
            </Code>
            <p>Las siguientes urls coincirian con la ruta creada:</p>
            <ul>
                <li><span className="inline">/user/edit/1</span></li>
                <li><span className="inline">/user/edit/any-identifier</span></li>
            </ul>
            <p>
                Estas propiedades, quedan disponibles en el objeto `uri` disponible como propiedad en el <span
                className="inline">controller</span> del widget y podria ser accedido desde el controlador de la
                siguiente forma:
            </p>
            <Code> this.uri.vars.get('userId');</Code>
            <div className="block__note">El objeto uri es pasado tambien a los componentes de vista. la forma de acceder
                a ellos depende de la
                implementación de cada framework o herramienta.
            </div>
            <NextLinks items={[
                ['Layouts', '/docs/widgets/layouts'],
                ['Enrutamiento', '/docs/routing']
            ]}/>
        </>
    )
}
