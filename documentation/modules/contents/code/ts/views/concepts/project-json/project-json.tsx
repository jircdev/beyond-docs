import * as React from 'react';
import {Link} from '@beyond/ui/link/code';

import {TypeProperty} from "../../type-property";
import {ModalImage} from "../../modal-image";

export function ProjectJson() {
    return (
        <>
            <h1 id="projects">Proyectos</h1>

            <p>
                Un proyecto o biblioteca (proyecto hecho en <span className="beyond">BeyondJS</span> que es importado
                por otro), representa un paquete de funcionalidades disponible para utilizar en los entornos definidos
                adentro del mismo proyecto, estos entornos pueden ser Node, web, desktop o móvil.

            </p>
            <ModalImage src="/contents/static/projects-list.png" alt="Beyond's project list view"/>
            <p>
                Los proyectos<span className="beyond">BeyondJS</span>siguen la especificación
                <strong> <a target="_blank" href="https://docs.npmjs.com/cli/v8/using-npm/scope">npm </a></strong>
                y pueden ser publicados como paquetes de forma simple.
            </p>
            <div className="block__note">
                <span className="beyond">BeyondJS</span> se ejecuta en la carpeta en la cual se corra desde la línea
                de comandos y no requiere configuración previa para arrancar. Sin embargo, si se desea configurar
                un proyecto de forma manual, debe hacerse por medio del archivo <code
                className="inline-code">beyond.json</code>, que permite, entre otras cosas,
                especificar los proyectos que deben ser levantados por el framework.
            </div>

            <h2 id="properties">Propiedades <span className="file__element">project.json</span></h2>
            <ul className="list__elements-doc">
                <li>
                    <strong>name</strong>
                    <TypeProperty type="string" optional/>:
                    string Es el nombre para identificar el proyecto, sigue el estandar de npm, por tanto sólo
                    puede contener caracteres seguros para urls, sin puntos o guiones bajos.
                </li>
                <li>
                    <strong>scope: </strong>
                    <TypeProperty type="string" optional/>:
                    Al igual que en npm, sirve para agrupar paquetes y como los proyectos pueden ser publicados como
                    paquetes npm, en caso de agregarse un scope, este debe ser único y sólo puede ser manejado por la
                    organización o usuario que lo utiliza. La validación de unicidad del scope es hecha por npm, sólo si
                    el programador intenta publicar su proyecto como paquete.

                </li>
                <li>
                    <strong>title</strong>
                    <TypeProperty type="string" optional/>:
                    Titulo descriptivo del proyecto, no debe poseer más de 100 caracteres.

                </li>
                <li>
                    <strong>description</strong>
                    <TypeProperty type="string" optional/>:
                    Espacio para explicar de forma resumida cuales son las características del proyecto.

                </li>
                <li>
                    <strong>template</strong>:
                    <TypeProperty type="EOC" href="/glossary#eoc"/>:
                    Espacio para explicar de forma resumida cuales son las características del proyecto.
                </li>
                <li>
                    <strong>layout</strong>:
                    <TypeProperty type="EOC" href="/glossary#eoc"/>:
                    Espacio para explicar de forma resumida cuales son las características del proyecto.
                </li>
                <li>
                    <strong>params</strong>:
                    <TypeProperty type="EOC" href="/glossary#eoc"/>:
                    Objeto que permite agregar parametros generales que se requieran utilizar en todo el proyecto, tiene
                    la posibilidad de definir valores por entorno. Para entender más, puedes dirigirte a la
                    <Link href="/project/params">sección Parametros del proyecto.</Link>
                </li>
                <li>
                    <strong>modules</strong>
                    <TypeProperty type="EOC" href="/glossary#eoc"/>:
                    Recibe un objeto con una entrada <span className="inline-code">path</span>
                    que permite definir el directorio de los modulos, por defecto es "module"
                </li>
                <li>
                    <strong>deployment </strong>
                    <TypeProperty type="EOC" href="/glossary#eoc"/>:
                    Objeto que permite realizar las configuraciones de los entornos de desarrollo, las cuales son
                    definidas por medio de la entrada deployment
                </li>
                <li>
                    <strong>Deployment: </strong>
                    <TypeProperty type="EAC" href="/glossary#eac"/>

                    Objeto que permite realizar las configuraciones de los entornos de desarrollo, las cuales son
                    definidas por medio de la entrada <strong>distributions</strong>. Las distribuciones pueden
                    agregarse desde la funcionalidad del dashboard para ello o de forma manual. Para entender como
                    funcionan pudes dirigirte a la <Link href="/project/distributions">Sección de distribuciones</Link>.
                </li>
                <li><strong>libraries </strong> <TypeProperty type="object" optional/>:
                    Define la importacion de proyectos a ser usados como librerias en el proyecto definido.
                    <ul>
                        <li>imports: <TypeProperty type="string" optional/>
                            Cada entrada representa un proyecto importado, la importación se hace agregando el scope y
                            nombre del proyecto importado.
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    )
}
