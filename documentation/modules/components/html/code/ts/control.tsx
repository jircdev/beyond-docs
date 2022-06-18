import * as React from 'react';
import {Link} from "@beyond/ui/link/code";
import { Render } from './render';
import { Elink, Link } from "@beyond/ui/link/code";
export /*bundle*/ function CHtml({content, children}) {
    const data = children ?? content;
    return <span dangerouslySetInnerHTML={{__html: data}}/>
}
export /*bundle*/ function Paragraph({content, children}) {
    const data = children ?? content;

    return <p dangerouslySetInnerHTML={{__html: data}}/>
}

export /*bundle*/ function Title({content, selector, children}) {
    const data = children ?? content;
    const Control = ['h2','h3','h4'].includes(selector) ? selector : 'h1';
    return <Control dangerouslySetInnerHTML={{__html: data}}/>
}
export /*bundle*/ function List({content, children}) {
    
    return (
        <ul>
            {content.map((item, index) => {
                console.log(12, typeof item, item)
                if (Array.isArray(item)) {
                    const [label, href] = item;
                    return <li key={`${label}.${index}`}><Link href={href}>{label}</Link></li>
                }
                if(typeof item === 'object') {
                    return <li key={index}>{item}</li>
                }
                return <li key={index} dangerouslySetInnerHTML={{__html: item}}/>
            })}

            {children}
            
        </ul>
    )
}

export function DocLinks({item: [href, label], external}) {
    const Control = external ? Elink : Link;
    return <Control href={href}>{label}</Control>
}

export function BlockQuote({children}) {
    return(
        <div className="block__note">{children}</div>
    )
}
