import { Sequelize } from "sequelize";
import db from "../config/database.js";
const { DataTypes } = Sequelize;

const Produk = db.define(
  "Produk",
  {
    ProdukID: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: false,
    },
    NamaProduk: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Harga: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    Stok: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
  },
  {
    tableName: "Produk",
    freezeTableName: true,
    timestamps: false,
  }
);
export default Produk;

async () => {
  await db.sync();
};

db.sync;
