import * as React from 'react';
import {BeyondName} from "../../views/beyond";

export function Intro() {
    return (
        <>

            <h1 id="projects">Proyectos</h1>

            <p><BeyondName/> ofrece una arquitectura que se basa en proveer una forma eficiente de implementar
                soluciones basadas en microservicios interconectados con otros microservicios en el
                backend y con aplicativos con estructuras de microfrontends si hablamos del cliente, esto sin dejar de
                lado la posibilidad de crear proyectos más sencillos en pocos pasos.
            </p>

            <p>
                Para explicar el concepto, se puede pensar en un servicio que ofrece la gestión de autenticación en
                aplicaciones. Es natural pensar que pueden existir desarrolladores que requieran consumir el servicio
                desde un proyecto web, con código cliente y desarrolladores que esten trabajando en el backend y también
                puedan consumir el servicio para validar la sesión previo a determinada acción.
            </p>
            <p>
                Desde la óptica de <BeyondName/> el servicio de Auth puede ser visto como un proyecto que contiene dos
                distribuciones, una para generar el código cliente y una para generar el código backend y un único
                código. El código desplegado de las distribuciones podría disponibilizarse en el cliente y los
                desarrolladores que lo utilicen, podrian importarlo en cliente y servidor como
                paquetes <strong>NPM</strong> independiente a que sus proyectos estén o no realizados con <BeyondName/>.

            </p>
            <p>
                Asimismo, si los proyectos que consumen <span className="inline">Auth</span> son
                proyectos <BeyondName/> tambien podrían importar a <span className="inline">auth</span> por medio del
                sistema de importación de módulos de <BeyondName/>

            </p>

            <h2 id="create">Crear un proyecto</h2>
        </>
    )
}
