import {PageReactWidgetController} from '@beyond-js/kernel/react-widget/ts';
import {Widget} from "./views/code";

export /*bundle*/
class Controller extends PageReactWidgetController {
    get Widget() {
        return Widget;
    }
}