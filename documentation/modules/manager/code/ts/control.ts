import {Events} from "@beyond-js/kernel/core/ts";

export class Manager extends Events {

    /**
     * The menu is closed by default.
     * @private
     */
    #menuOpened = false;
    get menuOpened() {
        return this.#menuOpened;
    }

    set menuOpened(value: boolean) {
        if (this.#menuOpened === value) return;
        this.#menuOpened = value;
        this.trigger('change');
    }

}

export /*bundle*/ const AppManager = new Manager();
