import * as React from 'react';
import {BeyondImage} from "@beyond/ui/image/code";
import {Hamburger} from "./hamburger";
import {ThemeToggleButton} from "@beyond/docs/components/theme-button/code";
import {Link} from "@beyond/ui/link/code";
import {LanguageAction} from "./language-action";
import {useBinder} from "@beyond/docs/store/code";

export function TopHeader({attributes, component, store}) {

    const [ready, setReady] = React.useState();
    const [data, setTexts] = React.useState(store.texts);
    useBinder([store], () => {
        setReady(store.ready);
        setTexts(store.texts);
    });
    if (!ready) return null;
    const {texts} = store;
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
                        <li><LanguageAction/></li>
                        <li><Link href="/docs/tutorial/web">{texts.tutorial}</Link></li>
                        <li><Link href="/docs/intro">{texts.documentation}</Link></li>
                        <li><Link href="/examples">{texts.examples}</Link></li>
                    </ul>
                </div>
            </nav>
        </section>
    );
}
