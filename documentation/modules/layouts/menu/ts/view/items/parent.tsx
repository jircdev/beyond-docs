import * as React from "react";
import {AppIcon} from "@beyond/docs/ui/icons/code";
import {ListB} from "../listB";

export function _ParentItem({item}) {
    const onClick = (event) => {
        event.preventDefault();
        event.currentTarget.closest('li').classList.toggle('item--opened');
    }
    return (
        <li>
            <section onClick={onClick}>
                <AppIcon icon="chevronRight"/> <span>{item.label}</span>
            </section>
            <ListB items={item.children}/>
        </li>
    )
}
