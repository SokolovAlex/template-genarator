import { Model, DataTypes } from 'sequelize';
import { getArrayFromEnum } from '../../utils'
import { Template2Parameter } from '../models/template2Parameter'
import { ParameterValue } from './parameterValue';

export enum InputType {
  Select,
  Radio,
  Checkbox,
};

const inputTypeValues: Array<string> = getArrayFromEnum(InputType);

class Parameter extends Model {
  public key!: string;
  public name!: string;
  public input_type!: InputType;

  public user_supplied!: string;
  public default_value!: string;
  public omniture_name!: string;

  public template2Parameters!: Template2Parameter[];

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

const fields = {
  key: {
    type: DataTypes.STRING(64),
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  input_type: {
    type: DataTypes.ENUM,
    values: inputTypeValues,
    allowNull: false,
    defaultValue: InputType.Checkbox,
  },
  user_supplied: {
    type: DataTypes.STRING(128),
    allowNull: true,
  },
  default_value: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
  omniture_name: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
}

const associate = (): void => {
  Parameter.hasMany(Template2Parameter, { foreignKey: 'parameterId', as: 'template2Parameter' });
  Parameter.hasMany(ParameterValue, { foreignKey: 'parameterValueId', as: 'parameterValue' });
};

export { Parameter, fields, associate };
