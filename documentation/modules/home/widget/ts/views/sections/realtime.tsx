import * as React from 'react';
import {CodeBox} from "../navigator-box";
import {BeyondImage} from '@beyond/ui/image/code';
import {BeyondIcon} from '@beyond/ui/icons/code';
import {SVGS} from "../../icons";
import {Link, Elink} from "@beyond/ui/link/code";


export function Realtime() {
    return (
        <>
            <section className="block__features  three-columns realtime-section">
                <div className="icons icons-graphic">
                    <BeyondIcon icon={SVGS.realtime.icon} viewBox={SVGS.realtime.viewBox}
                                alt="beyond realtime connection with hmr"/>
                </div>
                <div className="content">
                    <h3>HMR en Navegador y <span className="accent">Node</span></h3>

                    <p>Actualización en tiempo de ejecución del código cliente y
                        <span className="accent"> Node</span>. <span className="insight beyond">BeyondJS</span> gestiona
                        los servicios Node para evitar el reinicio de los mismos cuando se realizan cambios y garantizar
                        la mejor experiencia de desarrollo posible.
                    </p>
                    <Link href="/docs/hmr" className="link-more">Leer más</Link>
                </div>
                <div className="content">
                    <h3>Conexión Real-time cliente y servidor/ servidor y servidor</h3>

                    <p>Comunicación de
                        <Elink
                            href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"> websockets </Elink>
                        soportada de forma automática para conectar el código cliente de un
                        proyecto móvil o web con un servidor o servicio node.</p>
                    <Link href="/docs/bridges" className="link-more">Leer más</Link>
                </div>

                {/*<BeyondImage src="/images/realtime.png" alt="beyond realtime"/>*/}

            </section>

        </>
    )
}
