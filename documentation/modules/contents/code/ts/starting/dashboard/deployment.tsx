import * as React from 'react';
import {Link} from '@beyond/ui/link/code';
import {ModalImage} from "@beyond/docs/components/html/code";

export function DashboardDeployment() {
    return (
        <>
            <h3 id="deployment">Despliegue de proyectos</h3>
            <p>
                El Dashboard genera el código necesario y optimizado para desplegar los proyectos.
                Puedes leer en detalle el funcionamiento en la sección de <Link
                href="/docs/deployment">Despliegue de proyectos</Link>.
            </p>
            <ModalImage alt="BeyondJS Dashboard deployment board" src="/images/dashboard/deployment.png"/>
        </>
    )
}
