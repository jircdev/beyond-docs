import {PageReactWidgetController} from '@beyond-js/kernel/react-widget/ts';
import {Page} from "./views/page";

export /*bundle*/
class Controller extends PageReactWidgetController {
    get Widget() {
        return Page;
    }
}