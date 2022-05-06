import * as React from "react";
import {Switch} from "./switch";
import {AppIcon} from "@beyond/docs/ui/icons/code";
import {Link} from "@beyond/ui/link/code";
import {beyond__styles} from '@beyond/docs/layout/styles/code';
import {Hamburger} from "./hamburger";
import {Notice} from "./notice";

export /*bundle*/
function Widget() {

    return (
        <>
            <Notice/>
            <header className="docs-header">
                <div className="container flex-container space-between ph-15">
                    <Hamburger/>
                    <section className="header-logo">
                        <div className="flex-center-y right-col">
                            <Link href="/">
                                <img src="/images/beyond-logo.png"
                                     className="img-logo"
                                     alt="Beyond the universal meta framework"/>
                            </Link>
                        </div>
                    </section>
                    <div className="flex-center-y right-content">
                        <span className="version">1.0.0</span>
                        <Switch/>
                        <a
                            className="docs-header__link-icon"
                            target="_blank" href="http://github.com">
                            <AppIcon icon="github"/>
                        </a>
                    </div>
                </div>
            </header>
        </>

    );

}
