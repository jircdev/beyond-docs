import * as React from 'react';
import {Link} from '@beyond/ui/link';

interface IProps {
    children?: JSX.Element | string,
    type: string,
    optional?: boolean
    href?: string | boolean
}

export /*bundle*/ function TypeProperty({children, type, href = false, optional = false}: IProps) {
    const output = href ? <Link href={href}>{`${type}`} </Link> : `${type} `;
    return (
        <>
            {children && <strong>{children}</strong>} <span className="type__property">{output}</span>
            {optional && <span className="type__optional">{` optional`} </span>}:
        </>

    )
}
export /*bundle*/ function ObjectProperty({children, type, href = undefined, optional = undefined}) {
    return (
        <>
            <strong>{children}</strong> <TypeProperty optional type={type} href={href}/>
        </>
    )
}
