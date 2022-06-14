import * as React from 'react';
import {BeyondName} from "@beyond/docs/components/html/code";
import {Elink} from "@beyond/ui/link/code";
import {BeyondImage} from '@beyond/ui/image/code';

export function DashboardIntro() {
    return (
        <>
            <h1>Dashboard</h1>

            <p>
                <BeyondName/> provee un Dashboard integrado, que busca mejorar la experiencia de desarrollo de varias
                maneras, todas enfocadas en brindar un soporte al programador en tareas diarias que suelen consumir
                tiempo. Estas tareas abarcan todo el circuito del desarrollo, desde la creación de un proyecto nuevo
                hasta el despliegue del mismo.
            </p>

            <p>
                Se encuentra disponible siempre que el servidor de desarrollo se levanta
                en <Elink href="http://localhost:4000">http://localhost:4000</Elink> y permite realizar la creación de
                un nuevo proyecto u obtener información relevante del proyecto existente, como se verá más adelante.
            </p>
            <BeyondImage alt="BeyondJS Dashboard workspace" src="/images/dashboard/empty.png"/>
        </>
    )
}
