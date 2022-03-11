import * as React from 'react';
import {Code} from "../content/code";
import {Link} from '@beyond/ui/link/code';

export function Install() {
    return (
        <>
            <h1 id="install">Instalación</h1>

            <h4 id="requirement">Prerequisitos</h4>
            <ul>
                <li>Node</li>
                <li>Estar familiarizado con manejadores de dependencias
                    como npm o yarn
                </li>
            </ul>
            <p>Instalamos Beyond:</p>
            <Code language="bash">
                {`> npm i -g beyond`}
            </Code>
            <p>
                Beyond se instala de forma global, lo cual implica que puedes ejecutarlo en donde desees.
                Ahora, para utilizarlo, sólo necesitas ir a la carpeta en la cual desees trabajar, abrir la consola
                de comandos y ejecutar "beyond".
            </p>    <Code language="bash">
            {`> beyond`}
        </Code>
            <p>Si todo sale bien, aparecerá un mensaje diciendote que beyond se está ejecutando y el puerto de acceso
                para ir
                al Dashboard.</p>
            <p>¡Y ya está! ¿Simple verdad?
                Puedes empezar con tu proyecto utilizando el dashboard y tu IDE de preferencia.</p>


            <div className="next__content link__content">
                <ul>
                    <li><Link href="/dashboard">Dashboard</Link></li>
                    <li><Link href="/tutorial">Tutorial</Link></li>
                </ul>

            </div>
        </>
    )
}
