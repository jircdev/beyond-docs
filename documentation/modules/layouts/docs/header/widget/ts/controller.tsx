import {ReactWidgetController} from '@beyond-js/kernel/react-widget/ts';
import {Events, IWidgetStore} from "@beyond-js/kernel/core/ts";

class Store extends Events implements IWidgetStore {
    async fetch() {
        //code
    }

    #value: {};
    get value() {
        return this.#value;
    }

    toJSON(): object {
        return this.#value;
    }

    hydrate(cached: object) {
    }

}

export /*bundle*/
class Controller extends ReactWidgetController {
    async fetch() {
    }


    createStore(): IWidgetStore {
        return new Store();
    }
}
