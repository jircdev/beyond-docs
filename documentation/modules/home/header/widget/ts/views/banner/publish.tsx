import React from "react";
import { SVGImage } from "@beyond/docs/components/html";
import { FilesSVG } from "../background/svgs/files";
import { NpmSVG } from "../background/svgs/npm-gh";
import { ImportsSVG } from "../background/svgs/imports";
import { useHeaderContext } from "../contexts";
import { BundleSVG } from "../background/svgs/bundle";

export function PublishState({}) {
    const dev = React.useRef<HTMLPictureElement>(null);
    const cdn = React.useRef<HTMLPictureElement>(null);
    const { slide } = useHeaderContext();

    return (
        <section className="header__banner__container container-section">
            <div className="card draw-section">
                <header>
                    <span dangerouslySetInnerHTML={{ __html: ImportsSVG }} />
                    <span className="h3">Your module code</span>
                </header>
                <div className="content"></div>
            </div>
            <hr className="separator" />
            <div className="draw-section">
                <SVGImage src={BundleSVG} />
            </div>
            <hr className="separator" />
            <div className="draw-section">
                <SVGImage src={FilesSVG} />
            </div>

            <hr className="separator no-grow" />
            <div className="draw-box">
                <div className="separator-backet" />
                <SVGImage src={NpmSVG} />
                {slide === "dev" && <SVGImage src={FilesSVG} />}
            </div>
        </section>
    );
}
