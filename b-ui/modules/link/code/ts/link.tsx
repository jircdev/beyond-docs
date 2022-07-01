import * as React from 'react';
import {routing} from "@beyond-js/kernel/routing";

interface Iprops {
    href: "string",
    children?: JSX.Element,
}

interface IAttrs {
    onClick?: () => void;

}

export /*bundle*/
function Link(props) {
    const onClick = event => {
        event.preventDefault();
        routing.pushState(props.href);
    };
    return (
        <a onClick={onClick} {...props}>
            {props.children}
        </a>
    );
}

export /*bundle*/
function Elink(props) {
    const {href} = props;
    return (
        <a href={href} target="_blank" {...props} data-algo="algo">
            {props.children}
        </a>
    );
}
