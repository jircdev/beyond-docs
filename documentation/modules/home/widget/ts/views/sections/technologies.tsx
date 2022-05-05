import * as React from 'react';
import {BeyondIcon} from "@beyond/ui/icons/code";
import {SVGS} from "../../icons";

import {BeyondSwiperSlider} from '@beyond/ui/swiper/code';

export function Technologies() {
    return (

        <div className="container">
            <div className="banner__icons">
                {/*<BeyondSwiperSlider>*/}
                    <BeyondIcon icon={SVGS.typescript}/>
                    <BeyondIcon icon={SVGS.node}/>
                    <BeyondIcon icon={SVGS.jamstack}/>
                    <BeyondIcon icon={SVGS.react}/>
                    <BeyondIcon icon={SVGS.npm}/>
                    <BeyondIcon icon={SVGS.svelte}/>
                    <BeyondIcon icon={SVGS.vue}/>
                    <BeyondIcon icon={SVGS.sass}/>
                    <BeyondIcon icon={SVGS.websocket}/>
                {/*</BeyondSwiperSlider>*/}

            </div>
        </div>

    )
}
