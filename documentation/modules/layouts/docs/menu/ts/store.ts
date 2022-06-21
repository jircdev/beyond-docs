import {ReactiveModel} from "@beyond/ui/reactive-model/ts";
import {CurrentTexts} from "@beyond-js/kernel/texts/ts";

import {module} from "beyond_context";
import {IWidgetStore} from '@beyond-js/kernel/core/ts';

export class MenuStore extends ReactiveModel implements IWidgetStore{

    constructor() {
        super();
        // this.#texts = new CurrentTexts(module.resource);
        // this.#texts.on('change', this.#listen);
    }

}

