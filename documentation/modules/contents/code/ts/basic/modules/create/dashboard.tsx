import * as React from 'react';
import {AppIconButton} from "@beyond/docs/ui/icons/code";
import {ModalImage, TypeProperty} from "@beyond/docs/components/html/code";


export function ModulesDashboardCreation() {
    return (
        <>
            <h2 id="dashboard-creation">Creación desde el Dashboard</h2>

            <div className="block__note">
                Para crear un módulo debe haberse creado previamente un proyecto y estar activo en el Dashboard.
            </div>
            <p>La opción de crear proyectos es una funcionalidad disponible cuando un proyecto se encuentra activo en el
                Dashboard. Para poder verlas, es necesario abrir el proyecto accediendo al board de detalle del
                mismo.
            </p>
            <p>
                Cuando el proyecto se encuentra activo, se puede ver
                la opción <AppIconButton icon="add" className="border-icon"/> en el <strong>PreAside</strong>, al hacer
                click en ella, aparecce un modal que da la opción de crear un módulo en blanco o seleccionar una
                plantilla.
            </p>
            <ModalImage src="/images/dashboard/create-module-1.png" alt="BeyondJS - create module form"/>

            <p>
                Posteriormente, aparece un formulario que solicita el resto de datos necesarios, asociados al tipo de
                bundle que se agregará en el módulo y los procesadores que contendrá.
            </p>
            <ModalImage src="/images/dashboard/create-module-1.png" alt="BeyondJS - create module form"/>

            <h3 id="form-fields">Datos del módulo</h3>

            <ul>
                <li><TypeProperty type="string">Nombre del Módulo</TypeProperty> Corresponde al nombre con el cual podra
                    ser importado o utilizado el módulo a crear.
                </li>
                <li><TypeProperty type="string">Nombre Web Component</TypeProperty> Aplica para los bundles de
                    tipo <span className="inline">widget</span>. Debe seguir el estandar de nombres de componentes web,
                    todo en minusculas y con un guión.
                </li>
                <li><TypeProperty type="url" optional>Url</TypeProperty> Aplica a módulos con un bundle de tipo
                    widget page. Define la url de acceso.
                </li>
                <li><TypeProperty type="boolean">Vue</TypeProperty> Agrega el procesador Vue.</li>
                <li><TypeProperty type="boolean">Svelte</TypeProperty> Agrega el procesador Svelte.</li>

            </ul>
        </>
    )
}
