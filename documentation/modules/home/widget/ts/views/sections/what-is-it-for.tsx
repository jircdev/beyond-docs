import * as React from "react";
import { useHomeContext } from "../contexts";
import { Item } from "./item";
import { SVGS } from "../../icons";

export function WhatIsItFor() {
    const {
        texts: { whatsIsItFor: texts },
    } = useHomeContext();
    const featuresElements = texts.features.map((feature: { title: string; description: string; icon: string }) => (
        <Item key={feature.description} title={feature.title} content={feature.description} icon={feature.icon} />
    ));

    return (
        <section className="page-section what-its-for__section container">
            <header>
                <span className="pretitle pretitle-h2">{texts.pretitle}</span>
                <h2 dangerouslySetInnerHTML={{ __html: texts.title }} />
            </header>

            <ul className="feature__list">{featuresElements}</ul>
        </section>
    );
}
