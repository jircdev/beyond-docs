import {Events, IWidgetStore} from "@beyond-js/kernel/core";
import {CurrentTexts} from '@beyond-js/kernel/texts';

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
        this.#texts = new CurrentTexts(module.specifier, true);

        this.#texts.bind('change', this.triggerChange);
    }

    triggerChange = () => {
        this.trigger('change');
    }

    async fetch() {

    }


    hydrate(cached: IContent[]) {

    }

    toJSON() {

    }
}
