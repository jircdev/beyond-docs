import * as React from 'react';

export function Image({attributes, element, children}) {
    return (
        <figure {...attributes}>
            <img src={element.src} alt="element.alt"/>
            {children}
        </figure>
    );
}
