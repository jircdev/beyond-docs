import * as React from 'react';
import {IconLogo} from "./icon";
import {Pulse} from "./pulse";
import {Notice} from "../../../../../header-menu/widget/ts/views/notice";
import {HeaderContent} from "./header-content";
import "@beyond/docs/header-menu/widget";
import {HeaderImage} from "./header-image";

export function Header() {
    const container = React.useRef(null);
    return (
        <>
            <header className="home__header" ref={container}>
                <div className="container header-content__container ">
                    <HeaderContent/>
                    <div className="header__animation__container">
                        <HeaderImage/>
                    </div>
                    <IconLogo/>
                </div>
            </header>
            <Pulse/>
        </>
    );
}
