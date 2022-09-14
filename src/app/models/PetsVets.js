import Sequelize, { DataTypes, Model } from "sequelize";
import database from "../../config/Database";
import Pets from "./Pets";
import Veterinarios from "./Veterinarios";

const sequelize = new Sequelize(database);

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
        model: Pets,
        key: "id",
      },
    },
    vetId: {
type: DataTypes.UUIDV4(),
      references: {
        model: Veterinarios,
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

Pets.belongsToMany(Veterinarios, { through: PetsVets });
Veterinarios.belongsToMany(Pets, { through: PetsVets });

PetsVets.belongsTo( Pets, {
  as: "pet",
  foreignKey: "petId",
});

PetsVets.belongsTo(Veterinarios, {
  as: "vet",
  foreignKey: "vetId",
});

export default PetsVets;