import {Events, IWidgetStore} from "@beyond-js/kernel/core/ts";
import {CurrentTexts} from '@beyond-js/kernel/texts/ts';

import {module} from "beyond_context";

interface IContent {
    id: string;
    name: string;
    content: string;
}

export class Store extends Events implements IWidgetStore {

    #loading = false;
    get loading() {
        return this.#loading;
    }

    #value: IContent[] = [];
    get value() {
        return this.#value;
    }

    #hydrated = false;
    get hydrated() {
        return this.#hydrated;
    }

    #container: any;
    get container() {
        return this.#container;
    }

    get ready() {
        return this.#texts.ready;
    }

    #texts;
    get texts() {
        return this.#texts.value;
    }

    constructor(container) {
        super();
        this.#container = container;
        this.#texts = new CurrentTexts(module.resource, true);
        console.log(10, this.#texts, this.#texts.ready);
        this.#texts.bind('change', this.triggerChange);
    }

    triggerChange = () => {
        console.log(1, this.#texts.ready)
        this.trigger('change');
    }

    async fetch() {

    }


    hydrate(cached: IContent[]) {

    }

    toJSON() {

    }
}
