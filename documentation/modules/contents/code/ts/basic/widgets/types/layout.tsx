import * as React from 'react';
import {BeyondName} from "../../../views/beyond";
import {CodeBox, Code} from "@beyond/docs/code/code";

const tplLayout = `
"widget": {
    "is": "layout",
    "element": {
      "name": "main-layout"
    },
...
}`

export function LayoutWidget() {
    return (
        <>
            <h1 id="layouts">Layouts</h1>

            <p>Un layout es un widget que tiene la capacidad de servir como contenedor de otros widgets de
                tipo <span className="inline">page</span> y <span className="inline">layout</span>.
                A diferencia del resto de widgets, que son expuestos como componentes web y pueden ser consumidos como
                un selector HTML cualquiera, los <span className="inline">layouts</span> suministran
                a <BeyondName/> información que define el comportamiento del enrutamiento de un proyecto.
            </p>

            <p>Los widget de tipo layout y de tipo page funcionan muy similar, ambos influyen en el
                enrutamiento y comparten el mismo proceso de renderizado. Sin embargo, tienen una diferencia importante
                al momento de ser usados: un widget de tipo page solo puede ser incluido una vez por URL, mientras que
                el widget de tipo layout puede ser utilizado en múltiples urls.
            </p>
            <p>
                <BeyondName/> internamente maneja una estructura jerarquica de los layouts y páginas renderizados y las
                acciones de navegación del usuario, en base a ello y a las propiedades definidas en la creación del
                widget, se determina en que momento debe ser incluido un objeto de tipo <span
                className="span">layout</span> en el DOM.
            </p>

            <h3 id="use-ways">¿Cuándo usarlos?</h3>

            <p>Si se necesita implementar lógica de interfaz gráfica o que deba encontrarse funcional en diversas
                pantallas. A continuación se listan algunos ejemplos de uso:</p>
            <ul>
                <li>Definición de componentes gráficos que se puedan compartir entre pantallas, tales cómo
                    encabezados, pies de página o un menú.
                </li>
                <li>Inclusión de funcionalidades generales como un gestor de mensajes y notificaciones.</li>
                <li>Scripts de terceros para manejo de métricas o un botón de contacto.</li>

            </ul>
            <h3 id="definition">Definición</h3>
            <p>para definir un widget de tipo layout, debe especificarse la propiedad <span
                className="inline">is</span> con el valor <span className="inline">layout</span>.</p>

            <Code language="json">
                {tplLayout}
            </Code>


            <h3 id="implementation">Implementación</h3>

            <p><BeyondName/> maneja la posibilidad de definir un layout general para el proyecto y un layout para cada
                widget de tipo <span className="inline">page</span> o <span className="inline">layout</span> existente.
                En ambos casos, debe definirse una propiedad <span className="inline">layout</span> cuyo valor debe ser
                el nombre del layout que se desea utilizar.
            </p>

            <p>Para ejemplificar, imaginando que se tiene un bundle layout definido, cuyo nombre es <span
                className="inline">main-layout</span>, se deberia agregar la siguiente propiedad y valor en el objeto
                del archivo <span className="inlin">project.json</span> si espera definirse a nivel de proyecto, o en el
                archivo <span className="inline">module.json</span> si desea agregarse en un módulo.</p>
            <Code language="json">
                "layout": "main-layout"
            </Code>
        </>
    )
}
