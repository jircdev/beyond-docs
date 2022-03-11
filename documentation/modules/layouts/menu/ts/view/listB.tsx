import * as React from "react";
import {MenuItem} from "./items/index";

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

export function ListB({items, className}: IProps) {
    const output = items.map(item => <MenuItem item={item} key={item.id}/>);
    const cls = `docs-menu${className ? ` ${className}` : ''}`;
    return (
        <ul className={cls}>
            {output}
        </ul>
    );
}
