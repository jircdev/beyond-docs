import * as React from 'react';
import {CodeBox} from "../navigator-box";
import {BeyondImage} from '@beyond/ui/image/code';
import {BeyondIcon} from '@beyond/ui/icons/code';
import {SVGS} from "../../icons";
import {Link} from "@beyond/ui/link/code";

export function Realtime() {
    return (
        <>
            <section className="block__features  three-columns realtime-section">

                <div className="relative-container">
                    <section className="icon-graphic-container">
                        <div className="icons icons-graphic">
                            <BeyondIcon icon={SVGS.server} className="icon-server"/>
                            <div className="arrows">
                                <BeyondIcon icon={SVGS.arrow} className="icon-arrow server-to-mobile"/>
                                <BeyondIcon icon={SVGS.arrow} className="server-to-desktop icon-arrow "/>
                            </div>
                            <BeyondIcon icon={SVGS.mobile} className="icon-mobile"/>
                            <BeyondIcon className="icon-desktop" icon={SVGS.desktop}/>
                        </div>
                    </section>
                </div>
                <div className="content">
                    <h3>HMR en Navegador y Node</h3>

                    <p>Actualización en tiempo de ejecución del código tanto en el código cliente, como en los servicios
                        <span className="insight">Node</span>. <span className="insight beyond">BeyondJS</span> gestiona
                        los servicios Node para evitar el reinicio de los mismos cuando se realizan cambios y garantizar
                        la mejor experiencia de desarrollo posible.
                    </p>
                    <Link href="/docs/hmr" className="link-more">Leer más</Link>
                </div>
                <div className="content">
                    <h3>Conexión Real-time cliente y servidor</h3>

                    <p>Comunicación de websockets soportada de forma automática para conectar el código cliente de un
                        proyecto móvil o web con un servidor o servicio node.</p>
                    <Link href="/docs/bridges" className="link-more">Leer más</Link>
                </div>

                {/*<BeyondImage src="/images/realtime.png" alt="beyond realtime"/>*/}

            </section>

        </>
    )
}
