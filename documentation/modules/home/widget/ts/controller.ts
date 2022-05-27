import {PageReactWidgetController} from '@beyond-js/react-widgets/controllers/ts';
import {beyond__styles} from '@beyond/docs/layout/styles/code';
import {IWidgetStore} from "@beyond-js/kernel/core/ts";
import {Page} from './views/page';
import {Store} from "./store";

export /*bundle*/
class Controller extends PageReactWidgetController {
    createStore(): IWidgetStore {
        return new Store(this.body);
    }

    get Widget() {
        return Page;
    }
}
