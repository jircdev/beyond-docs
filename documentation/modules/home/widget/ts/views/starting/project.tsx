import * as React from 'react';

export function Project() {
    return (
        <>
            <h2 id="create-project">Crear un proyecto</h2>

            <div className="block__note">
                Nota: Este tutorial propone hacer uso del dashboard de beyond, que es una herramienta muy potente y que
                se encuentra en version beta. Si deseas crear un proyecto de manera manual, puedes seguir este tutorial
            </div>

            <h3>El dashboard</h3>

            <p> El dashboard se levanta por defecto en el puerto 4000, para acceder a el debes ingresar a
                localhost:4000. Beyond analiza el directorio en donde ha sido ejecutado para validar si existe algún
                proyecto. Si existen proyectos beyond en el directorio, el dashboard mostrará una lista, como es primera
                vez que lo usamos, aparecerá vacio brindando opción para crear un proyecto nuevo.
            </p>
            <div className="block__note info">
                El dashboard es uno de los features más potentes de beyond y en el tutorial
                sólo se hace un repaso superficial, si quieres saber un poco más al respecto,
                puedes leer todos los detalles en
                <a href="#">su sección dentro de la documentación</a>
            </div>
        </>
    )
}
