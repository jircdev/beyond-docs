import * as React from 'react';
import {Link} from '@beyond/ui/link/code';
import {BeyondImage} from '@beyond/ui/image/code';
import {IconLogo} from "./icon";
import {Pulse} from "./pulse";
import {SVGEventsManager} from "./animation-functions";
import {StrongTitle} from "./strong-tittle";
import {Hamburger} from './menu/hamburger';
import {Notice} from "./notice";



// import "@beyond/docs/header-animation/widget";
export function Header() {

    const container = React.useRef(null);
    React.useEffect(() => {
        const svgManager = new SVGEventsManager(container.current);
        svgManager.addEvents();
        return () => svgManager.removeEvents();
    }, [])

    return (
        <>
            <div>
                <Notice/>
            </div>

            <section className="top__header">
                <nav className="menu-container container flex-container flex-h-end">
                    <div className="mobile__header">
                        <BeyondImage src="/images/beyond-logo.png" alt="beyondjs"/>
                        <Hamburger/>
                    </div>
                    <div className="menu-list__container">
                        <ul className="header__menu">
                            <li><Link href="/docs/tutorial/web">Tutorial</Link></li>
                            <li><Link href="/docs/intro">Documentation</Link></li>
                            <li><Link href="/examples">Examples</Link></li>
                        </ul>
                    </div>
                </nav>
            </section>
            <header className="home__header" ref={container}>
                {/*<header-animation/>*/}
                <div className="container flex-container flex-center">

                    <div className="header__content">
                        {/*<BeyondImage className="hidden-mobile" src="/images/beyond-logo.png" alt="beyondjs"/>*/}
                        <h1>

                            <span>El Meta-Framework</span><br/>
                            <span>para trabajar con</span>
                            <StrongTitle/>
                        </h1>
                        <span className="p2">
                            Integra diferentes stacks de desarrollo y trabaja con ellos bajo el mismo paradigma, priorizando
                            la experiencia de desarrollo y la carga modular, sin necesidad de empaquetadores.
                            {/*BeyondJS permite integrar y mezclar en un mismo proyecto las herramientas y frameworks de vista*/}
                            {/*que prefieras, priorizando la experiencia de desarrollo y la carga modular sin necesidad de empaquetadores.*/}
                        </span>
                    </div>
                    <IconLogo/>
                </div>
                <Pulse/>
            </header>
        </>

    )
}
