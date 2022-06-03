import * as React from 'react';
import {Code} from "@beyond/docs/code/code";
import {BeyondName} from "../../views/beyond";
import {Link, Elink} from '@beyond/ui/link/code';

const PROJECT_NAME = '@beyond-js/create-project';

export function GlobalInstalation() {
    return (
        <>
            <h2 id="global-install">Instalación global</h2>

            <p>Para instalar <BeyondName/> globalmente, se debe correr el siguiente comando:</p>
            <Code>
                {`> npm i -g beyond`}
            </Code>

            <p>
                A partir de la instalación, sólo es necesario ir a la carpeta en donde se desee crear el o los proyectos
                e inicializar <BeyondName/> desde la línea de comandos de la siguiente forma:
            </p>


            <Code>
                {`>  beyond`}
            </Code>

            <p>Si todo sale bien, aparecerá un mensaje diciendo que <BeyondName/> se está ejecutando y que puedes
                acceder al dashboard en <Elink href="http://localhost:4000">http://localhost:4000</Elink>, desde donde
                se podrá crear un proyecto por medio de la interfaz gráfica del dashboard.
            </p>

            <p>
                Ya en el Dashboard, puedes crear un proyecto desde la interfaz gráfica, puedes ver cómo
                hacerlo <Link href="/docs/projects/create">aqui</Link>.

            </p>


        </>
    )
}
