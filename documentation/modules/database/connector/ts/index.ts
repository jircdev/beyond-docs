import {Config} from "./config";
import {Connector} from "./connector";
import {Database} from "./database";

class ConnectionsManager {

    #instances = new Map();
    #config;
    #environment = 'development';

    constructor() {
        this.#config = Config(this.#environment);
    }

    /**
     * Instances the database model
     *
     * Each database connection has a database model
     * @param connection
     */
    async init(connection: string) {
        const database = new Database(this.#config)
        await database.start();
        this.#instances.set(connection, database);
        return database;
    }

    /**
     * Returns the database object instance
     * @param connection
     */
    async get(connection: string) {
        try {

            if (this.#instances.has(connection)) return this.#instances.get(connection);
            const instance = this.init(connection)
            this.#instances.set(connection, instance)
            return instance;
        } catch (e) {
            console.error(101, e);
        }

    }

    async getModel({db, name, model}) {
        const database = await this.get(db);
        return database.getModel(name, model);
    }

}


export /*bundle*/ const Manager = new ConnectionsManager();
