import * as React from 'react';
import {Code} from "@beyond/docs/code/code";
import {bridgeCode} from "../templates/bridge";
import {Link} from "@beyond/ui/link/code";
import {ModalImage} from "@beyond/docs/components/html/code";
import {PageCode} from "../templates/page-code";

export /*bundle*/ function TutorialBridge() {
    return (
        <>
            <h2 id="bridge-code">Código Bridge</h2>

            <p>
                Como mencionamos antes, en esta parte generalmente cada proyecto tiene su
                propia lógica para la validación de sesión. La intención hoy no es enfocarse
                en cómo debe manejarse esto, lo que haremos será crear un código básico que nos permita
                conectar nuestro código cliente con el backend node.
            </p>

            <Code language="ts">
                {bridgeCode}
            </Code>
            <p>El código es bastante simple, pero hay varios puntos interesantes a destacar.</p>
            <ul>
                <li>
                    El comentario mágico <span className="inline-code">/*bundle*/</span>
                    es utilizado por <span className="beyond">Beyond</span> para identificar
                    que el código a continuación debe ser considerado como código a exportar en el bundle final.
                    Si quieres leer más acerca del funcionamiento de bundles y módulos, te recomendamos
                    ir a <Link href="/modules">La sección de módulos</Link> de la documentación.
                </li>
                <li>
                    El comentario mágico <span className="inline-code">/*actions*/</span>
                    es utilizado por beyond para identificar que segmentos del bundle bridge deben quedar
                    disponibles como acciones que puedan ser consumidas por el cliente.
                </li>
                <li>La respuesta del método <span className="inline-code">login</span>
                    es un objeto plano que llega con la estructura definida al cliente.
                </li>
            </ul>

            <h2 id="back-client-connection">Conectar cliente y servidor</h2>
            <p>
                El bridge que creamos es un servicio node. Generalmente, para ejecutar un servicio node, es necesario
                ir a una consola. Sin embargo, en <span className="beyond">BeyondJS </span> estos servicios
                funcionan como un <Link href="/bee">BEE (Beyond Environment Service)</Link> y para ejecutarlo
                podemos debemos ir al <Link href="/dashboard"> Dashboard</Link> y darle al botón de ejecución, que
                podemos encontrar en la pantalla de detalle del proyecto.

            </p>

            <p>
                y otro en el detalle del proyecto:
            </p>
            <ModalImage src="/images/dashboard/v1/bee.png" alt="bee service"/>
            <div className="block__note">
                <strong>El Dashboard</strong> es una herramienta muy potente provista por BeyondJS. Puedes aprender más
                acerca de esto en <Link href="/docs/dashboard">la sección de detalle</Link>.
            </div>
            <p>
                Para poder implementar la funcionalidad de login con nuestro servidor,
                debemos importar nuestro objeto auth en el código cliente y asociar el
                evento <span className="inline-code">onSubmit</span> a nuestro formulario.
            </p>
            <p>
                <span className="beyond">En beyondJS</span> los proyectos
                siguen las mismas directrices para espacificación y resolución
                de nombres y paquetes que npm, de la misma forma que lo hace typescript.
                Deben tener <strong>nombre</strong> de módulo y pueden manejar un
                <strong>scope</strong> tambien. En nuestro caso, definimos ambos
                al momento de crear nuestro proyecto y módulo respectivamente.
            </p>


            <p>A continuación, en nuestro componente <span className="inline_code">Page</span> importamos el
                objeto <span
                    className="inline_code">Auth</span></p>
            <Code language="typescript">
                {`import {Auth} from "@testing/login/home/bridge";`}
            </Code>
            <p>Agregamos nuestra función <span className="inline-code">onSubmit</span>
                y la asociamos al formulario, nuestro código debe quedar de la siguiente forma:
            </p>
            <Code language="typescript">
                {PageCode}
            </Code>

            <p>Es tiempo de probar nuestro formulario. Si agregamos los datos correctos, podremos
                ver que en la consola del navegador aparece el mensaje
                que indica que los datos fueron validados y se puede iniciar sesión, si por el contrario,
                agregamos
                datos incorrectos, podremos ver como aparece el mensaje de error "Invalid data" el cual
                actualizamos en la variable de estado del componente.
            </p>

            <h4>Resumen</h4>
            <ul>
                <li>Creamos un módulo con un widget de tipo page</li>
                <li>Creamos una conexión con un backend node por medio del bundle bridge</li>
                <li>Repasamos la estructura de resolución de módulos para importar el bridge Auth y poder agregar la
                    validación de inicio de sesión
                </li>
            </ul>

            <p>Ahora sólo nos falta redireccionar al usuario a una pantalla de bienvenida.</p>

        </>
    )
}
