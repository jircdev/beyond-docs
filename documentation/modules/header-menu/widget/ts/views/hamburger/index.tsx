import * as React from "react";


export function Hamburger() {
    const showMenu = event => {
        event.preventDefault();
        const target = event.currentTarget;
        const menu = target.closest('.top__header').querySelector('.header__menu');
        target.closest('.top__header').querySelector('.menu-list__container').classList.toggle('opened');
        menu.classList.toggle('opened');
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
