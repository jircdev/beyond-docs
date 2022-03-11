import * as React from 'react';
import {Link} from '@beyond/ui/link/code';
import {BeyondImage} from '@beyond/ui/image/code';


export function ModuleReview() {
    return (
        <>
            <h5>¡Listo, creamos nuestro modulo!</h5>

            <p>
                Ahora, desde el aside del dashboard, podemos acceder al mismo y ver los archivos creados. Los bundles
                estan compuestos por procesadores, los procesadores son los encargados de manejar, compilar o transpilar
                y empaquetar cualquier lenguaje que utilicemos en nuestro proyecto.

            </p>

            <div className="block__note">
                Beyond soporta la posibilidad de agregar bundles y procesadores, si deseas ver la lista de procesadores
                disponibles, dirigete a la
                <Link href="/processors">Sección de procesadores</Link>
            </div>
            <div className="block__note">
                Los modulos tambien pueden crearse de manera sencilla de forma manual, si prefieres hacerlo asi, puedes
                echarle un ojo a la
                <Link href="/processors"> sección configuración manual de modulos</Link>
            </div>
            <p>
                Ya nuestra página está creada y puede ser navegable, si el puerto agregado fue 7780,
                podremos verla accediendo a <a href="http://localhost:7880">http://localhost:7880</a>.
            </p>
            <p>
                Como hemos mencionado antes, el foco del dashboard es la productividad. Es por esto, que integra
                la posibilidad de listar los modulos, navegarlos, ver los archivos que contienen y editarlos si es
                necesario.
            </p>
            <p>Si hacemos click en el preaside, en la opción de la aplicación, se desplegará el aside con la lista de
                modulos. Al hacer click en el icono de navegación del módulo (la flecha), se abrirá a continuación
                el <strong>board</strong> de detalle del módulo. Este board tiene el link de navegación del módulo, si
                lo
                presionamos,
                estaremos navegando nuestro proyecto adentro del mismo dashboard.</p>

            <BeyondImage src="/home/static/module-board-edited.png" alt="Beyond module board"/>
        </>
    )
}
