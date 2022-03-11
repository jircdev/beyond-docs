import * as React from 'react';
import {Link} from '@beyond/ui/link/code';
import {BeyondImage} from '@beyond/ui/image/code';

export function CreateModule() {
    return (
        <section className="content">
            <h2 id="create-module">Crear nuestro primer modulo</h2>

            <BeyondImage src="/home/static/create-module-1.png" alt="Crear modulo en beyond"/>
            <div className="block__note">
                Los modulos y bundles se pueden configurar de forma manual de forma simple, sin embargo, como toda tarea
                de configuración son tareas repetitivas y el foco del dashboard es optimizar estos tiempos de
                desarrollo.
                Si deseas leer más en detalle acerca de los modulos, <Link href="/modules">Dirigete a la sección de
                módulos</Link>
            </div>
            <BeyondImage src="/home/static/create-module-2.png" alt="Crear modulo en beyond"/>
            <p>
                Al hacer click en crear modulo, veremos que podemos utilizar una plantilla o crear un modulo en blanco.
                Nosotros crearemos un modulo en blanco, al seleccionarlo, tendremos que seleccionar el bundle a crear.
                Un bundle, es la representación del archivo final a ser consumido por el navegador cuando acceda a
                nuestra aplicación. Para crear nuestra pagina, crearemos un bundle de tipo Page, esto nos permitirá
                agregar una url.

            </p>
            <div className="block__note">
                Los bundles, son parte del secreto de productividad de beyond, es importante entender bien como
                funcionan, si necesitas saber mas, accede a la
                <Link href="/bundles"> sección de Bundles</Link>
            </div>
            <BeyondImage src="/home/static/create-module-3.png" alt="Crear modulo en beyond"/>
            <h4>Llenamos el formulario:</h4>
            <ul>
                <li><strong>Titulo para el modulo: </strong> home page</li>
                <li><strong>nombre componente : </strong> home-page. Este campo representa el nombre del
                    web-component que contendrá la
                    página, la cual es a su vez un tipo de widget. La estructura de nombre de los widgets sigue el
                    estandar de web-components, por lo cual es necesario se encuentren en minusculas, contentan un
                    minimo de dos palabras separadas por guion.
                </li>
                <li><strong>url: </strong>"/" que es el valor por defecto, para la url raiz.</li>
            </ul>
            <div className="block__note">
                Beyond gestiona el manejo completo de rutas y ofrece un conjunto de funcionalidades que mejoran
                el manejo del historial de navegador, unificando su comportamiento sin importar el entorno
                en el cual se pretenda usar el proyecto. Si quieres leer más al respecto, dirigete
                a la <Link href="/routing">Sección de rutas</Link>
            </div>

        </section>
    )
}
