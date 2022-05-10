import {Events, IWidgetStore} from "@beyond-js/kernel/core/ts";

interface IContent {
    id: string;
    name: string;
    content: string;
}

export class Contents extends Events implements IWidgetStore {

    #loading = false;
    get loading() {
        return this.#loading;
    }

    #loaded = false;
    get loaded() {
        return this.#loaded;
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
        this.#loading = true;
        this.trigger('change');
        this.#loading = false;
        this.#loaded = true;
        this.trigger('change');
    }

    hydrate(cached: IContent[]) {

        this.#loading = false;
        this.#loaded = true;
        cached.forEach(company => this.#value.push(company));
        this.#hydrated = true;
    }

    toJSON() {
        return this.#value;
    }
}
