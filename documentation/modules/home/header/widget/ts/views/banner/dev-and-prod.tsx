import React from "react";
import { EnvironmentsSVG } from "../background/svgs/environments";
import { DevServerSVG } from "../background/svgs/dev-server";
import { FilesSVG } from "../background/svgs/files";
import { NpmSVG } from "../background/svgs/npm-gh";
import { ImportsSVG } from "../background/svgs/imports";
import { cdnSVG } from "../background/svgs/cdn";
import { useHeaderContext } from "../contexts";
import { SVGImage } from "@beyond/docs/components/html";

export function DevAndProd({}) {
    const { slide } = useHeaderContext();

    return (
        <section className="header__banner__container container-section">
            <div className="card">
                <header>
                    <span dangerouslySetInnerHTML={{ __html: ImportsSVG }} />
                    <span className="h3">Import</span>
                </header>
                <div className="content">
                    <div>Import React from 'react'</div>
                    <div>Import any from 'your-module'</div>
                </div>
            </div>
            <hr className="separator" />
            <div className="draw-section">
                <SVGImage src={EnvironmentsSVG} className="horizontal-sm" />
            </div>
            <hr className="separator" />
            <div className="draw-section">
                {slide !== "dev" && <SVGImage src={cdnSVG} name="cdn" />}
                {slide === "dev" && <SVGImage src={DevServerSVG} name="dev" />}
            </div>

            <div className="separator__container">
                <hr className="separator no-grow" />
            </div>

            <div className="draw-box">
                <div className="separator-backet" />
                <SVGImage src={NpmSVG} />
                {slide === "dev" && <SVGImage src={FilesSVG} />}
            </div>
        </section>
    );
}
