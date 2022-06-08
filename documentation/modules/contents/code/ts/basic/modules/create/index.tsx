import * as React from 'react';
import {Link} from '@beyond/ui/link/code';
import {ModulesDashboardCreation} from "./dashboard";
import {ModulesManualCreation} from "./manual";

export function ModulesCreate() {
    return (
        <>

            <h1>Crear un Módulo</h1>
            <div className="block__note info">
                Esta página asume que ya se leyó la <Link href="/modules/intro">introducción de módulos</Link>
            </div>
            <p>
                Los módulos se crean y gestionan por medio de los archivos de configuración <span
                className="inline">module.json</span>, estos pueden ser creados de forma manual o a través de la
                interfaz del Dashboard.
            </p>
            <ModulesDashboardCreation/>
            <ModulesManualCreation/>
        </>
    )
}
