import * as React from "react";
import {Menu} from "../data";
import {List} from "./list";
import {IValue, MenuContext} from "./context";
import {AppManager} from '@beyond/docs/manager/code';
import {useBinder} from "@beyond/docs/store/code";
import {BeyondIconButton} from "@beyond/ui/icons/code";
import {BeyondImage} from '@beyond/ui/image/code';
import {useTexts} from "@beyond/docs/store/code";
import {module} from "beyond_context";
import {Loading} from "@beyond/docs/components/html/code";

interface IState {
    selected: string;
}

export /*bundle*/
function WidgetMenu() {
    const [selected, setSelected] = React.useState<IState>();
    const [ready, texts] = useTexts(module.resource);
    const parent = React.useRef(null)
    const openedLocal = (typeof window !== undefined)
        ? window?.localStorage.getItem('__menu_opened')
        : true;
    const [opened] = React.useState([true, 'true'].includes(openedLocal));

    useBinder([AppManager], () => parent.current.classList.toggle('docs__menu--opened'));
    const closeMenu = () => {
        const isOpened = parent.current.classList.contains('docs__menu--opened');
        parent.current.classList.toggle('docs__menu--opened');
        window.localStorage.setItem('__menu_opened', `${!isOpened}`);
    }
    const close = event => {
        event.preventDefault();
        closeMenu();
    }
    const cls = `docs__menu${opened ? ` docs__menu--opened` : ''}`;

    if (!ready) return <Loading/>;

    return (
        <MenuContext.Provider value={{
            ready,
            texts,
            close: closeMenu
        }}>
            <aside ref={parent} className={cls}>
                <div className="menu-mobile-container">
                    <header className="aside__header">
                        <div>
                            <BeyondImage src="/images/beyond-logo.png"
                                         className="img-logo mobile-only"
                                         alt="Beyond the universal meta framework"/>
                            <h4>Contents</h4>
                        </div>
                        <BeyondIconButton onClick={close} className="docs__menu__list__btn-close" icon="close"/>
                    </header>
                    <List items={Menu}/>
                </div>
            </aside>
        </MenuContext.Provider>

    );
}
