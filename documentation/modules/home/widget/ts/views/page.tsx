import * as React from "react";
import { Header } from "./header";
import { ConfigModule } from "./sections/config-module";
import { Realtime } from "./sections/realtime";
import { DX } from "./sections/dx";
import { Footer } from "./footer";
import { Technologies } from "./sections/technologies";
import { Solution } from "./sections/solution";
import { useBinder } from "@beyond/docs/store";
import { HomeContext } from "./context";
import { Why } from "./why";
import { WhatIs } from "./sections/what-is";
import { WhatIsItFor } from "./sections/what-is-it-for";
import { GettingStart } from "./sections/getting-start";

export function Page({ store }): JSX.Element {
    const [ready, setReady] = React.useState(store.ready);
    const [data, setTexts] = React.useState(store.texts);

    useBinder([store], () => {
        setReady(store.ready);
        setTexts(store.texts);
    });

    if (!ready) return null;

    return (
        <HomeContext.Provider
            value={{
                ready,
                texts: store.texts,
            }}
        >
            <Header />
            <main className="main__home__content">
                <WhatIs />
                <WhatIsItFor />
                <Why />
                <GettingStart />
                <Footer />
            </main>
        </HomeContext.Provider>
    );
}
