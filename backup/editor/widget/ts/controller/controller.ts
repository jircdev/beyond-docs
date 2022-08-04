import {PageReactWidgetController} from '@beyond-js/react-widgets/page';
import {BridgeModel} from '@beyond/docs/models/contents';

export /*bundle*/
class Controller extends PageReactWidgetController {

    constructor(props) {
        super(props);
        const model = new BridgeModel();
    }

    async fetch() {
    }
}
