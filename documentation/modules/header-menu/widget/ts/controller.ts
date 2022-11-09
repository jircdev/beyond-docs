import {ReactWidgetController} from '@beyond-js/react-widgets/base';



import {TopHeader} from "./views";
import {IWidgetStore} from "@beyond-js/kernel/core";
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
