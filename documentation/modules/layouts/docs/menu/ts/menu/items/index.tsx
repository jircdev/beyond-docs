import * as React from 'react';
import {useMenuContext} from "../context";
import {routing} from "@beyond-js/kernel/routing/ts";
import {AppIcon} from "@beyond/docs/ui/icons/code";

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
    const output = items.map((item, i) => <MenuItem item={item} key={`${item.id}.${i}`}/>);
    const cls = `docs__menu__sublist${className ? ` ${className}` : ''}`;
    return (
        <ul className={cls}>
            {output}
        </ul>
    );
}

export function ParentItem({item}) {
    const {texts} = useMenuContext();
    const onClick = (event) => {
        event.preventDefault();
        event.currentTarget.closest('li').classList.toggle('item--opened');
    }

    return (
        <li className="menu__item--parent">
            <section onClick={onClick}>
                <a href=""><span>{texts[item.id]}</span></a>
                <AppIcon icon="chevronRight"/>
            </section>
            <List items={item.children} level={1}/>
        </li>
    )
}


export function MenuItem({item}) {
    const {container, close, texts} = useMenuContext();
    if (item.children) return <ParentItem item={item}/>;

    const onClick = event => {
        event.preventDefault();
        const container = event.currentTarget.closest('aside');
        const target = event.currentTarget.closest('li');
        const currentActive = container.querySelector('.active-item')
        if (currentActive) currentActive.classList.remove('active-item');
        target.classList.add('active-item');

        routing.pushState(`/docs/${item.id}`);
        close();
    }

    const cls = ``;
    const link = `/docs/${item.id}`;
    return (
        <li className={cls}>
            <a href={link} onClick={onClick}>
                {texts[link]}
            </a>
        </li>
    )
}
