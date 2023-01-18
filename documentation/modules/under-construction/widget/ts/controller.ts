import { ReactWidgetController } from "@beyond-js/react-widgets/base";
import { View } from "./views";

export /*bundle*/
class Controller extends ReactWidgetController {
    get Widget() {
        return View;
    }
}
