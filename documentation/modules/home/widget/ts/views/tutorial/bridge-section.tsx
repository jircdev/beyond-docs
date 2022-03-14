import * as React from 'react';
import {Code} from "../content/code";
import {bridgeCode} from "./templates/bridge";
import {Link} from '@beyond/ui/link/code';

export function BridgeSection() {
    return (
        <>
            <h2>Código Bridge</h2>

            <p>
                Como mencionamos antes, en esta parte generalmente cada proyecto tiene su
                propia lógica para la validación de sesión y no es el foco de este tutorial enfocarse
                en como debe manejarse esto, lo que haremos será crear un código básico que nos permita
                conectar nuestro código cliente con el backend node
            </p>
            <Code language="ts">
                {bridgeCode}
            </Code>
            <p>El código es bastante simple, pero hay varios puntos interesantes a destacar</p>
            <ul>
                <li>
                    El comentario mágico <span className="inline-code">/*bundle*/</span>
                    es utilizado por <span className="beyond">Beyond</span> para identificar
                    que el código a continuación debe ser considerado como código a exportar en el bundle final.
                    Si quieres leer más acerca del funcionamiento de bundles y modulos, te recomendarmos
                    ir a <Link href="/modules">La sección de módulos</Link> de la documentación

                </li>
                <li>
                    El comentario mágico <span className="inline-code">/*actions*/</span>
                    es utilizado por beyond para identificar que segmentos del bundle bridge deben quedar
                    disponibles como acciones que puedan ser consumidas por el cliente.
                </li>
                <li>La estructura de respuesta de la acción la manejamos como un objeto, en formato de api</li>
            </ul>

            <div className="block__note">
                Momentaneamente, para continuar con el tutorial, es necesario detener el servicio beyond,
                acceder a la carpeta del proyecto, eliminar la carpeta ".beyond" existente allí y volver
                a levantar el servicio.
            </div>
        </>
    )
}
