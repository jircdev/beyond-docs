import * as React from 'react';
import {Link} from '@beyond/ui/link/code';
import {useTexts} from "@beyond/docs/store/code";

const Item = ({href, texts}) => {
    return <li><Link href={href}>{texts[href]}</Link></li>
}

export /*bundle*/ function NextLinks({items}) {

    const [ready, texts] = useTexts('@beyond/docs/layout/menu');
    if (!ready) return null;
    const output = items.map((href, i) => <Item texts={texts} key={`${href}.${i}`} href={href}/>);
    // items
    return (
        <div className="next__content link__content">
            <ul>
                {output}
            </ul>
        </div>
    )
}
