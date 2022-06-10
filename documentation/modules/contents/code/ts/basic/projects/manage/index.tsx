import * as React from 'react';
import {Link} from '@beyond/ui/link/code';
import {DashboardCreateProject} from "./dashboard";
import {BeyondName} from "../../../views/beyond";
import {ManualCreation} from "./manual";
import {NextLinks} from "@beyond/docs/components/next-links/code";

export function ManageProject() {
    return (
        <>
            <h2 id="project-management">Gestión de un proyecto</h2>

            <p>
                Los proyectos, al igual que el resto de elementos de <BeyondName/>, se configuran por medio de objetos
                en archivos .json. Generalmente, los archivos de configuración de proyectos
                llevan por nombre <Link href="/docs/projects/json" className="inline">project.json</Link> como
                convención y permiten una variedad
                amplia de configuraciones.

            </p>
            <p>
                Los proyectos se pueden configurar de dos formas: por medio de la interfaz del Dashboard y
                manualmente.
            </p>
            <DashboardCreateProject/>
            <ManualCreation/>
            <NextLinks items={[
                ['Crear un proyecto', '/docs/projects/create'],
                ['Distribuciones', '/docs/projects/distributions'],
                ['project.json', '/docs/projects/json'],
            ]}/>
        </>
    )
}
