import * as React from 'react';
import {Link} from '@beyond/ui/link';
import {BeyondName} from "@beyond/docs/components/html";

export function Glossary() {
    return (
        <>
            <h1>Glosario de términos</h1>
            <ul>
                <li>
                    <strong>EAC </strong>("External Array Configuration")
                    Los objetos cuyas propiedades
                    son EAC pueden esperar dos valores, Un arreglo o una cadena de texto.
                    Si se pasa una cadena de texto, <BeyondName/> toma el valor como una ruta
                    relativa para la ubicación del archivo externo de configuración. Arreglo de configuración que puede
                    encontrarse en un archivo independiente y cuyos elementos son de tipo
                    <Link href="/glossary#eoc">EOC.</Link>
                </li>
                <li>
                    <strong>EOC </strong>("External Object Configuration")
                    Objeto de configuración que puede ser includo de forma directa como valor o ser referenciado
                    como un archivo externo. Los objetos cuyas propiedades
                    son EOC pueden esperar dos valores: un objeto o una cadena de texto. Si la propiedad
                    tiene definido como valor una cadena de texto, <BeyondName/> toma el valor como una ruta relativa
                    para la ubicación del archivo externo de configuración.
                </li>

            </ul>
        </>
    )
}
