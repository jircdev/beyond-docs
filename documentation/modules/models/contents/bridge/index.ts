import {Config, Manager} from '@beyond/docs/database/connector/ts';
import {Contents} from "@beyond/docs/database/models/ts";

export  /*actions*//*bundle*/
class BridgeModel {
    config = Config();
    #connection = "beyond_docs"

    async get() {
        const contents = Manager.getModel({name: 'contents', model: Contents, db: this.#connection});
        return 'get'
    };

    list() {
        return 'list';
    }
}