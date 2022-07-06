import {ReactiveModel} from "@beyond/ui/reactive-model";
import {CurrentTexts} from "@beyond-js/kernel/texts";

import {module} from "beyond_context";
import {IWidgetStore} from '@beyond-js/kernel/core';

export class MenuStore extends ReactiveModel implements IWidgetStore{

    constructor() {
        super();
        // this.#texts = new CurrentTexts(module.resource);
        // this.#texts.on('change', this.#listen);
    }

}

