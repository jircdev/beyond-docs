import {VueWidgetController} from '@beyond-js/kernel/vue-widget/ts';
import Widget from "./widget.vue";

export /*bundle*/
class Controller extends VueWidgetController {
    get Widget() {
        return Widget;
    }
}
