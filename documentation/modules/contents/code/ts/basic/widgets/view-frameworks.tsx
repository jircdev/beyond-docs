import * as React from 'react';
import {BeyondName} from "../../views/beyond";
import {Elink, Link} from "@beyond/ui/link/code";

export function ViewFrameworks() {
    return (
        <>


            <p>
                <BeyondName/> brinda soporte para trabajar con frameworks/librerias como <Elink
                href="https://reactjs.org">React</Elink>,&nbsp;
                <Elink href="https://vuejs.org/">Vue</Elink> y <Elink
                href="https://svelte.dev/">Svelte</Elink> y tiene disponible la posibilidad de integrar nuevas librerias
                o herramientas.
            </p>
            <h3 id="widget-react">Usando <span className="inline">React</span></h3>
            <p>
                <span className="inline">React</span> tiene soporte automático motivado a que typescript interpreta el
                código <span className="inline">tsx</span>. Por tanto, lo único necesario para poder usarlo es tener
                instalada la dependencia en <span className="inline">npm</span> y definir el procesador <span
                className="inline">ts</span> en la configuración del bundle en el <span
                className="inline">module.json</span>.
            </p>
            <div className="block__note">
                la configuración de react se realiza por medio de los archivos <span className="inline">.tsconfig</span>,
                cada módulo viene con un archivo configurado por defecto con compatibilidad para trabajar con react.
                puedes leer más sobre ello en la documentación de typescript
                <Elink href="https://www.typescriptlang.org/docs/handbook/jsx.html"/>
            </div>


            <h3>Usando <span className="inline">Svelte</span> o <span className="inline">Vue</span></h3>
            <p>

                Cada framework tiene su propio <Link href="/docs/processors">procesador</Link> con el nombre de la
                libreria. para utilizarlos, solo es necesario incluir el procesador en la configuración del bundle.
            </p>
        </>
    )
}
