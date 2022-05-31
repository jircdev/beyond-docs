import * as React from 'react';
import {Code} from "@beyond/docs/code/code";
import {Link} from '@beyond/ui/link/code';
import {NextLinks} from '@beyond/docs/components/next-links/code';

export function Install() {
    return (
        <>
            <h1 id="install">Instalación</h1>



            <p>¡Y ya está! ¿Simple verdad?
                Puedes empezar con tu proyecto utilizando el dashboard y tu IDE de preferencia.</p>

            <NextLinks items={[
                ['Dashboard', '/docs/dashboard'],
                ['Tutorial', '/docs/tutorial/web'],
            ]}/>

        </>
    )
}
