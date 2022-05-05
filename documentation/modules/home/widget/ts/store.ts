import {Events, IWidgetStore} from "@beyond-js/kernel/core/ts";

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

    constructor(container) {
        super();
        this.#container = container;
    }

    async fetch() {

    }

    hydrate(cached: IContent[]) {

    }

    toJSON() {

    }
}
