import * as React from 'react';
import {TypeProperty} from "./type-property";

export function ObjectProperty({children, type, href = undefined, optional = undefined}) {
    return (
        <>
            <strong>{children}</strong> <TypeProperty optional type={type} href={href}/>
        </>
    )
}
