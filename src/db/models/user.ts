import { Model, DataTypes } from 'sequelize';

class User extends Model {
  public login!: string;
  public lastEnterAt!: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

const fields = {
  login: {
    type: DataTypes.STRING(128),
    primaryKey: true,
  },
  lastEnterAt: {
    type: new DataTypes.DATE,
  },
}

export { User, fields };
