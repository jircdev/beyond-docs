import * as React from 'react';

export function Link(props) {
    const onClick = event => {
        event.preventDefault();
    }
    const {children} = props;

    return (
        <a href="#">{children}</a>
    )
}
