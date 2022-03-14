import * as React from 'react';
import {ModalImage} from "../modal-image";
import {CreateProject} from "./create-project";
import {CreateModule} from "./create-module";
import {ModuleReview} from "./module-review";
import {BridgeSection} from "./bridge-section";

export function TutorialPage() {
    return (
        <div className="content">
            <h1>Tutorial: Proyecto Web </h1>

            <h2 id="before-start">Antes de Empezar</h2>
            <p>
                Este tutorial busca principalmente poder mostrar todo el flujo de desarrollo con beyond y mostrar de
                manera clara los beneficios que permite. Esta creado para las personas que deseen aprender mientras
                practican, por lo que no se adentrará a fondo en todos los conceptos que definen la estructura de beyond
                pero que seguro podrás conseguir en la documentación cuando requieras.

            </p>
            <p>El tutorial se divide en las siguientes partes:</p>
            <ul>
                <li>El dashboard.</li>
                <li>Creación de primer modulo.</li>
                <li>Integración con backend</li>
            </ul>
            <p>Es ideal lo completes para que veas como en poco tiempo logras integrar back y front utilizando la misma
                estructura, utilizando javascript de forma universal.</p>

            <section>
                <h2 id="create-project">Crear proyecto</h2>
                <div className="block__note">
                    Este tutorial propone hacer uso del dashboard de beyond, que es una herramienta muy potente y que se
                    encuentra en version beta. Si deseas crear un proyecto de manera manual, puedes seguir este tutorial
                </div>
                <h3 id="dashboard">El Dashboard</h3>
                <p>
                    El dashboard se levanta por defecto en el puerto 4000, para acceder a el debes ingresar a
                    <strong> localhost:4000</strong>.
                    Beyond analiza el directorio en donde ha sido ejecutado para validar si existe algún
                    proyecto. Si existen proyectos beyond en el directorio, el dashboard mostrará una lista, como es
                    primera vez que lo usamos, aparecerá vacio brindando opción para crear un proyecto nuevo.
                </p>
                <ModalImage src="/home/static/empty.png" alt="beyond dashboard empty folder"/>
            </section>
            <CreateProject/>
            <CreateModule/>
            <ModuleReview/>
            <BridgeSection/>
        </div>
    )
}
