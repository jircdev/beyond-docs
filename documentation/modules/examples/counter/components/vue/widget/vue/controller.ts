import {VueWidgetController} from '@beyond-js/vue-widgets/controllers';
import Widget from "./widget.vue";

export /*bundle*/
class Controller extends VueWidgetController {
    get Widget() {
        return Widget;
    }
}
