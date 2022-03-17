import * as React from 'react';
import {Link} from '@beyond/ui/link/code';

import {TypeProperty} from "../../type-property";

export function ProjectJson() {
    return (
        <>
            <h1>Configuración de proyectos</h1>

            <p>
                Un proyecto en beyond representa un paquete desarrollado que puede tener una o muchas funcionalidades,
                sin importar el entorno para el cual se requiera. Este proyecto puede incluso, ser definido como un
                paquete npm y publicado de manera simple pues <span className="beyond">Beyond</span>, se maneja con el
                estandard de paquetes y busca
                tratar todos los proyectos de forma homogena.
            </p>
            <div className="block__note">
                Como se ha mencionado anteriormente, beyond se ejecuta en la carpeta en la cual se corra desde la línea
                de comandos y no requiere de una configuración previa para arrancar. Sin embargo, si se desea configurar
                un proyecto de forma manual, se recomienda configurar tambien el archivo beyond.json, que permite
                especificar que proyectos queremos visualizar en el dashboard, entre otras cosas.
            </div>

            <h2 id="props-projectjson">Propiedades <span className="file__element">project.json</span></h2>
            <ul className="list__elements-doc">
                <li>
                    <strong>name: {`string [optional]`}</strong>
                    string Es el nombre para identificar el proyecto, sigue el estandar de npm, por tanto sólo
                    puede contener caracteres seguros para urls, sin puntos o guiones bajos.
                </li>
                <li>
                    <strong>scope: {`string [optional]`}: </strong>
                    Al igual que en npm, sirve para agrupar paquetes y como los proyectos pueden ser publicados como
                    paquetes npm, en caso de agregarse un scope, este debe ser único y sólo puede ser manejado por la
                    organización o usuario que lo utiliza. La validación de unicidad del scope es hecha por npm, sólo si
                    el programador intenta publicar su proyecto como paquete.

                </li>
                <li>
                    <strong>title: {`string [optional]`}</strong>
                    Titulo descriptivo del proyecto, no debe poseer más de 100 caracteres.

                </li>
                <li>
                    <strong>description: {`string [optional]`}</strong>
                    Espacio para explicar de forma resumida cuales son las características del proyecto.

                </li>
                <li>
                    <strong>template: {`<Link href="/glossary#eoc"EOC</Link> [optional]`}</strong>
                    Espacio para explicar de forma resumida cuales son las características del proyecto.
                </li>
                <li>
                    <strong>layout: {`<Link href="/glossary#eoc"EOC</Link> [optional]`}</strong>
                    Espacio para explicar de forma resumida cuales son las características del proyecto.
                </li>
                <li>
                    <strong>params: {`<Link href="/glossary#eoc"EOC</Link> [optional]`}</strong>
                    Objeto que permite agregar parametros generales que se requieran utilizar en todo el proyecto, tiene
                    la posibilidad de definir valores por entorno. Para entender más, puedes dirigirte a la
                    <Link href="/project/params">sección Parametros del proyecto.</Link>
                </li>
                <li>
                    <strong>modules: {`<Link href="/glossary#eoc"EOC</Link> [optional]`}</strong>
                    Recibe un objeto con una entrada <span className="inline-code">path</span>
                    que permite definir el directorio de los modulos, por defecto es "module"
                </li>
                <li>
                    <strong>deployment: {`<Link href="/glossary#eoc"EOC</Link>`}</strong>

                    Objeto que permite realizar las configuraciones de los entornos de desarrollo, las cuales son
                    definidas por medio de la entrada deployment
                </li>
                <li>
                    <strong>Deployment: {`<Link href="/glossary#eac"EAC</Link>`}</strong>

                    Objeto que permite realizar las configuraciones de los entornos de desarrollo, las cuales son
                    definidas por medio de la entrada <strong>distributions</strong>. Las distribuciones pueden
                    agregarse desde la funcionalidad del dashboard para ello o de forma manual. Para entender como
                    funcionan pudes dirigirte a la <Link href="/project/distributions">Sección de distribuciones</Link>.
                </li>
                <li><strong>libraries :
                    <TypeProperty type="object" optional/>
                </strong>
                    Define la importacion de proyectos a ser usados como librerias en el proyecto definido.
                    <ul>
                        <li>imports: <TypeProperty type="string" optional/>
                            Cada entrada representa un proyecto importado, la importación se hace agregando el scope y
                            nombre del proyecto importado.
                        </li>
                    </ul>
                </li>
                <li>

                </li>
            </ul>
        </>
    )
}
