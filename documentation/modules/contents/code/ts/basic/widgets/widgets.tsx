import * as React from 'react';
import {Link} from '@beyond/ui/link/code';
import {Code} from "@beyond/docs/code/code";
import {ModalImage} from "../../views/modal-image";

const tpl = `"widget": {
    "hmr": true,
    "element": {
      "name": "web-login"
    },
    "ts": {
      "path": "/widget/ts",
      "files": [
        "*"
      ]
    }
  }`;


const tplPage = `
"widget": {
    "hmr": true,
    "route": "login"
    "element": {
      "name": "login-page"
    },
....
}`;

const tplLayout = `
"widget": {
    "is": "layout",
    "element": {
      "name": "main-layout"
    },
...
}`

const tplController =
    `\rimport {ReactWidgetController} from '@beyond-js/kernel/react-widget/ts';
import {Page} from './views/page';
export /*bundle*/
class Controller extends ReactWidgetController {
    get Widget() {
        return Page;
    }
}`

export function WidgetsPage() {
    return (
        <>
            <h1 id="intro">Widgets</h1>


            <p>Los <strong>Widgets</strong> representan a un <a
                href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Componente
                Web</a> expuesto de forma directa en el DOM HTML.
                Las páginas y layouts en <span className="beyond">BeyondJS</span> son widgets que reciben
                configuraciones particulares, como la url de
                acceso o el número de parametros en la url.

            </p>
            <p>Estés o no asociado con los Componentes Web, a continuación explicamos la ventaja de utilizarlos: </p>
            <ul>
                <li><span className="beyond">BeyondJS</span> es un meta-framework agnóstico a las tecnologías y está
                    pensado para poder trabajar los proyectos del lado cliente, con una estructura de
                    <a href="https://micro-frontends.org/" target="_blank">micro-frontends</a>. Esta estructura permite
                    integrar diferentes stacks tecnológicos y equipos de trabajo en un mismo proyecto y los
                    componentes web son esenciales para el encapsulamiento de estas tecnologías.
                </li>
                <li>Cada widget puede usar una suite de tecnología distinta sin interferir con el resto. Esto implica,
                    por ejemplo, que se podría trabajar con React y Vue en un mismo proyecto.
                </li>
                <li>
                    Los componentes web, cargan sus dependencias a demanda y no requieren de funcionalidades externas,
                    esto permite que queden disponibles para ser incluidos en otros proyectos de forma simple.
                </li>
            </ul>
            <h2 id="creation">Creación de widgets</h2>
            <p>Crear widgets es sumamente simple, puede hacerse de forma manual o por medio del dashboard. En el
                dashboard, se puede hacer al momento de crear un módulo o luego de crearlo, en la opción de agregar
                bundle.</p>

            <ModalImage src="/contents/static/create-module-widget.png" alt="create widget module beyond"/>
            <p>La configuración manual, se hace con un ajuste básico en el archivo <Link
                href="/module/config">module.json</Link> del módulo donde desea agregarse con
                una estructura simple como la siguiente:</p>
            <Code language="json">
                {tpl}
            </Code>
            <p>Si se usa el dashboard, este edita los archivos <span className="inline-code">module.json</span> por
                nosotros y agrega la configuración correspondiente para cada caso.</p>


            <h3 id="controller">Controller</h3>
            <p>Todos los widgets deben poder una clase <span className="inline-code">Controller</span> que exponga un
                getter <span className="inline-code">widget</span> cuyo valor de retorno debe ser el componente a
                renderizar
            </p>

            <Code language="ts">
                {tplController}
            </Code>
            <h2>Páginas</h2>
            <Code language="json">
                {tplPage}
            </Code>
            <p>
                Las páginas se configuran igual que cualquier widget, pero tienen los siguientes parametros adicionales
                para su configuración:
            </p>

            <ul>
                <li><strong>route:</strong> Representa la ruta con la que deseas poder acceder a tu componente</li>
                <li><strong>layout:</strong> es opcional y define si quieres usar un layout o no en tu página.</li>
                <li><strong>vdir</strong> es opcional. Permite definir si quieres manejar algún valor dinámico en la url
                </li>
            </ul>

            <h3 id="route-pattern">Patrón de rutas</h3>
            <p> Se puedenPuedes definir urls con valores dinamicos, para hacerlo, puedes definir la ruta agregando las variables
                que deseas poder manejar. Para ejemplificarlo, supongamos que tenemos una página de módificación de
                datos de un usuario
                y queremos manejar el id por medio de la url. Podriamos definir la ruta de la siguiente forma</p>
            <Code language="json">
                {'/user/edit/${userId}'}
            </Code>

            <p>
                Con esto, podremos acceder a nuestra variable userId desde nuestro widget accediendo al mapa <span
                className="inline-code">vars</span> disponible en el objeto uri que recibe nuestro widget.
            </p>

            <h2 id="layouts">Layouts</h2>

            <p>Los layouts representan la estructura general de un sitio web, que puede ser compartida entre varias
                páginas internas.</p>
            <Code language="json">
                {tplLayout}
            </Code>


        </>
    )
}
