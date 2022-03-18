import * as React from 'react';
import {AppIcon} from "@beyond/docs/ui/icons/code";

export function DashboardPage() {
    return (
        <>
            <h1>Dashboard</h1>

            <p>¿Es necesario un dashboard para desarrollar? La respuesta ha este tipo de preguntas siempre es depende.
                Desde la óptica de programación: No, en beyond puedes manejar cualquier desarrollo como siempre se ha
                hecho, con código y la consola de comandos si se llega a requerir. Ahora bien, desde el punto de vista
                de la estandarización y simplificación de procesos, la respuesta es que
                indudablemente <strong>si.</strong> En el presente documento se intentará explicar como puede ser útil
                el <span className="beyond">Dashboard</span> de beyond y cuales son las ventajas que ofrece.
            </p>

            <p>El desarrollo web se fundamenta principalmente sobre Javascript y las tecnologías que giran a su
                alrededor, siendo <code className="inline-code"><a href="https://www.npmjs.com/" target="_blank">NPM</a></code>
                el epicentro en el cual se encuentran la mayoria de paquetes, frameworks y librerias utilizadas por la
                industria y por supuesto, quien define el estandar para la creación de estos paquetes. Sin embargo,
                aunque el estandar está definido, existe una variedad de configuraciones según el tipo de paquete
                publicado y la forma en que se espera sea consumido. </p>
            <p>
                En la practica, no todos los programadores conocen, manejan o se rigen por los estandares de NPM y esto
                sugiere dos problemáticas muy claras y sin embargo, imperceptibles para muchos desarrolladores. La
                primera es la generación de bundles y la forma de consumir javascript, existen librerias que se han
                abocado completamente a esperar que sean manejadas por empaquetadores como webpack, dejando de lado
                aquellos proyectos que no esperen manejar este nivel de configuración, bien sea porque no lo requieren o
                desean. La segunda y más importante, es que en el ecosistema de Javascript, existen diferentes formas de
                integrar las dependencias: CommonJS, AMD, UMD, SystemJS y EcmaScript Modules, si un proyecto no brinda
                soporte a una de estas, el equipo de programación que desee integrarlo y lo requiera, puede verse
                complicado. En la mayoria de los casos las librerias que ofrecen ES6 Modules, realmente son paquetes que
                solo
                pueden ser integrados si existe un empaquetador de por medio
            </p>

            <p>
                Beyond Busca estandarizar el manejo de paquetes y genera de forma automática la estructura del
                package.json correcta para ser manejada desde cualquier tipo de proyecto, sin importar entorno o forma
                de uso, esta tarea puede hacerse desde el dashboard.
            </p>
            <p>
                Typescript es un lenguaje que llego a Javascript y que ha generado opiniones positivas y negativas.
                Generalmente las positivas están asociadas a la utilidad del tipado de datos y manejo de errores y las
                negativas a <strong>su lentitud en el procesamiento. En este sentido, <span
                className="beyond">Beyond</span> busca optimizar el trabajo con typescript haciendo uso de su
                transpilador y su compilador en simultaneo para brindar una experiencia más eficiente al desarrollador,
                además interpreta los errores, analiza las dependencias de un módulo y los modulos consumidores para
                repasar los posibles errores de código y los notifica por medio del <span
                    className="beyond">Dashboard</span>.
            </strong>
            </p>
            <p>Manejo</p>
            <ul>

            </ul>

            <p>El <span className="beyond">Dashboard de Beyond </span>
                suministra al programador las siguientes funcionalidades:</p>

            <ul className="icon__list">
                <li>
                    <AppIcon icon="apps"/>
                    <span>
                    Generación de proyectos y módulos.
                    </span>

                </li>
                <li>
                    <AppIcon icon="apps"/>
                    <span> Detalle informativo de los proyectos y modulos </span></li>
                <li>
                    <AppIcon icon="apps"/>
                    <span>
                        Brinda un ecosistema inteligente que colabora con la detección de errores en
                    los modulos, las dependencias y en los modulos que consumen otros modulos si el código cambia.
                    </span>
                </li>
                <li>
                    <AppIcon icon="bell"/>
                    <span>Detección de errores de tipado con <code
                        className="inline-code">typescript</code>.
                </span></li>
                <li><AppIcon icon="bell"/><span>Detección de errores de runtime.</span></li>
                <li><AppIcon icon="bell"/><span>Manejo de errores en Realtime en procesos <code
                    className="inline-code">Node</code>
                    por medio de HMR.
                </span></li>
                <li><AppIcon icon="setting"/><span>Configuración de entornos de desarrollo.</span></li>
                <li><AppIcon icon="code"/><span>Edición de código</span></li>
                <li><AppIcon icon="page"/><span>Navegación de proyectos.</span></li>
                <li><AppIcon icon="dependency"/><span>Manejo de dependencias.</span></li>
                <li><AppIcon icon="photoSize"/><span>Gestión de archivos estáticos y plantilla del proyecto.</span></li>
                <li><AppIcon icon="compile"/><span>Deployment.</span></li>
            </ul>

            <h2>Generación de proyectos</h2>

            <p>Crear proyectos </p>
        </>
    )
}
