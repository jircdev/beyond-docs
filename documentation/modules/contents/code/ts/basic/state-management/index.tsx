import * as React from 'react';
import {BeyondName} from "@beyond/docs/components/html/code";
import {Link} from '@beyond/ui/link/code';

export function StateManagement() {
    return (
        <>
            <h1 id="state-management">Manejo de Estados</h1>

            <p>El estado es la representación de los valores renderizados de un componente
                o widget en pantalla. Este puede mutar y variar por diversos factores, tales como la
                actualización de datos desde un servidor o la interacción del usuario.
            </p>

            <p>
                Existen numerosas librerias para la gestión de estado de un proyecto, generalmente asociadas al <Link
                href="/docs/widgets">Framework de vista</Link> que se esté utilizando. <BeyondName/> permite integrar la
                herramienta para manejo de estados que se desee, siempre que esta este preparada para el funcionamiento
                modular.
            </p>

            <div className="block__note">
                Puedes ver un ejemplo funcional de un contador que comparte el manejo de estado entre un componente
                creado con <strong>React</strong>, uno creado con <strong>Svelte</strong> y otro
                con <strong>Vue</strong> en <Link href="/examples/sm/counter">Este ejemplo</Link>.
            </div>

            <p>
                Asimismo, <BeyondName/> Define una estructura para el manejo de estado. El objeto que maneja el estado,
                debe ser disponibilizado por medio del método <span className="inline">createWidgetStore</span> del
                controlador del widget. Este método debe retornar un objeto que implemente la interfaz <Link
                href="/api/IWidgetStore">IWidgetStore</Link>, esencialmente si se espera trabajar con <span
                className="inline">ssr</span>.
            </p>


        </>
    )
}
