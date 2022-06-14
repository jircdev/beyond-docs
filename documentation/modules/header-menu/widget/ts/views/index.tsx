import * as React from 'react';
import {BeyondImage} from "@beyond/ui/image/code";
import {Hamburger} from "./hamburger";
import {ThemeToggleButton} from "@beyond/docs/components/theme-button/code";
import {Link} from "@beyond/ui/link/code";
import {LanguageAction} from "./language-action";
import {useBinder, useTexts} from "@beyond/docs/store/code";
import {Notice} from "./notice";
import {module} from "beyond_context";
import {HamburgerMenu} from "./hamburger-menu";


export function TopHeader({attributes, widget, store}) {
    const [ready, texts] = useTexts(module.resource);
    if (!ready) return null;

    return (
        <>
            <Notice texts={texts}/>
            <section className="top__header">
                <nav className="menu-container container flex-container flex-h-end">
                    <div className="mobile__header">
                        <HamburgerMenu/>
                        <Link href="/"><BeyondImage src="/images/beyond-logo.png" alt="beyondjs"/></Link>
                        <Hamburger/>
                    </div>
                    <div className="menu-list__container">
                        <ul className="header__menu">
                            <li><ThemeToggleButton/></li>
                            <li><LanguageAction/></li>
                            <li><Link href="/docs/tutorial/web">{texts.tutorial}</Link></li>
                            <li><Link href="/docs/intro">{texts.documentation}</Link></li>
                            <li><Link href="/examples">{texts.examples}</Link></li>
                        </ul>
                    </div>
                </nav>
            </section>
        </>
    );
}
