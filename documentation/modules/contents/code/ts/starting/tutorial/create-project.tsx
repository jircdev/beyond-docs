import * as React from 'react';
import {Link} from "@beyond/ui/link/code";
import {ModalImage} from "../../views/modal-image";

export function CreateProject() {
    return (
        <section className="content">
            <h2 id="create-project-section">
                Crear el proyecto
            </h2>

            <p>En el formulario de creación de proyectos, vamos a seleccionar proyecto <strong>Web</strong>.
                Esto nos llevará a un formulario donde se solicitan los siguientes datos:
            </p>
            <ul>
                <li><strong>Scope:</strong> colocamos “testing”.</li>
                <li><strong>Name </strong>: colocamos “login”.</li>
                <li><strong>Title:</strong> Tutorial beyond.</li>
                <li><strong>Port:</strong> coloquemos el puerto: 6500. Es el puerto que se utilizará para acceder al
                    proyecto. <div className="beyond">BeyondJS</div> propone un puerto por defecto y puede ser
                    modificado si se requiere.
                </li>
            </ul>
            <p>Y presionamos crear.</p>
            <div className="block__note">
                El scope y el nombre, son datos que permiten identificar el proyecto y que lo dejan listo para ser
                publicado como paquete npm o para importarlo desde otro proyecto. Estas configuraciones pueden
                hacerse de forma manual, el dashboard sólo simplifica el proceso. Puedes ver la explicación de ello en
                <Link href="/project/config"> la sección de Configuración de proyecto.</Link>
            </div>
            <p>
                Este formulario simplifica el proceso de creacion. Internamente lo que sucede es que se crea el archivo
                de configuración de beyond (beyond.json), el cual registra las aplicaciones en el directorio. También se
                crea la estructura base de la aplicación, la cual esta conformada de la siguiente forma:

            </p>
            <ul>
                <li>
                    <strong>package.json:</strong> Incluye las dependencias del proyecto creado.
                </li>
                <li>
                    <strong>project.json:</strong> Contiene la configuración básica del proyecto (puede variar
                    según el tipo y las necesidades del mismo).

                </li>
                <li>
                    <strong>template:</strong> Esta carpeta contiene todos los elementos necesarios para definir el
                    template general del
                    proyecto.
                    <ul>
                        <li><strong>template.json:</strong> Archivo que permite realizar ajustes en la configuración
                            del template del proyecto.
                        </li>
                    </ul>

                </li>
            </ul>
            <p>En el dashboard, tenemos dos lugares para ver el módulo. El <i>Board</i> del proyecto, que lista los
                módulos
                existentes y El <i>Aside</i> del proyecto que permite navegar los archivos del mismo. Como vemos en la
                siguiente imagen.
            </p>
            <ModalImage src="/contents/static/project-view.png" alt="Beyond module view"/>
            <p>La pantalla de detalle del proyecto nos permite realizar las siguientes acciones:</p>
            <ul>
                <li>Listar módulos del proyecto.</li>
                <li>Crear nuevos módulos.</li>
                <li>Visualizar errores de código en real time.</li>
                <li>Editar código fuente.</li>
                <li>Agregar archivos estáticos y de template.</li>
                <li>Realizar configuraciones generales sobre el proyecto.</li>
                <li>Realizar deployment.</li>
            </ul>
        </section>
    )
}
