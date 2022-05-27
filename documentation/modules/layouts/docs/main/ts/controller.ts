import {ReactWidgetController} from '@beyond-js/react-widgets/controllers/ts';
import {Layout} from "./layout";

export /*bundle*/
class Controller extends ReactWidgetController {

    get Widget() {
        return Layout;
    }

    async fetch() {
    }
}
