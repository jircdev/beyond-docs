import * as React from 'react';
import {AppIcon} from "@beyond/docs/ui/icons/code";

export function Functionalities() {
    return (
        <>
            <h2 id="functionalities">Funcionalidades</h2>


            <ul className="icon__list">
                <li>
                    <AppIcon icon="apps"/>
                    <span>Creación de proyectos en blanco o desde plantillas.</span></li>
                <li>
                    <AppIcon icon="apps"/>
                    <span>Creación de módulos. </span>
                </li>
                <li>
                    <AppIcon icon="apps"/>
                    <span> Detalle informativo de los proyectos y módulos </span></li>
                <li>
                    <AppIcon icon="apps"/>
                    <span>
                        Detección de errores <strong>en tiempo real</strong> generales en proyectos, módulos, las dependencias
                        y en los módulos consumidores
                    </span>
                </li>
                <li>
                    <AppIcon icon="bell"/>
                    <span>Detección de errores de tipado con <code
                        className="inline-code">typescript</code>.
                </span></li>
                <li><AppIcon icon="bell"/><span>Detección de errores de runtime.</span></li>
                <li><AppIcon icon="bell"/><span>Manejo de errores en real time en procesos <code
                    className="inline-code">Node</code>
                    por medio de HMR.
                </span></li>
                <li><AppIcon icon="setting"/><span>Configuración de entornos de desarrollo.</span></li>
                <li><AppIcon icon="code"/><span>Edición de código</span></li>
                <li><AppIcon icon="page"/><span>Navegación de proyectos.</span></li>
                <li><AppIcon icon="dependency"/><span>Manejo de dependencias.</span></li>
                <li><AppIcon icon="photoSize"/><span>Gestión de archivos estáticos y plantilla del proyecto.</span></li>
                <li><AppIcon icon="compile"/><span>Gestión de despligue de proyectos.</span></li>
            </ul>
        </>
    )
}
