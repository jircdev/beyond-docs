import * as React from 'react';
import {StrongTitle} from "./strong-tittle";
import {useHomeContext} from "../context";

export function HeaderContent() {
    const {texts: {header: texts}} = useHomeContext();
    return (
        <div className="header__content">
            <section className="main__title">
                <span className="pre__title">{texts.pretitle}</span>
                <h1>
                    <span dangerouslySetInnerHTML={{__html: texts.h1}}/>
                    <StrongTitle/>
                </h1>
            </section>
            <span className="header__description">{texts.description}</span>
        </div>
    )
}
