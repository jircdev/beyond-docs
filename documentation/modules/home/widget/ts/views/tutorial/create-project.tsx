import * as React from 'react';
import {Link} from "@beyond/ui/link/code";
import {ModalImage} from "../modal-image";

export function CreateProject() {
    return (
        <section className="content">
            <h2 id="create-project-section">
                Crear el proyecto
            </h2>

            <p>En el formulario de creacion de proyectos, vamos a seleccionar proyecto <strong>Web</strong>.
                Esto nos llevará a un formulario donde nos piden los siguientes datos:
            </p>
            <ul>
                <li><strong>Scope:</strong> colocaremos “testing”.</li>
                <li><strong>Name </strong>: colocamos “login”.</li>
                <li><strong>Title:</strong> Tutorial beyond.</li>
                <li><strong>Port:</strong> coloquemos el puerto: 6500. Es el puerto que se utilizará para acceder al
                    proyecto, beyond propone uno por defecto y puede ser modificado si se requiere.
                </li>
            </ul>
            <p>Y presionamos crear.</p>
            <div className="block__note">
                El scope y el nombre, son datos que permiten identificar el proyecto y que lo dejan listo para que este
                pueda ser publicado como paquete npm o para importarlo desde otro proyecto. Estas configuraciones pueden
                hacerse de forma manual, el dashboard sólo simplifica el proceso. Puedes ver la explicación de ello en
                <Link href="/project/config"> la sección de Configuración de proyecto.</Link>
            </div>
            <p>
                Este formulario simplifica el proceso de creacion, internamente lo que sucede es que se crear el archivo
                de configuracion de beyond (beyond.json), el cual registra las aplicaciones en el directorio, tambien se
                crea la estructura base de la aplicacion, la cual se estructura de la siguiente forma:

            </p>
            <ul>
                <li>
                    <strong>package.json:</strong> incluye las dependencias del proyecto creado
                </li>
                <li>
                    <strong>project.json:</strong> Contiene la configuración básica del proyecto, esta puede variar
                    según el tipo de proyecto y las necesidades del mismo.

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
            <p>En el dashboard, tenemos dos lugares para ver el modulo. Enn el board del proyecto, que lista los módulos
                existentes y en el aside del proyecto que permite navegar los archivos del mismo. Como vemos en la
                siguiente imagen
            </p>
            <ModalImage src="/home/static/project-view.png" alt="Beyond module view"/>
            <p>La pantalla de detalle del proyecto nos permite realizar las siguientes acciones:</p>
            <ul>
                <li>Listar modulos del proyecto</li>
                <li>Crear nuevos modulos</li>
                <li>Visualizar errores de código en real time.</li>
                <li>Editar código fuente</li>
                <li>Agregar archivos estaticos y de template.</li>
                <li>Realizar configuraciones generales sobre el proyecto.</li>
                <li>Realizar deployment.</li>
            </ul>
        </section>
    )
}