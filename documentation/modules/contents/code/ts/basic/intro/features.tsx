import * as React from 'react';
import {Quiz} from "../../quiz";

export function Features() {
    return (
        <>
            <h2 id="features">Features</h2>
            <p> A continuación, listamos algunas de las caracteristicas más relevantes de <span
                className="beyond">BeyondJS.</span>
            </p>

            <ul>
                <li><strong>Despliegue universal</strong>: Un mismo código, cualquier entorno.</li>
                <li><strong>Carga modular</strong> y a demanda. Esto quiere decir que el código sólo carga una vez,
                    cuando es requerido.
                </li>
                <li><strong>Dashboard</strong> o panel de control muy poderoso para desarrolladores.</li>
                <li><strong>Plug & play</strong> de módulos.</li>
                <li><strong>Ecosistema único</strong> de desarrollo
                    entre <strong>Backend</strong> y <strong>Frontend</strong>.
                </li>
                <li><strong>Real Time</strong> listo para implementar con websockets.</li>
                <li><strong>Integración</strong> automática con frameworks de vistas como&nbsp;
                    <a href="http://reactjs.org" target="_blank">React</a>,&nbsp;
                    <a href="https://vuejs.org/" target="_blank">Vue</a>,&nbsp;
                    <a href="https://svelte.dev/" target="_blank">Svelte</a>.
                </li>

                <li><strong>Typescript más inteligente</strong>: transpilado y chequeo de tipos en paralelo, para mejor
                    productividad y rendimiento.
                </li>
                <li><strong>HMR</strong> modular y en el código backend de forma automática.</li>
                <li><strong>Sin árbol de dependencias</strong> Beyond trabaja bajo un paradigma distinto al que usan
                    empaquetadores como <strong>webpack</strong>.
                </li>


                <li><strong>Jamstack + SSR</strong>.</li>
                <li>Integración estandarizada con NPM, listo para publicar.</li>
                <li><strong>Entorno de ejecución </strong> de servicios gestionados por beyond.</li>
                <li><strong>Web Components</strong> integrados.</li>
                <li><strong>Multilenguaje</strong> manejado por medio de bundles.</li>
                <li>Manejo de plantillas y sobreescritura.</li>


            </ul>

        </>
    )
}
