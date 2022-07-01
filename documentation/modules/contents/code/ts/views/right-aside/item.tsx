import * as React from 'react';
import {Link} from "@beyond/ui/link";

export function RightAsideItem({item, container}) {
    const onClick = event => {
        event.preventDefault();
        const target = container.getElementById(item.id);

        if (!target) {
            console.log('no se consigue...', item.id);
            return;
        }
        const body = document.querySelector('body');

        body.scroll({
            top: target.offsetTop,
            left: 0,
            behavior: "smooth"
        });
    };
    return (
        <li onClick={onClick}
            key={item.innerText} data-id={item.id}>
            <Link href={`#${item.id}`}>{item.innerText}</Link>
        </li>
    )
}
