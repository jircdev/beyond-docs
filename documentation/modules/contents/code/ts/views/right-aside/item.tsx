import * as React from "react";
import { Link } from "@beyond/ui/link";

interface ISpecs {
    shadowRoot: ShadowRoot;
    item: any;
    active?: boolean;
}
export function RightAsideItem({ item, shadowRoot, active }: ISpecs) {
    const onClick = (event) => {
        event.preventDefault();
        const target = shadowRoot.getElementById(item.id);
        if (!target) {
            return;
        }
        const body = document.querySelector("body");

        body.scroll({
            top: target.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };
    const attrs: any = {};
    if (active) attrs.className = "item--active";

    return (
        <li onClick={onClick} {...attrs} data-id={item.id}>
            <Link href={`#${item.id}`}>{item.innerText}</Link>
        </li>
    );
}
