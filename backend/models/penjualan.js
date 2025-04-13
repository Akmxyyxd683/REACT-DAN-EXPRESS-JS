import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Pelanggan from "./pelanggan.js";
const { DataTypes } = Sequelize;

const Penjualan = db.define(
  "Penjualan",
  {
    PenjualanID: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: false,
      unique: true,
    },
    TanggalPenjualan: {
      type: DataTypes.DATEONLY(),
      allowNull: false,
    },
    TotalHarga: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    PelangganID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: Pelanggan,
        key: "PelangganID",
      },
    },
  },
  {
    tableName: "Penjualan",
    freezeTableName: true,
    timestamps: false,
  }
);
export default Penjualan;

async () => {
  await db.sync();
};

db.sync();
