import * as React from 'react';

export function Solution() {
    return (
        <div className="container">
            <header className="header__section text-center">
                <h3>Desarrollo universal</h3>
                <span className="subtitle">El framework enfocado en hacer que las mismas herramientas y técnicas
                            funcionen para múltiples distribuciones  y tecnologías de manera simple.</span>
            </header>


            <section>
                <p className="text-center">
                    Ideal para desarrollar desde paquetes npm, como librerias o widgets hasta la creación de
                    proyectos webs con arquitectura <a target="_blank"
                                                       href="https://jamstack.org/">Jamstack</a> o con
                    Renderizado servidor (SSR), aplicaciones moviles con <a target="_blank"
                                                                            href="https://cordova.apache.org/">Cordova</a>,
                    servicios o backends en <a href="https://nodejs.org/en/" target="_blank">NodeJS</a> que
                    pueden
                    intercomunicarse entre ellos de forma automática por medio de websockets.
                </p>
            </section>
        </div>
    )
}
