import { Model, DataTypes } from 'sequelize';
import { Parameter } from '../models/parameter'
import { Template } from '../models/template'

class Template2Parameter extends Model {
  public id!: number;
  public order!: number;

  public template!: Template;
  public parameter!: Parameter;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

const fields = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  order: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
}

const associate = (): void => {
  Template2Parameter.belongsTo(Parameter, { foreignKey: 'parameterId', as: 'parameter' });
  Template2Parameter.belongsTo(Template, { foreignKey: 'tepmplateId', as: 'template' });
};

export { Template2Parameter, fields, associate };
