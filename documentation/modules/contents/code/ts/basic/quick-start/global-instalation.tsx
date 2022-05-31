import * as React from 'react';
import {Code} from "@beyond/docs/code/code";
import {BeyondName} from "../../views/beyond";
import {Elink} from '@beyond/ui/link/code';

const PROJECT_NAME = 'beyond-first-project';
export function GlobalInstalation() {
    return (
        <>

            <h2 id="global-install">Instalación global</h2>
            <p>Para instalar beyond de forma global es necesario ejecutar el siguiente comando</p>
            <Code>
                {`> npm i -g beyond`}
            </Code>

            A partir de la instalación, se puede arrancar un nuevo proyecto de dos formas:
            <ul>
                <li>Por medio del Dashboard</li>
                <li>Por medio de <span className="inline">{PROJECT_NAME}</span></li>
            </ul>
            <p>
                <span className="beyond">BeyondJS</span> se instala de forma global y puede ser ejecutado en cualquier
                directorio. Para utilizarlo, sólo necesitas ir a la carpeta en la cual desees trabajar, abrir la consola
                de comandos y ejecutar "beyond".
            </p>
            <Code language="bash">
                {` > beyond`}
            </Code>
            <p>Si todo sale bien, aparecerá un mensaje diciendo que <BeyondName/> se está ejecutando y que puedes
                acceder al dashboard en <Elink href="http://localhost:4000">http://localhost:4000</Elink>
            </p>
        </>
    )
}
