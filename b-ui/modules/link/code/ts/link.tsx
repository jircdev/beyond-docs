import * as React from 'react';

interface Iprops {
    href: "string",
    children?: JSX.Element,
}

export /*bundle*/
function Link(props) {

    const onClick = event => {
        event.preventDefault();
        window?.beyond.pushState(props.href);
    };
    return (
        <a onClick={onClick} {...props}>
            {props.children}
        </a>
    )

}
