import {Sequelize} from "sequelize";
import {Logs} from "./logs";

export /*bundle*/
class Connector {

    _models;
    get models() {
        return this._models;
    }

    _logs;
    get logs() {
        return this._logs;
    }


    #ready = false;
    get ready(): boolean {
        return this.#ready;
    }

    #config;
    #environment = 'development';
    #sequelize;

    get sequelize() {
        return this.#sequelize;
    }

    #logs;

    constructor(config) {
        this.#config = config;
        this.#logs = new Logs();
        this.start();
    }

    async start() {
        const logs = this.#logs;

        await logs.start();
        try {

            const config = this.#config;
            this.#sequelize = new Sequelize(config.database, config.user, config.password, {
                host: config.host,
                dialect: 'mysql',
                timezone: config.timezone,
                logging: msg => logs.call(msg)
            });
            this.#ready = true;
        } catch (e) {
            console.error(e);
        }

    }

}


