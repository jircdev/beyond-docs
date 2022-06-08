import * as React from 'react';
import {Code} from "@beyond/docs/code/code";
const exportTpl = `
export /*bundle*/ class Auth {
    //.... 
}
// or
export /*bundle*/ const B = {...}; 
`;

export function InternalModules() {
    return (
        <>
            <h2 id="internal-modules">Módulos Internos</h2>
            <p>
                Funcionan como los modulos javascript conocidos, pueden ser importados por medio de rutas relativas
                entre archivos, <strong>pero sólo dentro de un mismo bundle</strong>.
            </p>
            <p>El programador
                puede definir si desea que algún elemento pueda ser importado desde otro bundle, lo que se
                logra por medio del comentario mágico <span className="inline-code">/*bundle*/</span> agregado en la
                línea de exportación. Aquellos archivos que exporten variables u objetos y no contengan el comentario
                mágico, pueden ser importados por módulos internos pertenecientes al mismo bundle, pero no desde bundles
                externos.
            </p>
            <Code language="typescript">
                {exportTpl}
            </Code>

        </>
    )
}
