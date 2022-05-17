import * as React from 'react';
import {Link} from '@beyond/ui/link/code';

const Item = ({label, href}) => {
    return <li><Link href={href}>{label}</Link></li>
}

export /*bundle*/ function NextLinks({items}) {
    const output = items.map(([label, href], i) => <Item key={`${label}.${i}`} href={href} label={label}/>);
    // items
    return (
        <div className="next__content link__content">
            <ul>
                {output}
            </ul>
        </div>
    )
}
