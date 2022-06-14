import * as React from 'react';
import {NextLinks} from "@beyond/docs/components/next-links/code";
import {BeyondName} from "@beyond/docs/components/html/code";
import {Code, CodeBox} from "@beyond/docs/code/code";


const tpl = `
@use 'dark';
@use 'light';
:root {
  @include light.properties();
  @media(prefers-color-scheme: dark) {
    @include dark.properties();
  }
}

html[data-beyond-mode="light"] {
  @include light.properties();
}

html[data-beyond-mode="dark"] {
  @include dark.properties();
}

`;

const tplHost = `
:host-context(html[data-beyond-mode]) {
    //styles here...
}
`;
const tplApi = `widgets.attributes.add('data-beyond-mode', 'dark');`;

export function ThemesPage() {
    return (
        <>
            <h1>Light & Dark theme</h1>

            <p>
                <BeyondName/> provee un mecanismo simple para brindar soporte al tema claro y oscuro, el cual consta de
                dos partes.
            </p>
            <ul>
                <li><strong>El template de estilos</strong></li>
                <li>Atributo <span className="inline">data-beyond-mode</span></li>
            </ul>

            <h2 id="template">Temas en el template.</h2>

            <p>
                El template de aplicación viene ya configurado para soportar el tema claro y oscuro y suministra un
                archivo de definición de propiedades personalizadas css para cada tema. Luego, en el archivo <span
                className="inline">definition.scss</span> se tiene el siguiente código:
            </p>

            <CodeBox title="definition.scss" language="sass">
                {tpl}
            </CodeBox>

            <p>
                El código anterior deja disponibles las variables configuradas en los archivos <span
                className="inline">dark</span> y <span className="inline">light</span> para cada tema respectivo.
            </p>

            <p>En la mayoría de los casos, si un widget requiere validar el tema que se está utilizando, puede bastar
                con usar el selector <span className="inline">host-context</span> para definirlo desde un archivo de
                estilos, como se muestra en el siguiente ejemplo:
            </p>

            <Code language="scss">
                {tplHost}
            </Code>

            <p>
                Existen algunos casos, donde podría ser necesario que los widgets se enteren de forma dinámica del
                cambio
                de tema, para ello, se puede utilizar la api del objeto <span className="inline">widgets</span>
            </p>
            <Code language="js">
                {tplHost}
            </Code>
            <p>
                La línea anterior agrega a todos los widgets existentes el atributo <span
                className="inline">data-beyond-mode</span> con el valor <span className="inline">dark</span>.
            </p>
            <NextLinks items={[
                ['Plantilla', '/docs/template'],
                ['Servidor de desarrollo', '/docs/dev-server']
            ]}/>
        </>
    )
}
