import React from "react";
import { BeyondIcon } from "@beyond/ui/icons";
import { useHomeContext } from "../contexts";
import { SVGS } from "../../icons";

const technologies = [
    { title: "jamstack", icon: "jamstackIcon" },
    { title: "react", icon: "react" },
    { title: "npm", icon: "npm" },
    { title: "vue", icon: "vue" },
    { title: "sass", icon: "sass" },
    { title: "typescript", icon: "typescript" },
    { title: "node", icon: "node" },
    { title: "svelte", icon: "svelte" },
    { title: "websockets", icon: "websocket" },
];

export function Technologies() {
    const {
        texts: { technologies: texts },
    } = useHomeContext();

    const output = technologies.map((technology) => (
        <li key={technology.title}>
            <BeyondIcon icon={SVGS[technology.icon]} title={technology.title} />
        </li>
    ));

    return (
        <section className="technologies-section page-section text-center container">
            {/* <h5 className="pre__title">{texts.title}</h5> */}
            <header className="header--center">
                <span className="pretitle">{texts.title}</span>
            </header>
            <ul className="technologies__list">{output}</ul>
        </section>
    );
}
