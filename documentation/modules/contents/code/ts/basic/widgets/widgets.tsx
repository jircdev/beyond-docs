import * as React from 'react';
import {Elink, Link} from '@beyond/ui/link/code';
import {Code} from "@beyond/docs/code/code";
import {ModalImage} from "../../views/modal-image";
import {BeyondName} from "../../views/beyond";
import {Intro} from "./intro";
import {TypeProperty} from "../../views/type-property";


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
            <Intro/>
            <h2 id="creation">Creación de widgets</h2>

            <div className="block__note">
                Los widgets son un tipo de bundle, si quieres leer acerca de todos los tipos de bundles existentes,
                puedes dirigirte a la <Link href="/docs/bundle">sección de bundles</Link>.
            </div>
            <p>
                Existen tres tipos de widgets:</p>
            <ul>
                <li><strong>page</strong>: representan páginas web</li>
                <li><strong>layout</strong>: son contenedores de páginas, permiten definir contenido que deba mantenerse
                    en
                    varias páginas.
                </li>
                <li><strong>default</strong>: widgets generales que no requieren una especificación de tipo, son
                    manejados
                    como web components igual.
                </li>
            </ul>
            <p>Asimismo, requieren de caracter obligatorio disponibilizar una clase <span
                className="inline">Controller</span>, la cual es descrita más adelante.</p>
            <p>
                Los widgets, siguen los línReamientos de cualquier bundle y pueden ser creados desde el dashboard o
                manualmente.
            </p>

            <h3><small>Creación manual</small></h3>
            <p>
                La configuración manual, se realiza agregando la definición del bundle de tipo widget en el <Link
                href="/module/config">module.json</Link> del módulo.</p>
            <Code language="json">
                {tpl}
            </Code>

            <p>
                El código anterior, define un bundle de tipo <span className="inline">widget</span> con el nombre
                del web-component como <span className="inline">web-login</span> y con typescript como procesador.
            </p>

            <h3 id="widget-dashboard">Creación con el dashboard</h3>

            <ModalImage src="/contents/static/create-module-widget.png" alt="create widget module beyond"/>
            <div className="block__note">
                En el dashboard, todos los bundles se crean desde el formulario de módulos, y los archivos
                son actualizados automáticamente por <BeyondName/>.
                se puede conseguir más
                información al respecto en la sección del dashboard.
            </div>
            <h3 id="widget-react">Usando <span className="inline">React</span></h3>

            <p>
                <span className="inline">React</span> tiene soporte automático por medio de typescript en <BeyondName/>,
                que utiliza <Elink href="https://babeljs.io/">Babel</Elink> para convertir el código. Por tanto,
                habiendo agregado el procesador <span className="inline">ts</span> y teniendo instalada la dependencia
                de <span className="inline">react</span>, tu modulo ya está listo para trabajar con <Elink
                href="https://reactjs.org"> ReactJS</Elink>.
            </p>


            <h3>Usando <span className="inline">Svelte</span> o <span className="inline">Vue</span></h3>
            <p>
                Cada framework tiene su propio <Link href="/docs/processors">procesador</Link>. Si deseas integrar vue
                debes agregar en la configuración del bundle el procesador <span className="inline">vue</span>, si en
                cambio, deseas trabajar con svelte, debes agregar en la configuración del bundle el procesador <span
                className="inline">svelte</span>.
            </p>
            <h2 id="controller">Definición del <span className="inline">Controller</span></h2>


            <p>Todo widget debe exponer una clase <span className="inline">Controller</span> definida. El objeto
                Controller es el responsable de la declaración y manejo del web-component que representa al widget. El
                controller tiene una estructura como la siguiente:</p>

            <Code language="ts">
                {tplController}
            </Code>

            <p>
                En el código anterior, la clase <span className="inline">Controller</span> extiende del objeto <span
                className="inline">ReactWidgetController</span> que es el controlador base disponibilizado para trabajar
                con React. <BeyondName/> tiene disponible un controlador para los distintos frameworks de vista. Los
                objetos son:

            </p>
            <ul>
                <li><span className="inline">ReactWidgetController</span> y <span
                    className="inline">ReactPageWidgetController</span>.
                </li>
                <li><span className="inline">SvelteWidgetController</span> y <span
                    className="inline">SveltePageWidgetController</span>.
                </li>
                <li><span className="inline">VueWidgetController</span> y <span
                    className="inline">VuePageWidgetController</span>.
                </li>
            </ul>

            <p>
                Todos los controladores manejan la misma interfaz, pero estan a su vez enfocados en integrar y funcionar
                con el framework de vista que se esté utilizando.
            </p>

            <h3 id="controller-properties"><small>Propiedades</small></h3>

            <ul>
                <li>
                    <strong><span className="inline">get Widget</span></strong>
                    <TypeProperty type="object" optional/>:
                    Se define como un getter y debe retornar el componente de vista principal.
                </li>
            </ul>

            <h3 id="controller-methods"><small>Métodos</small></h3>
            <ul>
                <li>
                    <strong><span className="inline">createStore</span></strong>
                    <TypeProperty type="function" optional/> Permite agregar lógica para el manejo del Estado del
                    widget, debe retornar un objeto con la interfaz <Link href="/docs/api/IwidgetStore">
                    <span className="inline">IWidgetStore</span>
                </Link>
                </li>
            </ul>


        </>
    )
}
