import * as React from 'react';
import {Link} from '@beyond/ui/link/code';
import {BeyondImage} from '@beyond/ui/image/code';
import {BeyondName} from "@beyond/docs/components/html/code";

export function __Intro() {
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
                className="inline">JavaScript</span> de forma universal, esto quiere decir que se puede usar para
                realizar proyectos en cualquier entorno en el que <span className="accent">Javascript</span> se
                encuentra disponible; a saber: Sistemas operativos, servicios o backend con Node, soluciones web y
                aplicaciones móviles.
            </p>
            <BeyondImage src="/images/tutorials/beyond-environments.png" alt="Beyond environments"/>


            <h3>¿Por qué usar <BeyondName/>?</h3>

            <p>El desarrollo con tecnologías web es bastante complejo, por diversos motivos que, podriamos sintetizar a
                grandes rasgos en tres items generales:</p>
            <ul>
                <li>
                    Javascript es un lenguaje sofisticado y en constante evolución.
                </li>
                <li>
                    Si bien Javascript es un lenguaje universal, las APIs provistas para los entornos en
                    donde puede ser usado son diferentes entre sí.
                </li>
                <li>Existe un gran número de librerias y frameworks para cada entorno donde el lenguaje existe, en
                    muchas ocasiones incompatibles entre sí. Esto ha logrado que la comunidad de desarrollo web se
                    mantenga separada en burbujas de stacks tecnológicos que, en muchas ocasiones <i>complican</i> la
                    posibilidad de un programador de aprender nuevas herramientas.
                </li>

            </ul>

            <p><span className="beyond">BeyondJS</span> tiene cómo foco ofrecer una estructura base y estandarizada que
                permita trabajar en cualquier ecosistema en el que <strong>JavaScript</strong> se encuentre disponible,
                simplificando el proceso y garantizando la compatibilidad entre entornos. Asimismo, es
                compatible con la mayoria de frameworks de vista y suministra medios para integrar nuevas librerias.
            </p>


        </>
    )
}
