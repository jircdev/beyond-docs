import * as React from 'react';
import {Code} from "../content/code";
import {bridgeCode} from "./templates/bridge";
import {Link} from '@beyond/ui/link/code';
import {PageCode} from "./templates/page-code";
import {ModalImage} from "../modal-image";

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
                <li>La respuesta del método <span className="inline-code">login</span>
                    es un objeto plano que llega con la estructura definida al cliente.
                </li>
            </ul>

            <div className="block__note">
                Momentaneamente, para continuar con el tutorial, es necesario detener el servicio beyond,
                acceder a la carpeta del proyecto, eliminar la carpeta ".beyond" existente allí y volver
                a levantar el servicio.
            </div>

            <h2>Conectar cliente y servidor</h2>
            <p>
                El bridge que creamos es un servicio node. Generalmente, para ejecutar un servicio node, es necesario
                ir a una consola. Sin embargo, en <span className="beyond">BeyondJS </span> estos servicios
                funcionan como un <Link href="/bee">BEE (Beyond Environment Service)</Link> y para ejecutarlo
                solo debemos ir al <Link href="/dashboard"> Dashboard</Link> y darle al botón de ejecución
                dentro del proyecto.
            </p>
            <ModalImage src="/home/static/bee-button.png" alt="bee service"/>
            <p>
                Para poder implementar la funcionalidad de login con nuestro servidor,
                debemos importar nuestro objeto auth en el código cliente y asociar el
                evento <span className="inline-code">onSubmit</span> a nuestro
                formulario.
            </p>
            <p>
                <span className="beyond">En beyondJS</span>
                los proyectos
                siguen las mismas directrices para espacificación y resolución
                de nombres y paquetes que npm, de la misma forma que lo hace typescript.
                Deben tener <strong>nombre</strong> de modulo y pueden manejar un
                <strong>scope</strong> tambien. En nuestro caso, definimos ambos
                al momento de crear nuestro proyecto y modulo respectivamente.
            </p>
            <div className="block__note">
                Si quieres saber más acerca del estandar de resolución de nombres, dirigete
                a la sección <Link href="/module-resolution">Resolución de modulos</Link>.
            </div>

            <p>A continuación, en nuestro objeto <span className="inline_code">Page</span>
                Importamos el objeto <span className="inline_code">Auth</span></p>
            <Code language="typescript">
                {`import {Auth} from "@testing/login/home/bridge";`}
            </Code>
            <p>Agregamos nuestra función <span className="inline-code">onSubmit</span>
                y la asociamos al formulario, nuestro código debe quedar de la siguiente forma:
            </p>
            <Code language="typescript">
                {PageCode}
            </Code>

            <p>Es tiempo de probar nuestro formulario, si agregamos los datos correctos, podremos
                ver que en la consola del navegador aparece el <span className="inline-code">console.log</span>
                que indica que los datos fueron validados y se puede iniciar sesión, si por el contrario,
                agregamos
                datos incorrectos, podremos ver como aparece el mensaje de error "Invalid data" el cual
                actualizamos en la variable de estado del componente.
            </p>

            <h4>Hagamos un resumen de lo que hemos visto</h4>
            <ul>
                <li>Creamos un modulo con un widget de tipo page</li>
                <li>Creamos una conexión con un backend node por medio del bundle bridge</li>
                <li>Repasamos la estructura de resolución de modulos para importar el bridge Auth y poder agregar la
                    validación
                    de inicio de sesión
                </li>
            </ul>

            <p>Ahora solo nos falta redirecccionar al usuario a una pantalla de bienvenida.</p>

        </>
    )
}
