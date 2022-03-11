import * as React from "react";
import {AppManager} from '@beyond/docs/manager/code';

export function Hamburger({onClick}) {
    const showMenu = event => {
        event.preventDefault();
        AppManager.menuOpened = !AppManager.menuOpened;
        console.log(1, AppManager.menuOpened);
    }

    return (
        <button className="hamburger-icon-container" onClick={showMenu}>
            <input
                id="hamburger__input"
                type="checkbox" className="hamburger-icon"/>
            <label htmlFor="hamburger__input">
                <i/>
                <span/></label>
            <em/>
        </button>
    )
}
