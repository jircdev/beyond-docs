import * as React from 'react';
import {Elink, Link} from "@beyond/ui/link/code";
import {Code} from "@beyond/docs/code/code";
import {BeyondImage} from "@beyond/ui/image/code";
import {AppIcon} from "@beyond/docs/ui/icons/code";
import {BeyondName} from "../../../views/beyond";

export function DashboardCreateProject() {
    return (
        <>
            <h2 id="using-dashboard">Usando el Dashboard</h2>

            <p>Para crear un proyecto desde el dashboard, en primer lugar debe asegurarse de que <BeyondName/> esté
                ejecutandose en la carpeta donde desee trabajar sus proyectos. Como se explica en la <Link
                    href="/docs/projects/intro">introducción</Link>, <BeyondName/> está hecho para manejar proyectos en
                simultáneo, por lo que es importante tener presente que el directorio de ejecución puede ser uno donde
                se deseen agregar "varios" proyectos.
            </p>

            <p>Iniciamos <BeyondName/>:</p>
            <Code language="json">{`> beyond`}</Code>
            <p>Luego accedemos al dashboard el cual estará disponible en <Elink
                href="http://localhost:4000">http://localhost:4000</Elink></p>

            <p>El dashboard posee tres maneras de acceder al proceso de creación de proyectos</p>
            <BeyondImage src="/images/dashboard/empty.png" alt="beyond creating projects"/>
            <ul>
                <li>En el <Link href="/docs/dashboard#preaside">Preaside</Link> por medio del icono <AppIcon
                    icon="apps"/></li>
                <li>En el <Link href="/docs/dashboard#preaside">Board</Link> de proyectos, en la parte superior derecha,
                    la opción "crear proyecto"
                </li>
                <li>Cuando no existe ningún proyecto creado, se muestra un mensaje invitando a crearlo como se ve en la
                    imagen de referencia.
                </li>


            </ul>

            <p>
                Al hacer click en alguna de las opciones mencionadas, se mostrará un modal que permite seleccionar el
                tipo de proyecto a crear, dando oportunidad de comenzar con un proyecto en blanco o de usar una
                plantilla creada. Las opciones actuales son:
            </p>
            <h3 id="type-projects">Tipos de Proyectos en blanco</h3>
            <BeyondImage alt="dashboard beyondjs  new project" src="/images/dashboard/new-project.png"/>
            <ul>
                <li><strong>Web</strong>: Listo para comenzar un proyecto web que pueda ser distribuido en internet o
                    como aplicación móvil.
                </li>
                <li><strong>Node</strong> Listo para distribuir como un proyecto a ejecutar en un entorno node.</li>
                <li><strong>Backend</strong> Proyecto node que disponibiliza interfaces que puedan ser consumidas en
                    real-time con web sockets desde otro proyecto node o desde un proyecto cliente.
                </li>
                <li><strong>Library</strong> Ideal para crear proyectos que esten pensados para ser distribuidos como
                    paquetes <strong>NPM</strong>.
                </li>

            </ul>
            <h3 id="template-types">Tipos de plantillas</h3>

            <ul>
                <li><strong>React, vue y svelte</strong> apps, proyectos para empezar a trabajar con la libreria de
                    framework de preferencia.
                </li>
                <li><strong>Express</strong>: Proyecto con una estructura inicial para crear un servidor express.</li>
                <li><strong>Template web</strong>: Proyecto con una estructura cliente y backend comunicados por medio
                    de web socket.
                </li>
            </ul>

            <div className="block__note note-info">
                Se puede trabajar con diferentes librerias/Frameworks de vistas en un mismo proyecto gracias a la
                estructura de micro-frontends que ofrece <BeyondName/>. Puede leerse más al respecto en <Link
                href="/docs/widgets/intro">La sección de widgets</Link>
            </div>

            <h3>Datos del Proyecto</h3>
            <p>
                Luego de la selección del tipo de proyecto, aparece un formulario que solicita el scope y nombre del
                proyecto, el puerto sobre el cúal correrá, y adicionalmente, un titulo y descripción opcionales.
                Luego de llenar los datos necesarios, el Dashboard se encarga de crear el proyecto con la estructura de
                archivos y el proyecto queda disponible para ser accedido en el puerto configurado.
            </p>
            <BeyondImage alt="dashboard beyondjs  new project" src="/images/dashboard/create-form-project.png"/>


            <div className="block__note">
                Todos los proyectos tienen dependencias de paquetes npm que pueden opcionalmente ser instalados desde el
                dashboard. En caso de no haberlo hecho, para que el proyecto funcione es necesario instalar las
                dependencias manualmente.
            </div>

        </>
    )
}
