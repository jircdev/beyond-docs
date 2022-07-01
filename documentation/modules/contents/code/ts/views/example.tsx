import * as React from 'react';
import {Code} from "@beyond/docs/code";

const exampleCode = `
function A() {
console.log(1, 'ejemplo');
}
`;

export function Example() {

    return (
        <>
            <h1>Un framework universal</h1>
            <p>La tecnología web se encuentra presente hoy en todas las áreas. Sin embargo, los. Programadores que usan
                estas tecnologías no necesariamente tienen conocimientos en todas ellas. Esto se debe principalmente a
                la gran v</p>
            <h2>Subtitulo</h2>
            <p>Javascript es un lenguaje universal, esto significa que puede utilzarse en todos los entornos de
                desarrollo, sin embargo, en la practica, los desarrolladores suelen estar asociados a un entorno
                especifico de desarrollo y con una vision limitada en lo que refiere al alcance que podria tener el
                codigo que realiza.
            </p>
            <h3>Subtitulo menor</h3>
            <p>No se trata de usar una misma libreria o framework para todos los proyectos, sino de lograr utilizar de
                forma universal un lenguaje que lo es desde su nacimiento. Si el Lenguaje es universal, las harramientas
                deberían permitirnos crear código universal, entiendo por universal, no solo hablar de el frontend y el
                backend del mundo web, hoy em dia javascript cubre mucho mas que eso, herramientas como webpack no son
                soluciones web o backend, son soluciones desktop que corren en el computador, al igual que cualquier
                paquete npm.
            </p>
            <Code language="js">
                {exampleCode}
            </Code>

            <p>La tecnología web se encuentra presente hoy en todas las áreas. Sin embargo, los. Programadores que usan
                estas tecnologías no necesariamente tienen conocimientos en todas ellas. Esto se debe principalmente a
                la gran v</p>
            <h2>Subtitulo</h2>
            <p>Javascript es un lenguaje universal, esto significa que puede utilzarse en todos los entornos de
                desarrollo, sin embargo, en la practica, los desarrolladores suelen estar asociados a un entorno
                especifico de desarrollo y con una vision limitada en lo que refiere al alcance que podria tener el
                codigo que realiza.
            </p>
            <h3>Subtitulo menor</h3>
            <p>No se trata de usar una misma libreria o framework para todos los proyectos, sino de lograr utilizar de
                forma universal un lenguaje que lo es desde su nacimiento. Si el Lenguaje es universal, las harramientas
                deberían permitirnos crear código universal, entiendo por universal, no solo hablar de el frontend y el
                backend del mundo web, hoy em dia javascript cubre mucho mas que eso, herramientas como webpack no son
                soluciones web o backend, son soluciones desktop que corren en el computador, al igual que cualquier
                paquete npm.
            </p>
            <Code language="js">
                {exampleCode}
            </Code>
        </>
    )
}
