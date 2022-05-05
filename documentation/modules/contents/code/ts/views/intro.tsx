import * as React from 'react';
import {Link} from '@beyond/ui/link/code';
import {Quiz} from "../quiz";
import {BeyondImage} from '@beyond/ui/image/code';

export function Intro() {
    return (
        <>

            <h2 id="intro">Bienvenido</h2>
            <p>
                Bienvenido a la documentación de <span className="beyond">BeyondJS</span>. En este documento se realiza
                un repaso sobre que es <span className="beyond">BeyondJS</span> y cuales son sus características
                princiales. Si deseas ver cómo funciona en cuestión de minutos, te recomendamos realices nuestro <Link
                href="/tutorial/web">tutorial
                básico.</Link>
            </p>


            <h3 id="what-is"> ¿Qué es <span className="beyond">BeyondJS</span>?</h3>
            <p>Es un <strong>meta-framework</strong> para trabajar con proyectos <span
                className="inline">JavaScript</span> de forma universal y en todos los entornos en los que se encuentra
                disponible, a saber: Sistemas operativos, código servidor, soluciones web o aplicaciones
                móviles.
            </p>
            <BeyondImage src="/images/tutorials/beyond-environments.png" alt="Beyond environments"/>


            <p><span className="beyond">BeyondJS</span> se enfoca principalmente en tres partes</p>
            <ul>
                <li>Creación de proyectos node y Librerias NPM.</li>
                <li>Aplicaciones Web con SSR o CSR y Mobile.</li>
                <li>Diseñado para</li>
            </ul>

            <h3>¿Por qué usarlo?</h3>

            <p>
                Hay tres factores que hacen que el desarrollo de soluciones con <strong>JavaScript</strong> sea bastante
                sofisticado:
            </p>
            <ul>
                <li>
                    <p><strong>JavaScript</strong> es un lenguaje sofisticado y en constante evolución, lo cual hace que
                        incluso quienes tienen años trabajando con el deban seguir estudiandolo.</p>
                </li>
                <li>
                    Si bien el <strong>JavaScript</strong> es un único lenguaje, las APIs provistas para los entornos en
                    los cuales puede ser usado son diferentes
                </li>
                <li>Existe un gran número de librerias y frameworks para cada entorno de desarrollo, en muchas ocasiones
                    incompatibles entre sí. Esto ha logrado que la comunidad de desarrollo web se mantenga separada en
                    burbujas de stacks tecnológicos que, en muchas ocasiones <i>complican</i> la posibilidad de un
                    programador de aprender nuevas herramientas.
                </li>

            </ul>

            <p><span className="beyond">BeyondJS</span> tiene cómo foco ofrecer una estructura base y estandarizada que
                permita trabajar en cualquier ecosistema en el que <strong>JavaScript</strong> se encuentre disponible,
                simplificandole a los desarrolladores el proceso y garantizando la compatibilidad. Asimismo, es
                compatible con la mayoria de frameworks de vista y suministra medios para integrarlos de manera simple.
            </p>
            <p><span className="beyond">BeyondJS</span> por su parte, ofrece una estructura de desarrollo estandarizada
                que pe</p>
            <h4>Pero, ¿Qué significa esto?</h4>


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
            <Quiz id="intro"/>
        </>
    )
}
