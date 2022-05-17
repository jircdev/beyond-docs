import * as React from 'react';
import {BeyondName} from "../../views/beyond";
import {Link} from '@beyond/ui/link/code';
import {NextLinks} from '@beyond/docs/components/next-links/code';

export function Overview() {
    return (
        <>
            <h2 id="projects">Manejo de proyectos</h2>


            <p>Los proyectos en <BeyondName/>, tienen un enfoque de compatibilidad con NPM, lo cual les permite ser
                pensados como paquetes que podrían eventualmente, ser publicados directamente en NPM y posteriormente
                utilizados en cualquier otro proyecto, tanto de Beyond como externo.
            </p>
            <p> Un proyecto es definido por medio de la especificación de su scope, nombre y de al menos una
                distribución. Las distribuciones permiten identificar el entorno de ejecución sobre el cual se espera
                funcione el proyecto y algunos datos adicionales que pueden resultar relevantes para el proceso de
                compilación y deployment. Asimismo,se puede configurar múltiples distribuciones en
                simultáneo, brindandole al desarrollador la flexibilidad de validar el comportamiento de su proyecto en
                los diferentes ecosistemas configurados.</p>


            <p>
                Los proyectos contienen <Link href="/docs/modules">módulos</Link>, estos representan la unidad mínima de
                desarrollo en Beyond y tienen la capacidad de definir sobre que plataforma funcionan. dato que es
                interpretado por las <Link href="/docs/distributions">distribuciones</Link> configuradas en el entorno
                de desarrollo y al momento de realizar deploy de un proyecto.
            </p>


        </>
    )
}
