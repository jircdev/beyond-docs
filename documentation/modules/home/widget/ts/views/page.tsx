import * as React from 'react';
import {Header} from "./header";
import {ConfigModule} from "./sections/config-module";
import {Realtime} from "./sections/realtime";
import {DX} from "./sections/dx";
import {Footer} from "./footer";
import {Technologies} from "./sections/technologies";
import {Solution} from "./sections/solution";
import {useBinder} from "@beyond/docs/store";
import {HomeContext} from "./context";


export function Page({store}): JSX.Element {
    const [ready, setReady] = React.useState(store.ready);
    const [data, setTexts] = React.useState(store.texts);

    useBinder([store], () => {
        setReady(store.ready);
        setTexts(store.texts);
    });

    if (!ready) return null;

    return (
        <HomeContext.Provider value={{
            ready,
            texts: store.texts
        }}>
            <Header/>
            <main className="main__home__content">
                <Solution/>
                <Technologies/>
                <Realtime/>
                <ConfigModule/>
                <DX/>
                <Footer/>
            </main>

        </HomeContext.Provider>
    )
}

