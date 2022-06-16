import * as React from 'react';
import {BeyondName} from "@beyond/docs/components/html/code";
import {CodeBox} from "@beyond/docs/code/code";
import {Link} from "@beyond/ui/link/code";

const tpl = `
{
  "bundle": "start",
  "platforms": "backend",
  "ts": {
    "files": "*"
  }
}
`;
const tpl2 = `
import {listen} from '@beyond-js/backend/listen/ts';

listen();`;

export function TutorialBackendLogic() {
    return (
        <>
            <h2 id="bundle-bridge">Lógica <strong>Backend</strong></h2>

            <p>
                Por su naturaleza, Los formularios de inicio de sesión requieren validar los datos contra un backend que
                se conecte a algún manejador de datos. A continuación, vamos a emular la conexión a la base de datos,
                creando nuestra integración con un servicio node, que tendrá un usuario y clave predefinidos y así,
                podremos revisar si la sesión es válida o no. Para lograrlo, haremos uso de websockets.
            </p>
            <p>
                Es necesario crear un bundle BRIDGE para crear de forma simple un servicio node y lograr la integración
                con el código cliente. Los bundles bridges, como su nombre lo indica, crean un puente de conexión entre
                el código cliente y servidor permitiendo manejar el código de manera uniforme.
            </p>

            <h3>Inicialización del Backend</h3>
            <div className="block__note"><BeyondName/> provee la libreria <span
                className="inline"> @beyond-js/backend</span> para la creación de
                código backend, esta libreria es opcional para evitar su inclusión innecesaria en aquellos proyectos que
                no la requieran.
            </div>

            <p>
                Para empezar, es necesario inicializar el backend, para lo cual se requiere crear un bundle <span
                className="inline">start</span> que lo levante, para ello, creamos una carpeta <span
                className="inline">start</span> y adentro agregamos un archivo <span
                className="inline">module.json</span> con la siguiente estructura
            </p>
            <CodeBox language="json" title="module.json">
                {tpl}
            </CodeBox>
            <p>Procedemos a crear un archivo <span className="inline">start.ts</span> y agregamos el códdigo para
                inicializar el backend
            </p>
            <CodeBox language="ts" title="start.ts">
                {tpl2}
            </CodeBox>
            <div className="block__note">
                NOTA: Los bridges son un feature central y muy poderoso en <span className="beyond">BeyondJS</span> y en
                este tutorial solo se muestran de
                forma superficial. Si quieres conocer más y entender cómo funcionan, dirígite a la seccion de bridges.
            </div>
            <div className="block__note">
                Si quieres conocer más acerca del manejo de bundles y módulos, puedes ir a <Link
                href="/docs/modules/introduction">la sección de Módulos</Link>.
            </div>
            <p>

                Para agregar un bundle bridge al módulo, debemos dirigirnos al archivo de configuración (module.json),
                ubicado dentro de la carpeta home. La ruta debería ser
                <span className="inline-code">“proyecto/modules/home/module.json”</span>
            </p>
        </>
    )
}
