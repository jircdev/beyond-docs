import {PageReactWidgetController} from '@beyond-js/kernel/react-widget/ts';
import {beyond__styles} from '@beyond/docs/layout/styles/code';
import {IWidgetStore} from "@beyond-js/kernel/core/ts";
import {Contents} from "./contents";
import {Page} from './views/page';

export /*bundle*/
class Controller extends PageReactWidgetController {
    createStore(): IWidgetStore {
        console.log(1, window.performance.now() / 1000);
        return new Contents(this.body);
    }

    get Widget() {
        return Page;
    }
}
