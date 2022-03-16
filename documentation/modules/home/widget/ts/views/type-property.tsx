import * as React from 'react';

interface IProps {
    children?: JSX.Element
    type: string,
    optional?: boolean
}

export function TypeProperty({type, optional}) {
    return (
        <span className="type__property">
            {`<${type}>]`}
            {
                optional &&
                <span className="type__optional">{"[optional]"}</span>
            }
        </span>
    )
}
