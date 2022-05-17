import * as React from 'react';
import {BeyondName} from "../../views/beyond";
import {Elink, Link} from "@beyond/ui/link/code";

export function Intro() {
    return (
        <>
            <h1 id="intro">Widgets</h1>

            <p>La arquitectura de desarrollo de <BeyondName/> en aplicaciones o proyectos webs, está
                diseñada para trabajar con una estructura de <Elink href="https://micro-frontends.org/">Micro
                    frontends</Elink>,
                brindando la posibilidad de poder integrar diferentes stacks tecnológicos en un mismo proyecto, lo que
                permite al desarrollador tener la posibilidad de evaluar que tecnología es más conveniente para un
                modulo especifico, esto se logra por medio de la creación de <strong>widgets</strong>.
            </p>

            <p>Un <strong>Widget</strong> es un tipo de <Link href="/docs/bundles">bundle</Link> disponible
                en <BeyondName/> y es implementado por medio de un <Elink
                    href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">Componente
                    Web</Elink> con shadow DOM para encapsular su contenido. Al ser un componente web,
                puede definir propiedades y métodos, tambien ser accedido por medio de la Api Web de Javascript. Otra
                ventaja importante de los widgets, basado en la filosofía de <BeyondName/>, es que realizan la carga de
                las dependencias a demanda, sólo en el momento en que son requeridas, optimizando los tiempos de carga
                de los proyectos.
            </p>
            <div className="block__note">
                <BeyondName/> implementa las técnicas de renderizado sobre widgets, esto ofrece la posibilidad de
                integrar renderizados hibridos en un proyecto, puedes leer más sobre ello en la <Link
                href="/docs/rendering">sección de renderizado.</Link>
            </div>

            <p>
                <BeyondName/> brinda soporte para trabajar con frameworks/librerias como <Elink
                href="https://reactjs.org">React</Elink>,&nbsp;
                <Elink href="https://vuejs.org/">Vue</Elink> y <Elink
                href="https://svelte.dev/">Svelte</Elink> y tiene disponible la posibilidad de integrar nuevas librerias
                o herramientas.
            </p>
        </>
    )
}
