import React from "react";
import { BeyondButton } from "@beyond/ui/form";
import { useHomeContext } from "../contexts";
import { SVGImage } from "../svg-image";
import { UniversalDevSVG } from "./svg-universal-dev";

export function UniversalDevelopment() {
    const {
        texts: { universalDevelopment: texts },
    } = useHomeContext();

    console.log(101, UniversalDevSVG);
    return (
        <section className="universal-development__section">
            <SVGImage src={UniversalDevSVG} />

            <div className="content">
                <header>
                    <h3 className="pre__title">{texts.pretitle}</h3>
                    <h4 className="main__title">{texts.title}</h4>
                    <h5 className="sub__title">{texts.subTitle}</h5>
                </header>

                <p>{texts.concept}</p>

                <div className="actions">
                    <BeyondButton>{texts.startNow}</BeyondButton>
                    <a href="#">{texts.moreInfo}</a>
                </div>
            </div>
        </section>
    );
}
