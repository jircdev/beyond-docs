import {Events, IWidgetStore} from "@beyond-js/kernel/core/ts";
import {CurrentTexts} from '@beyond-js/kernel/texts/ts';


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

    }

    #texts;
    get texts() {
        return this.#texts.value;
    }

    constructor(container) {
        super();
        this.#container = container;
        // this.#texts = new CurrentTexts(module.resource, true);
        // this.#texts.bind('change', this.triggerEvent);
    }

    async fetch() {

    }


    hydrate(cached: IContent[]) {

    }

    toJSON() {

    }
}
