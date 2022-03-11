import * as React from 'react';
import {Link} from "@beyond/ui/link/code";

export function CreateProject() {
    return (
        <section className="content">
            <h3 id="create-project-section">
                Crear un proyecto
            </h3>

            <p>En el formulario de creacion de proyectos, vamos a seleciconar proyecto [tipo de proyecto]
                Agregamos el nombre del proyecto, el puerto en el cual queremos que corra y le damos crear. Esto
                generará la configuración por defecto de un proyecto para que podamos trabar en el.
            </p>
            <div className="note__block">
                Nota: Crear un proyecto sin hacer uso del dashboard tambien es simple. En beyond todo se maneja por
                medio de archivos .json de configuración, si quieres configurarlos por tu cuenta, puedes ver el detalle
                <Link href="/project-json">en el apartado del proyect.json</Link>
            </div>
            <p>
                Este formulario simplifica el proceso de creacion, internamente lo que sucede es que se crear el archivo
                de configuracion de beyond (beyond.json), el cual registra las aplicaciones en el directorio, tambien se
                crea la estructura base de la aplicacion, la cual se estructura de la siguiente forma:
            </p>
            <ul>
                <li>
                    <strong>package.json:</strong> Si!,
                    los proyectos en beyond estan listos para ser paquetes npm. Este
                    archivo es su definición.
                </li>
                <li>
                    <strong>project.json:</strong> Contiene la configuración básica del proyecto, la cual puede variar
                    según el tipo de proyecto y las necesidades del mismo. Puedes leer más sobre el project.json acá.
                </li>
                <li>
                    <strong>template:</strong> Esta carpeta contiene todos los elementos necesarios para definir el
                    template general del
                    proyecto.
                    template.json: Permite personalizar la configuración de la plantilla del proyecto.
                </li>
            </ul>
            <p>La pantalla de detalle del proyecto nos permite realizar las siguientes acciones:</p>
            <ul>
                <li>Listar modulos del proyecto</li>
                <li>crear nuevos modulos</li>
                <li> Visualizar errores de código en real time.</li>
                <li>Editar código fuente</li>
                <li>Agregar archivos estaticos y de template.</li>
                <li>Realizar configuraciones generales sobre el proyecto.</li>
                <li>Realizar deployment.</li>
            </ul>


        </section>

    )
}
