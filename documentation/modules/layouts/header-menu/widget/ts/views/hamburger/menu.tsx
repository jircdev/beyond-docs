import * as React from "react";
import { widgets } from "@beyond-js/widgets/render";

export function HamburgerMenu() {
    const showMenu = (event) => {
        event.preventDefault();
        const menu = [...widgets.instances].find((item) => item.localName === "menu-layout");
        console.log(12, menu.getAttribute("opened"));
        const option = menu.getAttribute("opened") === "true" ? "false" : "true";
        menu.setAttribute("opened", option);
    };

    return (
        <button className="hamburger-icon-container" onClick={showMenu}>
            <input id="hamburger__input" type="checkbox" className="hamburger-icon" />
            <label htmlFor="hamburger__input">
                <i />
                <span />
            </label>
            <em />
        </button>
    );
}
