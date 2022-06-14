import * as React from "react";
import {Link} from '@beyond/ui/link/code';
import {NextLinks} from "@beyond/docs/components/next-links/code";
import {ObjectProperty, BeyondName} from "@beyond/docs/components/html/code";

export function ProjectJson() {
    return (
        <>


            <h1 id="properties">Propiedades <span className="file__element">project.json</span></h1>

            <p>El <span className="inline">project.json</span> es el archivo de configuración de un proyecto, contiene
                toda la información necesaria para que <BeyondName/> pueda levantar el proyecto en entorno de desarrollo
                y realizar las tareas de compilación para su despliegue. A continuación se listan las propiedades de
                configuración.
            </p>
            <ul className="list__elements-doc">
                <li>
                    <ObjectProperty type="string" optional>name</ObjectProperty>

                    string Es el nombre para identificar el proyecto, sigue el estandar de npm, por tanto sólo
                    puede contener caracteres seguros para urls, sin puntos o guiones bajos.
                </li>
                <li>
                    <ObjectProperty type="string" optional>scope</ObjectProperty>
                    Al igual que en npm, sirve para agrupar paquetes y como los proyectos pueden ser publicados como
                    paquetes npm, en caso de agregarse un scope, este debe ser único y sólo puede ser manejado por la
                    organización o usuario que lo utiliza. La validación de unicidad del scope es hecha por npm, sólo si
                    el programador intenta publicar su proyecto como paquete.

                </li>
                <li>
                    <ObjectProperty type="string" optional>title</ObjectProperty>
                    Titulo descriptivo del proyecto, no debe poseer más de 100 caracteres.

                </li>
                <li>
                    <ObjectProperty type="string" optional>description</ObjectProperty>
                    Espacio para explicar de forma resumida cuales son las características del proyecto.

                </li>
                <li>
                    <ObjectProperty type="EOC" href="/docs/glossary#eoc">template</ObjectProperty>
                    Espacio para explicar de forma resumida cuales son las características del proyecto.
                </li>
                <li>
                    <ObjectProperty type="EOC" href="/docs/glossary#eoc">layout</ObjectProperty>
                    Espacio para explicar de forma resumida cuales son las características del proyecto.
                </li>
                <li>
                    <ObjectProperty type="EOC" href="/docs/glossary#eoc">params</ObjectProperty>

                    Objeto que permite agregar parametros generales que se requieran utilizar en todo el proyecto, tiene
                    la posibilidad de definir valores por entorno. Para entender más, puedes dirigirte a la
                    <Link href="/project/params">sección Parametros del proyecto.</Link>
                </li>
                <li>
                    <ObjectProperty type="EOC" href="/docs/glossary#eoc">modules</ObjectProperty>

                    Recibe un objeto con una entrada <span className="inline-code">path</span>
                    que permite definir el directorio de los módulos, por defecto es "module"
                </li>
                <li>
                    <ObjectProperty type="EOC" href="/docs/glossary#eoc">deployment</ObjectProperty>

                    Objeto que permite realizar las configuraciones de los entornos de desarrollo, las cuales son
                    definidas por medio de la entrada deployment
                </li>
                <li>
                    <ObjectProperty type="EAC" href="/glossary#eac">Deployment</ObjectProperty>


                    Objeto que permite realizar las configuraciones de los entornos de desarrollo, las cuales son
                    definidas por medio de la entrada <strong>distributions</strong>. Las distribuciones pueden
                    agregarse desde la funcionalidad del dashboard para ello o de forma manual. Para entender como
                    funcionan pudes dirigirte a la <Link href="/project/distributions">Sección de distribuciones</Link>.
                </li>
                <li>
                    <ObjectProperty type=" object" optional>libraries</ObjectProperty>

                    Define la importacion de proyectos a ser usados como librerias en el proyecto definido.
                    <ul>
                        <li>
                            <ObjectProperty type=" string">imports</ObjectProperty>
                            Cada entrada representa un proyecto importado, la importación se hace agregando el scope y
                            nombre del proyecto importado.
                        </li>
                    </ul>
                </li>
            </ul>
            <NextLinks items={[
                ["Widgets", '/docs/widgets'],
                ["Bundles", '/docs/bundles'],
            ]}/>
        </>
    )
}
