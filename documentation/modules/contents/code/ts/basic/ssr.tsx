import * as React from 'react';

export function SSRPage() {
    return (
        <div className="content">
            <h1>SSR</h1>

            <p>Debe existir un store y los datos deben ser serializados para que se pueda validar con la información
                enviada desde el servidor, si la data del primer renderizado no es igual al de la información retornada
                en la hidratación genera error.
            </p>

            <h2>BeyondWidgetController</h2>

            <p>El controlador puede variar según si estás usando una libreria o no</p>
            <h2>Ciclo de vida</h2>
        </div>
    )
}
