import express from "express";
import cors from "cors";
import PelangganRoutes from "./routes/PelangganRoutes.js";
import PenjualanRoutes from "./routes/PenjualanRoutes.js";
import ProdukRoutes from "./routes/Produk.Routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(PelangganRoutes);
app.use(PenjualanRoutes);
app.use(ProdukRoutes);

app.listen(5000, () => console.log("Server berjalan di http://localhost:5000"));
