import Sequelize, { DataTypes, Model } from "sequelize";
import databaseConfig from "../../../config/database";
import petModel from "./Pet";
import vetModel from "./VeterinarioModel";

const sequelize = new Sequelize(databaseConfig);

class PetsVets extends Model {}

PetsVets.init(
  {
    id: {
      type: DataTypes.UUIDV4(),
      primaryKey: true,
    },
    petId: {
      type: DataTypes.UUIDV4(),
      references: {
        model: petModel,
        key: "id",
      },
    },
    vetId: {
type: DataTypes.UUIDV4(),
      references: {
        model: vetModel,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "pets_vets",
    timestamps: false,
  }
);

petModel.belongsToMany(vetModel, { through: PetsVets });
vetModel.belongsToMany(petModel, { through: PetsVets });

PetsVets.belongsTo( petModel, {
  as: "pet",
  foreignKey: "petId",
});

PetsVets.belongsTo(vetModel, {
  as: "vet",
  foreignKey: "vetId",
});

export default PetsVets;