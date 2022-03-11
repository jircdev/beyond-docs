// import tables from "./tables.json";
import {contents} from "./tables/contents";
import {DataModel} from '@beyond/docs/database/connector/ts';


export /*bundle*/
class Contents extends DataModel {

    constructor() {
        super(contents, 'contents');
    }

    // async #init() {
    //     if (this.#ready) return true;
    //     if (this.#promise) return this.#promise;
    //
    //     this.#promise = Manager.get('beyond_docs');
    //     const db = await this.#promise;
    //     contents.initModel(db.sequelize);
    //     this.#ready = true;
    // }


}


