import * as React from 'react';
import {BeyondName} from "../../views/beyond";
import {Link, Elink} from "@beyond/ui/link/code";

export function DevServer() {
    return (
        <>
            <h1>Servidor de desarrollo</h1>

            <p>
                El servidor de desarrollo de <BeyondName/> se inicia cuando se ejecuta el comando <span
                className="inline">beyond</span> y puede leer determinadas configuraciones a partir del archivo <span
                className="inline">beyond.json</span>, pero no es necesario para crearlo. <BeyondName/> está creado para
                que el programador trabaje haciendo uso del Dashboard y este gestiona la mayoría de las configuraciones
                habituales, que suelen tener que ver con el poder levantar algún proyecto.
            </p>

            <p>Cuando el servidor de desarrollo se levanta, el Dashboard queda disponible para ser accedido desde <Elink
                href="http://localhost:4000">http://localhost:4000</Elink> y este genera y edita el archivo <span
                className="inline">beyond.json</span> cuando se crea, edita o elimina algún proyecto.</p>
        </>
    )
}
