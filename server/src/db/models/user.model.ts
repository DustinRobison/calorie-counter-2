import {
  DataTypes,
  Sequelize,
  Model,
  InferCreationAttributes,
  InferAttributes,
} from "sequelize";

// class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {

// }

const User = (sequelize: Sequelize) => {
  sequelize.define("User", {
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
  });
};

export default User;
