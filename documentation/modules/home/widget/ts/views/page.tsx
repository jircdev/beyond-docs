import * as React from 'react';
import {Header} from "./header";
import {Card} from "./card";
import {BeyondIcon} from "@beyond/ui/icons/code";
import {ConfigModule} from "./sections/config-module";
import {Realtime} from "./sections/realtime";
import {SVGS} from "../icons";
import {DX} from "./sections/dx";
import {Footer} from "./footer";
import {Technologies} from "./sections/technologies";
import {Solution} from "./sections/solution";
import {Elink, Link} from '@beyond/ui/link/code';

export function Page({uri, component}): JSX.Element {

    return (
        <>
            <Header/>
            <main>
                <Solution/>
                <Technologies/>
                <div className="container">
                    <ConfigModule/>
                    <Realtime/>
                    <DX/>
                </div>
                <Footer/>
            </main>

        </>
    )
}

