import type {Sequelize} from "sequelize";
import {contents as _contents} from "./contents";
import type {contentsAttributes, contentsCreationAttributes} from "./contents";

export {
    _contents as contents,
};

export type {
    contentsAttributes,
    contentsCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
    const contents = _contents.initModel(sequelize);


    return {
        contents: contents,
    };
}
