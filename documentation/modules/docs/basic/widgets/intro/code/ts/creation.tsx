import * as React from 'react';
import {Link} from "@beyond/ui/link/code";
import {Code} from "@beyond/docs/code/code";
import {BeyondName, ModalImage} from "@beyond/docs/components/html/code";
import {NextLinks} from '@beyond/docs/components/next-links/code';

const tpl = `"widget": {
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

export /*bundle*/ function WidgetCreation() {
    return (
        <>
            <h2 id="creation">Creación de widgets</h2>

            <div className="block__note">
                Un widget es un tipo de <span className="inline">bundle</span> y en <BeyondName/> tiene una filosofía de
                carga modular y los bundles son la
                representación de código final a ser ejecutado en el entorno javascript. Si quieres leer acerca de todos
                los tipos de bundles existentes, puedes dirigirte a la <Link href="/docs/bundle">sección de
                bundles</Link>.
            </div>

            <p>Los <strong>widgets</strong> exponencian las ventajas ya existentes en los componentes web gracias al
                encapsulamiento. Permiten integrar con una <i>mínima configuración</i> diferentes tecnologías y ofrecen
                una api simple para gestionar sus propiedades, metodos e interacción con el resto de componentes de un
                proyecto web. También, pueden ser disponibilizados como paquetes NPM y utilizados desde cualquier
                proyecto que utilice javascript <strong>sin necesidad de requerir</strong> de <BeyondName/>.
            </p>
            <p>Existen tres tipos de widgets:</p>
            <ul>

                <li><strong>page</strong>: Diseñados para crear las diferentes páginas del aplicativo, recibe parametros
                    de configruación asociados a la URL y al uso de layouts.
                </li>
                <li><strong>layout</strong>: Representan a contenedores de páginas, permiten separar código o lógicas
                    transversales a páginas. Un layout puede también contener otro layout.
                </li>
                <li><strong>default</strong>: Exponen un componente web bajo el nombre definido y no requieren de ningún
                    tratamiento adicional de parte de <BeyondName/>.
                </li>
            </ul>

            <p>
                Todos los widgets implementan un objeto <span className="inline">Controller</span> quien es el encargado
                de manejar el ciclo de vida del componente web y permitir la definción de funcionalidades <Link
                href="docs/rendering">de renderizado</Link>, estado y navegación.
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
            <p>
                Todos los bundles pueden ser creados desde el formulario de creación de módulos del <Link
                href="/docs/dashboard">Dashboard</Link>. En este caso, <BeyondName/> se encarga de generar la
                estructura de carpetas y los archivos necesarios, incluyendo la definición del <span
                className="inline">Controller</span> y los archivos <span className="inline">module.json</span> y <span
                className="inline">.tsconfig</span>.

            </p>
            <p>Cuando los bundles son creados por medio del Dashboard, los
                archivos son generados y módificados por el servicio de desarrollo.
            </p>
            <NextLinks items={[
                '/docs/widgets/page',
                '/docs/widgets/layout',
            ]}/>
        </>
    )
}
