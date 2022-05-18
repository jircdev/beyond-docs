import * as React from 'react';
import {IconLogo} from "./icon";
import {Pulse} from "./pulse";
import {SVGEventsManager} from "./animation-functions";
import {Notice} from "./notice";
import {HeaderContent} from "./header-content";
import {TopHeader} from "./top-header";

export function Header() {

    const container = React.useRef(null);

    return (
        <>
            <Notice/>
            <TopHeader/>
            <header className="home__header" ref={container}>
                {/*<header-animation/>*/}
                <div className="container flex-container flex-center">
                    <HeaderContent/>
                    <IconLogo/>
                </div>
                <Pulse/>
            </header>
        </>

    );
}
