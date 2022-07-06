import * as React from 'react';
import {BeyondIcon} from "@beyond/ui/icons";
import {SVGS} from "../../icons";

import {BeyondSwiperSlider} from '@beyond/ui/swiper';

export function Technologies() {
    return (

        <div className="container technologies__section page-section no-mv">

            <section className="">
                <h3 className="subtitle">
                    Desarrollo universal
                </h3>
                <p className="p2">
                    Enfocado en hacer que las mismas herramientas y técnicas
                    funcionen para múltiples distribuciones y tecnologías de manera simple y en la creación
                    de micro servicios y micro frontends.
                </p>
            </section>

            <div className="banner__icons">
                <BeyondIcon icon={SVGS.typescript}/>
                <BeyondIcon icon={SVGS.node}/>
                <BeyondIcon icon={SVGS.jamstack}/>
                <BeyondIcon icon={SVGS.react}/>
                <BeyondIcon icon={SVGS.npm}/>
                <BeyondIcon icon={SVGS.svelte}/>
                <BeyondIcon icon={SVGS.vue}/>
                <BeyondIcon icon={SVGS.sass}/>
                <BeyondIcon icon={SVGS.websocket}/>
            </div>
        </div>

    )
}
