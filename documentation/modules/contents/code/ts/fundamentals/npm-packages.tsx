import * as React from 'react';
import {Link} from "@beyond/ui/link/code";

export function NpmPackages() {
    return (
        <div className="contents">
            <h1>Paquetes NPM</h1>

            <p>El desarrollo web se fundamenta principalmente sobre Javascript y las tecnologías que giran a su
                alrededor, siendo <code className="inline-code"><a href="https://www.npmjs.com/"
                                                                   target="_blank">NPM</a></code>
                el epicentro en el cual se encuentran la mayoria de paquetes, frameworks y librerias utilizadas por la
                industria y por supuesto, quien define el estandar para la creación de estos paquetes. Sin embargo,
                aunque el estandar está definido, existe una variedad de configuraciones según el tipo de paquete
                publicado y la forma en que se espera sea consumido. </p>
            <p>
                En la practica, no todos los programadores conocen, manejan o se rigen por los estandares de NPM y esto
                sugiere dos problemáticas muy claras y sin embargo, imperceptibles para muchos desarrolladores. La
                primera es la generación de bundles y la forma de consumir javascript, existen librerias que se han
                abocado completamente a esperar que sean manejadas por empaquetadores como webpack, dejando de lado
                aquellos proyectos que no esperen manejar este nivel de configuración, bien sea porque no lo requieren o
                desean. La segunda y más importante, es que en el ecosistema de Javascript, existen diferentes formas de
                integrar las dependencias: CommonJS, AMD, UMD, SystemJS y EcmaScript Modules, si un proyecto no brinda
                soporte a una de estas, el equipo de programación que desee integrarlo y lo requiera, puede verse
                complicado. En la mayoria de los casos las librerias que ofrecen ES6 Modules, realmente son paquetes que
                solo
                pueden ser integrados si existe un empaquetador de por medio
            </p>

            <p>
                Beyond Busca estandarizar el manejo de paquetes y genera de forma automática la estructura del
                package.json correcta para ser manejada desde cualquier tipo de proyecto, sin importar entorno o forma
                de uso, esta tarea puede hacerse desde el
                <Link href="/dashboard">Dashboard</Link>
            </p>
        </div>
    )
}
