import {ReactWidgetController} from '@beyond-js/react-widgets/controllers/ts';

import {TopHeader} from "./views";
import {IWidgetStore} from "@beyond-js/kernel/core/ts";
import {Store} from "./store";


export /*bundle*/
class Controller extends ReactWidgetController {

    get Widget() {
        return TopHeader;
    }

    createStore(): IWidgetStore {
        return new Store(this.body);
    }

}
