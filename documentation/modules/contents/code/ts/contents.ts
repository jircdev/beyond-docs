import {Events, IWidgetStore} from "@beyond-js/kernel/core";

interface IContent {
    id: number;
    name: string;
    content?: string;
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

    readonly #container: any;
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
        await new Promise(resolve => setTimeout(resolve, 4000));

        this.#value.push({id: 1, name: 'Pepsi'});
        this.#value.push({id: 2, name: 'Coca Cola'});

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
