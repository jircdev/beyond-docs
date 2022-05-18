import * as React from 'react';
import {BeyondName} from "../../views/beyond";
import {Elink, Link} from "@beyond/ui/link/code";


export function Intro() {
    return (
        <>
            <h1 id="intro">Widgets</h1>

            <p>En <BeyondName/>, La arquitectura de desarrollo para aplicaciones o proyectos webs, está
                diseñada para trabajar con una estructura de <Elink href="https://micro-frontends.org/">Micro
                    frontends</Elink>,
                brindando la posibilidad de integrar diferentes stacks tecnológicos en un mismo proyecto,
                lo que permite evaluar que tecnología es más conveniente para desarrollar funcionalidades específicas,
                esto se logra por medio de la creación de <strong>widgets</strong>.
            </p>

            <p>Un <strong>Widget</strong> es un tipo de <Link href="/docs/bundles">bundle</Link> disponible
                en <BeyondName/> y es implementado por medio de un <Elink
                    href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">Componente
                    Web</Elink> con <Elink
                    href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM">shadow
                    DOM</Elink> para encapsular su contenido. Al ser un componente web,
                puede definir propiedades y métodos y ser accedido por medio de la API del <Elink
                    href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model">
                    DOM</Elink>.

                Otra ventaja importante de los widgets, es que realizan la carga de dependencias a demanda y
                sólo cuando son requeridas, optimizando así los tiempos de carga de los componentes.
            </p>
            <div className="block__note">
                <BeyondName/> implementa las técnicas de renderizado sobre widgets, esto ofrece la posibilidad de
                integrar renderizados hibridos en un proyecto, puedes leer más sobre ello en la <Link
                href="/docs/rendering">sección de renderizado.</Link>
            </div>

        </>
    )
}
