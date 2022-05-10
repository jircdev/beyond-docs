import {Manager} from "./index";
import {performance} from "perf_hooks";

export /*bundle*/
class DataModel {

    #query;
    get query() {
        return this.#query;
    }

    #ready;
    get ready() {
        return this.#ready;
    }

    #name;
    get name() {
        return this.#name;
    }

    #sequelize;
    #promise;

    #id;
    get id() {
        return this.#id;
    }

    #definition;

    get model() {
        return this.#sequelize.models[this.#name];
    }

    constructor(definition, name) {
        this.#id = performance.now();
        this.#name = name;
        this.#definition = definition;
        this.init();
        console.log(0.5, 'instance', this.id);
    }


    async init() {
        if (this.#ready) return true;
        if (this.#promise) return this.#promise;

        this.#promise = Manager.get('beyond_docs');

        const db = await this.#promise;
        this.#sequelize = db.sequelize;

        this.#definition.initModel(db.sequelize);
        this.#ready = true;
        this.#promise = undefined;

    }


    async data(params) {
        try {
            const model = this.model;
            return await model.findOne({where: {id: params.id}});

        } catch (exc) {
            console.log('error', exc);
        }
    }


}
