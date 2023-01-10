import * as React from "react";
import { AppIcon } from "@beyond/docs/ui/icons";
import { BeyondIconButton } from "@beyond/ui/icons";
import { useHomeContext } from "../contexts";
import { SVGS } from "../../icons";
import { Clipboard } from "../clipboard";

export function WhatIs() {
    const {
        texts: { whatIs: texts, copyMessage },
    } = useHomeContext();

    return (
        <section className="page-section what-is__section  container">
            <div className="left">
                <h3 className="no-m">{texts.title}</h3>
                <div className="flex-container flex-space-b hidden-xs">
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
                    <Clipboard text="npm i --location=global beyond" message={copyMessage} />
                </div>
            </div>
        </section>
    );
}
