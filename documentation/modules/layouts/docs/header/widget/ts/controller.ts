import {ReactWidgetController} from '@beyond-js/react-widgets/controllers/ts';
import {Events, IWidgetStore} from "@beyond-js/kernel/core/ts";
import {Widget} from './view/widget';

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

    get Widget() {
        return Widget;
    }

    async fetch() {
    }

    createStore(): IWidgetStore {
        return new Store();
    }
}
