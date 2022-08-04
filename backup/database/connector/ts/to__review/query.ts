import {Op} from "sequelize";

/*interface Exception {
    message: string
}*/

export class Query {

    #DEFAULT = {order: 'id', limit: 30, start: 0};
    get DEFAULT() {
        return this.#DEFAULT;
    }

    #OPERATORS = Object.freeze({
        0: 'eq',
        1: 'gt',
        2: 'gte',
        3: 'lt',
        4: 'lte',
        5: 'and',
        6: 'or',
        7: 'like'
    });
    get OPERATORS() {
        return this.#OPERATORS;
    }

    #connector;
    #model;

    constructor(connector, model) {
        this.#connector = connector;
        this.#model = model;
    }

    /**
     *
     * @param params
     */
    processFilters(params) {

        const model = this.#model;
        const operand = params.operand ? this.#OPERATORS[parseInt(params.operand)] : 'and';
        const additionalOperand = params.additionalOperand ? this.#OPERATORS[parseInt(params.additionalOperand)] : 'eq';

        const fields = {};
        for (const field in params) {
            if (params.hasOwnProperty(field) && model.rawAttributes.hasOwnProperty(field)) {
                const value = additionalOperand === 'like' ? `%${params[field]}%` : params[field];
                fields[field] = {[Op[additionalOperand]]: value};
            }
        }

        const filters = {};
        filters[Op[operand]] = fields;

        return filters;

    };


    processError(exc: any | string, target: string) {
        // logs.error(exc);
        return {
            status: false,
            error: {
                message: exc.message,
                target: target
            }
        }
    };

    async data(params, target: string) {
        try {
            const model = this.#model;
            const data = await model.findAll({where: {id: params.id}});
            const response = data.length ? data[0] : {};
            return {status: true, data: response}
        } catch (exc) {
            return this.processError(exc, target);
        }
    }
}


