import * as React from 'react';
import {BeyondImage} from "@beyond/ui/image/code";
import {Hamburger} from "./menu/hamburger";
import {ThemeToggleButton} from "@beyond/docs/components/theme-button/code";
import {Link} from "@beyond/ui/link/code";

export function TopHeader() {
    return (
        <section className="top__header">
            <nav className="menu-container container flex-container flex-h-end">
                <div className="mobile__header">
                    <BeyondImage src="/images/beyond-logo.png" alt="beyondjs"/>
                    <Hamburger/>
                </div>
                <div className="menu-list__container">
                    <ul className="header__menu">
                        <li><ThemeToggleButton/></li>
                        <li><Link href="/docs/tutorial/web">Tutorial</Link></li>
                        <li><Link href="/docs/intro">Documentation</Link></li>
                        <li><Link href="/examples">Examples</Link></li>
                    </ul>
                </div>
            </nav>
        </section>
    );
}
