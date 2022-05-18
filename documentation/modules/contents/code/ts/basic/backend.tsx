import * as React from 'react';
import {Link} from '@beyond/ui/link/code';
import {Code} from "@beyond/docs/code/code";

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

export function Backend() {
    return (
        <>
            <h1>Código <strong>Backend</strong></h1>

            <p>
                <span className="beyond">BeyondJS</span> disponibiliza un entorno seguro y eficiente pare crear código
                backend, bien sea que se requiera para trabajar con servicios independientes, encargados de tareas
                específicas o que busque implementar una conexión de un proyecto cliente con una api backend.
            </p>
            <p>Para efectos de <span className="beyond">BeyondJS</span>, podemos clasificar estas estructuras de código
                en dos tipos:
            </p>

            <ul>
                <li><strong>Servicios Backend:</strong> Código node que representa un servicio en ejecución en el
                    backend y sólo puede ser utilizado por módulos que tambien se ejecuten en el backend.
                </li>
                <li><strong>Api backend</strong>: permiten la conexión entre el código backend y el código cliente.</li>
            </ul>

            <h2>Api <strong>Servidor</strong> <br/>Bundle <code className="inline">bridge</code></h2>
            <p>
                Las APIs servidor en <span className="beyond">BeyondJS</span> representan funciones
                que ejecutan código en el servidor y pueden ser consumidas desde el código cliente.
                Manejan la lógica para conectarse a un backend y retornar data. Esto se lógra de forma simple,
                con la creación de un <Link href="/bundles#bridge">Bundle Bridge</Link>.
            </p>


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


            <div className="block__note">En el <Link href="/tutorial/web">Tutorial Web</Link> disponible, se implementa
                un bridge que permite ver en acción el funcionamiento de las <strong>apis backend</strong> de <div
                    className="beyond">BeyondJS.</div>
            </div>

            <h3>Comentarios mágicos</h3>

            <h2>bundle <code className="inline">backend</code></h2>

            <p>
                Los bundles <code className="inline">backend</code> representan código javascript que es ejecutado en el
                servidor y sólo pueden ser utilizados por módulos que tambien funcionen en el servidor. Dicho en otras
                palabras, representan cualquier servicio típico de <span className="inline">NodeJS</span>, con la
                salvedad de que, en entorno de desarrollo, son ejecutados por medio de un BEE o proceso <span
                className="beyond">BeyondJS</span> lo cual aumenta la productividad al poder trabajar
                con <strong>HMR</strong> de forma automatizada <i>y sin configuración</i>.
            </p>
        </>
    )
}
