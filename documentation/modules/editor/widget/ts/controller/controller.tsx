import {ReactWidgetController} from '@beyond-js/kernel/react-widget/ts';
import {BridgeModel} from '@beyond/docs/models/contents/bridge';

export /*bundle*/
class Controller extends ReactWidgetController {


    constructor(props) {
        super(props);
        const model = new BridgeModel();
    }

    async fetch() {
    }


}
