import * as React from 'react';
import {Link} from "@beyond/ui/link/code";
import {Code} from "@beyond/docs/code/code";
import {BeyondName} from "@beyond/docs/components/html/code";

const tpl = `\r"bridge": {
    "path": "bridge",
    "files": [
      "*"
    ]
  }`;

const tplBridge = `\rexport /*actions*//*bundle*/
class Auth {
    async login(user: string, password: string) {
        if (user !== data.user || password !== data.password) {
            return {status: true, error: 'Invalid data'};
        }

        return {status: true, data: {valid: true}}
    }
}`
const tplStart = `
import {listen} from '@beyond-js/backend/listen/ts';

listen();
`;

export function BackendBridge() {
    return (
        <>
            <h2>Api <strong>Servidor</strong> <br/>Bundle <code className="inline">bridge</code></h2>
            <p>
                Las APIs servidor en <span className="beyond">BeyondJS</span> representan funciones
                que ejecutan código en el servidor y pueden ser consumidas desde el código cliente.
                Manejan la lógica para conectarse a un backend y retornar data. Esto se lógra de forma simple,
                con la creación de un <Link href="/bundles#bridge">Bundle Bridge</Link>.
            </p>

            <div className="block__note">
                Para que se pueda ejecutar código Backend en <BeyondName/> es necesario tener configuradas las
                distribuciones necesarias. Si el proyecto se creo a partir del tipo de proyecto <span
                className="inline">web-backend</span>, la misma ya se encuentra configurada. Puedes encontrar más
                información en <Link href="/docs/distributions">La sección de distribuciones</Link>.
            </div>

            <Code>
                {tpl}
            </Code>

            <p>Al igual que cualquier módulo o bundle, este puede ser gestionado desde el <Link
                href="/dashboard">Dashboard</Link> o de forma manual.
            </p>

            <p>
                Cómo su nombre lo indica, el bundle de tipo <strong>bridge</strong>, sirve de puente entre la lógica
                cliente y la lógica servidor. Generalmente, en el servidor se impmenentan lógicas asociadas al manejo de
                datos o manipulación de archivos, el <span className="inline">bridge</span> Permite implementar y
                dejar disponibles funcionalidades que necesiten ser consultadas desde el cliente y mantener encapsuladas
                en el servidor aquellas que no.</p>


            <p>El código de un bundle <code className="inline">bridge</code> luce así: </p>

            <Code>
                {tplBridge}
            </Code>

            <p>Un objeto Javascript común y corriente ¿Verdad?</p>


            <p><span className="beyond">BeyondJS</span> genera un objeto cliente que realiza la conexión <code
                className="inline">web-socket</code> al servidor, ejecuta el código implementado por el desarrollador y
                deja disponible la respuesta en el código cliente, abstrayendo al programador de la necesidad de
                procuparse por la conexión entre las capas cliente y servidor y permitiendo que el código funcione como
                parte de un mismo ecosistema.
            </p>
            <p>
                Ahora sólo es necesario inicializar el servidor. Para ello es necesario crear un módulo con un
                bundle <span className="inline">start</span> que se encargue de iniciar el <Link
                href="/docs/bee">BEE</Link>. El código del bundle <span className="inline">start</span> es el siguiente:
            </p>
            <Code>
                {tplStart}
            </Code>

            <div className="block__note">En el <Link href="/tutorial/web">Tutorial Web</Link> disponible, se implementa
                un bridge que permite ver en acción el funcionamiento de las <strong>apis backend</strong> de <div
                    className="beyond">BeyondJS.</div>
            </div>
        </>
    )
}
