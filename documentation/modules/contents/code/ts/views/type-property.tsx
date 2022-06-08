import * as React from 'react';
import {Link} from '@beyond/ui/link/code';

interface IProps {
    children?: JSX.Element
    type: string,
    optional?: boolean
    href?: string | boolean
}

export function TypeProperty({children, type, href = false, optional = false}: IProps) {
    const output = href ? <Link href={href}>{`${type}`} </Link> : `${type} `;
    return (
        <>
            {children && <strong>{children}</strong>} <span className="type__property">{output}</span>
            {optional && <span className="type__optional">{"&nbsp;optional"} </span>}:
        </>

    )
}
