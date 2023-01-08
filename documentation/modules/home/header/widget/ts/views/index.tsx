import React from "react";
import { HeaderContext } from "./contexts";
import { useTexts } from "@beyond/docs/store";
import { BackgroundContainer } from "./background/background-container";
import { Buttons } from "./buttons";
import { Banner } from "./banner";

export function Widget() {
    const container = React.useRef(null);
    const [slide, setSlide] = React.useState("dev");

    const [ready, texts] = useTexts("@beyond/docs/home", "header");

    if (!ready) {
        return null;
    }

    return (
        <HeaderContext.Provider value={{ setSlide, slide }}>
            <header className="container home__header" ref={container}>
                <div className="header__gradient"></div>
                <BackgroundContainer />

                <div className="welcome__text">
                    <h1>{texts.title}</h1>
                    <p>{texts.subtitle}</p>
                </div>

                <Banner />
            </header>
        </HeaderContext.Provider>
    );
}
