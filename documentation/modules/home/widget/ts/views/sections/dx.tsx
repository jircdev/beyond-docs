import * as React from 'react';
import {BeyondImage} from "@beyond/ui/image/code";

export function DX() {
    return (
        <>
            <article className="block__features gradient-one two-columns mv-200">


                <div className="image-over">
                    <BeyondImage src="/images/home/dashboard-home.png" alt="Beyond Dashboard"/>
                    <BeyondImage src="/images/home/dashboard-home-2.png" alt="Beyond Dashboard"/>
                </div>
                <div/>
                <div className="content content-40">
                    <header className="header__section header__left">
                        <h3>Experiencia de desarrollo</h3>
                    </header>

                    <ul>
                        <li>Proyectos en simultáneo.</li>
                        <li>Edición de código.</li>
                        <li>Deployment.</li>
                        <li>Creación de módulos.</li>
                        <li>Gestión de plataformas y servicios.</li>
                    </ul>
                </div>


            </article>
        </>
    )
}
