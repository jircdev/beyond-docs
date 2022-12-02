import * as React from "react";
export function WhatIs() {
    return (
        <section className="container--800">
            <header className="header__section">
                <h3 className="primary-color">
                    ¿Por qué <span className="beyond">BeyondJS?</span>
                    <br />
                </h3>
            </header>
            <div>
                <p>
                    BeyondJS provee un Dev Server para desarrollo y un CDN en producción, para consumir modulos desde
                    cualquier entorno de ejecución de forma directa. La misma experiencia de desarrollo para todo.
                </p>
                <p>
                    Años atrás toda la complejidad actual era aceptable, pero hoy en día todo puede hacerse más simple,
                    los módulos ES tienden a ser estandar y BeyondJS aprovecha todos los avances tecnológicos para
                    integrarlos de forma que se simplifique el proceso de interación de los entornos javascript y el
                    proceso de desarrollo de los programadores.
                </p>
            </div>
        </section>
    );
}
