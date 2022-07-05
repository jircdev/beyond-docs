import * as React from 'react';
import {IconLogo} from "./icon";

import {HeaderContent} from "./header-content";
import "@beyond/docs/header-menu.widget";
import {HeaderImage} from "./header-image";

export function Header() {
    const container = React.useRef(null);
    return (
        <>
            <header className="home__header container" ref={container}>
                <HeaderContent/>
                <HeaderImage/>
                <IconLogo/>
            </header>
        </>
    );
}
