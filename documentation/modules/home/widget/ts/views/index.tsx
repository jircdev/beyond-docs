import * as React from "react";

import { Footer } from "./footer";
import { useBinder } from "@beyond/docs/store";
import ripple from "ripple-effects";
import { HomeContext } from "./contexts";
import { WhatIs } from "./sections/whats-is";
import { WhatIsItFor } from "./sections/what-is-it-for";
import { Technologies } from "./sections/technologies";
import { UniversalDevelopment } from "./sections/universal-development";
import { DoYouWantMore } from "./sections/do-you-want-more";
import { CodePen } from "./sections/codepen";
import { GettingStart } from "./sections/getting-start";
import "@beyond/docs/home-header";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "app-home-header": any;
        }
    }
}
export function Page({ store }): JSX.Element {
    const [ready, setReady] = React.useState(store.ready);
    const [data, setTexts] = React.useState(store.texts);

    useBinder([store], () => {
        setReady(store.ready);
        setTexts(store.texts);
    });

    if (!ready) return null;

    return (
        <HomeContext.Provider value={{ ready, texts: store.texts }}>
            <div className="home">
                <app-home-header></app-home-header>
                <main className="main__home__content">
                    <WhatIs />
                    <WhatIsItFor />
                    <Technologies />
                    <UniversalDevelopment />
                    <DoYouWantMore />
                    <CodePen />
                    <GettingStart />
                </main>
                <Footer />
            </div>
        </HomeContext.Provider>
    );
}
