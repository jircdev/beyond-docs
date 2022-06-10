import * as React from 'react';
import {CodeBox, Code} from "@beyond/docs/code/code";
import {BeyondName} from "../../views/beyond";

const tpl = `
//....
"languages": {
    "default": "en",
    "supported": [
      "en",
      "es"
    ]
},
//....
`;

const tpl2=`
import type {Texts} from '@beyond-js/kernel/texts/ts';
`;
export function MultiLanguage() {
    return (
        <>
            <h1>Multilenguaje</h1>

            <p>El manejo de lenguajes en un proyecto se define por medio de la propiedad <span
                className="inline">languages</span> en el <span className="inline">project.json</span>. Esta propiedad
                permite definir los lenguajes soportados y el idioma por defecto.
            </p>

            <p>Los idiomas se manejan por medio de identificadores de dos letras. A continuación se muestra un ejemplo
                donde
                se define que el proyecto soporta español e ingles y se define el ingles como idioma por defecto.</p>
            <CodeBox title="project.json" language="json">{tpl}</CodeBox>

            <h2>Bundles de Texto</h2>

            <p><BeyondName/></p>
            <Code>
                {tpl2}
            </Code>
        </>
    )
}
