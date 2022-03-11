import * as Sequelize from 'sequelize';
import {DataTypes, Model, Optional} from 'sequelize';

export interface contentsAttributes {
  id: number;
  title?: string;
  content?: string;
  url?: string;
  parent?: number;
}

export type contentsPk = "id";
export type contentsId = contents[contentsPk];
export type contentsOptionalAttributes = "title" | "content" | "url" | "parent";
export type contentsCreationAttributes = Optional<contentsAttributes, contentsOptionalAttributes>;

export class contents extends Model<contentsAttributes, contentsCreationAttributes> implements contentsAttributes {
  id!: number;
  title?: string;
  content?: string;
  url?: string;
  parent?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof contents {
    return contents.init({
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      url: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      parent: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'contents',
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            {name: "id"},
          ]
        },
      ]
    });
  }
}
