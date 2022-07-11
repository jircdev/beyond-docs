import * as React from 'react';
import {Card} from "../card";
import {Elink} from "@beyond/ui/link";
import {useHomeContext} from "../context";
import {CHtml} from "@beyond/docs/components/html";

export function Solution() {
    const {texts: {solution: {universalTs, jamStack, frameworks}}} = useHomeContext();
    return (
        <div className="container page-section cards__container no-mv">
            <Card title={universalTs.title} img="universal-ts" href="/docs/intro">
                <CHtml>{universalTs.description.one}</CHtml> <Elink
                href="https://cordova.apache.org/">{universalTs.description.cordova}</Elink>, <Elink
                href="https://docs.npmjs.com/packages-and-modules">{universalTs.description.npm}</Elink>
                {universalTs.description.two} <Elink href="https://nodejs.org">{universalTs.description.node}</Elink>.
            </Card>
            <Card title={jamStack.title}
                  img="isomorphic"
                  href="/docs/widgets/rendering">
                <CHtml>{jamStack.one}</CHtml>
                <Elink href="https://jamstack.org/">{jamStack.jamStack}</Elink>
                {jamStack.two}<Elink href="https://micro-frontends.org/">{jamStack.microfrontends}</Elink>.


            </Card>
            <Card
                title={frameworks.title}
                img="framework-views"
                href="/docs/widgets">
                {frameworks.start}
                <Elink href="https://reactjs.org">React</Elink>,&nbsp;
                <Elink href="https://vuejs.org/">Vue</Elink> <Elink
                href="https://svelte.dev/">Svelte</Elink>.
                {frameworks.end}
            </Card>
        </div>
    )
}
