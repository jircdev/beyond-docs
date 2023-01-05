import * as React from "react";
import "@beyond/docs/header-menu.widget";
import { useHomeContext, HeaderContext } from "../contexts";
import { CDN } from "./svgs/cdn";
import { PublishSVG } from "./svgs/publish";
import { ServerSVG } from "./svgs/server";
import { BackgroundContainer } from "./background/background-container";
import { Banner } from "./banner";

export function Header() {
    const container = React.useRef(null);
    const [slide, setSlide] = React.useState("dev");
    const {
        texts: { header: texts },
    } = useHomeContext();
    const images = {
        prod: CDN,
        publish: PublishSVG,
        dev: ServerSVG,
    };

    return (
        <HeaderContext.Provider value={{ setSlide, slide }}>
            <header className="container home__header" ref={container}>
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
