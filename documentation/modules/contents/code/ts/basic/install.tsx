import * as React from 'react';
import {Code} from "@beyond/docs/code/code";
import {Link} from '@beyond/ui/link/code';
import {NextLinks} from '@beyond/docs/components/next-links/code';

export function Install() {
    return (
        <>
            <h1 id="install">Instalación</h1>

            <h4 id="requirement">Prerequisitos</h4>
            <ul>
                <li>Node <span className="inline">^14.17.4</span>.</li>
                <li>Estar familiarizado con manejadores de dependencias
                    como npm o yarn.
                </li>
            </ul>
            <p>Instalamos Beyond:</p>
            <Code language="bash">
                {`> npm i -g  beyond`}
            </Code>

            <p>
                <span className="beyond">BeyondJS</span> se instala de forma global y puede ser ejecutado en cualquier
                directorio. Para utilizarlo, sólo necesitas ir a la carpeta en la cual desees trabajar, abrir la consola
                de comandos y ejecutar "beyond".
            </p>
            <Code language="bash">
                {` > beyond`}
            </Code>
            <p>Si todo sale bien, aparecerá un mensaje diciendote que beyond se está ejecutando y el puerto de acceso
                para ir
                al Dashboard.</p>
            <p>¡Y ya está! ¿Simple verdad?
                Puedes empezar con tu proyecto utilizando el dashboard y tu IDE de preferencia.</p>

            <NextLinks items={[
                ['Dashboard', '/docs/web'],
                ['Tutorial', '/docs/tutorial/we'],
            ]}/>

        </>
    )
}
