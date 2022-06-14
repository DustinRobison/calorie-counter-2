import {
  DataTypes,
  Sequelize,
  Model,
  InferCreationAttributes,
  InferAttributes,
  CreationOptional,
  ForeignKey,
} from "sequelize";

class Food extends Model<InferAttributes<Food>, InferCreationAttributes<Food>> {
  declare id: CreationOptional<string>;
  declare name: string;
  declare calories: number;
  declare user_id: ForeignKey<string>;
}

const Foods = (sequelize: Sequelize) => {
  Food.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUID,
      },
      name: DataTypes.STRING,
      calories: DataTypes.INTEGER,
      user_id: {
        type: DataTypes.STRING,
        references: {
          model: "Users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      tableName: "Foods",
    }
  );
};

export default Foods;
