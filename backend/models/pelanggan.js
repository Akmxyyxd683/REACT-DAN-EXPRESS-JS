import { Sequelize } from "sequelize";
import db from "../config/database.js";
const { DataTypes } = Sequelize;

const Pelanggan = db.define(
  "Pelanggan",
  {
    PelangganID: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: false,
    },
    NamaPelanggan: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Alamat: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    NomorTelepon: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
  },
  {
    tableName: "Pelanggan",
    timestamps: false,
  }
);
export default Pelanggan;

async () => {
  await db.sync();
};

db.sync();
