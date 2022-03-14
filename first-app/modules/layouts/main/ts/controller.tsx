import {ReactWidgetController} from '@beyond-js/kernel/react-widget/ts';
import {Layout} from "./layout";

export /*bundle*/
class Controller extends ReactWidgetController {

    get Widget() {
        return Layout;
    }
}
