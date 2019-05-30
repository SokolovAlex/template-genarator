import { Model, DataTypes } from 'sequelize';
import { Parameter } from '../models/parameter';
import { User } from '../models/user';

class ParameterValue extends Model {
  public key!: string;
  public name!: string;

  public parameter!: Parameter;
  public added_user!: User;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

const fields = {
  key: {
    type: DataTypes.STRING(64),
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
}

const associate = (): void => {
  ParameterValue.belongsTo(Parameter, { foreignKey: 'parameterId', as: 'parameter' });
  ParameterValue.belongsTo(User, { foreignKey: 'added_userId', as: 'added_user' });
};

export { ParameterValue, fields, associate };
