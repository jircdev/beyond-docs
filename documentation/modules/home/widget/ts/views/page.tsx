import * as React from 'react';
import {Header} from "./header";
import {ConfigModule} from "./sections/config-module";
import {Realtime} from "./sections/realtime";
import {DX} from "./sections/dx";
import {Footer} from "./footer";
import {Technologies} from "./sections/technologies";
import {Solution} from "./sections/solution";


export function Page(): JSX.Element {

    return (
        <>
            <Header/>
            <main className="main__home__content">
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

