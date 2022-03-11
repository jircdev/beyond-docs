import {Config, Manager} from '@beyond/docs/database/connector/ts';
import {init} from '@beyond/docs/database/models/ts'
import {Contents} from "@beyond/docs/database/models/ts";

export  /*actions*//*bundle*/
class BridgeModel {
    config = new Config();
    #connection = "beyond_docs"

    constructor() {

    }

    async get() {
        const contents = Manager.getModel({name: 'contents', model: Contents, db: this.#connection});
        return 'get'
    };

    list() {
        return 'list';
    }
}
