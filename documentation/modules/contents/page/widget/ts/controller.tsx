import {PageReactWidgetController} from '@beyond-js/react-widgets/controllers';
import {IWidgetStore} from "@beyond-js/kernel/core";
import {Contents} from "./contents";
import {Page} from './views/page';

export /*bundle*/
class Controller extends PageReactWidgetController {
    createStore(): IWidgetStore {
        return new Contents(this.body);
    }

    get Widget() {
        return Page;
    }
}
