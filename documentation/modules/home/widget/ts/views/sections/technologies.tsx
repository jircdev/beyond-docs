import * as React from 'react';
import {BeyondIcon} from "@beyond/ui/icons";
import {SVGS} from "../../icons";

import {BeyondSwiperSlider} from '@beyond/ui/swiper';
import {useHomeContext} from "../context";

export function Technologies() {
    const {texts: {universal: {title, texts}}} = useHomeContext();
    return (

        <div className="container technologies__section page-section no-mv">

            <section className="">
                <h3 className="subtitle">
                    {title}
                </h3>
                <p className="p2">
                    {texts}
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
                <BeyondIcon icon={SVGS.deno}/>
                <BeyondIcon icon={SVGS.websocket}/>
            </div>
        </div>

    )
}
