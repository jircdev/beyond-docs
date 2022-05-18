import * as React from 'react';
import {StrongTitle} from "./strong-tittle";

export function HeaderContent() {

    return (
        <div className="header__content">

            <section className="main__title">
                <span className="pre__title">Welcome to BeyondJS</span>
                <h1>
                <span>The Full Stack universal <br/>
                    Typescript Framework</span>
                    <StrongTitle/>
                </h1>
            </section>

            <span className="header__description">
                            Integra diferentes stacks de desarrollo y trabaja con ellos bajo el mismo paradigma, priorizando
                            la experiencia de desarrollo y la carga modular, sin necesidad de empaquetadores.
                {/*BeyondJS permite integrar y mezclar en un mismo proyecto las herramientas y frameworks de vista*/}
                {/*que prefieras, priorizando la experiencia de desarrollo y la carga modular sin necesidad de empaquetadores.*/}
            </span>
        </div>
    )
}
