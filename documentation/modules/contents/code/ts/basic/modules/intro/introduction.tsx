import * as React from 'react';
import {Elink} from "@beyond/ui/link/code";

export function IntroIntroduction() {
    return (
        <>
            <h1 id="intro">Introducción</h1>

            <p> En <span className="beyond">BeyondJS</span> los módulos
                representan la unidad básica de desarrollo y tienen <strong>características</strong> necesarias de
                entender pues definen el comportamiento general del Framework.

            </p>
            <p>
                Para entender bien las diferencias y ventajas del
                ecosistema de módulos, es necesario antes repasar como funcionan los módulos de Javascript y
                como se integran en el proceso de desarrollo en la actualidad.
            </p>

            <h2 id="es6-modules">Módulos EcmaScript</h2>
            <p>Un <Elink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules">
                módulo javascript
            </Elink> hoy es representado por un único archivo, con tareas independientes y un scope
                propio, Este módulo puede exportar elementos y dichos elementos, ser importados por otros módulos
                (archivos independientes)
                que consumen las variables, objetos o funciones que este provee.
            </p>

            <p>Los empaquetadores por su parte, utilizan una sintaxis compatible con las imports incluidos en
                EcmaScript, pero ellos intervienen encargandose de analizar el arbol de dependencias, quitando aquellos
                elementos que no son utilizados en el codigo (tree shaking) y
                <strong> generando un “bundle”</strong> que es a su vez, un contenedor de todos los
                módulos utilizados por el equipo de desarrollo. Esta gestión agrega un conjunto de elementos no propios
                del lenguaje que en el tiempo, puede implicar en malas practicas y complicaciones en la escalabilidad de
                proyectos.
            </p>

        </>
    )
}
