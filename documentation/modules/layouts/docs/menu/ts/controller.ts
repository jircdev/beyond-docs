import {ReactWidgetController} from '@beyond-js/react-widgets/controllers/ts';
import {IWidgetStore} from '@beyond-js/kernel/core/ts';
import {beyond__styles} from "@beyond/docs/layout/styles/code";
import {WidgetMenu} from "./menu";

export /*bundle*/
class Controller extends ReactWidgetController {

    get Widget() {
        return WidgetMenu;
    }

    async fetch() {
    }

    createStore(): IWidgetStore {
        return undefined;
    }
}
