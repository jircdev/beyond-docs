import * as React from 'react';
import {Link} from '@beyond/ui/link/code';
import {Quiz} from "../quiz";

export function Intro() {
    return (
        <>

            <h1>Empezando</h1>

            <p>¡Bienvenido a la documentación de <span className="beyond">BeyondJS</span>!</p>

            <p>El único Framework universal para <span className="link">Javascript</span>.</p>

            <p>Si deseas ver como funciona <span className="beyond">BeyondJS</span> en cuestión de minutos, te
                recomendamos realices nuestro <Link href="/tutorial/web">tutorial básico.</Link></p>

            <p>
                ¿Y que es <span className="beyond">BeyondJS?</span> Es un <strong>meta-framework</strong> para trabajar
                con
                javascript de forma universal. ¿Pero Javascript no es universal? ¡Por supuesto! pero las herramientas
                que hoy usamos no lo son y ese es el motivo de existencia de <span
                className="beyond">BeyondJS:</span> Permitir a los desarrolladores, integrar herramientas y tecnologías
                para trabajar en todos los entornos donde la tecnología web está disponbile, siempre manteniendo un
                estandar y ecosistema compatible.
            </p>
            <h4>Pero, ¿Que significa esto?</h4>

            <p>
                La tecnología web se mantiene en constante crecimiento y evolución, esto ha implicado que con el pasar
                de los años existan muchas herramientas, frameworks y librerias que propongan diversas formas de
                trabajo. Por su parte, la intención de <span className="beyond">BeyondJS</span> es enfocarse en la
                productividad, permitir el uso de herramientas, librerias, frameworks de vistas a las que un equipo
                pueda estar acostumbrado, pero integradas en un ecosistema que asegure la compatibilidad e integración
                entre entornos, bien sea <strong>Node, Rhino, aplicaciones moviles, de escritorio o web</strong>.
            </p>

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
                <li><strong>Integración</strong> automática con frameworks de vistas como
                    <a href="http://reactjs.org" target="_blank">React</a>,
                    <a href="https://vuejs.org/" target="_blank">Vue</a>,
                    <a href="https://svelte.dev/" target="_blank">Svelte</a>.
                </li>

                <li><strong>Typescript más inteligente</strong>: transpilado y chequeo de tipos en paralelo, para mejor
                    productividad y rendimiento.
                </li>
                <li><strong>HMR</strong> modular y en el código backend de forma automática.</li>
                <li><strong>Sin Arbol de dependencias</strong> Beyond trabaja bajo un paradigma distinto al que usan
                    empaquetadores como <strong>webpack</strong>.
                </li>


                <li><strong>Jamstack + SSR</strong>.</li>
                <li>Integración estandarizada con NPM, listo para publicar.</li>
                <li><strong>Entorno de ejecución </strong> de servicios gestionados por beyond.</li>
                <li><strong>Web Components</strong> integrados.</li>
                <li><strong>Multilenguaje</strong> manejado por medio de bundles.</li>
                <li>Manejo de plantillas y sobreescritura.</li>


            </ul>
            <Quiz id="intro"/>
        </>
    )
}
