import * as React from 'react';
import {BeyondName} from "../../views/beyond";
import {Elink, Link} from "@beyond/ui/link/code";

export function RenderingIntro() {
    return (
        <>
            <h1 id="intro">Renderización de Widgets.</h1>
            <p>Uno de los factores más relevantes de <BeyondName/>, es el motor hibrido de renderizado que
                implementa. En primer lugar, es importante tener presente que las páginas webs son Widgets y el
                renderizado se efectúa a nivel de widgets. Esto ofrece al desarrollador la versatilidad de poder
                trabajar con diferentes estrategias de renderizado, incluso en una misma página web.
            </p>

            <div className="block__note">
                Las páginas y Layouts en <span className="beyond">BeyondJS</span> son manejados
                cómo <Link href="/docs/widgets">Widgets</Link>, los cuales
                son implementados por medio de <Elink
                href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">
                web components
            </Elink> con <Elink href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM">
                shadow DOM</Elink>, por tanto, las estrategias de renderizado en <BeyondName/> son hibridas y siempre
                requieren de ejecución de código javascript en el cliente.
            </div>

            <p>El programador puede entonces, definir para <strong>cada widget</strong> el tipo de renderización que
                considere más conveniente. A continuación se listan las formas de renderización disponibles:</p>


            {/*<p>*/}
            {/*    En el mundo web existen diversas estrategias de renderizado y suelen ser manejadas a nivel de páginas.*/}
            {/*    Por su parte <span className="beyond">BeyondJS</span> implementa el renderizado sobre los widgets y*/}
            {/*    permite utilizar varias de estas estrategias, esto*/}
            {/*    brinda a los desarrolladores la posibilidad de combinar las*/}
            {/*    formas de renderización en un mismo proyecto según el criterio que consideren necesario.*/}
            {/*</p>*/}
            {/*<p>Las estrategias de renderizado soportadas por <span className="beyond">BeyondJS</span> son: </p>*/}
            <ul>
                <li><Link href="/docs/rendering#ssr-rendering">Server Side Rendering</Link></li>
                <li><Link href="/docs/rendering#csr-rendering">Client Side Rendering</Link></li>
                <li><Link href="/docs/rendering#sr-rendering">Static Rendering</Link></li>
            </ul>


            {/*<p>*/}
            {/*    <span className="beyond">BeyondJS</span> verifica las plataformas agregadas en el*/}
            {/*    widget y utiliza la distribución configurada para ella, al momento de consumirlo.*/}
            {/*</p>*/}
        </>
    )
}
