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
                Al hacer click en el modulo, podemos navegar el sitio haciendo click en el enlace de navegacion, esto
                nos abrira un tab del dashboard, para poder ver lo que editamos en realtime. Esto por supuesto, depende
                de la comodidad y preferencia del desarrollador, sin embargo, la idea aca es demostrar la utilidad del
                dashboard.
                Nuestra pantalla debe haber quedado asi:

            </p>
        </>
    )
}
