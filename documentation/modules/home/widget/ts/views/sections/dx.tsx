import * as React from 'react';
import {BeyondImage} from "@beyond/ui/image/code";
import {useHomeContext} from "../context";

export function DX() {
    const {texts: {experience, readMore}} = useHomeContext();

    const output = experience.texts.map((item, index) => <li key={`${item}.${index}`}>{item}</li>);
    return (
        <>
            <article className="block__features gradient-one two-columns mv-200">


                <div className="image-over">
                    <BeyondImage src="/images/home/dashboard-home.png" alt="Beyond Dashboard"/>
                    <BeyondImage src="/images/home/dashboard-home-2.png" alt="Beyond Dashboard"/>
                </div>
                <div/>
                <div className="content content-40">
                    <header className="header__section header__left">
                        <h3>{experience.title}</h3>
                    </header>
                    <ul>
                        {output}
                    </ul>
                </div>


            </article>
        </>
    )
}
