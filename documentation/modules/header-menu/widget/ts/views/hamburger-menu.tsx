import * as React from "react";
import {AppManager} from '@beyond/docs/manager/code';

export function HamburgerMenu() {
    const showMenu = event => {
        event.preventDefault();
        const menu = event.currentTarget.closest('.main-widget');
        console.log(0.1, menu)
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
