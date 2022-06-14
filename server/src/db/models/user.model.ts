import {
  DataTypes,
  Sequelize,
  Model,
  InferCreationAttributes,
  InferAttributes,
  CreationOptional,
} from "sequelize";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<string>;
  declare username: string;
  declare hashed_password: Blob;
  declare salt: Blob;
}

const Users = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
      },
      hashed_password: {
        type: DataTypes.BLOB,
        allowNull: false,
      },
      salt: {
        type: DataTypes.BLOB,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "Users",
    }
  );
};

export default Users;
