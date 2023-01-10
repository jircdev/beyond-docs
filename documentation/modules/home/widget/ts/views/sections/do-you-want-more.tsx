import React from "react";
import { Item } from "./item";
import { useHomeContext } from "../contexts";

interface IFeature {
    moreInfo?: { text: string; to: string };
    title: string;
    description: string;
    icon: string;
}

export function DoYouWantMore() {
    const {
        texts: { doYouWantMore: texts },
    } = useHomeContext();

    const output = texts.features.map((feature: IFeature) => {
        return (
            <Item key={feature.description} title={feature.title} icon={feature.icon} content={feature.description}>
                {feature.moreInfo && <a href={feature.moreInfo.to}>{feature.moreInfo.text}</a>}
            </Item>
        );
    });

    return (
        <section className="page-section container more__section center-content">
            <header>
                <span className="pretitle">{texts.preTitle}</span>
                <h3 dangerouslySetInnerHTML={{ __html: texts.title }}></h3>
            </header>

            <ul className="feature__list">{output}</ul>
        </section>
    );
}
