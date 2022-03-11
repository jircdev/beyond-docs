import * as React from "react";


interface IMenuItem {
    id: string;
    label: string;
    children?: Object[];
    link?: String;
}

interface IProps {
    items: IMenuItem[];
    className?: string;

}

export function List({items, className}: IProps) {
    const {MenuItem} = require('./items/index');
    const output = items.map(item => <MenuItem item={item} key={item.id}/>);
    const cls = `docs-menu${className ? ` ${className}` : ''}`;
    return (
        <ul className={cls}>
            {output}
        </ul>
    );
}
