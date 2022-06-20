import * as React from 'react';
import {Code} from "@beyond/docs/code/code";
import {Link} from "@beyond/ui/link/code";

import {AppIcon} from "@beyond/docs/ui/icons/code";
import {ModalImage} from "@beyond/docs/components/html/code";

export /*bundle*/ function Original() {
    return (
        <div className="section">
            <h2 id="routing">Routing</h2>

            <p>Lo primero que debemos hacer, es crear un nuevo módulo con un bundle de tipo Page, esta vez lo haremos
                desde el <span className="beyond">Dashboard</span>. Para eso, debemos acceder a nuestro dashboard
                y seleccionar el proyecto que estamos trabajando, sino lo hemos hecho. Esto habilitará en el
                <Link rel="stylesheet" href="/dashboard">Preaside</Link> las acciones que podemos realizar sobre el
                proyecto, Las listamos a continuación:
            </p>

            <ul className="content__list list-icons list-icons--left">
                <li><AppIcon icon="add"/>Agregar módulos</li>
                <li><AppIcon icon="settings"/> Configuración general del proyecto</li>
                <li><AppIcon icon="static"/>Gestionar archivos estáticos</li>
                <li><AppIcon icon="folder"/>Gestionar Template</li>
            </ul>

            <p>Hacemos click en el icono para agregar módulos y se abrirá un modal como el siguiente:</p>
            <ModalImage src="/images/contents/create-module-1.png" alt="Create module on beyond project"/>
            <p>Seleccionamos <span className="inline">módulo en blanco</span>. y en la siguiente pantalla, nos pide el
                bundle, seleccionamos
                page: </p>
            <ModalImage src="/images/contents/create-module-2.png" alt="Create module on beyond project"/>

            <p>En la pantalla final, nos pedirá algunos datos, a continuación se explica que colocar:</p>
            <ModalImage src="/images/contents/create-module-3.png" alt="Create module on beyond project"/>
            <ul>
                <li><strong>Module name:</strong> welcome</li>
                <li><strong>Web component name:</strong> welcome-page.</li>
                <li><strong>Url:</strong> "/welcome"</li>
            </ul>

            <div className="block__note">
                Las páginas y layouts en beyond se resuelven haciendo uso de
                <a href="/https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">
                    Web components
                </a>. Si quieres saber en detalle como funcionan y porque, dirigete a la
                <Link href="/web-components"> Sección de Web Components.</Link>
            </div>

            <p>Abrimos el objeto Page creado en el módulo y agregaremos un mensaje simple que
                diga: <strong>Bienvenido!</strong>
            </p>
            <p>A continuación, haremos los ajustes necesarios para redireccionar a nuestro módulo de bienvenida,
                luego de iniciar sesion. Lo que debemos hacer, es importar el objeto "routing" de
                <span className="beyond">BeyondJS</span> para usar el método
                <span className="code-inline">pushState</span> que proveey y navegar a la página de bienvenida que
                creamos.
            </p>
            <h4>Importación</h4>
            <Code language="ts">
                {`import {routing} from "@beyond-js/kernel/routing/ts";`}
            </Code>
            <h4> Navegación en metodo onSubmit</h4>
            <Code language="ts">
                {`routing.pushState('/welcome');`}
            </Code>
            <p>¡Listo! Si volvemos a probar nuestro formulario, podremos iniciar sesión y ver como nos dirigimos a
                la página de bienvenida.</p>
        </div>
    )
}
