import * as React from 'react';
import {IconLogo} from "./icon";

import {HeaderContent} from "./header-content";
import "@beyond/docs/header-menu.widget";
import {HeaderImage} from "./header-image";
import {useHomeContext} from "../context";

export function Header() {
    const container = React.useRef(null);
    const {texts: {header: texts}} = useHomeContext();
    return (
        <>
            <header className="home__header" ref={container}>
                <div className="page-section container">
                    <HeaderContent/>
                    <HeaderImage/>
                    <div className="visible-mobile">
                        <span className="p1">{texts.description}</span>
                    </div>
                    <IconLogo/>
                </div>
            </header>
        </>
    );
}
