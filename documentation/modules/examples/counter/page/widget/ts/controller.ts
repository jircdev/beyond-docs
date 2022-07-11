import {PageReactWidgetController} from '@beyond-js/react-widgets';
import {Page} from "./views/page";

export /*bundle*/
class Controller extends PageReactWidgetController {
    get Widget() {
        return Page;
    }
}
