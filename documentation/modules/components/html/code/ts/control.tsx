import * as React from 'react';


export /*bundle*/ function CHtml({children}) {
    return <span dangerouslySetInnerHTML={{__html: children}}/>
}

export /*bundle*/ function List({children}) {
    return (
        <ul>
            {children.map((item, index) => <li key={index} dangerouslySetInnerHTML={{__html: item}}/>)}
        </ul>
    )
}
