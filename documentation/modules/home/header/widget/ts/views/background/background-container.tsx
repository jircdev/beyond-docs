import React from "react";
import { DarkBGSVG } from "./svgs/background-dark";
import { BackgroundSVG } from "./svgs/background";
import { CircleLinesSVG } from "./svgs/lines";
import { LogoSVG } from "./svgs/logo";
import { SVGImage } from "@beyond/docs/components/html";
export function BackgroundContainer() {
    return (
        <div className="headersvg__container">
            <SVGImage src={LogoSVG} className="logo-bg" />
            <SVGImage src={DarkBGSVG} className="svg--absolute" />
        </div>
    );
}
