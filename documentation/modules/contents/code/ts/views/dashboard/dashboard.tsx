import * as React from 'react';
import {AppIcon} from "@beyond/docs/ui/icons/code";
import {ModalImage} from "../modal-image";

export function DashboardPage() {
    return (
        <>
            <h1>Dashboard</h1>

            <p>¿Un panel de control para programar? ¿Es necesario? <strong>¡SI!</strong></p>

            <p>Pero para profundizar en ello, es necesario tener un poco de contexto.</p>

            <h3 id="typescript">Typescript</h3>
            <p>
                Typescript es un lenguaje que llegó a Javascript y que ha generado opiniones positivas y negativas.
                Generalmente las positivas están asociadas a la utilidad del tipado de datos y manejo de errores y las
                negativas a <strong>su lentitud en el procesamiento</strong>. En este sentido, <span
                className="beyond">Beyond</span> busca optimizar el trabajo con typescript haciendo uso de su
                transpilador y su compilador en simultaneo para brindar una experiencia más eficiente al desarrollador,
                además interpreta los errores, analiza las dependencias de un módulo y los módulos consumidores para
                repasar los posibles errores de código y los notifica por medio del <span
                className="beyond">Dashboard</span>.

            </p>
            <h3 id="time-dev">Tiempo invertido en el desarrollo</h3>
            <p>
                Los programadores invertimos mucho tiempo analizando y detectando errores, y el efecto de los cambios
                aplicados en determinada sección en el resto del código. Tambien es muy común cometer errores humanos,
                de typo o de lógica. El dashboard tiene como foco colaborar con ello suministrando información oportuna
                en relación con los errores y warnings de un proyecto, pero va más allá, tiene la capacidad de evaluar
                el código desde la óptica de desarrollo en tres niveles distintos:
            </p>
            <ul>
                <li><strong>Módulo en desarrollo</strong>: El módulo en el cual se está trabajando</li>
                <li><strong>Dependencias</strong>: Los módulos importados por el módulo en desarrollo.</li>
                <li><strong>Consumidores</strong>: Los módulos que consumen el módulo sobre el cual estamos trabajando.
                </li>
            </ul>


            <p>Manejo</p>
            <ul>

            </ul>

            <h2 id="functionalities">Funcionalidades</h2>
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
                    <span> Detalle informativo de los proyectos y módulos </span></li>
                <li>
                    <AppIcon icon="apps"/>
                    <span>
                        Brinda un ecosistema inteligente que colabora con la detección de errores en
                    los módulos, las dependencias y en los módulos que consumen otros módulos si el código cambia.
                    </span>
                </li>
                <li>
                    <AppIcon icon="bell"/>
                    <span>Detección de errores de tipado con <code
                        className="inline-code">typescript</code>.
                </span></li>
                <li><AppIcon icon="bell"/><span>Detección de errores de runtime.</span></li>
                <li><AppIcon icon="bell"/><span>Manejo de errores en real time en procesos <code
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

            <h2>Estructura</h2>
            <p>El <span className="beyond">Dashboard</span> funciona como un marco de trabajo (Workspace) y cada
                componente que lo integra tiene definido un nombre que permite identificarlo, estos son:
            </p>
            <ul>
                <li><strong>PreAside:</strong> Primer panel izquierdo, iconográfico de acceso general de acciones las
                    cuales varian si se tiene o no un proyecto abierto
                </li>
                <li><strong>Aside:</strong> Menu secundario que despliega funcionalidades adicionales asociadas a la
                    opción seleccionada en el preaside.
                </li>
                <li><strong>Boards</strong>: Cada panel abierto en la pantalla principal es denominado board, la lista
                    de aplicaciones es un board, el detalle de la aplicación o la pantalla de configuración tambien lo
                    son.
                </li>
                <li><strong>Panels:</strong> Cada división de pantalla generada en el workspace</li>
            </ul>
            <h2 id="generate-projects">Generación de proyectos</h2>

            <p>
                El formulario para crear proyectos, ofrece múltiples posibilidades para crear proyectos en blanco o a
                partir de una plantilla existente para empezar con el framework o libreria de interfaz de tu
                preferencia. Puede ser accedido desde el preaside, en la opción con el icono <AppIcon
                icon="newProject"/> o en el header del listado de aplicaciones en las opciones de la derecha.
            </p>
            <p>El formulario luce de la siguiente forma:</p>
            <ModalImage src="/contents/static/new-project.png" alt="Beyond's form to create projects"/>

            <h2 id="project-manger">Manejo de proyectos</h2>

            <p>
                Cada proyecto tiene un panel informativo en el cual se puede visualizar el directorio en el cual se
                encuentra, el listado de módulos, los errores generales y el estatus de análisis. Asimismo, el board del
                proyecto ofrece las siguientes acciones:
            </p>

            <ul>
                <li>Actualizar dependencias.</li>
                <li>Validar errores.</li>
                <li>Compilar proyecto.</li>
                <li>Acceder al board de un módulo.</li>
            </ul>


        </>
    )
}
