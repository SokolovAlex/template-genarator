import { Model, DataTypes } from 'sequelize';
import { Template2Parameter } from '../models/template2Parameter'

class Template extends Model {
  public key!: string;
  public traffic_source!: string;
  public name!: string;
  public active!: boolean;
  public description!: string;
  public append_parameters!: string;
  public pixel_template!: string;

  public template2Parameters!: Template2Parameter[];

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

const fields = {
  key: {
    type: DataTypes.STRING(64),
    primaryKey: true,
  },
  traffic_source: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(128),
    allowNull: true,
  },
  append_parameters: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
  pixel_template: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}

const associate = (): void => {
  Template.hasMany(Template2Parameter, { foreignKey: 'templateId', as: 'template2Parameter' });
};

export { Template, fields, associate };
