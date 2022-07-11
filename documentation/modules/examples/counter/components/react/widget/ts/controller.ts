import {PageReactWidgetController} from '@beyond-js/kernel/react-widget';
import {Widget} from "./views/widget";

export /*bundle*/
class Controller extends PageReactWidgetController {
    get Widget() {
        return Widget;
    }
}
