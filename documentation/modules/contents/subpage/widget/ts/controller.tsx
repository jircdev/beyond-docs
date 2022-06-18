import {PageReactWidgetController} from '@beyond-js/react-widgets/controllers/ts';
import {beyond__styles} from '@beyond/docs/layout/styles/code';
import {IWidgetStore} from "@beyond-js/kernel/core/ts";
import {Contents} from "./contents";
import {Page} from './views/page';

export /*bundle*/
class Controller extends PageReactWidgetController {
    createStore(): IWidgetStore {
        //Todo: @julio @felix question  new Contents(this.body)
        const contents: IWidgetStore = new Contents(this.body);
        return contents;
    }

    get Widget() {
        return Page;
    }
}
