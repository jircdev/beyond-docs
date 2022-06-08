import * as React from 'react';
import {ModalImage} from "../../views/modal-image";

export function Structure() {
    return (
        <>
            <h2 id="structure">Estructura</h2>
            <ModalImage alt="BeyondJS Dashboard structure" src="/images/dashboard/dashboard-structure.png"/>
            <p>El <span className="beyond">Dashboard</span> funciona como un marco de trabajo (Workspace) y cada
                componente que lo integra tiene definido un nombre que permite identificarlo, estos son:
            </p>
            <ol>
                <li><strong>PreAside:</strong> Primer panel izquierdo, iconográfico de acceso general de acciones las
                    cuales varian si se tiene o no un proyecto abierto
                </li>
                <li><strong>Aside:</strong> Menu secundario que despliega funcionalidades adicionales asociadas a la
                    opción seleccionada en el preaside.
                </li>
                <li><strong>Boards</strong>: Cada panel abierto en la pantalla principal es denominado board, la lista
                    de aplicaciones es un board, el detalle de la aplicación o la pantalla de configuración tambien lo
                    son.
                </li>
                <li><strong>Panels:</strong> Cada división de pantalla generada en el workspace</li>
            </ol>
        </>
    )
}
