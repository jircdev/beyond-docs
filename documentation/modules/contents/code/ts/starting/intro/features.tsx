import * as React from 'react';
import {Quiz} from "../../quiz";
import {useDocsContext} from "../../context";
import {List} from '@beyond/docs/components/html/code';

export function Features() {
    const {texts: {intro: {features: {title, p1, items}}}} = useDocsContext();


    return (
        <>
            <h2 id="features">{title}</h2>
            <p> {p1}
            </p>
            <List items={items}/>
        </>
    )
}
