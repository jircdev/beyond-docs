import {Connector} from "./connector";
import {DataModel} from "./datamodel";

export /*bundle*/
class Database {

    #connection;

    get sequelize() {
        return this.#connection?.sequelize;
    }

    constructor(config) {
        this.#connection = new Connector(config)
    }

    start() {
        return this.#connection.start();
    }

}
