import { Sequelize } from "sequelize";

const db = new Sequelize("javascript_27_rpla_19_kasir", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
