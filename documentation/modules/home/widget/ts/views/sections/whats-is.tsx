import * as React from "react";
import { AppIcon } from "@beyond/docs/ui/icons";
import { BeyondIconButton } from "@beyond/ui/icons";
import { useHomeContext } from "../contexts";
import { SVGS } from "../../icons";

export function WhatIs() {
    const {
        texts: { whatIs: texts },
    } = useHomeContext();

    return (
        <section className="page-section what-is__section  container">
            <div className="left">
                <h3 className="no-m">{texts.title}</h3>

                <div className="flex-container flex-space-b">
                    <a href="#why">{texts.links.why}</a>
                    <a href="https://github.com/beyondjs">{texts.links.github}</a>
                </div>
            </div>
            <div className="right">
                <p className="h4 regular no-m">{texts.what}</p>

                <div className="flex-container mt-50">
                    <BeyondIconButton className="start-now" icon={SVGS.rightArrow}>
                        {texts.startNow}
                    </BeyondIconButton>

                    <div className="clipboard__container" data-text="npm i -g beyond">
                        <span>npm i --location=global beyond</span>
                        <AppIcon icon="copy" />
                    </div>
                </div>
            </div>
        </section>
    );
}
