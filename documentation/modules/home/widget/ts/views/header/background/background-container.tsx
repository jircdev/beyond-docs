import React from "react";
import { DarkBGSVG } from "./svgs/background-dark";
import { BackgroundSVG } from "./svgs/baclground";
import { CircleLinesSVG } from "./svgs/lines";
import { LogoSVG } from "./svgs/logo";

export function BackgroundContainer() {
    return (
        <div className="headersvg__container">
            <span dangerouslySetInnerHTML={{ __html: LogoSVG }} />
            <span
                className="svg--absolute"
                style={{
                    top: "-200px",
                }}
                dangerouslySetInnerHTML={{ __html: DarkBGSVG }}
            />
        </div>
    );
}
