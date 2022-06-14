import * as React from 'react';
import {Link} from "@beyond/ui/link/code";

export /*bundle*/ function CHtml({value, children}) {
    const data = children ?? value;
    return <span dangerouslySetInnerHTML={{__html: data}}/>
}

export /*bundle*/ function List({items}) {
    return (
        <ul>
            {items.map((item, index) => {
                if (Array.isArray(item)) {
                    const [label, href] = item;
                    return <li key={`${label}.${index}`}><Link href={href}>{label}</Link></li>
                }
                return <li key={index} dangerouslySetInnerHTML={{__html: item}}/>
            })}
        </ul>
    )
}
