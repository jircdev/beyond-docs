import React from "react";
import { BeyondButton } from "@beyond/ui/form";
import { useHomeContext } from "../contexts";
import { SVGImage } from "@beyond/docs/components/html";
import { UniversalDevSVG } from "./svg-universal-dev";

export function UniversalDevelopment() {
    const {
        texts: { universalDevelopment: texts },
    } = useHomeContext();

    return (
        <section className="page-section container two-columns overflow-visible">
            <SVGImage src={UniversalDevSVG} />

            <div className="content">
                <header className="section__header">
                    <span className="pretitle">{texts.pretitle}</span>
                    <h3 className="main__title">{texts.title}</h3>
                    <h5 className="sub__title">{texts.subTitle}</h5>
                </header>

                <p>{texts.concept}</p>

                <div className="flex-container flex-center-y">
                    <BeyondButton className="primary btn-outline">{texts.startNow}</BeyondButton>
                    <a href="#">{texts.moreInfo}</a>
                </div>
            </div>
        </section>
    );
}
