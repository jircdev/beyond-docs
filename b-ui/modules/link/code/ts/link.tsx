import * as React from 'react';
import {routing} from "@beyond-js/kernel/routing/ts";

interface Iprops {
    href: "string",
    children?: JSX.Element,
}

interface IAttrs {
    onClick?: () => void;

}
export /*bundle*/
function Link(props) {

    const {href, external} = props;
    const onClick = event => {
        event.preventDefault();
        routing.pushState(props.href);
    };


    return (
        <a onClick={onClick} {...props}>
            {props.children}
        </a>
    )

}
