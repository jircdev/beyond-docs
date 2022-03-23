import * as React from 'react';
import {Link} from '@beyond/ui/link/code';

interface IProps {
    children?: JSX.Element
    type: string,
    optional?: boolean
    href?: string
}

export function TypeProperty({type, href = false, optional = false}) {

    const output = href ? <Link href={href}>{`<${type}>`} </Link> : `<${type}> `;
    return (
        <span className="type__property">

            {output}
            {
                optional &&
                <span className="type__optional">{"[optional] "} </span>
            }
        </span>
    )
}
