import * as React from 'react';
import {BeyondName} from "@beyond/docs/components/html/code";
import {CodeBox} from "@beyond/docs/code/code";

import {tplTepmplate} from "../tpl/template";
import {StylesTemplateApplication} from "./application";
import {StylesTemplateGlobal} from "./global";
import {NextLinks} from "@beyond/docs/components/next-links/code";

export function StylesTemplate() {
    return (
        <>
            <h1 id="template-styles">Estilos en el <span className="inline">template</span></h1>
            <p>
                El manejo de estilos en el sistema de Template de <BeyondName/> se realiza por medio de la configuración
                del procesador de estilos <span className="inline">sass</span>, esta configuración se realiza en dos
                niveles básicamente:

            </p>
            <CodeBox lang="json" title="template.json">
                {tplTepmplate}
            </CodeBox>

            <p>
                El código anterior, es la configuración por defecto de la plantilla de los proyectos web. Básicamente se
                está configurando el procesador <span className="inline">sass</span> para las plantillas de aplicación y
                global. A continuación se describe la finalidad de ambas.
            </p>
            <div className="block__note">
                En esta página se asume que el template se encuentra en una carpeta con dicho nombre en la raiz del
                proyecto, si se hizo un cambio en la configuración por defecto deberá considerarse la ubicación
                configurada.
            </div>
            <StylesTemplateApplication/>
            <StylesTemplateGlobal/>
            <NextLinks items={[
                ['Estilo en los módulos', '/docs/estyles/modules'],
                ['Template', '/docs/template'],
            ]}/>
        </>
    )
}
