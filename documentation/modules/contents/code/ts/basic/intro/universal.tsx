import * as React from 'react';
import {BeyondName} from "../../views/beyond";
import {Link} from '@beyond/ui/link/code';
import {CodeBox, Code} from "@beyond/docs/code/code";
import {BeyondImage} from "@beyond/ui/image/code";

const tpl = `
{
    "platforms": [
        "node",
        "web",
        "ios"
    ]
}`

export function Universal() {
    return (
        <>
            <h1>¿Que es <BeyondName/>?</h1>
            <BeyondImage src="/images/tutorials/beyond-environments.png" alt="Beyond environments"/>
            <p>
                <BeyondName/> es un <strong>meta-framework</strong> basado en typescript, diseñado para crear proyectos
                que funcionen en diferentes entornos de ejecución Javascript, manteniendo el foco en garantizar al
                programador una experiencia universal de desarrollo. Lo hace manteniendose agnóstico a las librerias y
                tecnologías existentes, buscando dejar un camino estandarizado que permita su integración.
            </p>

            <p>Los factores que garantizan una experiencia de desarrollo homogénea, sin importar el entorno para el que
                se trabaje son:</p>

            <ul>
                <li><strong>HMR en código cliente y código Node</strong>: de forma automática, sin configuraciones
                    adicionales. Además, brinda una api al desarrollador que permite definir cuando y que desea
                    actualizar.
                </li>
                <li><strong>Desarrollo modular</strong>: <BeyondName/> tiene una filosofia de generación de bundles
                    pequeños que son cargados a demanda en el momento en que son requeridos. No trabaja con un arbol de
                    dependencias y por tanto <strong>no requiere de empaquetadores</strong> cómo webpack o parcel.
                </li>

                <li>
                    <strong>Gestión de distribuciones</strong>: <BeyondName/> permite definir distribuciones para las
                    plataformas de desarrollo que desean
                    utilizarse y gestiona la disponibilización del código final en base a ello.
                </li>
            </ul>

        </>
    )
}
