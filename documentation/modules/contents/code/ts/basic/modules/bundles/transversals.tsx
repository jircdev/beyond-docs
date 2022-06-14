import * as React from 'react';
import {BeyondName} from "@beyond/docs/components/html/code";

export function BundlesTransversals() {
    return (
        <>
            <h2 id="transversal">Bundles Transversales</h2>
            <p>Los bundles transversales, se definen igual que el resto de bundles, pero tienen una particularidad que
                ofrece ventajas productivas: el código de un bundle transversal es compilado en un archivo único.</p>
            <p>
                <BeyondName/> los ubica, integra y unifica en un único bundle o archivo final. Los
                bundle de tipo <span className="inline-code">start</span> son un ejemplo claro de ello, permiten al
                programador definir lógica que desea sea ejecutada en el arranque de la aplicación.
            </p>
        </>
    )
}
