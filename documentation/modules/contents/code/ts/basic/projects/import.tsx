import * as React from 'react';
import {BeyondName} from "@beyond/docs/components/html/code";
import {Link} from '@beyond/ui/link/code';
import {Code, CodeBox} from "@beyond/docs/code/code";
import {NextLinks} from "@beyond/docs/components/next-links/code";

const tpl = `
"libraries": {
    "imports": [
      "@project/models"
    ]
}`;

export function ImportProject() {
    return (
        <>
            <h1>Importación de proyectos</h1>
            <CodeBox language="json" title="project.json">
                {tpl}
            </CodeBox>

            <p>
                En <BeyondName/> un proyecto puede ser importado por otro y funcionar como una libreria, brindando al
                proyecto principal acceso a los módulos de este. Esta funcionalidad es clave para pensar en soluciones
                con estructuras de microservicios interconectados entre sí o de librerias que contengan código
                reutilizable.
            </p>
            <p>
                Para ejemplificarlo, podemos hablar de una solución que maneja una página web, una aplicación movil y un
                panel administrativo, todos como proyectos independientes que alimentan una misma fuente de datos.
                La importación de proyectos permite que se maneje toda la lógica de datos en un proyecto independiente
                que es utilizado por los tres aplicativos, permitiendo así reutilizar el código.
            </p>
            <p>La importación de proyectos se realiza desde el <Link href="/docs/projects/json"
                                                                     className="inline">project.json</Link> y es
                necesario que los proyectos se encuentren agregados en la entrada <span
                    className="inline">projects</span> del <span className="inline">beyond.json</span>.
            </p>
            <div className="block__note">Si los proyectos se crean por medio del Dashboard, el archivo <div
                className="inline">beyond.json</div> se módifica de forma automática.
            </div>
            <p>
                Siguiendo el ejemplo mencionado, el proyecto con los módulos que gestionan los datos y se conectan a la
                base de datos podría llamarse <span className="inline">models</span> y para importarlo en los otros
                proyectos, tendría que agregarse el siguiente código en el <span className="inline">project.json</span>
            </p>


            <Code language="json">
                {tpl}
            </Code>

            <p>La propiedad <span className="inline">imports</span> recibe un arreglo de items, lo que permite importar
                múltiples proyectos en caso de ser requerido.
            </p>

            <NextLinks items={[
                ['Crear un módulo', '/docs/modules/indroduction'],
                ['Tutorial', '/docs/tutorial/web'],
            ]}/>
        </>
    )
}
